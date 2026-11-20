export type Flavour = {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url?: string;
};

export type Review = {
  id: string;
  review: string;
  order_type: string;
};
