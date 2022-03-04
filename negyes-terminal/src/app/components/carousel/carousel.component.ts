import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public travels: Travel[] = [];
  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravels().pipe(
      take(3)
    ).subscribe({
      next: data => {
     
        this.travels =  data;
      }
    })
  }
  
 


}
