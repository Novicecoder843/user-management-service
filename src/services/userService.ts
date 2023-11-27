import User, { User as UserType } from '../models/user';

class UserService {
  async getUsers(query: Partial<UserType>): Promise<UserType[]> {
    try {
      const users = await User.find({query});
      return users;
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`);
    }
  }

  async createUser(userData: Partial<UserType>): Promise<UserType> {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  }

  async bulkUpdateUsers(query: Partial<UserType>, updatedData: Partial<UserType>): Promise<UserType[]> {
    try {
      const updatedUsers  = await User.updateMany({query, updatedData});
      return updatedUsers;
    } catch (error) {
      throw new Error(`Error updating users: ${error}`);
    }
  }

  async bulkDeleteUsers(query: Partial<UserType>): Promise<void> {
    try {
      await User.deleteMany({query});
    } catch (error) {
      throw new Error(`Error deleting users: ${error}`);
    }
  }
}

export default new UserService();
