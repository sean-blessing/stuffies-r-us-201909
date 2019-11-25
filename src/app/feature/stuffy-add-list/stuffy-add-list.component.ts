import { Component, OnInit } from '@angular/core';
import { Stuffy } from 'src/app/model/stuffy.class';

@Component({
  selector: 'app-stuffy-add-list',
  templateUrl: './stuffy-add-list.component.html',
  styleUrls: ['./stuffy-add-list.component.css']
})
export class StuffyAddListComponent implements OnInit {
  stuffies: Stuffy[] = [];
  stuffy: Stuffy = new Stuffy();
  // id: number = 0;
  // type: string = "";
  // color: string = "";
  // size: string = "";
  // limbs: number = 0;
  title: string = "Stuffies R Us";

  constructor() { }

  ngOnInit() {
    this.stuffy = new Stuffy();
  }

  addStuffy(): void {
    // create instance of stuffy
    // let stuffy: Stuffy = new Stuffy(this.id, this.type, this.color, this.size,
    //                             this.limbs);
    // add stuffy to array 
    this.stuffies.push(this.stuffy);
    // clear input boxes
    // this.id = 0;
    // this.type = "";
    // this.color = "";
    // this.size = "";
    // this.limbs = 0;
    this.stuffy = new Stuffy();
  }

}
