import { ICoffee } from "types";
import { ProductsView } from "./products/products";

export class AppView { 
  public products: ProductsView;
  public body: HTMLElement;
  public wrapper: HTMLDivElement;
  public header: HTMLHeadElement;
  public headerContainer: HTMLDivElement;
  public heading: HTMLHeadingElement;
  public basket: HTMLDivElement;
  public main: HTMLElement;
  public renderedProducts: HTMLDivElement;

  constructor() {
    this.products = new ProductsView();
    this.body = document.body;
    this.wrapper = document.createElement('div');
    this.header = document.createElement('header');
    this.headerContainer = document.createElement('div');
    this.heading = document.createElement('h1');
    this.basket = document.createElement('div');
    this.main = document.createElement('main');
    this.renderedProducts = this.products.getRenderedPage();
  }

  public renderApp(): void {
    this.wrapper.className = 'wrapper';
    this.header.className = 'header';
    this.headerContainer.className = 'header__container';
    this.basket.className = 'header__basket';
    this.main.className = 'main';
    this.main.classList.add('_container-main');
    this.headerContainer.classList.add('_container');
    
    this.heading.innerHTML = "Online Coffee Store";
    this.basket.innerHTML = 'Basket';

    this.header.append(this.headerContainer);  
    this.headerContainer.append(this.heading);
    this.headerContainer.append(this.basket);
    this.wrapper.append(this.header);
    this.main.append(this.renderedProducts);
    this.wrapper.append(this.main);
    this.body.append(this.wrapper);
  }

  public renderProducts(data: ICoffee[]): void {
    while(this.products.paginationContainer.firstChild) {
      this.products.paginationContainer.removeChild(this.products.paginationContainer.firstChild);
    }
    const con: HTMLDivElement = this.products.displayCoffee(data);
    this.products.paginationContainer.append(con);
  }
}