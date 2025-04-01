/* //day.1

const fs = require('fs')

function someAsyncOperation(callback){
    fs.readFile('/n.txt',callback);
}
setTimeout(()=>{
    console.log('timeout');
},2000); // for time dealy for those callback function runs


setImmediate(()=>{
    console.log('immediate')
});// immidiate running for example test

const timeoutScheduled =Date.now(); // current time ahh eduthuko

setTimeout(()=>{
    const delay = Date.now() - timeoutScheduled;
    console.log(Date.now(),timeoutScheduled)
    console.log(`${delay}ms have passed since I was scheduled`);

},1000);
someAsyncOperation(()=>{
    const startCallback = Date.now();
    while(Date.now() - startCallback < 1000){

    }
});///this is top callback */

 /* ----------------------------------------------------- */

//day.2

/* const fs =require('fs');

fs.readFile(__filename,()=>{
    setTimeout(()=>{
        console.log('timeout')
    },1200)
    setImmediate(()=>{
        console.log('immidiate')
    })
}) */
/* same code^ but use while loop*/
/* 
let a=1
while(a<=10){
    setTimeout(()=>{
        console.log('timeout');
    },10000);

setImmediate(()=>{
    console.log('immediate')
});
a=a+1
} */