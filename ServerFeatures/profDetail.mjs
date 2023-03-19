import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

async function getProfDetails(employee_id) {

    try{

        let res1 = await instance.get('/professors/' + employee_id );
        console.log('Listing details of ' + employee_id + ': ' );
        let profObj = res1.data[0];
        let fullname = profObj.first_name + " " + profObj.last_name;
        console.log(fullname);
        console.log('e-mail Addres: ' + profObj.email);
        console.log('Department: ' + profObj.department);
        console.log('Office: ' + profObj.office);
    }catch(err){

        console.log('ERROR: '+err);
    }
}

//getProfDetails(18900611);