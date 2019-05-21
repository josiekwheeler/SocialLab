import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onAddPost = new EventEmitter<any>();
  @Output() onRemovePost = new EventEmitter<any>();

  constructor() { }

  addPost(form) :void {
    this.onAddPost.emit(form);
  }

  removePost(index: number) :void {
    this.onRemovePost.emit(index);
  }

  ngOnInit() {
  }

}
