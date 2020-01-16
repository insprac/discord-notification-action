import {webhook} from "../src/discord";

jest.mock("../src/request");

test("sends notification", async () => {
  const url = "https://discordapp.com/api/webhooks/test_id";
  const response = (await webhook(url, {
    title: "Test Notification",
    message: "Some message.",
    color: "14704671",
    url: "https://example.nz",
  })) as any;
  expect(response.url).toEqual(url);
  expect(response.method).toEqual("post");
  expect(response.options).toEqual({
    headers: {"Content-Type": "application/json"},
    body: {
      embeds: [
        {
          title: "Test Notification",
          description: "Some message.",
          color: 14704671,
          url: "https://example.nz",
        },
      ],
    },
  });
});

test("formats hex color", async () => {
  const response = (await webhook("https://test.nz", {
    color: "#FFFFFF",
  })) as any;
  expect(response.options.body.embeds[0].color).toEqual(16777215);
});
