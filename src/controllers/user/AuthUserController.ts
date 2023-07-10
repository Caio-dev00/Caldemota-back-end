import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{
  async handle(request: Request, response: Response){
    const { email, password } = request.body;

    const authUser = new AuthUserService();

    const auth = await authUser.execute({
      email: email,
      password: password
    })

    return response.json(auth);
  }
}

export { AuthUserController }