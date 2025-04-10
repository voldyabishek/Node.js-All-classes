const http = require('http');

const server =  http.createServer((req,res)=>{
    if(req.method==='POST'){
        let body = '';

        //collect the data from the request

        req.on('data',(chunk)=>{
            body += chunk;
        });


        //parse the data when the request ends 
        req.on('end',()=>{
            //parse the JSON data if its JSON
        try{
            const parseBody =JSON.parse(body);
            console.log('Parse JSON data:',parseBody);

        }
        catch(error){
            console.error('Error parsing JSON:',error)
        }

        res.setHeader('Content-Type','text/Plain')
        res.end('Data reciveived and  proceessed.');

        })
    }
    else{
      res.statusCode =405;
      res.setHeader('Content-Type','text/plain')
      res.end ('405 method not allowed')

    }
})

const port =3001;
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})