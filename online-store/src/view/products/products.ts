import './products.css';
import { ICoffee } from "../../types";


export class ProductsView {

  //private coffee: ICoffee[];
  public paginationWrapper: HTMLDivElement;
  public pagination: HTMLDivElement;
  public paginationContainer: HTMLDivElement;
  public productContainer: HTMLDivElement;
  public navigationContainer: HTMLDivElement;
  public prevButton: HTMLButtonElement;
  public nextButton: HTMLButtonElement;
  public currentPage: HTMLDivElement;
  private currentPageNumber: number;
  private pageCounts: number;
  private productsPerPage: number;

  constructor() {
    //this.coffee = coffee;
    this.paginationWrapper = document.createElement('div');
    this.pagination = document.createElement('div');
    this.paginationContainer = document.createElement('div');
    this.productContainer = document.createElement('div'); 
    this.navigationContainer = document.createElement('div');
    this.prevButton = document.createElement('button');
    this.nextButton = document.createElement('button');
    this.currentPage = document.createElement('div');
    this.currentPageNumber = 1;
    this.pageCounts = 6;
    this.productsPerPage = 6;
  }

  public getRenderedPage(): HTMLDivElement {
    this.paginationWrapper.className = 'pagination__wrapper';
    this.pagination.className = 'pagination';
    this.paginationContainer.className = 'pagination__container';
    
    this.navigationContainer.className = 'product-navigation';
    this.prevButton.className = 'product-button';
    this.nextButton.className = 'product-button';
    this.currentPage.className = 'page-counter';

    this.productContainer.className = 'pagination__product'; 

    this.prevButton.classList.add('prev-page');
    this.nextButton.classList.add('next-page');
    this.currentPage.classList.add('current-page');
    this.productContainer.classList.add('product__container');

    this.currentPage.innerHTML = this.currentPageNumber.toString();
    this.prevButton.innerHTML = 'Prev';
    this.nextButton.innerHTML = 'Next';

    this.prevButton.disabled = true;

    this.paginationContainer.append(this.productContainer);
    this.pagination.append(this.paginationContainer);
    this.paginationWrapper.append(this.pagination);
    this.navigationContainer.append(this.prevButton, this.currentPage, this.nextButton);
    this.paginationWrapper.append(this.navigationContainer);

    return this.paginationWrapper;
  }

  public displayCoffee(data: ICoffee[]): HTMLDivElement {
    while(this.productContainer.firstChild){
      this.productContainer.removeChild(this.productContainer.firstChild);
    }
    
    data.forEach(item => {
      const productItem: HTMLDivElement = document.createElement('div');
      const productName: HTMLParagraphElement = document.createElement('p');
      const productImage: HTMLImageElement = new Image();
      const productIntensity: HTMLParagraphElement = document.createElement('p');
      const productRoasting: HTMLParagraphElement = document.createElement('p');

      productItem.className = 'product__item';
      productName.className = 'product__name';
      productImage.className = 'product__img';
      productIntensity.className = 'product__intensity';
      productRoasting.className = 'product__roasting';

      productImage.src = `https://raw.githubusercontent.com/irroar/coffee-data/main/${item.image}`;

      productName.innerHTML = item.name;
      productIntensity.innerHTML = 'Intensity: ' + item.intensity.toString();
      productRoasting.innerHTML = 'Roasting: ' + item.roasting;

      productItem.append(productImage, productName, productIntensity, productRoasting);
      this.productContainer.append(productItem);
    });

    return this.productContainer;
  }

  public bindNextPage(handler: CallableFunction): void {
    this.nextButton.addEventListener('click', () => {
      this.currentPageNumber += 1;
      if (this.currentPageNumber === this.pageCounts) {
        handler(this.currentPageNumber, this.productsPerPage);
        this.currentPage.innerHTML = this.currentPageNumber.toString();
        this.nextButton.disabled = true;
      } else {
        handler(this.currentPageNumber, this.productsPerPage);
        this.currentPage.innerHTML = this.currentPageNumber.toString();
      }
      
    });
  }
}