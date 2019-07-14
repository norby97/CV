import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  selectedIndex = 1;

  personal = [
      {id: 1, name:'Name: Simon Norbert'},
      {id: 2, name:'Status: Entry-Level Computer Programmer '},
   
  ];

  constructor() {
  }

  ngOnInit() {
  }

    setSelected(id: number) {
      this.selectedIndex = id;
    }


}
