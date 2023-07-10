import prismaClient from "../../prisma";

interface CategoryRequest{
  name: string;
}

class CreateCategoryService{
  async execute({ name } : CategoryRequest){

    if(name === ""){
      throw new Error("Invalid name")
    }

    const category = await prismaClient.category.create({
      data:{
        name: name,
      }
    })

    return category;

  } 
}

export { CreateCategoryService }