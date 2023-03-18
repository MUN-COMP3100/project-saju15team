import { Professor } from '../model/professor.mjs';

/**
 * A function that get a student by id and returns all the student info in an array
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_prof_info(req, res) {
    let id_to_match = req.params.employee_id;
    let obj = await Professor.getProfInfo(id_to_match);
    if (obj.length > 0){
        console.log(obj.length+' details sent.');
        res.send(obj);        
    }else{
        res.send('Prof not found');
    }  
}