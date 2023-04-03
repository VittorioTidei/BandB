import { UserDTO } from './userdto';
import {Usertype} from './usertype';
import {ProductOrderListDTO} from './productOrderListdto';
import { CartDTO } from './cartdto';
import { PaymentTypeDTO } from './paymenttypedto';


/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class OrderDTO {

   id: number;

   totalPrice : number;

   user: UserDTO;

   cartDTO: CartDTO;

   paymentTypeDTO: PaymentTypeDTO;

   productsOrderList : ProductOrderListDTO[]; 
   
}

