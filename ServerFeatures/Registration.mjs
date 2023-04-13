import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function Register(student_id = '', type = '' , crNum = ''){
    if(student_id != '' && type != '' && crNum != '') {
        if (type.toLowerCase() == 'add'){
                let res2 = await instance.put('/students3/'+ student_id + '/' + crNum + '/add');
                return res2.data;
    
        } else if (type.toLowerCase() == 'drop') {
            let res1 = await instance.put('/students3/'+ student_id + '/' + crNum + '/drop');
           return res1.data;
        } else {
            return ('Invalid registration type.');
        }
    }
    else {
        return ('Invalid Parameters!');
    }

}

//let msg = await Register(202333445,'add',51248);
//let msg2 = await Register(202333445,'add',75111);
//let msg3 = await Register(202333445,'drop',51248);
//console.log(msg);
//console.log(msg2);
//console.log(msg3);