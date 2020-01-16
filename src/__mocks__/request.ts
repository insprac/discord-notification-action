interface RequestOptions {
  body?: string | object;
  headers?: {[name: string]: string};
}

interface MockResponse {
  method: string;
  url: string;
  options: RequestOptions;
}

export async function request(
  method: string,
  url: string,
  options: RequestOptions,
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify({method, url, options}));
    });
  });
}
