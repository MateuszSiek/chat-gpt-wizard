// vite.config.ts
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";

// src/manifest.ts
import { defineManifest } from "@crxjs/vite-plugin";
var manifest_default = defineManifest({
  name: "ChatGPT wizard",
  description: "A chrome extension that gives you additional control over chatGPT",
  version: __APP_VERSION__,
  manifest_version: 3,
  icons: {
    "16": "img/logo-16.png",
    "32": "img/logo-34.png",
    "48": "img/logo-48.png",
    "128": "img/logo-128.png"
  },
  action: {
    default_popup: "popup.html",
    default_icon: "img/logo-48.png"
  },
  options_page: "options.html",
  background: {
    service_worker: "src/background/index.ts",
    type: "module"
  },
  content_scripts: [
    {
      matches: ["https://chat.openai.com/chat*"],
      js: ["src/content/index.tsx"]
    }
  ],
  web_accessible_resources: [
    {
      resources: [
        "img/logo-16.png",
        "img/logo-34.png",
        "img/logo-48.png",
        "img/logo-128.png"
      ],
      matches: ["https://chat.openai.com/*"]
    }
  ],
  permissions: ["storage", "webRequest", "tabs"],
  host_permissions: ["<all_urls>"]
});

// src/read_pages_folder.ts
import globSync from "glob";
var pages = await globSync("pages/*.html");
var arrayKeyValuePairs = pages.map((file) => [
  file.split("\\").slice(-1).toString().split(".html").join(""),
  file
]);
var config = Object.fromEntries(arrayKeyValuePairs);

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  return {
    define: {
      "__APP_VERSION__": JSON.stringify(process.env.npm_package_version)
    },
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        input: config,
        output: {
          chunkFileNames: "assets/chunk-[hash].js"
        }
      }
    },
    plugins: [crx({ manifest: manifest_default }), react()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL21hbmlmZXN0LnRzIiwgInNyYy9yZWFkX3BhZ2VzX2ZvbGRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGNyeCB9IGZyb20gJ0Bjcnhqcy92aXRlLXBsdWdpbidcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4vc3JjL21hbmlmZXN0J1xuLy9AdHMtaWdub3JlXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9zcmMvcmVhZF9wYWdlc19mb2xkZXInXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICAnX19BUFBfVkVSU0lPTl9fJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbiksXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgICBvdXREaXI6ICdidWlsZCcsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGlucHV0OiBjb25maWcsXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2NodW5rLVtoYXNoXS5qcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbY3J4KHsgbWFuaWZlc3QgfSksIHJlYWN0KCldLFxuICB9XG59KVxuIiwgImltcG9ydCB7IGRlZmluZU1hbmlmZXN0IH0gZnJvbSBcIkBjcnhqcy92aXRlLXBsdWdpblwiO1xuXG5kZWNsYXJlIGNvbnN0IF9fQVBQX1ZFUlNJT05fXzogc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVNYW5pZmVzdCh7XG4gIG5hbWU6IFwiQ2hhdEdQVCB3aXphcmRcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJBIGNocm9tZSBleHRlbnNpb24gdGhhdCBnaXZlcyB5b3UgYWRkaXRpb25hbCBjb250cm9sIG92ZXIgY2hhdEdQVFwiLFxuICB2ZXJzaW9uOiBfX0FQUF9WRVJTSU9OX18sXG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIGljb25zOiB7XG4gICAgXCIxNlwiOiBcImltZy9sb2dvLTE2LnBuZ1wiLFxuICAgIFwiMzJcIjogXCJpbWcvbG9nby0zNC5wbmdcIixcbiAgICBcIjQ4XCI6IFwiaW1nL2xvZ28tNDgucG5nXCIsXG4gICAgXCIxMjhcIjogXCJpbWcvbG9nby0xMjgucG5nXCIsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGRlZmF1bHRfcG9wdXA6IFwicG9wdXAuaHRtbFwiLFxuICAgIGRlZmF1bHRfaWNvbjogXCJpbWcvbG9nby00OC5wbmdcIixcbiAgfSxcbiAgb3B0aW9uc19wYWdlOiBcIm9wdGlvbnMuaHRtbFwiLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgc2VydmljZV93b3JrZXI6IFwic3JjL2JhY2tncm91bmQvaW5kZXgudHNcIixcbiAgICB0eXBlOiBcIm1vZHVsZVwiLFxuICB9LFxuICBjb250ZW50X3NjcmlwdHM6IFtcbiAgICB7XG4gICAgICBtYXRjaGVzOiBbXCJodHRwczovL2NoYXQub3BlbmFpLmNvbS9jaGF0KlwiXSxcbiAgICAgIGpzOiBbXCJzcmMvY29udGVudC9pbmRleC50c3hcIl0sXG4gICAgfSxcbiAgXSxcbiAgd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzOiBbXG4gICAge1xuICAgICAgcmVzb3VyY2VzOiBbXG4gICAgICAgIFwiaW1nL2xvZ28tMTYucG5nXCIsXG4gICAgICAgIFwiaW1nL2xvZ28tMzQucG5nXCIsXG4gICAgICAgIFwiaW1nL2xvZ28tNDgucG5nXCIsXG4gICAgICAgIFwiaW1nL2xvZ28tMTI4LnBuZ1wiLFxuICAgICAgXSxcbiAgICAgIG1hdGNoZXM6IFtcImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tLypcIl0sXG4gICAgfSxcbiAgXSxcbiAgcGVybWlzc2lvbnM6IFtcInN0b3JhZ2VcIiwgXCJ3ZWJSZXF1ZXN0XCIsIFwidGFic1wiXSxcbiAgaG9zdF9wZXJtaXNzaW9uczogW1wiPGFsbF91cmxzPlwiXSxcbn0pO1xuIiwgImltcG9ydCBnbG9iU3luYyBmcm9tIFwiZ2xvYlwiO1xuXG5jb25zdCBwYWdlcyA9IGF3YWl0IGdsb2JTeW5jKFwicGFnZXMvKi5odG1sXCIpO1xuXG5jb25zdCBhcnJheUtleVZhbHVlUGFpcnMgPSBwYWdlcy5tYXAoKGZpbGUpID0+IFtcbiAgZmlsZS5zcGxpdChcIlxcXFxcIikuc2xpY2UoLTEpLnRvU3RyaW5nKCkuc3BsaXQoXCIuaHRtbFwiKS5qb2luKFwiXCIpLFxuICBmaWxlLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBPYmplY3QuZnJvbUVudHJpZXMoYXJyYXlLZXlWYWx1ZVBhaXJzKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFdBQVc7QUFDcEIsT0FBTyxXQUFXOzs7QUNGbEIsU0FBUyxzQkFBc0I7QUFJL0IsSUFBTyxtQkFBUSxlQUFlO0FBQUEsRUFDNUIsTUFBTTtBQUFBLEVBQ04sYUFDRTtBQUFBLEVBQ0YsU0FBUztBQUFBLEVBQ1Qsa0JBQWtCO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWU7QUFBQSxJQUNmLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2Y7QUFBQSxNQUNFLFNBQVMsQ0FBQywrQkFBK0I7QUFBQSxNQUN6QyxJQUFJLENBQUMsdUJBQXVCO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQUEsRUFDQSwwQkFBMEI7QUFBQSxJQUN4QjtBQUFBLE1BQ0UsV0FBVztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLENBQUMsMkJBQTJCO0FBQUEsSUFDdkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhLENBQUMsV0FBVyxjQUFjLE1BQU07QUFBQSxFQUM3QyxrQkFBa0IsQ0FBQyxZQUFZO0FBQ2pDLENBQUM7OztBQzVDRCxPQUFPLGNBQWM7QUFFckIsSUFBTSxRQUFRLE1BQU0sU0FBUyxjQUFjO0FBRTNDLElBQU0scUJBQXFCLE1BQU0sSUFBSSxDQUFDLFNBQVM7QUFBQSxFQUM3QyxLQUFLLE1BQU0sSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFBQSxFQUM1RDtBQUNGLENBQUM7QUFFTSxJQUFNLFNBQVMsT0FBTyxZQUFZLGtCQUFrQjs7O0FGQTNELElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLG1CQUFtQixLQUFLLFVBQVUsUUFBUSxJQUFJLG1CQUFtQjtBQUFBLElBQ25FO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTLENBQUMsSUFBSSxFQUFFLDJCQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7QUFBQSxFQUN0QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
