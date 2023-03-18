import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

async function getSubject(){
    try{
        let subject = 'AAS';
        let res1 = await instance.get('/fall/' + subject);
        console.log('Listing courses of the subject ' + subject + ': ');
        console.log(res1.data);
    }catch(err){
        console.log('ERROR: '+err);
    }
}

async function getSubjectwithCRN(){
    try{
        let crn = 41758;
        let res1 = await instance.get('/fall/'+crn);
        console.log('Listing course with CRN ' + crn + ': ');
        console.log(res1.data);
    }catch(err){
        console.log('ERROR: '+err);
    }
}

getSubject();
getSubjectwithCRN();