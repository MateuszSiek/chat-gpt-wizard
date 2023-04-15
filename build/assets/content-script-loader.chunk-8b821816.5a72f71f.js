(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-8b821816.js")
    );
  })().catch(console.error);

})();
