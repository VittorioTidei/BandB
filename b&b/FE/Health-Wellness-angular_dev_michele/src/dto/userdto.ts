import {Usertype} from './usertype';
import {CityDTO} from "./citydto";
import {CenterDTO} from "./centerdto";
import {OrderDTO} from "./orderdto";
import { CartDTO } from './cartdto';

/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class UserDTO {

   id: number;

   username: string;

   password: string;

   usertype: Usertype;

   firstname: string;

   lastname: string;

   address: string;

   zipcode: string;

   email: string;

   phone: string;

   birthdayDate: Date;

   avatar: string;

   city: CityDTO;

   centers: Array<CenterDTO>;

   orders: Array<OrderDTO>;

   carts: Array<CartDTO>;

   admin: false;

   superadmin: false;

   constructor(username: string, password: string, usertype: Usertype, firstname: string, lastname: string, address: string, zipcode: string, email: string, phone: string, birthdayDate: Date, city: CityDTO) {
      this.username = username;
      this.password = password;
      this.usertype = usertype;
      this.firstname = firstname;
      this.lastname = lastname;
      this.address = address;
      this.zipcode = zipcode;
      this.email = email;
      this.phone = phone;
      this.birthdayDate = birthdayDate;
      this.city = city;
   }
}

