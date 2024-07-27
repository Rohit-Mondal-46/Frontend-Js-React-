function loadScript(src) {
  return (promise = new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () {
      resolve("Loaded");
    };
    script.onerror = function () {
      reject("Access Denied!!!");
    };
  }));
}
let r1 = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"
);
r1.then((value) => {
  console.log(value);
  return loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"
  );
})
  .then((value) => {
    console.log(value);
    console.log("2nd");
  })
  .catch((value) => {
    console.log(value);
  });
