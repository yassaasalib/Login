import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {

  constructor(private service: LoginServiceService) { }

  ngOnInit(): void {
	this.service.offers().subscribe(offers => {
		console.log(offers);
	});
  }

}
