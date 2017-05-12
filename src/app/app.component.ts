import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/search" routerLinkActive="active">Szukaj</a>
      <a routerLink="/corporations" routerLinkActive="active">Korporacje</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['src/app/app.component.css'],
})
export class AppComponent {
  title = 'Sprawdź zarobki';
}


// export class Company {
//     id: number;
//     name: string;
// }


// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>{{title}}</h1>
//     <ul class="companies">
//         <li *ngFor="let company of companies" [class.selected]="company === selectedCompany" (click)="onSelect(company)">
//             {{company.name}}
//         </li>
//     </ul>
//    <div *ngIf="selectedCompany">
//      <h2>{{selectedCompany.name}} details!</h2>
//      <div><label>id: </label>{{selectedCompany.id}}</div>
//     <div>
//         <label>name: </label>
//         <input [(ngModel)]="selectedCompany.name" placeholder="name"/>
//     </div>
//    </div>
//     `
// })
// export class AppComponent {
//     title = 'Check salaries';
//     selectedCompany: Company;
//     onSelect(company: Company): void {
//         this.selectedCompany = company;
//     }
//     companies = COMPANIES;
// }