import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getUsers(req.query);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async bulkUpdateUsers(req: Request, res: Response): Promise<void> {
    try {
      const updatedUsers = await userService.bulkUpdateUsers(req.query, req.body);
      res.json(updatedUsers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async bulkDeleteUsers(req: Request, res: Response): Promise<void> {
    try {
      await userService.bulkDeleteUsers(req.query);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new UserController();
