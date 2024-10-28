export type productCard = {
  id: number;
  url: string;
  image: string;
  imageHover: string;
  title: string;
  price: string;
  desc: string;
  cart: boolean;
};
export type categoryCard = {
  url: string;
  image: string;
  name: string;
};
export type FilterTab = {
  type: "text" | "select";
  name?: string;
  placeholder?: string;
  options?: Array<string>;
  cStyle?: string;
};
