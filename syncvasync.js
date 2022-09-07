// console.log("start");

// setTimeout(()=>{
//     console.log("Sabiya");
// },0)

// console.log("end");

// for (let index = 0; index < 1000; index++) {
//    console.log(index); 
// }

//callback ? y
// function call(){
//     console.log("hello");
// }
// setTimeout(call ,1000)


//callback ? n
// function bye (){
//     call();
//     console.log("bye")
// }
// bye();

//param
//arg
//Anonymous


//----------------------------MANDI PROMBLEM USING PROMISE .then()---------------------

//going to hotel
//ordering
//eating mandi
//going to home

// function hotel(){
//     return "going to hotel";
// }

// function ordering(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("mandi");
//         }, 4000);
//     })
// }

// function eating(food){
//     return `eating ${food}`;
// }

// function home(){
//     return 'going to home';
// }

// function goingtohotel(){
//     console.log(hotel());
//     // let food = ordering();
//     ordering().then((res)=>{
//         console.log(eating(res));
//         console.log(home());
//     })
//     //console.log(home());  //it is in stack
// }
// goingtohotel();


///---------------MANDI PROMBLEM----------------PROMISE USING ASYNC/AWAIT--------------------------
function hotel(){
    return "going to hotel";
}

function ordering(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("mandi");
        }, 4000);
    })
}

function bill(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("bill generated");
        }, 3000);
    })
}

function eating(food){
    return `eating ${food}`;
}

function home(){
    return 'going to home';
}

async function goingtohotel(){
    console.log(hotel());
    // let food = ordering();
    try {
        let food = await ordering()
        let billi = await bill();
        console.log(eating(food));
        console.log(billi);
    } catch (error) {
       if(error ) 
       throw error;
    }
    console.log(home());
    //console.log(home());  //it is in stack
}
goingtohotel();