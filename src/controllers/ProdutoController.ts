import { Request, Response } from "express";
import knex from "../database/connection";

class ProdutoController {
  async index(request: Request, response: Response) {
    const { id } = request.params;
    const produto = await knex("produto")
      .join(
        "produtocomplemento",
        "produtocomplemento.id_produto",
        "=",
        "produto.id"
      )
      .where("produtocomplemento.id_produto", id)
      .select(
        "produto.id",
        "produto.descricaocompleta",
        "produtocomplemento.precovenda"
      );
    return response.json(produto);
  }

  async index2(request: Request, response: Response) {
    const { id } = request.query;
    const parsedProds = String(id)
      .split(",")
      .map((item) => Number(item.trim()));
    const produto = await knex("produto")
      .join(
        "produtocomplemento",
        "produtocomplemento.id_produto",
        "=",
        "produto.id"
      )
      .whereIn("produto.id", parsedProds)
      .select(
        "produto.id",
        "produto.descricaocompleta",
        "produtocomplemento.precovenda"
      );
    return response.json(produto);
  }

  async show(request: Request, response: Response) {
    const items = await knex("produto").select("descricaocompleta");

    return response.json(items);
  }

  async oferta(request: Request, response: Response) {
    const produto = await knex("oferta")
      .join("dataprocessamento", "dataprocessamento.id_loja", "oferta.id_loja")
      .join("produto", "produto.id", "oferta.id_produto")
      .whereRaw("oferta.datatermino > dataprocessamento.data")
      .where("oferta.bloquearvenda", "=", false)
      .where("oferta.encerraoferta", "=", false)
      .where("oferta.id_situacaooferta", "=", 1)
      .select(
        "produto.descricaocompleta",
        "oferta.preconormal",
        "oferta.precooferta",
        "oferta.datatermino"
      );
    return response.json(produto);
  }
}

export default ProdutoController;
