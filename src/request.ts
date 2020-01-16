import https from "https";

interface RequestOptions {
  body?: string | object;
  headers?: {[name: string]: string};
}

export async function request(
  method: string,
  url: string,
  options: RequestOptions,
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const requestOptions = {
      method: method,
      headers: options.headers || {},
    };

    const req = https.request(url, requestOptions, (res) => {
      let responseData = "";
      response.on("data", (chunk: string) => { responseData += chunk; });
      response.on("end", () => { resolve(responseData); });
    });

    if (options.body) {
      if (typeof options.body === "object") {
        req.write(JSON.stringify(options.body));
      } else {
        req.write(options.body);
      }
    }

    req.on("error", reject);
    req.end();
  });
}
