import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Extraimage } from 'src/app/models/extraimage';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {

  id: number = 0;
  travel: Travel = {
    travel_type: '',
    destination: '',
    description: '',
    date: '',
    mainPage: false,
    active: false,
    image: ''
  };
  extraimages: Extraimage[] = [];
  src: string = '';
  sourcetype: string = '';

  constructor(
    private travelService: TravelService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params["id"];
    this.travelService.getTravel(this.id).subscribe(data => {
      this.travel = data;
      if (this.travel.travel_type == "belfold") {
        this.sourcetype = 'img-belfoldi-turizmus';
      } else if (this.travel.travel_type == "kulfold") {
        this.sourcetype = 'img-kulfoldi-turizmus';
      } else {
        this.sourcetype = 'img-fovarosi-turizmus';
      }
      // this.src = `../../../assets/img/${this.travel.travel_type == "belfold" ? 'img-belfoldi-turizmus' : 'img-kulfoldi-turizmus'}/${this.travel?.image}.jpg`;
      this.src = `../../../assets/img/${this.sourcetype}/${this.travel?.image}.jpg`;

      this.travelService.getExtraImages().subscribe(data => {
        this.extraimages = data.filter(item => item.source.includes(this.travel.image));
        console.log(this.extraimages)
      })
    })
  }

  mouseover(source: string) {
    if (source == this.travel.image) {
      if (this.travel.travel_type == "belfold") {
        this.sourcetype = 'img-belfoldi-turizmus';
      } else if (this.travel.travel_type == "kulfold") {
        this.sourcetype = 'img-kulfoldi-turizmus';
      } else {
        this.sourcetype = 'img-fovarosi-turizmus';
      }
      // this.src = `../../../assets/img/${this.travel.travel_type == "belfold" ? 'img-belfoldi-turizmus' : 'img-kulfoldi-turizmus'}/${source}.jpg`;
      this.src = `../../../assets/img/${this.sourcetype}/${source}.jpg`;
    } else {
      this.src = `../../../assets/img/extra-kepek/${source}.jpg`
    }
  }

  public navigateBack() {
    if (this.travel.travel_type == "belfold") {
      this.router.navigate(['belfoldi']);
    } else if (this.travel.travel_type == "kulfold") {
      this.router.navigate(['kulfoldi']);
    } else if (this.travel.travel_type == "fovarosi") {
      this.router.navigate(['fovarosi']);
    }
  }

}
