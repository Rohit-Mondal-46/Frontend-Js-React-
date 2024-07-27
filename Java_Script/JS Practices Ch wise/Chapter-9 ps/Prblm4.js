let p = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(32);
    }, 2000);
  });
};
let q = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(32);
    }, 3000);
  });
};
let r = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(32);
    }, 1000);
  });
};

let a = async () => {
  let a1 = p();
  let a2 = q();
  let a3 = r();
  console.time("a");
  let b = await Promise.all([a1, a2, a3]);
  console.log(b);
  console.timeEnd("a");
};
a();
