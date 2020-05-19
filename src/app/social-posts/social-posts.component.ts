import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] =
    [
      {
        title: "Hi",
        thought: "Welcome to my thoughts"
      }
    ]
  constructor() { }

  ngOnInit(): void {
  }

  addPost(form: NgForm) {
    let post: Post = {
      title: form.value.title,
      thought: form.value.thought
    }
    this.posts.push(post)
  }


}
