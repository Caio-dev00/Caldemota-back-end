import prismaClient from "../../prisma";

interface PhotoResquest {
  name: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreatePhotoService {
  async execute({ name, description, banner, category_id }: PhotoResquest){

    const photo = await prismaClient.photo.create({
     data: {
      name: name,
      description: description,
      banner: banner,
      category_id: category_id
     }
    })

    return photo;
  }
}

export { CreatePhotoService }