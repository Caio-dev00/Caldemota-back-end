import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController{
  async handle(request: Request, response: Response){
    const { name } = request.body;

    const categoryService = new CreateCategoryService();

    const category = await categoryService.execute({
      name
    })

    return response.json(category);
  }
}

export { CreateCategoryController }