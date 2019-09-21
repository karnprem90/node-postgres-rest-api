import CommentModel from '../model/comment';
import {
  getComments
} from '../axios/index';

class CommentController {
  /**
   * Create Comment
   * @param {*} req 
   * @param {*} res 
   */

  async create(req, res) {
    try {
      const { data } = await getComments();
      const result = await CommentModel.create(data);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Find All Comment
   * @param {*} req 
   * @param {*} res 
   */
  async findAll(req, res) {
    try {
      const users = await CommentModel.getAll();
      return res.status(200).send(users);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Find One Comment
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    try {
      const result = await CommentModel.getOne(req.params.id);
      return res.status(200).send(result[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new CommentController();