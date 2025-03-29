//directory creation
//fs-file system, mkdir - make directory

/* const fs = require('fs');
fs.mkdir("abishek",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('directory created successfully')
}) */
 
//check the directory is created or not
/* const fs = require('fs');
fs.readdir('./abishek',(err,files)=>{
    if(err){
        console.error(err);
        return;

    }
    console.log("files in the directory");
}) */

 //check the files 
 /*  const fs = require('fs');
  const filePath ='./n.js';
  if(fs.existsSync(filePath)){
    console.log("file exists.");
  }  
  else{
    console.log("file does not exist");
  } */


    //Write and create a file
     const fs =require('fs')
     const filepath ='n.js';
     const dataToWrite ='console.log("vanakam da maapala")';
     const encoding ='utf8';  //utf for website data sequireness
     fs.writeFile(filepath,dataToWrite,encoding,(err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('Data has been written to the file.');
     });