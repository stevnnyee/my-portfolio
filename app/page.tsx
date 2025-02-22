import { Github, Linkedin, Mail, Code, Briefcase, User, FileText } from 'lucide-react';
import DarkModeToggle from './components/DarkModeToggle';
import FadeInSection from './components/FadeInSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">Steven</div>
          <div className="flex items-center space-x-6">
            <div className="space-x-6">
              <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <FadeInSection>
        <section id="home" className="pt-24 container mx-auto px-4 py-16 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Hey, I&apos;m Steven!
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Computer Science and Mathematics Student at Northeastern University
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/stevnnyee" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yee-steven/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yee.stev@northeastern.edu" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection>
        <section id="about" className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <User className="mr-3 text-gray-800 dark:text-gray-300" /> About Me
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I&apos;m a second-year Computer Science and Mathematics student at Northeastern University, 
                  passionate about bridging theoretical foundations with innovative technological solutions. 
                  My academic journey combines rigorous mathematical training with practical software development skills.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Academic Highlights:
                  • Dean&apos;s List with a 3.6 GPA
                  • Merit Scholarship Recipient
                  • Coursework in Linear Algebra, Differential Equations, Probability and Statistics
                  • Currently exploring Machine Learning technologies
                </p>
                <div className="text-gray-700 dark:text-gray-300">
                  Campus Involvement:
                  • Member of NU Systemic Alpha (Quantitative Finance Club)
                  • Active in Asian Student Union
                  • Mathematics Club Member
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Skills Section */}
      <FadeInSection>
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4 fade-in-section">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <Code className="mr-3 text-gray-800 dark:text-gray-300" /> Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Java', 'React', 'Node.js', 'HTML', 'CSS', 
                'JavaScript', 'Python', 'Machine Learning',
                'SEO', 'Data Visualization', 'Git'
              ].map((skill) => (
                <div 
                  key={skill} 
                  className="skill-item bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section id="projects" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 fade-in-section">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <Briefcase className="mr-3 text-gray-800 dark:text-gray-300" /> Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Sorting Visualizer',
                  description: 'Interactive web application built with React and Node.js to visualize sorting algorithms.',
                  technologies: ['React', 'Node.js'],
                  link: 'https://github.com/stevnnyee/sorting-visualizer.git'
                },
                {
                  title: 'FloodIt Game',
                  description: 'Java-based implementation of the classic FloodIt puzzle game with strategic gameplay mechanics.',
                  technologies: ['Java', 'Eclipse', 'Object-Oriented Programming'],
                  link: 'https://github.com/stevnnyee/flood-it.git'
                },
                {
                  title: 'ThreeTrios Game',
                  description: 'ThreeTrios is a sophisticated Java-based strategy game built using Model-View-Controller (MVC) architecture. The project demonstrates advanced object-oriented programming principles, featuring a dynamic GUI that offers an engaging user experience through intuitive interactions and real-time gameplay mechanics.',
                  technologies: ['IntellIJ', 'Object-Oriented Programming'],
                  link: 'https://github.com/stevnnyee/ThreeTrios.git'
                },
                {
                  title: "Valentine's Website",
                  description: 'Interactive and responsive website created using HTML and CSS, featuring engaging animations and modern design principles.',
                  technologies: ['HTML', 'CSS', 'JavaScript'],
                  link: 'https://github.com/stevnnyee/valentines-site.git'
                }
              ].map((project) => (
                <div 
                  key={project.title} 
                  className="project-card bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                  >
                    View Project <span className="ml-1">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Experience Section */}
      <FadeInSection>
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <Briefcase className="mr-3 text-gray-800 dark:text-gray-300" /> Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">SEO Internship</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Optimized website SEO using CSV files and analytical tools, improving search engine rankings and visibility.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">Skills: SEO, Data Analysis, CSV Processing</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Student Teacher</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Supported special education students, demonstrating patience, adaptability, and communication skills.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">Skills: Education, Communication, Mentorship</div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-gray-900 dark:text-white">
              <FileText className="mr-3 text-gray-800 dark:text-gray-300" /> Contact Me
            </h2>
            <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                               bg-white dark:bg-gray-800 
                               text-gray-900 dark:text-white 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Steven"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                               bg-white dark:bg-gray-800 
                               text-gray-900 dark:text-white 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="yee.stev@northeastern.edu"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                               bg-white dark:bg-gray-800 
                               text-gray-900 dark:text-white 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 rounded-lg 
                             hover:bg-blue-700 dark:hover:bg-blue-600 
                             transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-6 border-t dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © 2025 Steven Yee. All rights reserved.
        </div>
      </footer>
    </main>
  );
}