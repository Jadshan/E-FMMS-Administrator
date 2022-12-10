import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: post[] = [];
  post: post | undefined;

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  onDeletePost(Id: string) {
    this.postService.deletePost(Id).subscribe((res) => {
      alert('deleted successfully');
    });
  }
}
