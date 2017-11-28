import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatPipe'
})
export class ChatPipePipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {
    console.log('sorting', array)

      console.log('here')

      array.sort((a: any, b: any) => {
        console.log('here',a, b );
        return (a.date - b.date)
      });
    
    return array;
  }

}
