import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function getSchedule(student_id = ''){
    if (student_id == '') {
        return ('Invalid Parameter');
    } else {
        let res1 = await instance.get('/students/' + student_id);
        if( typeof(res1.data) == 'string'){
            return ('Invalid Student Id');
        }
        else{
            let courses = res1.data[0].registered_courses;
            let schedule = [];
            for (let i = 0; i < courses.length; i++) {
                let sub = courses[i].subject;
                let num = courses[i].number;
                let day = courses[i].days;
                let time = courses[i].start_time + ' - ' + courses[i].end_time;
                
                let detail = {
                    subject: sub,
                    number: num,
                    days: day,
                    time: time
                };
                schedule.push(detail);
            }
            
            return schedule;
        }
    }

}

let res2 = await getSchedule(202311223);
console.log(res2);