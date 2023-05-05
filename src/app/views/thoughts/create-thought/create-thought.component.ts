import { Router } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      case: ['case1'],
      favorite: [false]
    })
  }

  createThought() {
    if(this.form.valid){
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listThought'])
  }

  enableButton(): string {
    if(this.form.valid) {
      return 'button'
    } else {
      return 'button__disable'
    }
  }

}
