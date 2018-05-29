import { TestBed, inject } from '@angular/core/testing';

import { SkillserviceService } from './skillservice.service';

describe('SkillserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillserviceService]
    });
  });

  it('should be created', inject([SkillserviceService], (service: SkillserviceService) => {
    expect(service).toBeTruthy();
  }));
});
