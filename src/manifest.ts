import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  name: "chat-gpt-wizard",
  description:
    "A chrome extension that gives you additional control over chatGPT",
  version: "0.0.0",
  manifest_version: 3,
  icons: {
    "16": "img/logo-16.png",
    "32": "img/logo-34.png",
    "48": "img/logo-48.png",
    "128": "img/logo-128.png",
  },
  action: {
    default_popup: "popup.html",
    default_icon: "img/logo-48.png",
  },
  options_page: "options.html",
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["https://chat.openai.com/chat*"],
      js: ["src/content/index.tsx"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "img/logo-16.png",
        "img/logo-34.png",
        "img/logo-48.png",
        "img/logo-128.png",
      ],
      matches: ["https://chat.openai.com/*"],
    },
  ],
  permissions: ["storage", "tabs"],
  host_permissions: ["<all_urls>"],
});
