import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function getFAQ() {

    try{
        let res1 = await instance.get('/faq/');   
        return res1.data;
    } catch(err){
        return (err);
    }
}

//let res = await getFAQ();
//console.log(res);