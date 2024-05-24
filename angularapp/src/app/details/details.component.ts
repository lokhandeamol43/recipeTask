import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recipeDetails: any;
  instructions: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchRecipeDetails(parseInt(id, 10));
    }
  }

  fetchRecipeDetails(id: number) {
    this.recipeService.getRecipeInformation(id).subscribe((data: any) => {
      this.recipeDetails = data;
      this.fetchInstructions(id);
    });
  }

  fetchInstructions(id: number) {
    this.recipeService.getInstructions(id).subscribe((data: any) => {
      if (data.length > 0 && data[0].steps) {
        this.instructions = data[0].steps;
      }
    });
  }
}
