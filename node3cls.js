const fs = require('fs')

function someAsyncOperation(callback){
    fs.readFile('/n.txt',callback);
}
setTimeout(()=>{
    console.log('timeout');
},2000);


setImmediate(()=>{
    console.log('immediate')
});

const timeoutScheduled =Date.now();

setTimeout(()=>{
    const delay = Date.now() - timeoutScheduled;
    console.log(Date.now(),timeoutScheduled)
    console.log(`${delay}ms have passed since I was scheduled`);

},1000);
someAsyncOperation(()=>{
    const startCallback = Date.now();
    while(Date.now() - startCallback < 1000){

    }
});