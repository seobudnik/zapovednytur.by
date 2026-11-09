(function () {
  "use strict";

  var yearNodes = document.querySelectorAll(".js-year");
  var year = String(new Date().getFullYear());
  yearNodes.forEach(function (node) {
    node.textContent = year;
  });

  var toggle = document.querySelector(".mast-toggle");
  var frame = document.querySelector(".frame");
  if (toggle && frame) {
    toggle.addEventListener("click", function () {
      var open = frame.classList.toggle("is-rail-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var search = document.querySelector("[data-ledger-search]");
  var rows = document.querySelectorAll(".ledger tbody tr");
  if (search && rows.length) {
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      rows.forEach(function (row) {
        row.hidden = Boolean(q) && row.textContent.toLowerCase().indexOf(q) === -1;
      });
    });
  }
})();
