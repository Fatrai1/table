import { Address } from "./address";

export class Customer {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    zip: Address["zip"] = 0;
    country: Address["country"] = '';
    city: Address["city"] = '';
    street: Address["street"] = '';
    email: string = '';
    active: boolean = true;
}
