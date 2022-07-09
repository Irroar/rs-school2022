import { ICoffee } from "../types";

export class Coffee {
  public data: Promise<ICoffee[]>;
  public onChanged: CallableFunction;

  constructor() {
    this.data = this.getData();
    this.onChanged = () => { 
      console.log('error')
    };
  }

  public async getData(): Promise<ICoffee[]> {
    const url = 'https://raw.githubusercontent.com/irroar/coffee-data/main/coffee_data.json';
    const res: Response = await fetch(url);
    const data: ICoffee[] = await res.json();
    return data;
  }

  public getDataChunk(data: ICoffee[], start: number, end: number): ICoffee[] {
    return data.slice(start, end);
  }

  public bindChanged(callback: CallableFunction) {
    this.onChanged = callback;
  }

  public nextPage(currentPage: number, productsPerPage: number): void {
    this.data.then(rawData => {
      const start = productsPerPage * currentPage;
      const end = start + productsPerPage;
      const dataChunk: ICoffee[] = this.getDataChunk(rawData, start, end);
      this.onChanged(dataChunk);
    });
  }
}
