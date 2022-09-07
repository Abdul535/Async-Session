let p = new Promise((res,rej)=>{
    let a=1;
    if(a+0 == 1){
        res("Success");
    }
    else{
        rej("Failure");
    }
})

p
.then((res)=>{
    console.log(res);
})
.catch((rej)=>{
    console.log(rej);
})
.finally(()=>{
    console.log("Promise Done!");
})

// Promise.resolve("Success")
// Promise.reject("Failure")
