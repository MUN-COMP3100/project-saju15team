import axios from 'axios';
var myurl = 'http://127.0.0.1:3000';

// Let's configure the base url
const instance = axios.create({
    baseURL: myurl,
    timeout: 1000,
    headers: {'content-type': 'application/json'}
});

export async function searchCourses(student_id = ''){
    if (student_id == '') {
        return ('Invalid Parameter');
    } else {
        let res1 = await instance.get('/students/' + student_id);
        let courses = res1.data[0].registered_courses;
        return courses;
    }

}

let res2 = await searchCourses(202333445);
console.log(res2);