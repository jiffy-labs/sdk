export const API_KEY = "X0eDMImv0q59JTbhtQ6Re98M362hPDfH4xfhHSf3";

export function appendURLSearchParams<T extends Record<string, any>>(
  url: URL,
  params: T
): void {
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, value.toString());
    }
  });
}

export function createParams(params: {
  [key: string]: string | undefined;
}): URLSearchParams {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlParams.append(key, value);
    }
  });
  return urlParams;
}
