import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: any;

  constructor() {
    this.project = {};
  }

  ngOnInit() {
  }

}
