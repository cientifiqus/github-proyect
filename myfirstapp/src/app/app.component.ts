import { Component } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  name : string;
  email : string;
  website : string;
  hobbies;
  showHobbies: boolean;
  posts: IPost[];
  constructor(private postService:PostService){
    console.log("constructor works!");
    this.name = 'montolla';
    this.email = 'montolla@montolla.tk';
    this.website = 'http://www.montolla.tk';
    this.hobbies = ['run','read','write','123'];
    this.showHobbies = true;
    this.postService.getPosts().subscribe(posts=>{
      this.posts = posts;
    }); 
  }
  toggleHobbies(){
    this.showHobbies =!this.showHobbies;
    return this.showHobbies;
  }
  newHobby(hobby){
    console.log("enviado "+hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value='';
    return false;
  }
}

interface IPost {
  id:string;
  title:string;
  body:string;
}