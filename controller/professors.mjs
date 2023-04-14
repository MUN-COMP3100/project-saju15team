import { Professor } from '../model/professor.mjs';

/**
 * A function that get a student by id and returns all the student info in an array
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function find_prof_info(req, res) {
    let email_to_match = req.params.email;
    let obj = await Professor.getProfInfo(email_to_match);
    if (obj.length > 0){
        console.log(obj.length+' details sent.');
        res.send(obj);        
    }else{
        res.send('Not a registered email!');
    }  
}