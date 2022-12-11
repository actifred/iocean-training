export interface Person {
  id: string;
  prefix: string;
  firstname: string;
  lastname: string;
  username: string;
  gender: string;
  email: string;
  avatar: string;
  position: string;
  birthdate: Date;
  phone: string;
  cell: string;
  location: {
    street: string;
    city: string;
    country: string;
  };
  born: string;
}
