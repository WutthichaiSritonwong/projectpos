export class Products {
    public product_id: string;
    public product_name: string;
    public product_image: string;
    public brand_id: number;
    public categories_id: number;
    public quantity: number;
    public uID: number;
    public rate: number;
    public rate2: number;
    public active: number;
    public status: number;


    constructor(
        product_id: string, 
        product_name: string, 
        product_image: string, 
        brand_id: number,
        categories_id:number,
        quantity: number,
        uID: number,
        rate: number,
        rate2: number,
        active: number,
        status: number
        ) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_image = product_image;
        this.brand_id = brand_id;
        this.categories_id = categories_id;
        this.quantity = quantity;
        this.uID = uID;
        this.rate = rate;
        this.rate2 = rate2;
        this.active = active;
        this.status = status;
    }
}