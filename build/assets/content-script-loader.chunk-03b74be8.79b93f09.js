(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-03b74be8.js")
    );
  })().catch(console.error);

})();
