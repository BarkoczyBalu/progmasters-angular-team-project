import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-belfoldi-utak',
  templateUrl: './belfoldi-utak.component.html',
  styleUrls: ['./belfoldi-utak.component.scss']
})
export class BelfoldiUtakComponent implements OnInit {

  public travels: Travel[] = [];
  sort: string = '';

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravels().subscribe({
      next: data => {
        const belfoldArray = data.filter(travel => travel.travel_type === "belfold");
        this.travels = belfoldArray;
      },
      error: (e) => { console.log(e) },
      complete: () => { console.log('') }
    })
  }

  onSort(event: any): void {
    this.sort = event.target.value
    if (this.sort == 'up') {
      this.travels.sort((a: any, b: any) => (a.price - b.price))
    } else if (this.sort == 'down') {
      this.travels.sort((a: any, b: any) => (b.price - a.price))
    } else if (this.sort == 'abc') {
      this.travels.sort((a: any, b: any) => (a.destination.localeCompare(b.destination)))
    }
  }

}
