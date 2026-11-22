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

export type PopUp = {
  id: string;
  name: string;
  address: string;
  date: string;
  start_time: string;
  end_time: string;
};
