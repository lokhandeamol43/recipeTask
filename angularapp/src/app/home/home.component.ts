import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  search() {
    if (this.searchText.trim() !== '') {
      this.router.navigate(['/results'], { queryParams: { searchText: this.searchText } });
    }
  }
}
