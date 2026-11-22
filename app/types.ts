export type Flavour = {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url?: string;
  active: boolean;
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

export type CrumbiesNominee = {
  id: string;
  flavour_id: string;
  description: string;
  year: string;
  flavour: {
    name: string;
  };
};
