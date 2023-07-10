import prismaClient from "../../prisma";

interface PhotoRequest {
  photo_id: string;
}

class DeletePhotoService {
  async execute({ photo_id }: PhotoRequest){
    
    const photo = await prismaClient.photo.delete({
      where:{
        id: photo_id
      }
    })

    return photo;

  }
}

export { DeletePhotoService }