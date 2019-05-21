import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Posts } from "../posts";

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  @Output() onAddPost = new EventEmitter<any>();

  shouldBeShown: boolean = true;
  post: Posts [] = [
    {
      title: "Dog",
      thought: "Dog's Rule"
    },
    {
      title: "Cat",
      thought: "Cat's Drool"
    }
  ];

  constructor() { }

  addPost(form){
    this.post.push({title: form.value.titleToAdd,
      thought: form.value.thoughtToAdd});
  }

  removePost(index: number) :void {
    this.post.splice(index, 1);
  }

  toggleDisplay() :void {
    this.shouldBeShown = !this.shouldBeShown;
  }

  ngOnInit() {
  }

}
