import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { updatePost } from '../../models/update-post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private viewPostService: PostService
  ) {}

  post: post | undefined;
  isLoadingPost: boolean = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.viewPostService.getPostById(id).subscribe((res) => {
          this.post = res;
          this.isLoadingPost = false;
        });
      }
    });
  }

  onSubmit(): void{
    const updatePostRequest: updatePost = {
    title: this.post?.title,
    content: this.post?.content,
    summary: this.post?.summary,
    urlHandle: this.post?.urlHandle,
    author: this.post?.author,
    visible: this.post?.visible,
    publishedDate: this.post?.publishedDate,
    updatedDate: this.post?.updatedDate,
    featuredImageUrl: this.post?.featuredImageUrl,
    }
    this.viewPostService.updatePostById(this.post?.id, updatePostRequest)
    .subscribe(
      res =>{
        
        alert('Success');
      }
    )
  }

}
