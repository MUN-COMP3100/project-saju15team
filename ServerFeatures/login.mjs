import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function login(email = '',pw = ''){
    if (email == '' &&  pw == '' || email != '' &&  pw == '' || email == '' &&  pw != '') {
        return('Inputs cannot be blank.');
    }
    else {
        let res1 = await instance.get('/students3/' + email.toLowerCase() + '/' + pw);//.toLowerCase());
        return res1.data;
         /*if (res1.data == 'student not found'){
             return('User not found.');
         } else if (res1.data[0].password.toLowerCase() != pw){
             return('Password does not match.');
         } else {
             return("Login Successful!");
         }*/
    }

}

let msg = await login('triddle@hogwarts.ca','avadaKEDavra');
console.log(msg);