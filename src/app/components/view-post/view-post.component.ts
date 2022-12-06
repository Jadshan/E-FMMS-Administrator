import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.viewPostService.getPostById(id).subscribe((res) => {
          this.post = res;
        });
      }
    });
  }
}
