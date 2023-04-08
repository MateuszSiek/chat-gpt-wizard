(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-a69e477f.js")
    );
  })().catch(console.error);

})();
