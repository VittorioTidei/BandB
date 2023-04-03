import { CityDTO } from './citydto';
import {UserDTO} from './userdto';

export class CenterDTO{

    user: UserDTO;

    id: number;

    name: String;

    address: String;

    zipcode: String;

    phone: String;

    email: String;

    website: String;

    imagePath: String;

    city: CityDTO;

    constructor(user_id : UserDTO, name: string, address: string, zipcode: string, phone: string, email: string, website: string, city :CityDTO){
        this.user = user_id;
        this.name = name;
        this.address = address;
        this.zipcode =zipcode;
        this.phone = phone;
        this.email =email;
        this.website = website;
        this.city= city;
    }
}