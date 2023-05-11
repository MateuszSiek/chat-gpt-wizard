(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-03f8e72d.js")
    );
  })().catch(console.error);

})();
