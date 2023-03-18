import { Course } from '../model/course.mjs';

/**
 * A function that adds a course to the database.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function add(req, res) {
    let sub = req.body.subject;
    let num = req.body.number;
    let name = req.body.name;
    let desc = req.body.description;
    let creditHour = req.body.credit_hours;
    let crn = req.body.crn;
    let sec = req.body.section;
    let enrollmentStatus = req.body.enrollment_status;
    let type = req.body.type;
    let typeCode = req.body.type_code;
    let start = req.body.start_time;
    let end = req.body.end_time;
    let days = req.body.days;
    let room = req.body.room;
    let building = req.body.building;
    let instructor = req.body.instructor;

    try {
        let new_course = new Course(sub,num,name,desc,creditHour,crn,sec,enrollmentStatus,type,typeCode,start,end,days,room,building,instructor);
        let msg = await new_course.save();
        res.send(msg);  
    } catch {

    }
}
    

/**
 * A function that lists all courses with all information that is
 * in the file. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function list_all(req, res) {    
    let objs = await Course.find_all();
    console.log(objs.length+' item(s) sent.');
    res.send(objs);        
}

/**
 * A function that gets courses by subject and returns all
 * data of the requested subjects. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_subject(req, res) {
    let subject_to_match = req.params.subject;
    let objs = await Course.get_subject(subject_to_match);
    if (objs.length > 0){
        console.log(objs.length+' item(s) sent.');
        res.send(objs);        
    }else{
        res.send('No course was found');
    }  
}

/**
 * A function that gets sections of courses by subject and number,returns all
 * data of the requested subjects. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_subject_number(req, res) {
    let subject_to_match = req.params.subject;
    let number_to_match = parseInt(req.params.number);
    let objs = await Course.get_subject_number(subject_to_match,number_to_match);
    if (objs.length > 0){
        console.log(objs.length+' item(s) sent.');
        res.send(objs);        
    }else{
        res.send('No course was found');
    }  
}

/**
 * A function that get a course by crn and returns all
 * data of the requested subjects. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_crn(req, res) {
    let crn_to_match = parseInt(req.params.crn);
    let obj = await Course.get_crn(crn_to_match);
    if (obj.length > 0){
        console.log(obj.length+' course sent.');
        res.send(obj);        
    }else{
        res.send('Course not found');
    }  
}

