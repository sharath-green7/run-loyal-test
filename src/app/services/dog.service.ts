import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = `https://dog.ceo/api/breeds/image/random`
@Injectable({ providedIn: 'root' })
export class DogService {
    constructor(private http: HttpClient) { }
    
    getDogsImg() {
        return this.http.get<any>(baseUrl);
    }
}