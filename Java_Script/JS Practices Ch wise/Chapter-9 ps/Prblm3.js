let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Sorry!!! We Cant Serve You At This Moment"));
    }, 3000);
  });
};
let a = async () => {
  try {
    let b = await p();
    console.log(b);
  } catch (err) {
    console.log("rohit!!!!!!s");
  }
};
a();
