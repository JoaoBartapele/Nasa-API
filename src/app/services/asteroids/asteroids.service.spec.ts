import { TestBed, inject } from '@angular/core/testing';

import { AsteroidsService } from './asteroids.service';

describe('AsteroidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsteroidsService]
    });
  });

  it('should be created', inject([AsteroidsService], (service: AsteroidsService) => {
    expect(service).toBeTruthy();
  }));
});
