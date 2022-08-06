import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Offer } from '../models/offer';
import { SelfCareService } from '../selfcare-service.service';

@Component({
	selector: 'app-offers',
	templateUrl: './offers.component.html',
	//   styleUrls: ['./offers.component.sass']
	styleUrls: ['../_index.sass']

})
export class OffersComponent implements OnInit {
	constructor(private service: SelfCareService, private router: Router) { }

	offers$: Observable<Offer[]> = of([]);
	displayedColumns: string[] = ['id', 'name', 'contractStartDate', 'contractEndDate'];

	ngOnInit(): void {
		this.offers$ = this.service.offers().pipe(
			map(offers => offers.offers)
		);
	}

	offerClicked(offer: Offer) {
		this.router.navigate(['./subscribtions/', offer.id]);
	}
}