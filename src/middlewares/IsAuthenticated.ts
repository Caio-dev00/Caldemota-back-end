import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
  sub: string;
}

export function isAuthenticated(
  request: Request,
  response: Response, 
  next: NextFunction
){

  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try{
    //Validar token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
    request.user_id = sub;

    return next();

  }catch(err){
    return response.status(401).end();
  }

}