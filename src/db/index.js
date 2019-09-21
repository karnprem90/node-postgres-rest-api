const pgp = require('pg-promise')({
    /* initialization options */
    capSQL: true // capitalize all generated SQL
});
import db from '../pg-connection';

export default {
    /**
     * DB Query
     * @param {string} text
     * @param {Array} params
     * @returns {object} object 
     */

     async query(text, params) {
         try {
             return await db.any(text, params);
         } catch(error) {
            console.log('db connection error', error);
            return error;
         } finally {
             db.$pool.end;
         }
    },

    async queryForMultipleInsert(values, columns, tableName) {
        const query = () => pgp.helpers.insert(values, columns, tableName);
        try {
            return await db.none(query);
        } catch (error) {
            console.log('db connection error', error);
            return error;
        } finally {
            db.$pool.end;
        }
    }
}