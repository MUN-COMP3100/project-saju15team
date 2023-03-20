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
            let student = await instance.get('/students/' + student_id);
            let course = await instance.get('/fall/' + crNum);
            let availableCredits = student.data[0].credits_available;
            //console.log(availableCredits);
            let courseCredit = course.data[0].credit_hours;
            //console.log(courseCredit);
            if (availableCredits >= courseCredit) {
                let data1 = {
                    crn: crNum
                }
                let res2 = await instance.put('/students3/'+ student_id, data1);
                return res2.data;
            } else {
                return ('Not enough credit hours.');
            }
    
        } else if (type.toLowerCase() == 'drop') {
            let data1 = {
                crn: crNum
            }
            let res1 = await instance.put('/students4/'+ student_id, data1);
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
//let msg = await Register(202333445,'drop',75111);
//let msg2 = await Register(202333445,'drop',51248);
//console.log(msg);
//console.log(msg2);