import { TestBed, inject } from '@angular/core/testing';

import { RecipeListService } from './recipe-list.service';

describe('RecipeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeListService]
    });
  });

  it('should be created', inject([RecipeListService], (service: RecipeListService) => {
    expect(service).toBeTruthy();
  }));
});
