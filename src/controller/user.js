import UserModel from '../model/user';
import { getUsers } from '../axios/index';

class UserController {
  /**
   * Create User
   * @param {*} req 
   * @param {*} res 
   */

  async create(req, res) {
    try {
      const { data } = await getUsers();
      const result = await UserModel.create(data);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Find All Users
   * @param {*} req 
   * @param {*} res 
   */
  async findAll(req, res) {
    try {
      const users = await UserModel.getAll();
      return res.status(200).send(users);
    } catch(error) {
      return res.status(400).send(error);
    }
  }

  /**
   * Find One User
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    try {
      const result = await UserModel.getOne(req.params.id);
      return res.status(200).send(result[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new UserController();