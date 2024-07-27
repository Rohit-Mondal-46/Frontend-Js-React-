function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    callback(null, src);
  };
  script.onerror = function () {
    callback(new Error("Error"), src);
  };
  document.body.appendChild(script);
}
function rohit(error, src) {
  if (error) {
    alert("!!!Unable to load!!!::-> " + src);
    return;
  } else {
    alert("loaded::-> " + src);
  }
}
loadScript(
  "https://cdnajs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js",
  rohit
);
