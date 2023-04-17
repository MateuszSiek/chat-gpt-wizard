(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-4a2014b1.js")
    );
  })().catch(console.error);

})();
