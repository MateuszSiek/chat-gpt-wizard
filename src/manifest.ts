import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from '../package.json'
const { version } = packageJson

export default defineManifest({
  name: "ChatGPT Prompt Wizard",
  description:
    "Streamline ChatGPT experience: select saved prompts for efficient control and tailored queries.",
  version: version,
  version_name: version,
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
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["https://chat.openai.com/*"],
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
  permissions: ["storage"],
  host_permissions: ["https://chat.openai.com/*"],
});
