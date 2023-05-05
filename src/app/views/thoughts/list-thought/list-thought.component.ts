import { ThoughtService } from './../thought.service';
import { Component, Injectable, OnInit, forwardRef } from '@angular/core';
import { Thought } from '../thought';
import { Router } from '@angular/router';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ListThoughtComponent), multi: true } ]
})

export class ListThoughtComponent implements OnInit {

  listThoughts: Thought[] = [];
  currentPage: number = 1;
  hasMoreThoughts: boolean = true;
  filter: string = ''
  favorites: boolean = false;
  listFavorites: Thought[] = []
  titulo: string = 'My Mural'

  search = new FormControl();

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    // this.service.list(this.currentPage, this.filter, this.favorites).subscribe((listThoughts) => {
    //   this.listThoughts = listThoughts
    // })
    this.searchThoughts();
  }

  loadMoreThoughts() {
    this.service.list(++this.currentPage, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.hasMoreThoughts = false
        }
      })
  }

  searchThoughts() {
    this.hasMoreThoughts = true
    this.currentPage = 1;
    this.service.list(this.currentPage, this.filter, this.favorites)
      .subscribe(listThoughts => {
        this.listThoughts = listThoughts
      })
  }

  reloadComponente() {
    this.favorites = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  myFavorites() {
    this.titulo = 'My Favorites'
    this.favorites = true
    this.hasMoreThoughts = true
    this.currentPage = 1
    this.service.list(this.currentPage, this.filter, this.favorites)
      .subscribe(listThoughtsFavorites => {
        this.listThoughts = listThoughtsFavorites
        this.listFavorites = listThoughtsFavorites
      })
  }

}
