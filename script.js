(function () {
  "use strict";

  var yearNodes = document.querySelectorAll(".js-year");
  var year = String(new Date().getFullYear());
  yearNodes.forEach(function (node) {
    node.textContent = year;
  });

  var toggle = document.querySelector(".mast-toggle");
  var frame = document.querySelector(".frame");
  if (!toggle || !frame) return;

  toggle.addEventListener("click", function () {
    var open = frame.classList.toggle("is-rail-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
