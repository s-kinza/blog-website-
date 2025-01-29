import { Code, Palette, Database, Terminal, Globe, Laptop } from "lucide-react";

export const metadata = {
  title: "About Me - Modern Blog",
  description: "Learn more about me and my journey in web development",
};

export default function AboutPage() {
  const skillSets = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["HTML5 & CSS3", "JavaScript/TypeScript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Database Management", "Server Architecture"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Responsive Design", "UI Components", "User Experience", "Design Systems", "Animations"]
    },
    {
      icon: Terminal,
      title: "Development Tools",
      skills: ["Git & GitHub", "VS Code", "Command Line", "Package Managers", "Development Workflows"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Web Standards", "SEO Principles", "Performance Optimization", "Cross-Browser Compatibility"]
    },
    {
      icon: Laptop,
      title: "Learning Journey",
      skills: ["Currently pursuing Web Development", "Self-taught Developer", "Continuous Learning", "Problem Solving"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="py-20 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Passionate Web Developer & Technology Enthusiast
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            My Journey
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hello! I'm a passionate web developer with a deep interest in creating beautiful and 
            functional web applications. My journey in web development started with curiosity 
            and has evolved into a dedicated pursuit of excellence in crafting digital experiences.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in modern web technologies and best practices, constantly learning and 
            adapting to the ever-evolving landscape of web development. My goal is to create 
            impactful solutions that combine elegant design with robust functionality.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillSets.map((skillSet) => {
            const Icon = skillSet.icon;
            return (
              <div 
                key={skillSet.title}
                className="p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{skillSet.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skillSet.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}