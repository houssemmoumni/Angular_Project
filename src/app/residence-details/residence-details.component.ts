import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  residence: Residence | null = null;

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/fel.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/anber.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/arij.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/yasmine.jpg", status: "En Construction" }
  ];

  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.residence = this.listResidences.find(res => res.id === +id) || null;
    }

  }
  goToNextResidence(): void {
    if (this.residence) {
      const nextId = this.residence.id + 1;
      const maxId = Math.max(...this.listResidences.map(res => res.id)); // Find the max ID
      if (nextId <= maxId) {
        window.location.href = `/residences/${nextId}`; // Trigger reload to mimic new data
      } else {
        alert('No more residences.');
      }
    }
  }

}
