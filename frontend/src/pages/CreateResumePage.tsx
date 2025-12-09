import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, Briefcase, GraduationCap, User, FileText, CheckCircle } from 'lucide-react';
import { type ResumeFormData } from '@/types/ResumeFormData';
import { type Step } from '@/types/Step';

// Step fields mapping type
type StepFields = {
    [key: number]: (keyof ResumeFormData)[];
};

export default function ResumeBuilderForm(): React.JSX.Element {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const totalSteps = 5;

    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors }
    } = useForm<ResumeFormData>({
        defaultValues: {
            // Step 1: Job Information
            jobTitle: '',
            jobDescription: '',
            
            // Step 2: Personal Information
            fullName: '',
            email: '',
            phone: '',
            location: '',
            
            // Step 3: Education
            degree: '',
            major: '',
            school: '',
            graduationYear: '',
            gpa: '',
            relevantCourses: '',
            
            // Step 4: Experience & Skills
            hasWorkExperience: '',
            workExperiences: '',
            volunteerWork: '',
            projects: '',
            skills: '',
            
            // Step 5: Additional Information
            achievements: '',
            interests: '',
            languages: '',
            certifications: ''
        },
        mode: 'onChange'
    });

    const hasWorkExperience = watch('hasWorkExperience');

    // Define which fields belong to each step for validation
    const stepFields: StepFields = {
        1: ['jobTitle'],
        2: ['fullName', 'email'],
        3: ['degree', 'school'],
        4: ['skills'],
        5: []
    };

    const nextStep = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        e.stopPropagation();
        
        const fieldsToValidate = stepFields[currentStep];
        const isStepValid = await trigger(fieldsToValidate);
        
        if (isStepValid && currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit: SubmitHandler<ResumeFormData> = (data) => {
        console.log('Form submitted:', data);
        // Here you would send the data to your AI to generate the resume
        alert('Resume generation would start here!');
    };

    const steps: Step[] = [
        { number: 1, title: 'Job Details', icon: Briefcase },
        { number: 2, title: 'Personal Info', icon: User },
        { number: 3, title: 'Education', icon: GraduationCap },
        { number: 4, title: 'Experience', icon: FileText },
        { number: 5, title: 'Finishing Touches', icon: CheckCircle }
    ];

    const inputClassName = (fieldName: keyof ResumeFormData): string => `
        w-full px-4 py-3 bg-slate-900/80 border rounded-lg text-white placeholder-slate-500 
        focus:outline-none transition-colors
        ${errors[fieldName] ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-blue-500'}
    `;

    const textareaClassName = (fieldName: keyof ResumeFormData): string => `
        w-full px-4 py-3 bg-slate-900/80 border rounded-lg text-white placeholder-slate-500 
        focus:outline-none transition-colors resize-none
        ${errors[fieldName] ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-blue-500'}
    `;

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 px-6">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4 md:mt-10">
                        <Sparkles className="w-8 h-8 text-blue-400" />
                        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Build Your Resume
                        </h1>
                    </div>
                    <p className="text-slate-400 text-lg">
                        Answer a few questions and let AI create your perfect resume
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = currentStep === step.number;
                            const isCompleted = currentStep > step.number;
                            
                            return (
                                <div key={idx} className="flex flex-col items-center flex-1">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-blue-600 shadow-lg shadow-blue-500/50' 
                                            : isCompleted 
                                            ? 'bg-blue-700' 
                                            : 'bg-slate-800 border border-slate-700'
                                    }`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className={`text-xs text-center hidden sm:block ${
                                        isActive ? 'text-blue-400 font-semibold' : 'text-slate-500'
                                    }`}>
                                        {step.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-linear-to-r from-blue-600 to-blue-700"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                {/* Form Container */}
                <motion.div 
                    className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AnimatePresence mode="wait">
                            {/* Step 1: Job Information */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                        <Briefcase className="w-6 h-6 text-blue-400" />
                                        What job are you applying for?
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Job Title *
                                            </label>
                                            <input
                                                type="text"
                                                {...register('jobTitle', { 
                                                    required: 'Job title is required' 
                                                })}
                                                placeholder="e.g., Marketing Intern, Software Developer"
                                                className={inputClassName('jobTitle')}
                                            />
                                            {errors.jobTitle && (
                                                <p className="text-red-400 text-sm mt-1">{errors.jobTitle.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Job Description (Optional)
                                            </label>
                                            <textarea
                                                {...register('jobDescription')}
                                                placeholder="Paste the job description here. This helps our AI tailor your resume to match what employers are looking for."
                                                rows={6}
                                                className={textareaClassName('jobDescription')}
                                            />
                                            <p className="text-xs text-slate-500 mt-2">
                                                💡 Tip: Including the job description helps us optimize your resume for ATS systems
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Personal Information */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                        <User className="w-6 h-6 text-blue-400" />
                                        Tell us about yourself
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register('fullName', { 
                                                        required: 'Full name is required' 
                                                    })}
                                                    placeholder="John Doe"
                                                    className={inputClassName('fullName')}
                                                />
                                                {errors.fullName && (
                                                    <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    {...register('email', { 
                                                        required: 'Email is required',
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: 'Invalid email address'
                                                        }
                                                    })}
                                                    placeholder="john@example.com"
                                                    className={inputClassName('email')}
                                                />
                                                {errors.email && (
                                                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    {...register('phone')}
                                                    placeholder="(555) 123-4567"
                                                    className={inputClassName('phone')}
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Location
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register('location')}
                                                    placeholder="City, State"
                                                    className={inputClassName('location')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Education */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                        <GraduationCap className="w-6 h-6 text-blue-400" />
                                        Education Background
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Degree/Level *
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register('degree', { 
                                                        required: 'Degree is required' 
                                                    })}
                                                    placeholder="e.g., Bachelor's, High School Diploma"
                                                    className={inputClassName('degree')}
                                                />
                                                {errors.degree && (
                                                    <p className="text-red-400 text-sm mt-1">{errors.degree.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Major/Field of Study
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register('major')}
                                                    placeholder="e.g., Computer Science, Business"
                                                    className={inputClassName('major')}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    School/University *
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register('school', { 
                                                        required: 'School name is required' 
                                                    })}
                                                    placeholder="Name of your school"
                                                    className={inputClassName('school')}
                                                />
                                                {errors.school && (
                                                    <p className="text-red-400 text-sm mt-1">{errors.school.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Graduation Year
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register('graduationYear')}
                                                    placeholder="e.g., 2024 or Expected 2025"
                                                    className={inputClassName('graduationYear')}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                GPA (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                {...register('gpa')}
                                                placeholder="e.g., 3.8/4.0"
                                                className={inputClassName('gpa')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Relevant Coursework
                                            </label>
                                            <textarea
                                                {...register('relevantCourses')}
                                                placeholder="List any courses relevant to the job (comma separated)"
                                                rows={3}
                                                className={textareaClassName('relevantCourses')}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Experience & Skills */}
                            {currentStep === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                        <FileText className="w-6 h-6 text-blue-400" />
                                        Experience & Skills
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-3">
                                                Do you have work experience?
                                            </label>
                                            <div className="flex gap-4">
                                                <label
                                                    className={`flex-1 px-4 py-3 rounded-lg border transition-all cursor-pointer text-center ${
                                                        hasWorkExperience === 'yes'
                                                            ? 'bg-blue-600 border-blue-500 text-white'
                                                            : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-blue-500'
                                                    }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        {...register('hasWorkExperience')}
                                                        value="yes"
                                                        className="sr-only"
                                                    />
                                                    Yes
                                                </label>
                                                <label
                                                    className={`flex-1 px-4 py-3 rounded-lg border transition-all cursor-pointer text-center ${
                                                        hasWorkExperience === 'no'
                                                            ? 'bg-blue-600 border-blue-500 text-white'
                                                            : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-blue-500'
                                                    }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        {...register('hasWorkExperience')}
                                                        value="no"
                                                        className="sr-only"
                                                    />
                                                    No, this is my first job
                                                </label>
                                            </div>
                                        </div>

                                        {hasWorkExperience === 'yes' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                            >
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Work Experience
                                                </label>
                                                <textarea
                                                    {...register('workExperiences')}
                                                    placeholder="Describe your work experience (job title, company, dates, responsibilities)"
                                                    rows={4}
                                                    className={textareaClassName('workExperiences')}
                                                />
                                            </motion.div>
                                        )}

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Volunteer Work or Extracurriculars
                                            </label>
                                            <textarea
                                                {...register('volunteerWork')}
                                                placeholder="Any volunteer work, clubs, or activities that show your skills"
                                                rows={3}
                                                className={textareaClassName('volunteerWork')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Projects or Portfolio Work
                                            </label>
                                            <textarea
                                                {...register('projects')}
                                                placeholder="Personal projects, school projects, or portfolio pieces"
                                                rows={3}
                                                className={textareaClassName('projects')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Skills *
                                            </label>
                                            <textarea
                                                {...register('skills', { 
                                                    required: 'Please list at least some skills' 
                                                })}
                                                placeholder="List your skills (technical, soft skills, tools, languages, etc.)"
                                                rows={3}
                                                className={textareaClassName('skills')}
                                            />
                                            {errors.skills && (
                                                <p className="text-red-400 text-sm mt-1">{errors.skills.message}</p>
                                            )}
                                            <p className="text-xs text-slate-500 mt-2">
                                                💡 Tip: Include both technical skills (e.g., Microsoft Office) and soft skills (e.g., Communication, Teamwork)
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 5: Additional Information */}
                            {currentStep === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-blue-400" />
                                        Finishing Touches
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Achievements or Awards
                                            </label>
                                            <textarea
                                                {...register('achievements')}
                                                placeholder="Any honors, awards, or notable achievements"
                                                rows={3}
                                                className={textareaClassName('achievements')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Interests or Hobbies
                                            </label>
                                            <textarea
                                                {...register('interests')}
                                                placeholder="Relevant interests that show your personality and fit"
                                                rows={2}
                                                className={textareaClassName('interests')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Languages
                                            </label>
                                            <input
                                                type="text"
                                                {...register('languages')}
                                                placeholder="e.g., English (Native), Spanish (Fluent)"
                                                className={inputClassName('languages')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Certifications or Training
                                            </label>
                                            <textarea
                                                {...register('certifications')}
                                                placeholder="Any certifications, online courses, or special training"
                                                rows={2}
                                                className={textareaClassName('certifications')}
                                            />
                                        </div>

                                        <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                                            <p className="text-blue-300 text-sm">
                                                ✨ <strong>Ready to generate!</strong> Our AI will use all this information to create a professional, tailored resume that highlights your strengths.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-700">
                            <button
                                type="button"
                                onClick={(e) => prevStep(e)}
                                disabled={currentStep === 1}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                                    currentStep === 1
                                        ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                                        : 'bg-slate-700 text-white hover:bg-slate-600'
                                }`}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back
                            </button>

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={(e) => nextStep(e)}
                                    className="flex items-center hover:cursor-pointer gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-full font-semibold text-white hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
                                >
                                    Next
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-full font-bold text-white hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Generate Resume
                                </button>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}