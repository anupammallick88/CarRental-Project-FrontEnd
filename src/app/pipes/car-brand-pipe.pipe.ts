import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/complex-types/carDetailDto';

@Pipe({
  name: 'carBrandPipe',
})
export class CarBrandPipePipe implements PipeTransform {
  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (c: CarDetailDto) =>
            c.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
