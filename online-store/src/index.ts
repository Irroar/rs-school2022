import './global.css';
import { ApplicationController } from './controller/app';
import { AppView } from './view/appView';
import { Coffee } from './model/product';

const app = new ApplicationController(new AppView(), new Coffee);
app.start();






