import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000;

app.use(json());// support json encoded bodies
app.use(urlencoded({extended: true}));//incoming objects are strings or arrays

import { add,list_all,find_crn,find_subject,find_subject_number,find_subject_number_section } from './controller/courses.mjs';
import { connectToDB, closeDBConnection } from './utils/db.mjs';

var server;

async function createServer() {
    try {
        await connectToDB();
        // get all courses
        app.get('/fall', list_all);
        app.get('/fall/:crn', find_crn);
        // start the server
        server = app.listen(port, () => {
          console.log('Example app listening at http://localhost:%d', port);
        });
      }catch(err){
        console.log(err)
      }
}

createServer();

//avoid creating multiple database connections
process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  console.log('Closing Mongo Client.');
  server.close(async function(){
    let msg = await closeDBConnection()   ;
    console.log(msg);
  });
});