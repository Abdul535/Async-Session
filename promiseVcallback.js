console.log("Start");

setTimeout(()=>{
    console.log("I'm callback setTimeout");
},0)

Promise.resolve("Success").then((res)=>{
    console.log(res);
})

console.log("End");



