import {
  LearningPath,
  PathProgressRecord,
  ProgressSummary,
} from './types.js';

/**
 * Returns the progress record that corresponds to the supplied learning path.
 */
export function findPathProgress(
  path: LearningPath,
  progress: PathProgressRecord[]
): PathProgressRecord | undefined {
  return progress.find((record) => record.pathId === path.id);
}

/**
 * Calculates the number of completed modules for a path.
 */
export function countCompletedModules(
  path: LearningPath,
  record?: PathProgressRecord
): number {
  if (!record) {
    return 0;
  }

  const moduleLookup = new Set(path.modules.map((module) => module.id));
  const countedModules = new Set<string>();

  return record.modules.reduce((count, moduleProgress) => {
    if (!moduleLookup.has(moduleProgress.moduleId)) {
      return count;
    }

    if (!moduleProgress.completed) {
      return count;
    }

    if (countedModules.has(moduleProgress.moduleId)) {
      return count;
    }

    countedModules.add(moduleProgress.moduleId);
    return count + 1;
  }, 0);
}

/**
 * Calculates the completion ratio for the supplied path.
 *
 * Guarding against empty module collections prevents consumers from
 * encountering NaN when a path has not been populated yet.
 */
export function calculateCompletionRatio(
  path: LearningPath,
  completedModules: number
): number {
  const totalModules = path.modules.length;

  if (totalModules === 0) {
    return 0;
  }

  const ratio = completedModules / totalModules;

  if (Number.isNaN(ratio) || !Number.isFinite(ratio)) {
    return 0;
  }

  return Math.min(Math.max(ratio, 0), 1);
}

/**
 * Generates a summary that callers can use to display progress for a path.
 */
export function summariseProgress(
  path: LearningPath,
  progress: PathProgressRecord[]
): ProgressSummary {
  const record = findPathProgress(path, progress);
  const completedModules = countCompletedModules(path, record);
  const completionRatio = calculateCompletionRatio(path, completedModules);

  return {
    pathId: path.id,
    completionRatio,
    completedModules,
    totalModules: path.modules.length,
  };
}
