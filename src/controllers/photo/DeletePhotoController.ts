import { Request, Response } from "express";
import { DeletePhotoService } from "../../services/photo/DeletePhotoService";

class DeletePhotoController {
  async handle(request: Request, response: Response){
    const photo_id = request.query.photo_id as string;

    const deletePhotoService = new DeletePhotoService();

    const deletePhoto = await deletePhotoService.execute({
      photo_id
    })

    return response.json(deletePhoto);
  }
}

export { DeletePhotoController }