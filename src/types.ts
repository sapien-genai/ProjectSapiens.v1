export interface LearningModule {
  id: string;
  title: string;
  estimatedHours: number;
}

export interface LearningPath {
  id: string;
  title: string;
  level: number;
  modules: LearningModule[];
}

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  hoursSpent?: number;
  score?: number;
}

export interface PathProgressRecord {
  pathId: string;
  modules: ModuleProgress[];
}

export interface ProgressSummary {
  pathId: string;
  completionRatio: number;
  completedModules: number;
  totalModules: number;
}
