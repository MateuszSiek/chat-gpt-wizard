(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-f377c6ba.js")
    );
  })().catch(console.error);

})();
