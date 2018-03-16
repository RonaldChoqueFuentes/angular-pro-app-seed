import { Component } from '@angular/core';
import { MealsService, Meal } from '../../../shared/services/meals/meals.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from 'store';

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    template: `
        <div>
            {{melas$ | async | json}}
        </div>
    `
})
export class MealsComponent {

    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(
        private store:Store,
        private mealsService:MealsService
    ) {}

    ngOnInit() {
       this.meals$ = this.store.select<Meal[]>('meals');
       this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}