export interface ResumeFormData {
    // Step 1: Job Information
    jobTitle: string;
    jobDescription: string;
    
    // Step 2: Personal Information
    fullName: string;
    email: string;
    phone: string;
    location: string;
    
    // Step 3: Education
    degree: string;
    major: string;
    school: string;
    graduationYear: string;
    gpa: string;
    relevantCourses: string;
    
    // Step 4: Experience & Skills
    hasWorkExperience: '' | 'yes' | 'no';
    workExperiences: string;
    volunteerWork: string;
    projects: string;
    skills: string;
    
    // Step 5: Additional Information
    achievements: string;
    interests: string;
    languages: string;
    certifications: string;
}