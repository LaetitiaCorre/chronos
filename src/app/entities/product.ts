export class Product {

  constructor(
    public image:string,
    public title:string,
    public preDescription:string,
    public price:number,
    public description:string,
    public id?:number){}

  button(){
    console.log('add to cart');
  }
}
