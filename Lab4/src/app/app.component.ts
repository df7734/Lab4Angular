import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp update';
  posts: Post[] = [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 2},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 3},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
   ]
   updatePosts (event: Post){
    this.posts.unshift(event)
    event.id = 1;
    let i = 1;
    while (i < this.posts.length) {
      this.posts[i].id = ++i;
    }
    
  }
  removeIdPost(id:number) {
    this.posts = this.posts.filter((item)=>item.id!=id)
    }

  titleS=''
  onChangeSearchTitle(event: string) {
  this.titleS=event
  }
  titleT=''
  onChangeSearchText(event: string) {
  this.titleT=event
  }
   
}

export interface Post {
title: string
text: string
id?: number
}

