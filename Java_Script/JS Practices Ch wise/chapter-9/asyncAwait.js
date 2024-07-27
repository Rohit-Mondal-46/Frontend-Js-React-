async function rohit() {
  let r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(46);
    }, 3000);
  });
  let r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(64);
    }, 6000);
  });
  console.log("start");
  let a = await r1;
  console.log("r1: " + a);
  console.log("step3");
  let b = await r2;
  console.log("solved");
  console.log("r2: " + b);
  return [a, b];
}
let r = rohit();
r.then(console.log);
