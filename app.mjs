import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000;

app.use(json());// support json encoded bodies
app.use(urlencoded({extended: true}));//incoming objects are strings or arrays

import { add,list_all,find_crn,find_subject,find_subject_number } from './controller/courses.mjs';
import { find_student_ID,find_student_email,add_reg_course,get_reg_courses,find_student_info,drop_reg_course } from './controller/students.mjs';
import { connectToDB, closeDBConnection } from './utils/db.mjs';

var server;

async function createServer() {
    try {
        await connectToDB();
        // test course methods
        app.get('/fall',list_all);
        app.get('/fall/:crn', find_crn);
        app.get('/fall2/:subject', find_subject);
        app.get('/fall2/:subject/:number', find_subject_number);
        //test student methods
        app.get('/students/:student_id',find_student_ID);
        app.get('/students2/:email',find_student_email);
        app.put('/students3/:student_id', add_reg_course);
        app.put('/students4/:student_id', drop_reg_course);
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