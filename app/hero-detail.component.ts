import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location}                    from '@angular/common';

import { HeroService }                from './hero.service';
import { Hero }                       from './hero';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
        <button (click)="goBack()">Back</button>
    </div>
  `
})

export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;
  constructor(
    private HeroService: HeroService,
    private Route: ActivatedRoute,
    private location: Location
    ) {}
  ngOnInit(): void {
    this.Route.params
    .switchMap((params: Params) => this.HeroService.getHero(+params['id']))
    .subscribe(hero=> this.hero = hero);
  }
  goBack(): void{
    this.location.back();
  }

}
