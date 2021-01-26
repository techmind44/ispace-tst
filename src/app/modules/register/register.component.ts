import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { MatStepper } from '@angular/material/stepper';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };
  // submit(f){
  //   f.valid
  // }
  constructor(private _formBuilder: FormBuilder,private _register: RegisterService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      orgname: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      otp: ['', Validators.required]
    });
  }

  getOtp(stepper: MatStepper){
    if(this.firstFormGroup.valid){
    let formData = this.firstFormGroup.value;
    this._register.otp(formData).subscribe((data)=>{
      console.log(data);
      if(data.Error==='No'){
        stepper.next();
      }
    });
    }
  }

  goBack(stepper: MatStepper){
    stepper.previous();
  }

  validateOTP(stepper: MatStepper){
    if(this.secondFormGroup.valid){
      let formData = this.firstFormGroup.value;
      let formdata2 = this.secondFormGroup.value;
      formdata2.phone = formData.phone;
      this._register.validateOTP(formdata2).subscribe((res)=>{
        if(res.Error==='No'){
          this._register.register(formdata2.otp,formData).subscribe((res)=>{
            if(res.Error==='No'){
              stepper.next();
            }
          });
        }
      });
    }

  }
}
