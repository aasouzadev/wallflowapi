import express from 'express';

import ProdutoController from './controllers/ProdutoController'

const routes = express.Router();
//const pointsController = new PointsController();
const produtoController = new ProdutoController();

routes.get('/produto/:id', produtoController.index);
routes.get('/produtos/', produtoController.index2);
routes.get('/produto/', produtoController.show);

//routes.post('/points', pointsController.create);
//routes.get('/points/:id', pointsController.show);
//routes.get('/points', pointsController.index);

export default routes;