import { UserDTO } from "./userdto";
import { ProductCartListDTO } from './productcartlistdto';

export class CartDTO{

    id: number;

    createdAt: Date;

    updatedAt: Date;

    user: UserDTO;

    productsCartList: Array<ProductCartListDTO>

    constructor(id: number, user: UserDTO) {
        this.id= id;
        this.user = user;
    }
}