let p = fetch("https://date.nager.at/api/v3/publicholidays/2023/AT");
p.then((value)=>{
    return  value.text;
}).then((value)=>{
    console.log(value);
})