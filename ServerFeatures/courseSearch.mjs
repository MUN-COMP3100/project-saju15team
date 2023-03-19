
import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

async function searchCourses(subject = '', number = '', crn = ''){
    //search all courses
    if (subject == '' &&  number == ''  && crn == '') {
        try{
            let res1 = await instance.get('/fall');
            console.log('Listing all courses:' );
            console.log(res1.data);
        }catch(err){
            console.log('ERROR: '+err);
        }
    }
    //course search with subject 
    else if (subject != '' &&  number == ''  && crn == '') {
        try{
            let res1 = await instance.get('/fall2/' + subject);
            console.log('Listing courses of the subject ' + subject + ': ');
            console.log(res1.data);
        }catch(err){
            console.log('ERROR: '+err);
        }
    }
    //course search with subject and number
    else if (subject != '' &&  number != ''  && crn == '') {
        try{
            let res1 = await instance.get('/fall2/' + subject + '/' + number);
            console.log('Listing courses of ' + subject + ' ' + number + ': ');
            console.log(res1.data);
        }catch(err){
            console.log('ERROR: '+err);
        }
    }
    //course search with crn
    else if (subject == '' &&  number == ''  && crn != '') {
        try{
            let res1 = await instance.get('/fall/' + crn);
            console.log('Listing course with CRN ' + crn + ': ');
            console.log(res1.data);
        }catch(err){
            console.log('ERROR: '+err);
        }
    }
    else {
        console.log('Invalid parameters!');
    }

};

//searchCourses();
//searchCourses('ABE');
//searchCourses('ABE',532);
searchCourses('','',41758);
//searchCourses('','532');
  