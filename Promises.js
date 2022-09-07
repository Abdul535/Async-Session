let prom = new Promise((res,rej)=>{
    rej("CFI")
})

//Sequence/syntax
// Promise.prototype.then().catch();

prom 
.then((res)=>{     //it will work when promise is fulfilled
    console.log(res);
    console.log("Promise resolved");
})
.catch((err)=>{    //it will work when promise is rejected
    // console.log(rej)
    console.error(err)
    // console.log("error, promise rejected")
})
.finally(()=>{
    console.log("I will always print")
})
