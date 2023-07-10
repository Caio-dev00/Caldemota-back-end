import { Router } from 'express'
import multer from 'multer';
import uploadConfig from './config/multer';

import { isAuthenticated } from './middlewares/IsAuthenticated';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreatePhotoController } from './controllers/photo/CreatePhotoController';
import { ListPhotoController } from './controllers/photo/ListPhotoController';
import { DeletePhotoController } from './controllers/photo/DeletePhotoController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));


//-- USER ROUTES --\\
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle);

//-- CATEGORY ROUTES --\\
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.delete('/category', isAuthenticated, new DeleteCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

//-- PHOTO ROUTES --\\
router.post('/photo', isAuthenticated, upload.single('file'), new CreatePhotoController().handle);
router.get('/photo', isAuthenticated, new ListPhotoController().handle);
router.delete('/photo', isAuthenticated, new DeletePhotoController().handle);

export { router };