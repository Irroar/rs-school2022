import { ICoffee } from "../types";
import { ProductsView } from "./products/products";

export class AppView { 
  private products: ProductsView;

  constructor(products: ICoffee[]) {
    this.products = new ProductsView(products);
  }

  public renderApp(): void {
    const body: HTMLElement = document.body;
    const wrapper: HTMLDivElement = document.createElement('div');
    const header: HTMLHeadElement = document.createElement('header');
    const headerContainer: HTMLDivElement = document.createElement('div');
    const heading: HTMLHeadingElement = document.createElement('h1');
    const basket: HTMLDivElement = document.createElement('div');
    const main: HTMLElement = document.createElement('main');
    const renderedProducts: HTMLDivElement = this.products.getRenderedPage();

    wrapper.className = 'wrapper';
    header.className = 'header';
    headerContainer.className = 'header__container';
    basket.className = 'header__basket';
    main.className = 'main';
    main.classList.add('_container-main');
    headerContainer.classList.add('_container');
    
    heading.innerHTML = "Online Coffee Store";
    basket.innerHTML = 'Basket';

    header.append(headerContainer);  
    headerContainer.append(heading);
    headerContainer.append(basket);
    wrapper.append(header);
    main.append(renderedProducts);
    wrapper.append(main);
    body.append(wrapper);
  }
}