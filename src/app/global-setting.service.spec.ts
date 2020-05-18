import { TestBed } from '@angular/core/testing';

import { GlobalSettingService } from './global-setting.service';

describe('GlobalSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalSettingService = TestBed.get(GlobalSettingService);
    expect(service).toBeTruthy();
  });
});
