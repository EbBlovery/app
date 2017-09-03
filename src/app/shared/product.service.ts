import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[] = [
  		new Product(1,'第一个商品',1.99,1.5,'第一个商品，学习angular时创建',['电子商品','硬件设备']),
  		new Product(2,'第二个商品',2.99,2.5,'第二个商品，学习angular时创建',['图书']),
  		new Product(3,'第三个商品',3.99,3.5,'第三个商品，学习angular时创建',['硬件设备']),
  		new Product(4,'第四个商品',4.99,4.5,'第四个商品，学习angular时创建',['电子商品','硬件设备']),
  		new Product(5,'第五个商品',5.99,3.5,'第五个商品，学习angular时创建',['电子商品']),
  		new Product(6,'第六个商品',6.99,0.5,'第六个商品，学习angular时创建',['图书']),
  	];
  private comments:Comment[] = [
      new Comment(1,1,'2017-01-02 22:22:22','张三',3,'东西不错'),
      new Comment(2,1,'2017-02-03 21:22:22','李思思',3,'东西不错'),
      new Comment(3,1,'2017-03-04 22:22:22','王五',3,'东西不错'),
      new Comment(4,2,'2017-04-05 02:22:22','六七',3,'东西不错'),
      new Comment(1,2,'2017-01-02 22:22:22','张三',3,'东西不错'),
      new Comment(2,2,'2017-02-03 21:22:22','李思思',3,'东西不错'),
      new Comment(3,3,'2017-03-04 22:22:22','王五',3,'东西不错'),
      new Comment(4,4,'2017-04-05 02:22:22','六七',3,'东西不错'),
      new Comment(1,5,'2017-01-02 22:22:22','张三',3,'东西不错'),
      new Comment(2,6,'2017-02-03 21:22:22','李思思',3,'东西不错'),
      new Comment(3,4,'2017-03-04 22:22:22','王五',3,'东西不错'),
      new Comment(4,1,'2017-04-05 02:22:22','六七',3,'东西不错'),
  ];

  constructor() { }

  getAllcategocies():string[]{
    return ['电子商品','硬件设备','图书']
  }

  getProducts():Product[] {
  	return this.products;
  }
  getProduct(id:number):Product {
  	return this.products.find((product)=>product.id==id)
  }
  getCommentsForProductId(id:number):Comment[] {
  	 return this.comments.filter((comment:Comment)=>comment.productId == id);
  }
}


export class Comment {
    constructor(
       public id:number,
       public productId:number,
       public timestamp:string,
       public user:string,
       public rating:number,
       public content:string
    ){}
}

export class Product {
	constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public $ategories:Array<string>
	){}
}
