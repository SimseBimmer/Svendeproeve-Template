import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/productController';

const routes = Router();
routes.get('/', getRecords);
// Change ':id' to ':slug'
routes.get('/:slug', getRecord);

export const productRoutes = routes;
