$(function () {
  $("#relOwl").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      768: { items: 3 },
      1024: { items: 4 },
      1280: { items: 5 },
    },
  });
});

function toast(msg) {
  document.getElementById("toastMsg").textContent = msg;
  bootstrap.Toast.getOrCreateInstance(document.getElementById("mainToast"), {
    delay: 2500,
  }).show();
}
function switchImg(el, src) {
  document.getElementById("mainImg").src = src;
  document
    .querySelectorAll(".thumb-item")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
}
function pickColor(el, name, imgSrc) {
  document
    .querySelectorAll(".color-thumb")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("colorLabel").textContent = name;
  document.getElementById("mainImg").src = imgSrc;
}
function chQty(d) {
  var el = document.getElementById("qty");
  el.value = Math.max(1, parseInt(el.value) + d);
}
function doCart() {
  toast("Apple Watch Series 9 added to cart!");
}
function doBuy() {
  toast("Redirecting to checkout…");
}

(function () {
  var total = 658 * 3600 + 13 * 60 + 7,
    ms = 28;
  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  setInterval(function () {
    if (total <= 0) return;
    total--;
    ms = (ms - 1 + 100) % 100;
    document.getElementById("cd-h").textContent = Math.floor(total / 3600);
    document.getElementById("cd-m").textContent = pad(
      Math.floor((total % 3600) / 60),
    );
    document.getElementById("cd-s2").textContent = pad(total % 60);
    document.getElementById("cd-ms").textContent = pad(ms);
  }, 1000);
})();
