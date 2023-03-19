import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

async function getProfDetails(){
    try{
        let id = 19120424;
        let res1 = await instance.get('/professors/' + id );
        console.log('Listing professor details of:' + id + ': ' );
        console.log(res1.data);
    }catch(err){
        console.log('ERROR: '+err);
    }
}

//getProfDetails();