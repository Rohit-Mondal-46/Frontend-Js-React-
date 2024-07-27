const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " done");
    };
    document.head.append(script);
  });
};
let a = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"
);
a.then(() => {
  console.log(a);
});
