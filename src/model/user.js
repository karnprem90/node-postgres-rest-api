import db from '../db/index';


class UserModel {

  /**
   * Create a Multiple User
   * @param {*} payload 
   * @returns {object} user object
   */
  async create(payload) {
    const columns = ['id', 'name', 'username', 'email', 'phone', 'website', 'address', 'company'];
    const values = payload;
    try {
      return await db.queryForMultipleInsert(values, columns, 'users');
    } catch (error) {
      console.error('Error while inserting user');
      console.log('error', error)
    }
  }

  /**
   * Get All Users
   * @returns {object} users array
   */

  async getAll() {
    const findAllQuery = 'SELECT * FROM users';
    try {
      return await db.query(findAllQuery, []);
    } catch (error) {
      console.error('Error while get All user');
      console.log('error', error)
    }
  }

  /**
   * Get One User
   * @param {*} userId 
   * @returns {object} user object
   */

  async getOne(userId) {
    const findAllQuery = 'SELECT * FROM users where id = $1';
    try {
      return await db.query(findAllQuery, [userId]);
    } catch (error) {
      console.error('Error while get All user');
      return error;
    }
  }

  /**
   * Update Object
   * @param {*} userId 
   * @param {*} payload 
   * @returns {object} user object
   */

  async updateUser(userId, payload) {
    const findOneQuery = 'SELECT * FROM users WHERE id=$1';
    const updateOneQuery = `UPDATE users
      SET phone = $1, website = $2, address = $3, company = $4
      WHERE id=$5 returning *`;
    try {
      const result = await db.query(findOneQuery, [userId]);
      if (!result[0]) {
        return 'User Not found';
      }
      const values = [
        payload.phone || rows[0].phone,
        payload.website || rows[0].website,
        payload.address || rows[0].address,
        payload.company || rows[0].company,
        userId,
      ];
      return await db.query(updateOneQuery, values);
    } catch (error) {
      console.log('Some problem in updating the user');
      return error;
    }
  }

  /**
   * Delete a user
   * @param {*} userId 
   * @returns {void} return 
   */
  async delete(userId) {
    const deleteQuery = 'DELETE FROM users WHERE id=$1 returning *';
    try {
      return await db.query(deleteQuery, [userId]);
    } catch (error) {
      console.log('Some problem in deleting the error');
      return error;
    }
  }
}

export default new UserModel();