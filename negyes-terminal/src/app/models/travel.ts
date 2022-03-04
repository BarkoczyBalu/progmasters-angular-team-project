export interface Travel {
    id?: number,
    travel_type: string,
    destination: string,
    description: string,
    date: string,
    long?: number,
    price?: number,
    salesPrice?: number,
    stock?: number,
    mainPage: boolean,
    active: boolean,
    image: string
}