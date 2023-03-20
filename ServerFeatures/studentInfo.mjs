import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function getStudentPersonalInfo(student_id) {

    try{
        let res1 = await instance.get('/students/' + student_id);
        if (Array.isArray(res1.data)) {    
            //console.log('Listing details of ' + employee_id + ': ' );
            let studentObj = res1.data[0];
            let fullname = studentObj.first_name + " " + studentObj.last_name;
            let info = {
                name: fullname,
                email: studentObj.email,
                mobile: studentObj.mobile,
                address: studentObj.address,
                total_credits_received: studentObj.total_credits_received
            };
            return info;
        }
        else{
            return ('Invalid student Id!');
        }
    } catch(err){
        //console.log('ERROR: '+err);
        return (err);
    }
}

let res = await getStudentPersonalInfo(202322334);
console.log(res);