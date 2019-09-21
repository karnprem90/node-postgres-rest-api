import db from '../db/index';


class PostModel {


    /**
     * Create a Post
     * @param {*} payload 
     * @returns {object} post object
     */
    async create(payload) {
        const columns = ['id', 'title', 'body', 'userId'];
        console.log(payload);
        const values = payload;
        try {
            return await db.queryForMultipleInsert(values, columns, 'posts');
        } catch (error) {
            console.error('Error while inserting post');
            console.log('error', error)
        }
    }

    /**
     * Get All Post
     * @returns {object} post array
     */

    async getAll() {
        const findAllQuery = 'SELECT * FROM posts';
        try {
            return await db.query(findAllQuery, []);
        } catch (error) {
            console.error('Error while get All post');
            console.log('error', error)
        }
    }

    /**
     * Get One Post by postId
     * @param {*} userId 
     * @returns {object} post object
     */

    async getOne(postId) {
        const findAllQuery = 'SELECT * FROM posts where id = $1';
        try {
            return await db.query(findAllQuery, [postId]);
        } catch (error) {
            console.error('Error while get post');
            return error;
        }
    }

    /**
     * Update Post
     * @param {*} postId 
     * @param {*} payload 
     * @returns {object} post object
     */

    async updateUser(postId, payload) {
        const findOneQuery = 'SELECT * FROM posts WHERE id=$1';
        const updateOneQuery = `UPDATE posts
      SET title = $1, body = $2
      WHERE id=$5 returning *`;
        try {
            const result = await db.query(findOneQuery, [postId]);
            if (!result[0]) {
                return 'Post Not found';
            }
            const values = [
                payload.title || rows[0].title,
                payload.body || rows[0].body,
                postId,
            ];
            return await db.query(updateOneQuery, values);
        } catch (error) {
            console.log('Some problem in updating the user');
            return error;
        }
    }

    /**
     * Delete a post
     * @param {*} postId 
     * @returns {void} return 
     */
    async delete(postId) {
        const deleteQuery = 'DELETE FROM posts WHERE id=$1 returning *';
        try {
            return await db.query(deleteQuery, [postId]);
        } catch (error) {
            console.log('Some problem in deleting the user');
            return error;
        }
    }
}

export default new PostModel();