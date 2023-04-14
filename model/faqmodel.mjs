import { getDb } from '../utils/db.mjs';

async function _get_faq_collection (){
    let db = await getDb();
    return await db.collection('faq');
};

/**
 * The class CaseDetail, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

export class FAQ{
    constructor(ques,ans){
        this.question = ques;
        this.answer = ans;
    }
    /**
     * This method will return all the question and answers
     * @returns {Array} An array containing FAQ objects
     */
    static async getFAQ(){
        let collection = await _get_faq_collection();
        let obj = await collection.find({}).toArray();
        //console.log(obj);
        return obj;

    }


}