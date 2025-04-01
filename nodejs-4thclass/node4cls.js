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
 