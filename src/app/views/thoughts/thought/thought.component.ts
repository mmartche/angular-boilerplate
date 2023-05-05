import { Thought } from './../thought';
import { Component, Input, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    description: 'I love Angular',
    author: 'Nay',
    case: 'case3',
    favorite: false
  }

  @Input() listFavorites: Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if(this.thought.description.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }

  changeIconFavorite(): string {
    if(this.thought.favorite == false) {
      return 'inactive'
    }
    return 'active'
  }

  updateFavorites() {
    this.service.changeFavorite(this.thought).subscribe(() => {
      this.listFavorites.splice(this.listFavorites.indexOf(this.thought), 1)
    });

  }

}
