import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const usuario of  value  ) {
      if (usuario.user.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(usuario);
      };
    };
    return resultPosts;
  }

}
