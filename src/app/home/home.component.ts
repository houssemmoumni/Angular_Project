import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  residences = [
    { id: 1, name: 'Residence 1', description: 'Description 1' },
    { id: 2, name: 'Residence 2', description: 'Description 2' },
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/residences', id]);
  }
}
