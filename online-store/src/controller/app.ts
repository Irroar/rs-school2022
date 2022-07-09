import { AppView } from '../view/appView';
import { Coffee } from '../model/product';
import { ICoffee } from 'types';

export class ApplicationController {
  model: Coffee;
  view: AppView;

  constructor(view: AppView, model: Coffee) {
    this.model = model;
    this.view = view;

    // bindings 
    this.onChanged = this.onChanged.bind(this);
    this.model.bindChanged(this.onChanged);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.view.products.bindNextPage(this.handleNextPage)

    this.model.data.then(rawData => {
      this.onChanged(rawData);
    })
  }

  public start(): void {
    this.model.data.then(rawData => {
      const dataChunk: ICoffee[] = this.model.getDataChunk(rawData, 0, 6);
      this.view.renderApp();
      this.view.renderProducts(dataChunk);
    });
  }

  public onChanged(data: ICoffee[]): void {
    this.view.products.displayCoffee(data);
  }

  public handleNextPage(currentPage: number, productsPerPage: number): void {
    this.model.nextPage(currentPage, productsPerPage);
  }
  
}

