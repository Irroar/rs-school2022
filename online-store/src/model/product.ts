import { ICoffee } from "../types";

export class Coffee {
  public data: Promise<ICoffee[]>;

  constructor() {
    this.data = this.getData();
  }

  public async getData(): Promise<ICoffee[]> {
    const url = 'https://raw.githubusercontent.com/irroar/coffee-data/main/coffee_data.json';
    const res: Response = await fetch(url);
    const data: ICoffee[] = await res.json();
    return data;
  }
}

// async function start(): Promise<void> {
//   const coffee = new Coffee();
//   const data = await coffee.getData();
//   console.log(data);
// }

// start();