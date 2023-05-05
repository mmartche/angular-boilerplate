import { Router, ActivatedRoute } from '@angular/router';
import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  formEdit!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  // formEdit = new FormGroup({
  //   id: new FormControl()
  // });

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
    this.formEdit = this.formBuilder.group({
      id: [thought.id],
      description: [thought.description, Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      author: [thought.author, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      case: [thought.case],
      favorite: [thought.favorite]
    })
  })
}

editThought() {
  this.service.edit(this.formEdit.value).subscribe(() => {
    this.router.navigate(['/listThought'])
  })
}

cancel() {
  this.router.navigate(['/listThought'])
}

enableButton(): string {
  if (this.formEdit.valid) {
    return "button"
  }
  else return "button__disable"
}
}
