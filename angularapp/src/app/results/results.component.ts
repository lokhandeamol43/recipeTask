import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  recipes: any[] = [];
  searchText: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['searchText'] || '';
      this.fetchSearchResults();
    });
  }

  fetchSearchResults() {
    if (this.searchText.trim() !== '') {
      this.recipeService.getSearchResults(this.searchText).subscribe((data: any) => {
        this.recipes = data.results;
      });
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
