// Import de modulos e serviços usados
import { Router } from 'express';
import multer from 'multer';


// Import de arquivos usados
import uploadConfig from './config/upload'
import SessionControler from './controllers/SessionController'
import HouseController from './controllers/HouseController'
import DashboardController from './controllers/DashboardController'
import ReserveController from './controllers/ReserveController'

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions' , SessionControler.store);

routes.post('/houses' , upload.single('thumbnail'), HouseController.store);
routes.get('/houses',HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses' , HouseController.destroy);

routes.get('/dashboard' , DashboardController.show);

routes.post('/houses/:house_id/reserve' , ReserveController.store);
routes.get('/reserve' , ReserveController.index);
routes.delete('/reserve/cancel' , ReserveController.destroy);

export default routes;