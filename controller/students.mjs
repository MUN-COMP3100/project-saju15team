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
 * A function to add or drop course
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function add_drop_course(req, res) {
    let id_to_match = parseInt(req.params.student_id);
    let crn_to_match = parseInt(req.params.crn);
    let type = req.params.type;
    let msg = "";
    if (type == 'add') {
        msg = await Student.addCourse(id_to_match,crn_to_match);
    }
    else if (type == 'drop') {
        msg = await Student.drop(id_to_match,crn_to_match);
    } 
    else {
        msg = "Inavlid Registration Type";
    }
    
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

/**
 * A function that verifies student login 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function verifyLoginCredentials(req, res) {
    let password_to_match = req.params.password;
    let email_to_match = req.params.email;

    let obj = await Student.matchLoginCredentials(email_to_match, password_to_match);
        res.send(obj);      
    }

/**
 * A function that gets the courses a student is registered for in the form of an Array of course objects
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function get_reg_courses(req, res) {
    let id_to_match = parseInt(req.params.student_id);
    let obj = await Student.getRegisteredCourses(id_to_match);
    if (obj.length > 0){
        console.log(obj.length+ ' courses retrieved!');
        res.send(obj);        
    }else{
        res.send('No registered courses');
    }  
}