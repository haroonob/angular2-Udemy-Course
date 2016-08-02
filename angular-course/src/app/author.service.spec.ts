/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthorService } from './author.service';

describe('Service: Author', () => {
  beforeEach(() => {
    addProviders([AuthorService]);
  });

  it('should ...',
    inject([AuthorService],
      (service: AuthorService) => {
        expect(service).toBeTruthy();
      }));
});
