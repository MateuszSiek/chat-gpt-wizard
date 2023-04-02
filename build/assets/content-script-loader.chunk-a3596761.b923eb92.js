(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-a3596761.js")
    );
  })().catch(console.error);

})();
