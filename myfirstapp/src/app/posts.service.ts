import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable()
export class PostService{
    constructor(private http:Http){
    }
    getPosts(){
        return this.http.get('http://jsonplaceholder.typicode.com/posts').pipe(map(res=>res.json()));
    }
}