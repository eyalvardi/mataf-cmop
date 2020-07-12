import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Proxy682Service {

    constructor(private http: HttpClient) { }

    getUsers(num: number = 1, gender: 'female' | 'male') {

        const url = `https://randomuser.me/api/?results=${num}&gender=${gender}`;
        
        return this.http.get<cmop.UsersList>(url)
        .pipe(
            map(res => res.results)
        )
        .toPromise();
    }
}