import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
  baseUrl = 'https://ng-complete-guide-b49a3-default-rtdb.europe-west1.firebasedatabase.app/';
  postsUrl = this.baseUrl + 'posts.json';

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{ name: string }>(this.postsUrl, postData).subscribe(response => {
      console.log(response);
    });
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(this.postsUrl)
      .pipe(map(response => {
        const posts: Post[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            posts.push({ ...response[key], id: key });
          }
        }
        return posts;
        })
      );
  }

  deletePosts() {
    return this.http.delete(this.postsUrl);
  }
}
