import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating:number = 0;

  @Input()
  private datavalue:string;

  private stars: boolean[];

  @Input()
  private readonly:boolean = true;

  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();
  //there use rating + Change ,the child componsnt can use [(rating)] to emit things;
  constructor() { }

  ngOnInit() {
  	 this.stars = [];
  	 for(let i = 1;i<=5; i++){
  	 	this.stars.push(i>this.rating);
  	 }
  }
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating)
    }
  }

}
