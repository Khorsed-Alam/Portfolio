import { EducationItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: "university",
    level: "University",
    institution: "United International University",
    department: "Computer Science & Engineering (CSE)",
    currentSemester: "10th Semester",
    status: "Currently Studying",
    isCurrent: true,
    location: "Dhaka, Bangladesh",
  },
  {
    id: "college",
    level: "College",
    institution: "Police Lines School & College, Bogura",
    institutionUrl: "https://www.facebook.com/plscfp",
    qualification: "Higher Secondary Certificate (HSC)",
    status: "Passed",
    isCurrent: false,
    batch: "2022",
    classOf: "Class of 2023",
    location: "Bogura, Bangladesh",
  },
  {
    id: "school",
    level: "School",
    institution: "Rameswarpur High School, Gabtali, Bogura",
    institutionUrl: "https://www.facebook.com/profile.php?id=100088117700445",
    status: "Previous Education",
    isCurrent: false,
    location: "Gabtali, Bogura, Bangladesh",
  },
];
