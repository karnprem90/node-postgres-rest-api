import db from '../db/index';


class CommentModel {


  /**
   * Create a Comment
   * @param {*} payload 
   * @returns {object} comment object
   */
  async create(payload) {
    const columns = ['id', 'name', 'email', 'body', 'postId'];
    console.log(payload);
    const values = payload;
    try {
      return await db.queryForMultipleInsert(values, columns, 'comments');
    } catch (error) {
      console.error('Error while inserting comments');
      return error;
    }
  }

  /**
   * Get All Comment
   * @returns {object} comment array
   */

  async getAll() {
    const findAllQuery = 'SELECT * FROM comments';
    try {
      return await db.query(findAllQuery, []);
    } catch (error) {
      console.error('Error while get All comment');
      return error;
    }
  }

  /**
   * Get One Comment by CommentId
   * @param {*} commentId 
   * @returns {object} post object
   */

  async getOne(commentId) {
    const findAllQuery = 'SELECT * FROM comments where id = $1';
    try {
      return await db.query(findAllQuery, [commentId]);
    } catch (error) {
      console.error('Error while get comment');
      return error;
    }
  }

  /**
   * Update Comment
   * @param {*} commentId 
   * @param {*} payload 
   * @returns {object} comment object
   */

  async updateUser(commentId, payload) {
    const findOneQuery = 'SELECT * FROM comment WHERE id=$1';
    const updateOneQuery = `UPDATE comment
      SET title = $1, body = $2
      WHERE id=$5 returning *`;
    try {
      const result = await db.query(findOneQuery, [commentId]);
      if (!result[0]) {
        return 'Comment Not found';
      }
      const values = [
        payload.title || rows[0].title,
        payload.body || rows[0].body,
        commentId,
      ];
      return await db.query(updateOneQuery, values);
    } catch (error) {
      console.log('Some problem in updating the comment');
      return error;
    }
  }

  /**
   * Delete a Comment
   * @param {*} commentId 
   * @returns {void} return 
   */
  async delete(commentId) {
    const deleteQuery = 'DELETE FROM comment WHERE id=$1 returning *';
    try {
      return await db.query(deleteQuery, [commentId]);
    } catch (error) {
      console.log('Some problem in deleting the comment');
      return error;
    }
  }
}

export default new CommentModel();