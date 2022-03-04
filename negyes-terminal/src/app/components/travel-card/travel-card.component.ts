import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent implements OnInit {

  @Input() travel: Travel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
