import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, map } from 'rxjs';
import { Subscribtion } from '../models/subscribtion';
import { SelfCareService } from '../selfcare-service.service';

@Component({
	selector: 'app-subscribtions',
	templateUrl: './subscribtions.component.html',
	styleUrls: ['./subscribtions.component.scss']
})
export class SubscribtionsComponent implements OnInit {
	constructor(private service: SelfCareService, private route: ActivatedRoute) { }
	subscribtions$: Observable<Subscribtion[]> = of([]);
	ngOnInit(): void {
		this.subscribtions$ = this.service.subscribtions(this.route.snapshot.paramMap.get('id')).pipe(
			map(subscribtions  => subscribtions.subscriptions)
		)
	}
}
