import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function getProfDetails(email) {

    try{
        let res1 = await instance.get('/professors/' + email );   
        if (Array.isArray(res1.data)) {    
            let profObj = res1.data[0];
            let fullname = profObj.first_name + " " + profObj.last_name;
            let email = profObj.email;
            let dep = profObj.department;
            let office = profObj.office;
            let info = [fullname, email, dep, office];
            return info;
        }
        else{
            return res1.data;
        }
    } catch(err){
        return (err);
    }
}

//let res = await getProfDetails("dumbridge@hogwarts.ca");
//console.log(res);