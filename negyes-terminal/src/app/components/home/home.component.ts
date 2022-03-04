import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  belfoldiMainPageTravels: Travel[] | undefined
  kulfoldiMainPageTravels: Travel[] | undefined
  fovarosiMainPageTravels: Travel[] | undefined

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(data => {
      this.belfoldiMainPageTravels = data.filter(item => item.travel_type == "belfold" && item.mainPage == true)
      this.fovarosiMainPageTravels = data.filter(item => item.travel_type == "fovarosi" && item.mainPage == true)
    })

    this.travelService.getTravels().subscribe(data => {
      this.kulfoldiMainPageTravels = data.filter(item => item.travel_type == "kulfold" && item.mainPage == true)
    })

  }
}
