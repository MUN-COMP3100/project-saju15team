import { Course } from './course.mjs';

/**
 * A function that adds a course to the database.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function add(req, res) {

}

/**
 * A function that lists all courses with all information that is
 * in the file. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function list_all(req, res) {    
    let objs = await Contact.getAll();
    console.log(objs.length+' item(s) sent.');
    res.send(objs);        
}