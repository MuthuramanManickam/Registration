import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImportsNotUsedAsValues } from 'typescript';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  implements OnInit{

  // myForm:FormGroup= new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  // });
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  myGroup:FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.valid) {
      const formValue = this.myForm.value;
      const formdet = {
        name :formValue.name,
        email:formValue.email
      }
    }
    

    // console.log(this.myForm.value);

  }


}
