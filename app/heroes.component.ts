import { Component } 			from '@angular/core';
import { HeroDetailComponent } 	from './hero-detail.component';
import { Hero }					from './hero';
import { HeroService } 			from './hero.service';
import { OnInit } 				from '@angular/core';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'templates/heroes.component.html',
  styleUrls: ['templates/heroes.component.css']
})

export class HeroesComponent implements OnInit {
	title = 'La pagina de los heroes';
	heroes: Hero[];
	selectedHero: Hero;


    constructor(
    private router: Router,
    private heroService: HeroService) { }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

	onSelect(hero: Hero): void {
    	this.selectedHero = hero;
  	};

	getHeroes(): void {
		this.heroService.getHeroes().then((heroes:Hero[]) => this.heroes = heroes);
  	};

  	ngOnInit(): void {
	    this.getHeroes();
  	}



}
