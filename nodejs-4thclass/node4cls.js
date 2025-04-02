const fs = require('fs');
const readStream = fs.createReadStream('input.txt', 'utf-8');
const writeStream = fs.createWriteStream('output.txt', 'utf-8');
let bufferData = '';
readStream.on('data', (chunk) => {
  const modifiedChunk = chunk.toString().toUpperCase();
  bufferData += modifiedChunk;
});
readStream.on('end', () => {
  writeStream.write(bufferData);
  writeStream.end();
});
writeStream.on('finish', () => {
  console.log('Data has been written to output');
});
readStream.on('error', (err) => {
  console.error('Error reading from input.txt:', err);
});
writeStream.on('error', (err) => {
  console.error('Error writing to output.txt:', err);
}); 
 

//day.2-->retrive the last code due to normal output like ahh small letter

/* const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
});  


 //for image re arrange


const fs = require('fs');

const readStream = fs.createReadStream('input.png');
const writeStream = fs.createWriteStream('output.png');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Image copied successfully.');
});

writeStream.on('error', (err) => {
  console.error('Error writing the image:', err);
}); 
 */