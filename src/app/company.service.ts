import { Company } from './company';
import { COMPANIES } from './mock-companies';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {
  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES);
  }

  getCompany(id: number): Promise<Company> {
    return this.getCompanies()
               .then(companies => companies.find(company => company.id === id));
  }
}