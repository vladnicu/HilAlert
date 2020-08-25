import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectIcon',
})
export class ProjectIconPipe implements PipeTransform {
  projectIcons = ['Audi', 'Bmw', 'Chana', 'Daimler', 'Fiat', 'Ford', 'GM', 'Mini', 'Other', 'Saic', 'Skoda', 'VW'];

  transform(value: any, args?: any): any {
    if (!value) {
      return;
    }
    for (let i = 0; i < this.projectIcons.length; i++) {
      if (
        value.toLowerCase().includes(this.projectIcons[i].toLocaleLowerCase())
      ) {
        return 'assets/images/projecticons/' + this.projectIcons[i] + '.png';
      }
    }

    if (value.toLowerCase().includes('mbc')) {
      return 'assets/images/projecticons/Daimler.png';
    }
    return 'assets/images/zf-logo.png'; // in case of missing project icon.
  }
}
