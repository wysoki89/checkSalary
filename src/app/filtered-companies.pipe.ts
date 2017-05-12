import { Pipe, PipeTransform } from '@angular/core';

// import { Flyer } from './heroes';

@Pipe({ name: 'filteredCompanies' })
export class FilteredCompaniesPipe implements PipeTransform {
  transform(allCompanies: any[], name:string) {
    return allCompanies.filter(company => company.name ===name);
  }
}