import express from 'express';

import ProdutoController from './controllers/ProdutoController'

const routes = express.Router();
const produtoController = new ProdutoController();

routes.get('/produto/:id', produtoController.index);
routes.get('/produtos/', produtoController.index2);
routes.get('/produto/', produtoController.show);
routes.get('/oferta/', produtoController.oferta);


export default routes;