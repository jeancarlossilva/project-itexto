import { Post } from './../../model/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = new Post();
  erro: any;


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.postService.getPosts().subscribe(
      data => {
        this.post = data;
        console.log('Preenchendo o post \n');
        console.log(this.post);
      },
       error => {
          this.erro = error;
          console.log('Error  post \n');
          console.log(this.erro);
       });
  }

}
