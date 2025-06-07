export type Experience = {
  company: string;
  duration: string;
  logo: React.ReactNode;
  roles: {
    title: string;
    employmentType: string;
    period: string;
    location: string;
    skills: string[];
  }[];
};

export const EXP_LIST: Experience[] = [
    {
        company: "CBNITS",
        duration: "3 yrs 4 mos",
        logo: <img src="https://i.ibb.co/93rt4sdk/cbnits-Logo.png" alt="" className='h-14 w-14 lg:h-[75px] lg:w-[75px]' />,
        roles: [
          {
            title: "Senior Software Engineer",
            employmentType: "Full-time",
            period: "Jan 2025 - Present · 6 mos",
            location: "Greater Kolkata Area · On-site",
            skills: ["Git", "MERN", "+12 skills"],
          },
          {
            title: "Full Stack Developer",
            employmentType: "Full-time",
            period: "Jun 2024 - Jan 2025 · 8 mos",
            location: "Greater Kolkata Area · On-site",
            skills: ["Git", "React.js", "+12 skills"],
          },
          {
            title: "Program Analyst",
            employmentType: "Full-time",
            period: "Apr 2023 - Jun 2024 · 1 yr 3 mos",
            location: "Greater Kolkata Area · On-site",
            skills: ["Azure Logic Apps", "Git", "+22 skills"],
          },
          {
            title: "Junior Software Developer",
            employmentType: "Full-time",
            period: "May 2022 - Apr 2023 · 1 yr",
            location: "Greater Kolkata Area · On-site",
            skills: ["Git", "React.js", "+8 skills"],
          },
        ],
      }
]
