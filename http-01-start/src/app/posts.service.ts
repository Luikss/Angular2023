import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Subject, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {Post} from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  baseUrl = 'https://ng-complete-guide-b49a3-default-rtdb.europe-west1.firebasedatabase.app/';
  postsUrl = this.baseUrl + 'posts.json';

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{ name: string }>(
      this.postsUrl,
      postData,
      {
        observe: 'response'
      }
    )
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        this.postsUrl,
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(map(response => {
        const posts: Post[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            posts.push({ ...response[key], id: key });
          }
        }
        return posts;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      this.postsUrl,
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // ...
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
