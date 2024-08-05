import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

type createUserAccount = {
  name: string;
  email: string;
  password: string;
};

type loginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  // create new record of user in appwrite
  async createUserAccount({ name, email, password }: createUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        name,
        email,
        password
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: loginUserAccount) {
    try {
      const userAccount = await account.createSession(email, password);
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const userAccount = await this.getCurrentUser();
      return Boolean(userAccount);
    } catch (error) {
      throw error;
    }

    return false;
  }

  async getCurrentUser() {
    try {
      const userAccount = await account.get();
      return userAccount;
    } catch (error) {
      console.log("get current user error", error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error", error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
