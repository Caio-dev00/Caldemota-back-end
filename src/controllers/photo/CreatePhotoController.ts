import { Request, Response } from "express";
import { CreatePhotoService }from "../../services/photo/CreatePhotoService";

class CreatePhotoController {
  async handle(request: Request, response: Response){
    const { name, description, category_id } = request.body;

    const createPhotoService = new CreatePhotoService();

    if(!request.file){
      throw new Error("error upload file")
    }else{

      const { originalname, filename: banner } = request.file;

      const photo = await createPhotoService.execute({
        name,
        description,
        banner,
        category_id
      })

      return response.json(photo)
    }

  }
}

export { CreatePhotoController }