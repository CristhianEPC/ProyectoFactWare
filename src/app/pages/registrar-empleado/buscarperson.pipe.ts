import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarperson'
})
export class BuscarpersonPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const person of  value  ) {
      if (person.nombre_persona.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ||person.apellido_persona.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPosts.push(person);
      };
    };
    return resultPosts;
  }

}
