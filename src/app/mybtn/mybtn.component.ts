import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybtn',
  templateUrl: './mybtn.component.html',
  styleUrls: ['./mybtn.component.scss']
})
export class MybtnComponent implements OnInit {

  constructor() { }


  public expandedBtn = false;

  ngOnInit() {
  }

}
