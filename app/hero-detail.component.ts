import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location}                    from '@angular/common';

import { HeroService }                from './hero.service';
import { Hero }                       from './hero';

import 'rxjs/add/operator/switchMap';


@Component({
	moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'templates/hero-detail.component.html',
  styleUrls: [ 'templates/hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
  
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
  save():void{
    this.HeroService.update(this.hero)
    .then(() => this.goBack());
  }
}
