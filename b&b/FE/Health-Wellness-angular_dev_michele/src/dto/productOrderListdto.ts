import { UserDTO } from './userdto';
import {Usertype} from './usertype';
import { OrderDTO} from './orderdto';
import { CenterDTO } from './centerdto';
import { ProductDTO } from './productdto';
/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class ProductOrderListDTO {

   id: number;

   name : string ;

   description:string;

   price: number;

   discount: number;

   startDiscountDate : Date;
   
   endDiscountDate : Date;

   deleted: boolean;

   createdAt : Date;

   updateAt : Date;

   qty: number;

   pricePurchase : number;

   imagePath : string;

   center : CenterDTO;

   order : OrderDTO;

   product : ProductDTO;
   
   // private Long id;
   // private String name;
   // private String description;
   // private float price;
   // private float discount;
   // private LocalDate startDiscountDate;
   // private LocalDate endDiscountDate;

   // private boolean deleted;

   // private LocalDate createdAt;

   // private LocalDate updatedAt;
   // private int qty;

   // private float pricePurchase;

   // private String imagePath;

   // private CenterDTO center;
   // private OrderDTO order;
   // private ProductDTO product;

}

