export interface ICoffee {
  id: number;
  name: string;
  intensity: number;
  roasting: string;
  aromatic_notes: Array<string>;
  description: string;
  net_quantity: string;
  pack_size: string;
  composition: Array<string>;
  origin: Array<string>;
  processing: string;
  image: string;
}
