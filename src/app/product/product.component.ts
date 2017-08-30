import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = '../assets/svg.png';
  constructor() { }
  ngOnInit() {
  	this.products = [
  		new Product(1,'第一个商品',1.99,1.5,'第一个商品，学习angular时创建',['电子商品','硬件设备']),
  		new Product(1,'第二个商品',2.99,2.5,'第二个商品，学习angular时创建',['图书']),
  		new Product(1,'第三个商品',3.99,3.5,'第三个商品，学习angular时创建',['硬件设备']),
  		new Product(1,'第四个商品',4.99,4.5,'第四个商品，学习angular时创建',['电子商品','硬件设备']),
  		new Product(1,'第五个商品',5.99,3.5,'第五个商品，学习angular时创建',['电子商品']),
  		new Product(1,'第六个商品',6.99,0.5,'第六个商品，学习angular时创建',['图书']),
  	]
  }

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