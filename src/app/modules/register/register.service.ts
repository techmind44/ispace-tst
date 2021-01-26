import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  otp(data){
    const phone = data.phone;
    return this.http.get<any>('http://live.eorbapp.com/webapp/otp?phone='+phone+'&prps=1');
  }

  validateOTP(data){
    return this.http.get<any>('http://live.eorbapp.com/webapp/validateotp?phone='+data.phone+'&otp='+data.otp);
  }

  register(otp,data){
    return this.http.post<any>('http://live.eorbapp.com/webapp/register?otp='+otp,data);
  }
}
