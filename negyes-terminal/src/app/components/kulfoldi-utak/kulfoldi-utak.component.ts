import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-kulfoldi-utak',
  templateUrl: './kulfoldi-utak.component.html',
  styleUrls: ['./kulfoldi-utak.component.scss']
})
export class KulfoldiUtakComponent implements OnInit {

  public travels: Travel[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravels().subscribe({
      next: data => {
        const belfoldArray = data.filter(travel => travel.travel_type === "kulfold")
        this.travels = belfoldArray
      }
    })
  }

}
