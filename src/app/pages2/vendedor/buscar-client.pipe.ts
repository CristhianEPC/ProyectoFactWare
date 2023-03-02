import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarClient'
})
export class BuscarClientPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const cliente of  value  ) {
      if (cliente.nombre_persona.toLowerCase().indexOf(arg.toLowerCase()) > -1
      
  ||cliente.apellido_persona.toLowerCase().indexOf(arg.toLowerCase()) > -1
      )
      
      {
        resultPosts.push(cliente);
      };
    };
    return resultPosts;
  }

}
