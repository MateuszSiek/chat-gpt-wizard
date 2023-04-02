(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-b7ad2d73.js")
    );
  })().catch(console.error);

})();
