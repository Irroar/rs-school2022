import './products.css';
import { ICoffee } from "../../types";

export class ProductsView {
  private coffee: ICoffee[];
  constructor(coffee: ICoffee[]) {
    this.coffee = coffee;
  }
  public getRenderedPage(): HTMLDivElement {
    const productContainer: HTMLDivElement = document.createElement('div');
    productContainer.className = 'product__container';
    this.coffee.forEach(item => {
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
      productContainer.append(productItem);
    });
    return productContainer;
  }
}