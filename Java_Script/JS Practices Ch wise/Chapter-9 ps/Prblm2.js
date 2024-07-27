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
const main1 = async () => {
  console.log(new Date().getMilliseconds());
  let a = await loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"
  );
  console.log(a);
  console.log(new Date().getMilliseconds());
};
main1();
