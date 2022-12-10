import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { updatePost } from '../../models/update-post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  constructor(private addPostService: PostService) {}

  post: updatePost = {
    title: '',
    content: '',
    summary: '',
    urlHandle: '',
    author: '',
    visible: true,
    publishedDate: new Date(),
    updatedDate: new Date(),
    featuredImageUrl: '',
  };

  ngOnInit(): void {}

  onAddPost(): void {
    this.addPostService
      .addNewPost(this.post)
      .subscribe((res) => alert('add successfully'));
  }
}
