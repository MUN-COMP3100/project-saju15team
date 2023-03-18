import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

async function getStudentbyId(){
    try{
        let id = 202322334;
        let res1 = await instance.get('/students/' + id);
        console.log('Student with the id ' + id + ': ');
        console.log(res1.data);
    }catch(err){
        console.log('ERROR: '+err);
    }
}

async function getStudentbyEmail(){
    try{
        let email = "triddle@hogwarts.ca";
        let res1 = await instance.get('/students2/' + email);
        console.log('Student with the email ' + email + ': ');
        console.log(res1.data);
    }catch(err){
        console.log('ERROR: '+err);
    }
}

async function update(){
    let id = 202344556;
    let data1 = {
        crn: 41758
    }
    let res1 = await instance.put('/students3/'+ id, data1);
    console.log(res1.data);
}

async function dropCourse(){
    let id = 202344556;
    let data1 = {
        crn: 41758
    }
    let res1 = await instance.put('/students4/'+ id, data1);
    console.log(res1.data);
}

getStudentbyId();
getStudentbyEmail();
await update();
dropCourse();