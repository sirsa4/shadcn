export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type Geo = {
  lat: string;
  lng: string;
};
export type Adress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Adress;
  company: Company;
};

export type TodoType = {
  id: string;
  title: string;
  text: string;
  complete: boolean;
  createdAt: string;
  updateAt: string;
};
