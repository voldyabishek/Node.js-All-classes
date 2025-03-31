//1.directory creation
//fs-file system, mkdir - make directory
/* const fs = require('fs');
fs.mkdir("abishek",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('directory created successfully')
}) */
 

// <!--------------------!>

//2.check the directory is created or not
/* const fs = require('fs');
fs.readdir('./abishek',(err,files)=>{
    if(err){
        console.error(err);
        return;

    }
    console.log("files in the directory");
}) */

// <!--------------------!>

 //3.check the files 
 /*  const fs = require('fs');
  const filePath ='./n.js';
  if(fs.existsSync(filePath)){
    console.log("file exists.");
  }  
  else{
    console.log("file does not exist");
  } */
// <!--------------------!>

    //4.Write and create a file
/*      const fs =require('fs')
     const filepath ='n.js';
     const dataToWrite ='console.log("vanakam da maapala")';
     const encoding ='utf8';  //utf for website data sequireness
     fs.writeFile(filepath,dataToWrite,encoding,(err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('Data has been written to the file.');
     }); */
// <!--------------------!>
   //5.File Reading  
        /* const fs =require('fs')
        const filepath = 'n.js';
        const encoding = 'utf8';
        fs.readFile(filepath,encoding,(err,data)=>{
        
          if (err){
            console.error(err)
            return;
          }
          console.log(data);
          console.log("ended")
        }); */
        /* first show this console(print) --yen ahh  mela ulla ahh code ahh run aagurathuku time aagum, 
        athanala keela ulla code ahh first run aagodum-- example console.log mela pota sernthe run aagidum  */
        // console.log("ended")

// <!--------------------!>

//6.file rename ---Like newfile.txt vanthu n.js nu irunthuchi keela ulla code ahh adicha,
//  antha file n.js la irunthu newfile.txt nu change aagidichi.
   /*  const fs = require('fs');
    const oldFilePath ='n.js';
    const newFilepath ='newfile.txt';
    fs.rename(oldFilePath,newFilepath,(err) =>{
    if(err){
    console.error(err);
    return;
    }
    console.log('File renamed successfuly')
    }) */
// <!--------------------!>


//7.file edition date and time
/* const fs = require('fs');
const filePath = './newfile.txt';
fs.stat(filePath,(err,stats) =>{
  if(err){
    console.error(err);
    return;
  }
  console.log('File size (in bytes):',stats.size);
  console.log('Last modified:',stats.mtime)
}); */


//8.deleting

/* const {unlink}=require('fs')

unlink('newfile.txt',(err)=>{
  if(err){
    console.error(err)
    return;
  }
  console.log("file deleted succesfully")
});
 */
/* <----------------------> */

//example function but not neccesory
      /*  function func(a,b,c){
  console.log(a-b+c)
}

const a1=(a,b)=>{
  c=a+b
  console.log(c)
}


const print1=(a,b)=>{
  console.log("********************************")
  console.log("\tAddition")
  console.log("********************************")
  
  console.log("\t",a)
  console.log("\t",b)
  console.log("********************************")
  console.log("\t",a+b)

}

print1(78,56)  */

