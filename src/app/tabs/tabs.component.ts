import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  prev = 1;
  next = -1;

  constructor() {
  }

  ngOnInit() {
  }

  dropdown(prev, next){
      this.prev = prev;
      this.next = next;
  }

}
