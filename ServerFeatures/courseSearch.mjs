import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function searchCourses(subject = '', number = '', crn = ''){
    //search all courses
    if (subject == '' &&  number == ''  && crn == '') {
        try{
            let res1 = await instance.get('/fall');
            //console.log('Listing all courses:' );
            //console.log(res1.data);
            return(res1);
        }catch(err){
            return('ERROR');
        }
    }
    //course search with subject 
    else if (subject != '' &&  number == ''  && crn == '') {
        try{
            let res1 = await instance.get('/fall2/' + subject);
            //console.log('Listing courses of the subject ' + subject + ': ');
            //console.log(res1.data);
            return(res1);
        }catch(err){
            //console.log('ERROR: '+err);
            return('ERROR');
        }
    }
    //course search with subject and number
    else if (subject != '' &&  number != ''  && crn == '') {
        try{
            let res1 = await instance.get('/fall2/' + subject + '/' + number);
            //console.log('Listing courses of ' + subject + ' ' + number + ': ');
            //console.log(res1.data);
            return(res1);
        }catch(err){
            //console.log('ERROR: '+err);
            return('ERROR');
        }
    }
    //course search with crn
    else if (subject == '' &&  number == ''  && crn != '') {
        try{
            let res1 = await instance.get('/fall/' + crn);
            //console.log('Listing course with CRN ' + crn + ': ');
            //console.log(res1.data);
            return(res1);
        }catch(err){
            //console.log('ERROR: '+err);
            return('ERROR');
        }
    }
    else {
        //console.log('Invalid parameters!');
        return('Invalid Parameters!');
    }

};

//searchCourses();
//let res1 = await searchCourses('ABE');
//console.log(res1.data);
//searchCourses('ABE',532);
//searchCourses('','',41758);
//searchCourses('','532');
  