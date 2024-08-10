
// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global bootstrap: false */
(() => {
  'use strict'

  
  document.addEventListener('DOMContentLoaded', (event) => {
    // --------
    // Tooltips
    // --------
    // Instantiate all tooltips in a docs or StackBlitz
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
      });
    
    // -------------------------------
    // Toasts
    // -------------------------------

    // Instantiate all toasts in docs pages only
    // js-docs-start live-toast
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
    // js-docs-end live-toast
  });

})()


function copyEmail() {
  var copyText = "contact@arobasoft.com";
  navigator.clipboard.writeText(copyText);

}
