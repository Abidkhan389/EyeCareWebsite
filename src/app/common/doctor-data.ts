export interface DoctorDetails {
    name: string;
    profileImageUrl: string;
    qualification: string;
    designation:string;
    experience:string;
    certification: string;
    professionalSkills: string[];
    education: string[];
    awards: string[];
    generalInfo: string;
    careInstructions: {
      title: string;
      content: string;
    }[];
  }
  
  export const DOCTOR_DATA: DoctorDetails[] = [
    {
      name: 'Dr. Arsalan Khan',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Arsalan Khan is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Ena Dicrosa',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Ena Dicrosa is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Johnson Melbourne',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Johnson Melbourne is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Addison Smith',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Addison Smith is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Daisy Gabriela',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Daisy Gabriela is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Ronnie Aaron',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Ronnie Aaron is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Edie Dee',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Edie Dee is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Sarah Taylor',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Sarah Taylor is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Aiken Ward',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Aiken Ward is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Babatunde Jon',
      profileImageUrl: 'images/doctor/doctor-1.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Senior Retina Surgeon & Consultant Ophthalmologist',
      experience:'10 Years Experience',
      certification: 'Fellowship in Retina Surgery - UK',
      professionalSkills: ['Retina Surgery', 'Cataract Removal', 'LASIK', 'Glaucoma Management'],
      education: ['Allama Iqbal Medical College', 'Royal College of Surgeons (UK)'],
      awards: ['Best Ophthalmologist 2020', 'Pride of Performance in Eye Care 2022'],
      generalInfo: `Dr. Babatunde Jon is a renowned eye specialist with over 10 years of experience in diagnosing and treating complex retinal disorders. He is particularly known for his precision in retina surgeries and has performed over 2000 successful procedures. His commitment to patient care, research, and medical education has earned him multiple accolades in the field of ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Abid Khan',
      profileImageUrl: 'images/doctor/doctor-2.jpg',
      qualification: 'MBBS, MS (Ophthalmology)',
      designation: 'Consultant Ophthalmologist & Glaucoma Specialist',
      experience:'8 Years Experience',
      certification: 'Certified Glaucoma Specialist - Singapore Eye Center',
      professionalSkills: ['Glaucoma Management', 'Cataract Surgery', 'Diabetic Eye Disease Treatment'],
      education: ['Punjab Medical College', 'Singapore Eye Institute'],
      awards: ['Young Ophthalmologist Award 2021', 'International Vision Care Medal 2023'],
      generalInfo: `Dr. Abid Khan is a passionate ophthalmologist who specializes in the treatment of glaucoma and diabetic eye diseases. With a strong focus on community eye care and early detection strategies, he has led numerous free camps and awareness programs. His surgical expertise and compassionate approach have made him a trusted name among his patients.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    },
    {
      name: 'Dr. Farhat Khan',
      profileImageUrl: 'images/doctor/doctor-3.jpg',
      qualification: 'MBBS, FCPS (Ophthalmology)',
      designation: 'Corneal & Refractive Surgery Consultant',
      experience:'3 Years Experience',
      certification: 'Corneal & Refractive Surgery Training - Moorfields Eye Hospital, UK',
      professionalSkills: ['Refractive Surgery', 'Corneal Transplant', 'Ocular Surface Disease Management'],
      education: ['Services Institute of Medical Sciences', 'Moorfields Eye Hospital, London'],
      awards: ['Excellence in Refractive Surgery 2022', 'Best Female Eye Surgeon 2023'],
      generalInfo: `Dr. Farhat Khan is an experienced eye surgeon with a special interest in corneal and refractive procedures. She has performed hundreds of successful LASIK and corneal transplant surgeries. Known for her friendly demeanor and thorough clinical evaluations, she believes in personalized care and continuous innovation in ophthalmology.`,
      careInstructions: [
        {
          title: 'How to Take Care During Eye Treatment',
          content: 'Avoid bright light exposure and rest your eyes regularly...'
        },
        {
          title: 'When To Visit your Doctor?',
          content: 'Visit immediately if you notice vision changes, floaters, or pain...'
        },
        {
          title: 'Eye Treatment Options:',
          content: 'Retina surgery, laser therapy, or prescription medication may be used...'
        }
      ]
      
    }, 
  ];
  