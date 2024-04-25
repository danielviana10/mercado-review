import { Request, Response } from "express";
import { Product } from "./interfaces";
import { market } from "./database";

let id = 1;

const postProduct = (req: Request, res: Response): Response => {
    const dueData: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 + 365);

    const newProduct: Product = {
        id: id ++,
        ...req.body,
        expirationDate: dueData
    };
    market.push(newProduct);

    return res.status(201).json(newProduct);
}

const totalValue = (array: Product[]): number => {
    return array.reduce((previous,acc) => previous + acc.price, 0)
}

const getProduct = (req: Request, res: Response): Response => {
    return res.status(200).json({total: totalValue(market), products: market})
}

export {postProduct, getProduct}