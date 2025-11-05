import { describe, expect, it } from 'vitest';
import {
  calculateCompletionRatio,
  countCompletedModules,
  summariseProgress,
} from '../src/progress.js';
import { LearningPath, PathProgressRecord } from '../src/types.js';

const demoPath: LearningPath = {
  id: 'path-collaborator',
  title: 'AI Collaborator',
  level: 1,
  modules: [
    { id: 'module-intro', title: 'Foundations', estimatedHours: 4 },
    { id: 'module-prompts', title: 'Prompt Mastery', estimatedHours: 3 },
    { id: 'module-systems', title: 'Systems Thinking', estimatedHours: 5 },
  ],
};

const demoProgress: PathProgressRecord[] = [
  {
    pathId: 'path-collaborator',
    modules: [
      { moduleId: 'module-intro', completed: true },
      { moduleId: 'module-prompts', completed: false },
      { moduleId: 'module-systems', completed: true },
    ],
  },
];

describe('countCompletedModules', () => {
  it('counts only modules that belong to the supplied path', () => {
    const record: PathProgressRecord = {
      pathId: 'path-collaborator',
      modules: [
        { moduleId: 'module-intro', completed: true },
        { moduleId: 'module-systems', completed: true },
        { moduleId: 'other-module', completed: true },
      ],
    };

    expect(countCompletedModules(demoPath, record)).toBe(2);
  });

  it('returns zero when no record is available', () => {
    expect(countCompletedModules(demoPath, undefined)).toBe(0);
  });

  it('does not double count duplicate module progress entries', () => {
    const record: PathProgressRecord = {
      pathId: 'path-collaborator',
      modules: [
        { moduleId: 'module-intro', completed: true },
        { moduleId: 'module-intro', completed: true },
        { moduleId: 'module-systems', completed: true },
      ],
    };

    expect(countCompletedModules(demoPath, record)).toBe(2);
  });
});

describe('calculateCompletionRatio', () => {
  it('calculates the ratio of completed to total modules', () => {
    expect(calculateCompletionRatio(demoPath, 2)).toBeCloseTo(2 / 3);
  });

  it('guards against division by zero when the path has no modules', () => {
    const emptyPath: LearningPath = {
      ...demoPath,
      modules: [],
    };

    expect(calculateCompletionRatio(emptyPath, 0)).toBe(0);
  });

  it('never returns a number outside of 0..1', () => {
    expect(calculateCompletionRatio(demoPath, 99)).toBe(1);
    expect(calculateCompletionRatio(demoPath, -2)).toBe(0);
  });
});

describe('summariseProgress', () => {
  it('summarises progress for the path', () => {
    const summary = summariseProgress(demoPath, demoProgress);

    expect(summary).toEqual({
      pathId: 'path-collaborator',
      completedModules: 2,
      totalModules: 3,
      completionRatio: 2 / 3,
    });
  });

  it('handles paths that have no saved progress yet', () => {
    const summary = summariseProgress(demoPath, []);

    expect(summary).toEqual({
      pathId: 'path-collaborator',
      completedModules: 0,
      totalModules: 3,
      completionRatio: 0,
    });
  });
});
