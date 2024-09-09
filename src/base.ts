import fetch from "isomorphic-unfetch";

export type Config = {
  apiKey: string;
  version?: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = `https://api.jiffyscan.xyz/${config.version || "v0"}/`;
  }

  protected async invoke<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      accept: "application/json",
      "x-api-key": this.apiKey,
    };

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw await this.handleError(response);
      }
      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, "An unexpected error occurred", {
        message: error.message,
      });
    }
  }

  private async handleError(response: Response): Promise<ApiError> {
    let message = "";
    let details: {
      message: string;
      status: number;
      statusText: string;
    };

    try {
      // Attempt to parse JSON response to get more detailed error information
      details = await response.json();
      message = details.message || response.statusText;
    } catch (error) {
      // Fallback if the response is not JSON or can't be parsed
      message = await response.text();
    }

    // Include URL and status in the error details for more context
    details.status = response.status;
    details.statusText = response.statusText;

    // Log error details for debugging
    console.error("API Error:", { status: response.status, message, details });

    return new ApiError(response.status, message, details);
  }
}

class ApiError extends Error {
  public status: number;
  public details: any;

  constructor(status: number, message: string, details?: any) {
    super(message);
    this.status = status;
    this.details = details || {};
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
