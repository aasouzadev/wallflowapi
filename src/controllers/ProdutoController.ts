import { Request, Response } from 'express';
import knex from '../database/connection';

class ProdutoController {
    async index(request: Request, response: Response) {
       const {id} = request.params;
       console.log('teste',id);
        const produto = await knex('produto')
        .join('produtocomplemento','produtocomplemento.id_produto','=','produto.id')
       //.whereIn('produto.id', parsedid)
       .where('produtocomplemento.id_produto', id)
        .select('produto.id','produto.descricaocompleta','produtocomplemento.precovenda');
        return response.json(produto);
        };


        async index2(request: Request, response: Response) {

            const {id} = request.query;
         const parsedProds = String(id)
            .split(',')
            .map(item => Number(item.trim()));
         console.log('teste',id);
         console.log('teste2',parsedProds);
             const produto = await knex('produto')
             .join('produtocomplemento','produtocomplemento.id_produto','=','produto.id')
            .whereIn('produto.id', parsedProds)
           // .where('produtocomplemento.id_produto', id)
             .select('produto.id','produto.descricaocompleta','produtocomplemento.precovenda');
             return response.json(produto);
             };
        
    
        async show(request: Request, response: Response) {
            const items = await knex('produto').select('descricaocompleta');
    
        
            return response.json(items);
        }
}

export default ProdutoController;