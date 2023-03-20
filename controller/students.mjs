import { Student } from '../model/student.mjs';

/**
 * A function that get a student by studentID 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_student_ID(req, res) {
    let id_to_match = parseInt(req.params.student_id);
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

/**
 * A function to add course
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function add_reg_course(req, res) {
    let id_to_match = parseInt(req.params.student_id);
    let crn_to_match = parseInt(req.body.crn);
    let msg = await Student.addCourse(id_to_match,crn_to_match);
    //console.log(id_to_match);
    res.send(msg);  
 
}

/**
 * A function to add course
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function drop_reg_course(req, res) {
    let id_to_match = parseInt(req.params.student_id);
    let crn_to_match = parseInt(req.body.crn);
    let msg = await Student.drop(id_to_match,crn_to_match);
    //console.log(id_to_match);
    res.send(msg);  
 
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