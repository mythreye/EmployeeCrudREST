import { TestBed, inject } from '@angular/core/testing';

import { SkillmasterService } from './skillmaster.service';

describe('SkillmasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillmasterService]
    });
  });

  it('should be created', inject([SkillmasterService], (service: SkillmasterService) => {
    expect(service).toBeTruthy();
  }));
});
