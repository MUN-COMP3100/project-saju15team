import { getDb } from '../utils/db.mjs';

async function _get_course_collection (){
    let db = await getDb();
    return await db.collection('fall');
};

/**
 * The class courses, with a main constructor and four methods
 * to save and retrieve courses (all courses|based subject|based on subject and number)
 */

export class Course {

    constructor(sub, num, name, des, creditHours, crn, sec, enrollmentStatus, type, type_code, start, end, days, room, building, instructor){
        this.subject = sub;
        this.number = num;
        this.name = name;
        this.description = des;
        this.credit_hour = creditHours;
        this.crn = crn;
        this.section = sec;
        this.enrollment_status = enrollmentStatus;
        this.type = type;
        this.type_code = type_code;
        this.start_time = start;
        this.end_time = end;
        this.days = days;
        this.room = room;
        this.building = building;
        this.instructor = instructor;
    }

    /**
     * This method saves the current object Course in the Database
     * @returns {String} - A message if course was saved in the db or not
     */
    async save(){
        try{ 
            let collection = await _get_course_collection();
            let mongoObj = await collection.insertOne(this);
            console.log('1 Course was inserted in the database with id -> '+mongoObj.insertedId);
            return 'Course correctly inserted in the Database.';            
        } catch(err){
            throw err
        }        
    }

    /**
     * This static method for the class Course will retrieve
     * all the courses inside the database
     * @returns {Array[Course]} - An array with all courses retrieved
     */
    static async find_all(){
        let collection = await _get_course_collection();
        let objs = await collection.find({}).toArray();
        return objs;                
    }

    /**
     * This method will retrieve courses with the subject passed
     * as a parameter
     * @param {String} subject - the name of the courses to be retrieved
     * @returns {Array[Course]} - An array with all courses retrieved
     */
    static async get_subject(subject){
        let collection = await _get_course_collection();
        let objs = await collection.find({"subject": subject}).toArray();
        return objs;
    }

    /**
     * This method will retrieve courses with the subject number passed
     * as a parameter
     * @param {String,Integer} - subject and subject number the courses to be retrieved
     * @returns {Array[Course]} - An array with all courses retrieved
     */
    static async get_subject_number(subject,num){
        let collection = await _get_course_collection();
        let objs = await collection.find({"subject": subject , "number": num}).toArray();
        return objs;
    }

    /**
     * This method will retrieve a courss with the subject number and section passed
     * as a parameter
     * @param {String,Integer,String} - subject,subject number,section of the course to be retrieved
     * @returns {Course} - A course object 
     */
    static async get_subject_number_section(subject,num,sec){
        let collection = await _get_course_collection();
        let obj = await collection.find({"subject": subject , "number": num , "section": sec});
        return obj;
    }

    /**
     * This method will retrieve a course with the CRN passed
     * as a parameter
     * @param {Integer} - CRN of the course to be retrieved
     * @returns {Course} - A course object 
     */
    static async get_crn(crn){
        let collection = await _get_course_collection();
        let obj = await collection.find({ "crn": crn });
        return obj;
    }

}