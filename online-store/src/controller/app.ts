import { AppView } from '../view/appView';
import { Coffee } from '../model/product';

export class ApplicationController { 
  public start(): void {
    const coffeeModel = new Coffee();
    coffeeModel.data.then(data => {
      const app = new AppView(data);
      app.renderApp();
    });
  }
}

