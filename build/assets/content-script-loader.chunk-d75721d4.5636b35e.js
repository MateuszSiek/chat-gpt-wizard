(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-d75721d4.js")
    );
  })().catch(console.error);

})();
