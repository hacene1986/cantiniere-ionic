import { User } from './user';
import { Menu } from './menu';
import { Quantity } from './quantity';
export class Order {
    id?: number;
    status?: number;
    creationDate?: Date;
    menuId: number;
    user: number;
    quantities: Quantity[];
    constructor(
        id: number,
        menuId: number,
        user: number,
        status: number,
        creationDate: Date,
        quantities: Quantity[]
    ) {
        this.id = id;
        this.status = status;
        this.creationDate = creationDate;
        this.menuId = menuId;
        this.user = user;
        this.quantities = quantities;
    }

}
