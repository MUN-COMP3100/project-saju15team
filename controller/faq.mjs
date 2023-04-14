import { FAQ } from '../model/faqmodel.mjs';

/**
 * A function that get all faq an array
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function get_faq(req, res) {
    let obj = await FAQ.getFAQ();
    if (obj.length > 0){
        console.log(obj.length+' details sent.');
        res.send(obj);        
    }else{
        res.send('No FAQ found!');
    }  
}