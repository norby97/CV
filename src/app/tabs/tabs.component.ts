import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  selectedIndex = 1;

  styles = ["alert-info","alert-danger","alert-warning","alert-primary","alert-secondary","alert-light","alert-dark","alert-success"];
  bgstyles = ["bg-info","bg-danger","bg-warning","bg-primary","bg-secondary","bg-dark","bg-success"];

  works = [
    {id: 1, name:'Internship (4 months)',title:"Consultant/developer", description:"A MES web-application developing with PHP and jQuery.", footer:"Premium World, Satu Mare", style:this.styles[Math.floor(Math.random() * this.styles.length)]},
    {id: 2, name:'Group Project (1 semester)', title:"Frontend developer", description:"Laravel web-application to calculate WLTP values.", footer:"Babes-Bolyai University, Cluj Napoca", style:this.styles[Math.floor(Math.random() * this.styles.length)]},
    {id: 3, name:'Work(5 months)', title:"Full Stack Developer", description:"A MES web-application developing with PHP and jQuery.", footer:"Premium World, Satu Mare", style:this.styles[Math.floor(Math.random() * this.styles.length)]}
  ]

  personal = [
      {id: 1, name:'Name: Simon Norbert'},
      {id: 2, name:'Status: Entry-Level Computer Programmer '}
  ];

  abilities = [
      {id: 1, desc:'Known as a self-starter', style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 2, desc:'Team player and multitasker', style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 3, desc:'Strive to consistently exceed expectations',style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 4, desc:'Grasp of multiple technologies and attention to details',style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 5, desc:'Logical thinking',style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 6, desc:'Awareness of my own limitations',style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 7, desc:'Flexible and passionate about programming',style:this.styles[Math.floor(Math.random() * this.styles.length)]},
      {id: 8, desc:'Patient and creative',style:this.styles[Math.floor(Math.random() * this.styles.length)]}
  ];

  languages = [
      {id: 1, name:'C/C++', exp:'2 years experience'},
      {id: 2, name:'Javascript', exp:'2 years experience'},
      {id: 3, name:'Java', exp:'2 years experience'},
      {id: 5, name:'Python', exp:'few months experience'},
      {id: 5, name:'Matlab', exp:'few months experience'}
  ];

  systems = [
      {id: 1, name:'Windows', exp:'way too many years'},
      {id: 2, name:'Linux/Unix', exp:'3 years experience'},
      {id: 3, name:'Mac OS X', exp:'few months experience'},
      {id: 4, name:'SQL Server', exp:'2 years experience'},
      {id: 5, name:'MongoDB', exp:'1 year experience'}
  ]

  ides = [
      {id: 1, name:'Maven', exp:'few months experience'},
      {id: 2, name:'Spring Boot', exp:'few months experience'},
      {id: 3, name:'Angular', exp:'1 year experience'},
      {id: 4, name:'jQuery', exp:'8-9 months experience'},
      {id: 5, name:'Laravel', exp:'few months experience'}
  ]

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  setSelected(id: number) {
    this.selectedIndex = id;
    for(var i=0; i<5; i++)
      this.abilities[i].style = this.styles[Math.floor(Math.random() * this.styles.length)];
    for(var i=0; i<3; i++)
      this.works[i].style = this.bgstyles[Math.floor(Math.random() * this.bgstyles.length)];
  }

}
