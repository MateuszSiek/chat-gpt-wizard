(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-a8b6956a.js")
    );
  })().catch(console.error);

})();
