import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-fovarosi-turak',
  templateUrl: './fovarosi-turak.component.html',
  styleUrls: ['./fovarosi-turak.component.scss']
})
export class FovarosiTurakComponent implements OnInit {

  public travels: Travel[] = [];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravels().subscribe({
      next: data => {
        const belfoldArray = data.filter(travel => travel.travel_type === "fovarosi")
        this.travels = belfoldArray
      }
    })
  }

}
