import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){

    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => console.log('Server Online'))