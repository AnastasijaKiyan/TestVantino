import { TestBed } from '@angular/core/testing';

import { TaskStageRepositoryService } from './task-stage-repository.service';

describe('TaskStageRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskStageRepositoryService = TestBed.get(TaskStageRepositoryService);
    expect(service).toBeTruthy();
  });
});
