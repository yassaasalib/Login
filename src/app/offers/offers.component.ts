import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Offer } from '../models/offer';
import { SelfCareService } from '../selfcare-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private service: SelfCareService) { }

  offers$: Observable<Offer[]> = of([]);

  ngOnInit(): void {
	this.offers$ = this.service.offers().pipe(
		map(offers => offers.offers)
	)
  }
}