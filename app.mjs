import express from 'express';
import bodyParser from 'body-parser'
const app = express();
const port = 3000;
app.use(bodyParser.json()); // support json encoded bodies

import { add,list_all,find_crn,find_subject,find_subject_number } from './controller/courses.mjs';
import { find_student_ID,find_student_email,find_student_info,add_drop_course } from './controller/students.mjs';
import { find_prof_info } from './controller/professors.mjs';
import { connectToDB, closeDBConnection } from './utils/db.mjs';

var server;

async function loadDBClient() {
  await connectToDB();
}; 

await loadDBClient();

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + '/view'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow the HTTP methods you need
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//resourse paths
//course API
app.get('/fall',list_all);
app.get('/fall/:crn', find_crn);
app.get('/fall2/:subject', find_subject);
app.get('/fall2/:subject/:number', find_subject_number);
//student API
app.get('/students/:student_id',find_student_ID);
app.get('/students2/:email',find_student_email);
app.put('/students3/:student_id/:crn/:type', add_drop_course);
//professor API
app.get('/professors/:employee_id',find_prof_info);

server = app.listen(port, () => {
  console.log('Example app listening at http://localhost:%d', port);
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  console.log('Closing Mongo Client.');
  closeDBConnection();
  server.close(() => {
    console.log('Http server closed.');
  });
});