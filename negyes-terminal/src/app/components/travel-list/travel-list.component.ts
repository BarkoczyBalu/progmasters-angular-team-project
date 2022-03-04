import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  public travels: Travel[] = [];
  travelProperties: string[] = ['travel_type', 'destination', 'description', 'date'];
  // search: string = '';
  // sortKey: string = '';
  filterKey: string = 'destination';
  phrase: string = "";


  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravels().subscribe({
      next: (travels) => this.travels = travels,
      error: (e) => console.log(e),
      complete: () => { }
    })
  }


  deleteTravel(id: number | undefined): void {
    if (confirm('Biztosan szeretnéd törölni?')) {
      this.travelService.deleteTravel(id).subscribe({
        next: () => { },
        error: (e) => console.log(e),
        complete: () => {
          this.travelService.getTravels().subscribe((data) => this.travels = data)
        }
      })
    }
  }
}
