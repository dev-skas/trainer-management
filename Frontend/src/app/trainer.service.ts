import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  gettrainer(id: any) {
    return this.http.get("api/profile/" + id);

  }

  // edit trainer profile:
  edittrainer(formData: FormData) {
    return this.http.put("api/editprofile", formData)
      .subscribe(data => { console.log(data) })

  }

}
