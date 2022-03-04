import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent implements OnInit, OnDestroy {

  id: number = 0;
  getter: Subscription = new Subscription();
  travel: Travel = {
    travel_type: '',
    destination: '',
    description: '',
    date: '',
    long: 0,
    price: 0,
    salesPrice: 0,
    stock: 0,
    mainPage: false,
    active: true,
    image: ''
  };

  travelForm: FormGroup = new FormGroup({
    travel_type: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    long: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    salesPrice: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    mainPage: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  })

  constructor(
    private travelService: TravelService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    if (this.id != 0) {
      this.getter = this.travelService.getTravel(this.id).subscribe(
        data => {
          this.travelForm.get('travel_type')?.setValue(data.travel_type)
          this.travelForm.get('destination')?.setValue(data.destination)
          this.travelForm.get('description')?.setValue(data.description)
          this.travelForm.get('date')?.setValue(data.date)
          this.travelForm.get('long')?.setValue(data.long)
          this.travelForm.get('price')?.setValue(data.price)
          this.travelForm.get('salesPrice')?.setValue(data.salesPrice)
          this.travelForm.get('stock')?.setValue(data.stock)
          this.travelForm.get('mainPage')?.setValue(data.mainPage)
          this.travelForm.get('active')?.setValue(data.active)
          this.travelForm.get('image')?.setValue(data.image)
        }
      )
    } else {
      this.travelForm.get('travel_type')?.setValue(this.travel.travel_type)
      this.travelForm.get('destination')?.setValue(this.travel.destination)
      this.travelForm.get('description')?.setValue(this.travel.description)
      this.travelForm.get('date')?.setValue(this.travel.date)
      this.travelForm.get('long')?.setValue(this.travel.long)
      this.travelForm.get('price')?.setValue(this.travel.price)
      this.travelForm.get('salesPrice')?.setValue(this.travel.salesPrice)
      this.travelForm.get('stock')?.setValue(this.travel.stock)
      this.travelForm.get('mainPage')?.setValue(this.travel.mainPage)
      this.travelForm.get('active')?.setValue(this.travel.active)
      this.travelForm.get('image')?.setValue(this.travel.image)
    }
  }

  onSubmit(travel: Travel) {
    if (this.id != 0) { this.travel.id = this.id }
    this.travel.travel_type = this.travelForm.value['travel_type']
    this.travel.destination = this.travelForm.value['destination']
    this.travel.description = this.travelForm.value['description']
    this.travel.date = this.travelForm.value['date']
    this.travel.long = this.travelForm.value['long']
    this.travel.price = this.travelForm.value['price']
    this.travel.salesPrice = this.travelForm.value['salesPrice']
    this.travel.stock = this.travelForm.value['stock']
    this.travel.mainPage = this.travelForm.value['mainPage']
    this.travel.active = this.travelForm.value['active']
    this.travel.image = this.travelForm.value['image']

    if (this.id != 0) {
      this.travelService.updateTravel(travel).subscribe(
        () => { this.router.navigate(['/admin']) }
      )
    } else {
      this.travelService.createTravel(travel).subscribe(
        () => { this.router.navigate(['/admin']) }
      )
    }
  }

  ngOnDestroy(): void {
    this.getter.unsubscribe()
  }

}