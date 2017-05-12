import { Component, OnInit } from '@angular/core';

import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'search',
  templateUrl: 'src/app/search.component.html',
  // template: '<h3>Top Heroes</h3>'
//   styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {

  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies()
      .then(companies => this.companies = companies);
  }
  selectedName: string = "Sabre";
} 