import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarproducvent'
})
export class BuscarproducventPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const product of  value  ) {
      if (product.nombre_producto.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(product);
      };
    };
    return resultPosts;
  }


}
