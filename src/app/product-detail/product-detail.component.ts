import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product,ProductService,Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  private newRating:number = 5;

  private newComment:string = '';

  private isCommentHidden:boolean = true;

  constructor(
  	private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
  	let productId:number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId)
    console.log(this.comments)
  }
  addComment(){
    let comment = new Comment(0,this.product.id,new Date().toISOString(),'李四',this.newRating,this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum,comments) => sum + comments.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = '';
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
