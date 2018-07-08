import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string ;
  age: number;
  email: string;
  address: Address;
  hello: any;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Sherry Shahbazi';
    this.age = 28;
    this.address = {
      street: '80 Greys Ave',
      city: 'Auckland',
      state: 'NA'
    };
    this.hobbies = ['Running', 'Walking', 'Basketball', 'Write code'];

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Button Clicked!';
    this.hobbies.push('Hiking');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}