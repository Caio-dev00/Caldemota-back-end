import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(request: Request, response: Response){
    const category_ID = request.query.category_ID as string;

    const deleteCategory = new DeleteCategoryService();

    const category = await deleteCategory.execute({
      category_ID
    })

    return response.json(category);

  }
}

export { DeleteCategoryController }