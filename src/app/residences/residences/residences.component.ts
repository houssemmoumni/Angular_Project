import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "assets/fel.jpg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "assets/anber.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/arij.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/yasmine.jpg", status: "En Construction" }
  ];

  favoriteResidences: Residence[] = [];

  searchAddress: string = '';

  get filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }

  showLocation(residence: Residence): void {
    if (residence.address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert(residence.address);
    }
  }


  toggleFavoriteStatus(residence: Residence): void {
    const index = this.favoriteResidences.findIndex(r => r.id === residence.id);
    if (index === -1) {
      this.favoriteResidences.push(residence);
    } else {
      this.favoriteResidences.splice(index, 1);
    }
  }


  isFavorite(residence: Residence): boolean {
    return this.favoriteResidences.some(r => r.id === residence.id);
  }
}
