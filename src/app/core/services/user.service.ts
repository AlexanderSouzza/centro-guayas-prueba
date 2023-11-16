import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }


    //consulta de usuarios -> 

    // http://172.22.0.100:8092/api/v1/usuarios
    // http://172.22.0.100:8092/auth/prueba
    private url = "http://172.22.0.100:8092/auth/prueba";
    getTransactions(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }
}
