import { Student } from '../model/student.mjs';

/**
 * A function that get a student by studentID 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_student_ID(req, res) {
    let id_to_match = req.params.student_id;
    let obj = await Student.findStudentByID(id_to_match);
    if (obj.length > 0){
        console.log(obj.length+' student sent.');
        res.send(obj);        
    }else{
        res.send('student not found');
    }  
}

/**
 * A function that get a student by email 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_student_email(req, res) {
    let email_to_match = req.params.email;
    let obj = await Student.findStudentByEmail(email_to_match);
    if (obj.length > 0){
        console.log(obj.length+' student sent.');
        res.send(obj);        
    }else{
        res.send('student not found');
    }
}
/**NOT SURE ABOUT THIS ONE because where do I get the course to be added from?
 * A function to update the information about a given contact.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function add_reg_course(req, res) {
    let course_to_match = req.params.registered_courses;
    let newcourses = req.body.registered_courses;

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let student_id = req.body.student_id;
    let email = req.body.email;
    let address = req.body.address;
    let mobile = req.body.mobile;
    let password = req.body.password;
    let total_credits_received = req.body.total_credits_received;
    let credits_available = req.body.credits_available;

    let isValid = await validate_fields(first_name, last_name,student_id, email, address, mobile, password, total_credits_received, credits_available, newcourses);
    if (isValid){
        let msg = await Contact.update(course_to_match, new Student(first_name, last_name,student_id, email, address, mobile, password, total_credits_received, credits_available, newcourses))
        res.send(msg);
    } else {
        console.log("The document was not updated");
        let msg = 'The new user data is not valid.';
        res.send(msg);
    }
}

/**
 * A function that gets courses taken by a student and returns all of the courses in an array. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function get_reg_courses(req, res) {
    let id_to_match = req.params.student_id;
    let objs = await Student.findStudentByID(id_to_match);
    let arr = objs.registered_courses;
    if (arr.length > 0){
        console.log(arr.length+' item(s) sent.');
        res.send(arr);        
    }else{
        res.send('No registered course was found');
    }  
}

/**
 * A function that get a student by id and returns all the student info in an array
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_student_info(req, res) {
    let id_to_match = req.params.student_id;
    let obj = await Student.getStudentInfo(id_to_match);
    if (obj.length > 0){
        console.log(obj.length+' details sent.');
        res.send(obj);        
    }else{
        res.send('student not found');
    }  
}