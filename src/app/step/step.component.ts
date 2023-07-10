import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {

  steps: MenuItem[] = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' }
  ];
  currentStep = 1;

  // stepOneForm: FormGroup;
  // stepTwoForm: FormGroup;
  // stepThreeForm: FormGroup;
  // stepFourForm: FormGroup;

  constructor(private messageService: MessageService) {

  }

  stepOneForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),

  })

  
  stepTwoForm: FormGroup = new FormGroup({
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  })

  stepThreeForm:FormGroup = new FormGroup({
    university:new FormControl('',Validators.required),
    degree:new FormControl('',Validators.required)
  })

  // stepFourForm:FormGroup = new FormGroup({
    
  // })

  //   this.stepThreeForm = this.formBuilder.group({
  //     university: ['', Validators.required],
  //     degree: ['', Validators.required]
  //   });

    stepFourForm:FormGroup = new FormGroup ({
      // group({});
    
    })


  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
      // this.currentStep
    }
    //  console.log(this.currentStep);
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      // this.stepFourForm.value
      console.log(this.stepFourForm.value)
    }
  }


}
