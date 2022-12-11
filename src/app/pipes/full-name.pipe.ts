import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: Person): string {
    return user.prefix + ' ' + user.firstname + ' ' + user.lastname.toUpperCase();
  }

}
