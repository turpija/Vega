import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) { }

   getMakes() {

    var makes = this.http.get('api/makes');
    console.log(makes);
      
    return makes;


    return this.http.get('api/makes')
      //.map(res => res.json());

    
  }
}
