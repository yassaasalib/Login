import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer';
import { SelfCareService } from '../selfcare-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {

  constructor(private service: SelfCareService) { }

  offers: Offer[] = [];

  ngOnInit(): void {
	this.service.offers().subscribe((offersResponse:Offer[]) => {
		this.offers = offersResponse;
	});
  }

}
