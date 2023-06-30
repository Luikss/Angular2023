import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  baseUrl = 'https://ng-complete-guide-b49a3-default-rtdb.europe-west1.firebasedatabase.app/';
  postsUrl = this.baseUrl + 'posts.json';
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.http.post<{ name: string }>(this.postsUrl, postData).subscribe(response => {
      console.log(response);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http.get<{ [key: string]: Post }>(this.postsUrl)
      .pipe(map(response => {
        const posts: Post[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            posts.push({ ...response[key], id: key });
          }
        }
        return posts;
      }))
      .subscribe(posts => {
        this.loadedPosts = posts;
        this.isFetching = false;
      });
  }
}
