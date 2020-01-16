import https from "https";
import {request} from "./request";

interface WebhookOptions {
  title?: string;
  message?: string;
  color?: string | number;
  url?: string;
}

export async function webhook(
  webhookURL: string,
  options: WebhookOptions,
): Promise<object> {
  return request("post", webhookURL, {
    headers: {"Content-Type": "application/json"},
    body: {
      embeds: [
        {
          title: options.title,
          description: options.message,
          url: options.url,
          color: parseColor(options.color),
        },
      ],
    },
  }).then((data: string) => {
    try {
      return JSON.parse(data);
    } catch(error) {
      return {
        error: error.message,
        data: data,
      };
    }
  });
}

function parseColor(value: string | number | undefined): number | null {
  if (value) {
    switch (typeof value) {
      case "number":
        return value;
      case "string":
        if (new RegExp(/^#[0-9a-fA-F]{6}$/).test(value)) {
          return parseInt(value.replace("#", "0x"));
        } else {
          return parseInt(value);
        }
      default:
        return null;
    }
  } else {
    return null;
  }
}
