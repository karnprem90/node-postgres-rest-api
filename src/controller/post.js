import PostModel from '../model/post';
import { getPosts } from '../axios/index';

class PostController {
  /**
   * Create Post
   * @param {*} req 
   * @param {*} res 
   */

  async create(req, res) {
    try {
      const { data } = await getPosts();
      const result = await PostModel.create(data);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Find All Posts
   * @param {*} req 
   * @param {*} res 
   */
  async findAll(req, res) {
    try {
      const users = await PostModel.getAll();
      return res.status(200).send(users);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Find One Post
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    try {
      const result = await PostModel.getOne(req.params.id);
      return res.status(200).send(result[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new PostController();