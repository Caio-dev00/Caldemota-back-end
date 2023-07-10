import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
  async handle(request: Request, response: Response){

    const listCategory = new ListCategoryService();;

    const category = await listCategory.execute();

    return response.json(category);
  }
}

export { ListCategoryController }