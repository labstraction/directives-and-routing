import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  readonly BASE_URL = "https://68109d6227f2fdac2412120c.mockapi.io/"
  readonly STUDENTS_ENDPOINT = "students/"

  constructor(private http: HttpClient) {

  }

  getStudents(): Observable<Student[]>{
      return this.http.get<Student[]>(this.BASE_URL + this.STUDENTS_ENDPOINT)
  }

  getStudent(id: string): Observable<Student> {
      return this.http.get<Student>(this.BASE_URL + this.STUDENTS_ENDPOINT + id);
  }

  addMarks(id: string, marks: number[]): Promise<Student>{

    const patchValue = {marks: marks}

    return fetch(this.BASE_URL + this.STUDENTS_ENDPOINT + id, {
      method: 'PATCH',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(patchValue)
    }).then(res => {

          return res.json();
      
      // handle error
    }).catch(error => {
      // handle error
    })
  }

}
