import { Component } from '@angular/core';
import {PostService} from '../services/post.service';
import {subscribeTo} from 'rxjs/internal-compatibility';
import {Post} from '../models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post: Post = {
    id: 1,
    body: 'huihd'
  };

  constructor(private postService: PostService) {
  }

  // getPost(): void {
  //   this.postService.getPostById(this.id)
  //   .subscribe(value => console.log(value));
  // }

  search(): void {

  }

}
