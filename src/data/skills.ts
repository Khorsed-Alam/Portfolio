import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "C", description: "Procedural programming & systems fundamentals" },
      { name: "C++", description: "Object-oriented design & algorithms" },
      { name: "Java", description: "Enterprise patterns & OOP architectures" },
      { name: "Python", description: "AI/ML scripting, data manipulation & automation" },
      { name: "PHP", description: "Server-side web scripting & backend logic" },
      { name: "Dart", description: "Typed language for cross-platform applications" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", description: "Semantic markup & accessible document structures" },
      { name: "CSS", description: "Responsive layouts, Flexbox, Grid & styling" },
      { name: "JavaScript", description: "Modern ES6+ asynchronous logic & DOM interactivity" },
      { name: "React.js", description: "Component-driven single page application development" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", description: "Relational database modeling, queries & schemas" },
    ],
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Git", description: "Version control & collaborative branch workflows" },
      { name: "GitHub", description: "Code hosting, repositories & version tracking" },
      { name: "Flutter", description: "Cross-platform mobile UI development" },
    ],
  },
];
