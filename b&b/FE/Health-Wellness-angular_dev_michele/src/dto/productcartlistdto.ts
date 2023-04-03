import {CartDTO} from './cartdto';
import {ProductDTO} from './productdto';

export class ProductCartListDTO{

    id: number;

    createdAt: Date;

    updatedAt: Date;

    qty: number;

    cart: CartDTO;

    product: ProductDTO;
}
