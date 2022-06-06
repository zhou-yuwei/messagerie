import { TestBed } from '@angular/core/testing';

import { ServicePersonneService } from './service-personne.service';

describe('ServicePersonneService', () => {
  let service: ServicePersonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
