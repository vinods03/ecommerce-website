import { Product } from "./product"

export class Purchase {
    first_name: string = ''
    last_name: string = ''
    email: string = ''
    street: string = ''
    city: string = ''
    state: string = ''
    country: string = ''
    zip_code: string = ''
    cart_items: Product[] = []
    total_price: number = 0
    total_quantity: number = 0
}
