import Browser from "webextension-polyfill";
import { initialiseLocalStorage } from "../utils/local-storage";

console.info("chrome-ext template-react-ts background script2456");

Browser.runtime.onInstalled.addListener(async () => initialiseLocalStorage());

Browser.runtime.onStartup.addListener(async () => initialiseLocalStorage()); // TEMP

Browser.webRequest.onBeforeRequest.addListener(
  function ({ url, tabId }) {
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];
    Browser.tabs.sendMessage(tabId, { type: "chat-id", payload: id });
  },
  { urls: ["https://chat.openai.com/backend-api/conversation/gen_title/*"] },
  ["requestBody"]
);

export {};
