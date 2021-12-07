import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(post: Post[], textSearch: string): Post[] {
    if(!textSearch.trim()) {
    return post
    } else {
    return post.filter(item=>{
    return item.text.toLowerCase().includes(textSearch.toLowerCase())
    })
    }
    }

}
