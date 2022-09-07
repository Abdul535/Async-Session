function resolveAfter2Seconds() {
  let p = new Promise((res,rejj) => {
    setTimeout(() => {
      rejj('rejected');
    }, 2000);
  });
  return p;
}
//------------------------------------
//.then().catch()  is always on promise object
// function asyncCall() {
//   console.log('calling');
//   resolveAfter2Seconds()
//   .then((res)=>{
//     console.log(res);
//   })
// }
// asyncCall();

//------------------------------------
// async/await doesn't have inbuilt 
// error handling, so we use try
// try catch block
async function asyncCall() {
  console.log('calling');
  try {
    const result = await resolveAfter2Seconds();
  console.log(result);
  } catch (error) {
    if (error); 
    console.log("i am in catch")
    console.log(error);
  }
  // expected output: "resolved"
}
asyncCall();