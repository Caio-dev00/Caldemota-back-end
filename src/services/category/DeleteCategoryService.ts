import prismaClient from "../../prisma";

interface CategoryRequest {
  category_ID: string;
}

class DeleteCategoryService{
  async execute({ category_ID}: CategoryRequest){

    const category = await prismaClient.category.delete({
      where: {
        id: category_ID
      }
    })

    return category;

  }
}

export { DeleteCategoryService }