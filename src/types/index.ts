export interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  department: string;
  semester: string;
  location: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  careerGoal: string;
  experienceStatus: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    description?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  level: "University" | "College" | "School";
  institution: string;
  institutionUrl?: string;
  department?: string;
  qualification?: string;
  degree?: string;
  currentSemester?: string;
  status: string;
  isCurrent?: boolean;
  batch?: string;
  classOf?: string;
  location?: string;
  highlights?: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  type: "academic" | "exploration" | "future";
}

export interface AIInterest {
  topic: string;
  tagline: string;
  description: string;
  keyAreas: string[];
}
