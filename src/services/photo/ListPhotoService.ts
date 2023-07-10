import prismaClient from "../../prisma";

interface PhotoResquest{
  category_id: string;
}

class ListPhotoService {
  async execute({ category_id }: PhotoResquest){

    const findPhoto = await prismaClient.photo.findMany({
      where: {
        category_id: category_id
      }
    })

    return findPhoto;

  }
}

export { ListPhotoService }