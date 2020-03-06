import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  @Input() className: String;
  @Input() icon: String;
  
  constructor() { }

  ngOnInit() {
  }

  get absUrl() {
    return window.location.href;
  }

}