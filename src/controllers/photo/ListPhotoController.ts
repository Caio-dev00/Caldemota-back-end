import { Request, Response } from "express";
import { ListPhotoService } from "../../services/photo/ListPhotoService";

class ListPhotoController {
  async handle(request: Request, response: Response){
    const category_id = request.query.category_id as string;

    const listPhoto = new ListPhotoService();

    const photo = await listPhoto.execute({
      category_id
    })

    return response.json(photo);
  }
}

export { ListPhotoController }
