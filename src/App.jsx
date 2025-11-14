import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Code} from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaNodeJs, FaGithub, FaAngular,FaGlobe, FaFolder, FaEllipsisV,FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiFlask, SiVercel } from "react-icons/si";

const PortfolioBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');

  const totalPages = 4;

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 800);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 800);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Book Container with border */}
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div 
          className="relative border-10 border-blue-600 shadow-2xl" 
          style={{ 
            perspective: '2500px',
            width: 'calc(100% - 4rem)',
            height: 'calc(100% - 4rem)',
            maxWidth: '1400px',
            maxHeight: '800px'
          }}
        >
          <div className="relative w-full h-full flex" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Left Page Container */}
            <div className="relative w-1/2 h-full" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Static Left Page */}
              <div className="absolute inset-0 bg-gray-50" style={{ zIndex: 10 }}>
                {currentPage === 0 && <Page1Left />}
                {currentPage === 1 && <Page2Left />}
                {currentPage === 2 && <Page3Left />}
                {currentPage === 3 && <Page4Left />}
                <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-gray-300/30 to-gray-400/40 pointer-events-none"></div>
                
                {/* Left Page Navigation */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0 || isFlipping}
                    className={`w-10 h-10 flex items-center justify-center transition-all pointer-events-auto rounded-full ${
                      currentPage === 0 || isFlipping ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <ChevronLeft className="w-7 h-7" />
                  </button>
                  <span className="text-gray-400 font-medium text-lg">{currentPage * 2 + 1}</span>
                  <div className="w-10"></div>
                </div>
              </div>

              {/* Flipping Left Page (when going back) */}
              {isFlipping && flipDirection === 'prev' && (
                <div 
                  className="absolute inset-0 origin-right"
                  style={{
                    transformStyle: 'preserve-3d',
                    animation: 'flipLeftPage 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
                    zIndex: 40
                  }}
                >
                  <div className="absolute inset-0 bg-white backface-hidden shadow-2xl">
                    {currentPage === 1 && <Page1Right />}
                    {currentPage === 2 && <Page2Right />}
                    {currentPage === 3 && <Page3Right />}
                    <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-l from-transparent via-gray-300/30 to-gray-400/40 pointer-events-none"></div>
                  </div>
                  <div 
                    className="absolute inset-0 bg-gray-50 backface-hidden shadow-2xl"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    {currentPage === 1 && <Page1Left />}
                    {currentPage === 2 && <Page2Left />}
                    {currentPage === 3 && <Page3Left />}
                    <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-gray-300/30 to-gray-400/40 pointer-events-none"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Center Spine */}
            <div className="w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 shadow-lg z-50"></div>

            {/* Right Page Container */}
            <div className="relative w-1/2 h-full" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Static Right Page */}
              <div className="absolute inset-0 bg-white" style={{ zIndex: 10 }}>
                {currentPage === 0 && <Page1Right />}
                {currentPage === 1 && <Page2Right />}
                {currentPage === 2 && <Page3Right />}
                {currentPage === 3 && <Page4Right />}
                <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-l from-transparent via-gray-300/30 to-gray-400/40 pointer-events-none"></div>
                
                {/* Right Page Navigation */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
                  <div className="w-10"></div>
                  <span className="text-gray-400 font-medium text-lg">{currentPage * 2 + 2}</span>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1 || isFlipping}
                    className={`w-10 h-10 flex items-center justify-center transition-all pointer-events-auto rounded-full ${
                      currentPage === totalPages - 1 || isFlipping ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <ChevronRight className="w-7 h-7" />
                  </button>
                </div>
              </div>

              {/* Flipping Right Page (when going forward) */}
              {isFlipping && flipDirection === 'next' && (
                <div 
                  className="absolute inset-0 origin-left"
                  style={{
                    transformStyle: 'preserve-3d',
                    animation: 'flipRightPage 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
                    zIndex: 40
                  }}
                >
                  <div className="absolute inset-0 bg-white backface-hidden shadow-2xl">
                    {currentPage === 0 && <Page1Right />}
                    {currentPage === 1 && <Page2Right />}
                    {currentPage === 2 && <Page3Right />}
                    <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-l from-transparent via-gray-300/30 to-gray-400/40 pointer-events-none"></div>
                  </div>
                  <div 
                    className="absolute inset-0 bg-gray-50 backface-hidden shadow-2xl"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    {currentPage === 0 && <Page2Left />}
                    {currentPage === 1 && <Page3Left />}
                    {currentPage === 2 && <Page4Left />}
                    <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-gray-300/30 to-gray-400/40 pointer-events-none"></div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Page Indicators - positioned outside book */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== currentPage && !isFlipping) {
                  setIsFlipping(true);
                  setFlipDirection(i > currentPage ? 'next' : 'prev');
                  setTimeout(() => {
                    setCurrentPage(i);
                    setIsFlipping(false);
                    setFlipDirection('');
                  }, 800);
                }
              }}
              disabled={isFlipping}
              className={`h-2.5 rounded-full transition-all ${
                currentPage === i ? 'bg-blue-500 w-10' : 'bg-gray-300 w-2.5 hover:bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        @keyframes flipRightPage {
          0% {
            transform: rotateY(0deg);
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          }
          50% {
            transform: rotateY(-90deg);
            box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          }
          100% {
            transform: rotateY(-180deg);
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          }
        }
        
        @keyframes flipLeftPage {
          0% {
            transform: rotateY(0deg);
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          }
          50% {
            transform: rotateY(90deg);
            box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          }
          100% {
            transform: rotateY(180deg);
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

// PAGE 1 LEFT - Profile
const Page1Left = () => (
  <div className="h-full p-8 md:p-12 pb-20 flex flex-col items-center justify-center">

    <div className="relative w-36 h-36 md:w-40 md:h-40">
  {/* Animated Gradient Border */}
  <div className="absolute inset-0 rounded-full p-[3px] animate-spin-slow
                  bg-[conic-gradient(from_0deg,cyan,purple,pink,cyan)] shadow-xl shadow-cyan-400/40">
    
    {/* White Outline */}
    <div className="rounded-full w-full h-full bg-white p-[3px]">
      
      {/* Image */}
      <div className="w-full h-full rounded-full overflow-hidden">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  </div>
</div>



<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Kiruthick R</h1>
<p className="text-cyan-600 font-semibold text-base md:text-lg mb-6 md:mb-8">Full Stack Developer</p>

<p className="text-gray-600 text-center text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-xl px-6">
  Hi, I'm Kiruthick Ranganathan, a dedicated Decision and Computing Sciences student at Coimbatore Institute of Technology. I'm passionate about technology and always looking for opportunities to expand my knowledge and skills. As a third-year student, I’ve gained experience in software development, web design, and data analysis. I'm excited to apply what I’ve learned to real-world projects and make a positive impact in the field. I’m always open to new challenges and collaborations—feel free to reach out. Thank you for visiting my portfolio!
</p>


    <div className="flex gap-3 md:gap-4 flex-wrap justify-center px-4">
      <button className="px-6 md:px-8 py-2 md:py-2.5 bg-cyan-500 text-white rounded font-semibold hover:bg-cyan-600 transition-colors shadow-md text-sm md:text-base">
        Contact me
      </button>
      
      <a href="/assets/resume.pdf" download>
        <button className="px-5 md:px-6 py-2 md:py-2.5 border-2 border-cyan-500 text-cyan-600 rounded font-semibold hover:bg-cyan-50 transition-colors text-sm md:text-base">
         Download CV
        </button>
      </a>

    </div>
  </div>
);

// PAGE 1 RIGHT - Education
const Page1Right = () => (
  <div className="h-full flex flex-col pb-20">
    <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
        <span className="text-cyan-500 text-xl md:text-2xl">●</span> Education
      </h2>

      <div className="space-y-6 md:space-y-8">

        <div className="flex gap-3 md:gap-4">
          <span className="text-cyan-500 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Coimbatore Institute of Technology</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">2023 - 2028</p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Pursuing B.Sc Decision and Computing Sciences. Focused on software development, web design, data analysis, and core computing principles.
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4">
          <span className="text-cyan-500 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Higher Secondary Education</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">2021 - 2023</p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Completed Higher Secondary with a strong focus on Mathematics and Computer Science.
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4">
          <span className="text-cyan-500 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">SSLC</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">2020 - 2021</p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Completed SSLC with excellent academic performance and active participation in school events.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// PAGE 2 LEFT - Work Experience
const Page2Left = () => (
  <div className="h-full flex flex-col pb-20">
    <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
        <span className="text-cyan-500 text-xl md:text-2xl">●</span> Work Experience
      </h2>

      <div className="space-y-6 md:space-y-8">

        <div className="flex gap-3 md:gap-4">
          <span className="text-cyan-500 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Freelance Web Designer</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">2025 - Present</p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Designed modern landing pages, portfolio websites, and business websites. Specialized in branding, UI/UX layout design, and client-focused solutions.
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4">
          <span className="text-cyan-500 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Freelance Graphic Designer</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">2025 - Present</p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Created digital posters, banners, and social media creatives. Experienced in and Canva.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// PAGE 2 RIGHT - My Services
const Page2Right = () => {
  const [openWeb, setOpenWeb] = useState(false);
  const [openApp, setOpenApp] = useState(false);

  return (
    <div className="h-full flex flex-col pb-20">
      <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

          {/* Web Development */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-5 md:p-6 rounded-xl border border-cyan-200 hover:shadow-xl transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
              <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>

            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
              Web Development
            </h3>

            <p className="text-gray-600 text-xs leading-relaxed mb-3 md:mb-4">
              I build modern, responsive, and high-performance websites using the latest
              web technologies.
            </p>

            <button
              onClick={() => setOpenWeb(!openWeb)}
              className="px-4 md:px-5 py-1.5 md:py-2 bg-cyan-500 text-white text-xs md:text-sm rounded-lg hover:bg-cyan-600 transition-colors font-medium shadow-md"
            >
              {openWeb ? "Show Less" : "Read More"}
            </button>

            {/* Read More Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openWeb ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                I specialize in React, Next.js, REST APIs, and UI/UX-focused
                front-end development. I create scalable systems including
                dashboards, admin panels, portfolio websites, and full-stack
                applications with clean, optimized code.
              </p>
            </div>
          </div>

          {/* App Development */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 md:p-6 rounded-xl border border-purple-200 hover:shadow-xl transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
              <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>

            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
              App Development
            </h3>

            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
              I develop powerful, user-friendly mobile apps for Android and iOS.
            </p>

            <button
              onClick={() => setOpenApp(!openApp)}
              className="px-4 md:px-5 py-1.5 md:py-2 bg-purple-600 text-white text-xs md:text-sm rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md"
            >
              {openApp ? "Show Less" : "Read More"}
            </button>

            {/* Read More Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openApp ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                I build cross-platform apps using React and Angular.  
                Features include smooth UI, API integration, storage, authentication,
                push notifications, and highly scalable architecture for real-world usage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PAGE 3 LEFT - My Skills
const Page3Left = () => (
  <div className="h-full flex flex-col pb-20">
    <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">My Skills</h2>

      <div className="space-y-6 md:space-y-8">

        {/* Front-End */}
        <div>
          <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 md:mb-4">Front-End</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
            <SkillBox color="orange" name="HTML" icon={<FaHtml5 />} />
            <SkillBox color="blue" name="CSS" icon={<FaCss3Alt />} />
            <SkillBox color="yellow" name="JavaScript" icon={<FaJs />} />
            <SkillBox color="cyan" name="React.js" icon={<FaReact />} />
            <SkillBox color="red" name="Angular" icon={<FaAngular />} />
            <SkillBox color="cyan" name="TailwindCSS" icon={<SiTailwindcss />} />
          </div>
        </div>

        {/* Back-End */}
        <div>
          <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 md:mb-4">Back-End</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
            <SkillBox color="blue" name="Python" icon={<FaPython />} />
            <SkillBox color="cyan" name="Node.js" icon={<FaNodeJs />} />
            <SkillBox color="blue" name="Flask" icon={<SiFlask />} />
            <SkillBox color="cyan" name="MongoDB" icon={<SiMongodb />} />
            <SkillBox color="blue" name="MySQL" icon={<SiMysql />} />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-gray-800 text-base md:text-lg mb-3 md:mb-4">Services</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
            <SkillBox color="black" name="Vercel" icon={<SiVercel />} />
            <SkillBox color="gray" name="Github" icon={<FaGithub />} />
          </div>
        </div>

      </div>
    </div>
  </div>
);

const SkillBox = ({ color, name, icon }) => {
  const colors = {
    orange: 'bg-orange-100 text-orange-600 border-orange-300',
    blue: 'bg-blue-100 text-blue-600 border-blue-300',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-300',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-300',
    green: 'bg-green-100 text-green-600 border-green-300',
    red: 'bg-red-100 text-red-600 border-red-300',
    purple: 'bg-purple-100 text-purple-600 border-purple-300',
    pink: 'bg-pink-100 text-pink-600 border-pink-300',
    gray: 'bg-gray-100 text-gray-700 border-gray-300',
    black: 'bg-gray-900 text-white border-gray-700'
  };

  return (
    <div className={`${colors[color]} border-2 rounded-xl p-2 md:p-3 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer`}>
      <span className="text-xl md:text-2xl mb-0.5 md:mb-1">{icon}</span>
      <span className="text-[10px] md:text-xs font-bold text-center">{name}</span>
    </div>
  );
};

// PAGE 3 RIGHT - My Projects
const ProjectBox = ({ title, description, gradient, btnColor, fullDescription, tech, images, githubLink }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const closeMainModal = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Project Card */}
      <div
        className={`p-6 md:p-8 rounded-3xl shadow-lg border border-white/40 ${gradient} transition-transform hover:-translate-y-1 relative`}
      >
        {/* GitHub Icon */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl hover:bg-gray-700 transition-all shadow-md hover:shadow-lg hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
          </a>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 pr-12">{title}</h3>

        <p className="text-gray-700 mb-5 text-sm md:text-base">{description}</p>

        {/* Open Modal */}
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-2 text-white rounded-xl font-semibold shadow-md hover:opacity-90"
          style={{ backgroundColor: btnColor }}
        >
          Know More
        </button>
      </div>

      {/* Popup Modal */}
      {open && (
        <Modal
          title={title}
          description={fullDescription}
          tech={tech}
          images={images}
          onClose={closeMainModal}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
};



// MODAL COMPONENT
const Modal = ({ title, description, tech, images, onClose, selectedImage, setSelectedImage }) => {
  return (
    <>
      {/* Main Modal Background */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
        
        {/* Modal Container */}
        <div
          className="bg-white rounded-2xl shadow-2xl border-8 border-blue-200 overflow-hidden"
          style={{
            width: 'min(1400px, calc(100% - 6rem))',
            height: 'min(800px, calc(100% - 6rem))',
            maxWidth: '90vw',
            maxHeight: '85vh'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-400 to-red-400 px-8 py-5 flex justify-between items-center border-b-4 border-blue-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              📂 {title}
            </h2>

            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl font-bold transition-all hover:rotate-90"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="h-[calc(100%-80px)] overflow-y-auto p-8 md:p-12">
            
            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                <span className="text-orange-500">●</span> Project Overview
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                <span className="text-orange-500">●</span> Tech Stack Used
              </h3>

              <div className="flex gap-3 flex-wrap">
                {tech?.map((t, i) => (
                  <span key={i} className="px-5 py-2.5 rounded-xl bg-cyan-100 text-cyan-700 border-2 border-cyan-200 font-bold shadow-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            {images?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-4">
                  <span className="text-orange-500">●</span> Project Screenshots
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl border-4 border-gray-200 hover:border-cyan-400 shadow-lg hover:shadow-2xl cursor-pointer group overflow-hidden"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} className="w-full object-cover group-hover:scale-105 duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Close */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-12 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-red-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition"
              >
                Close Project Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE ZOOM MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[200] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-5 -right-5 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full text-2xl flex items-center justify-center shadow-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};



// PAGE 3 RIGHT WITH SCROLL ENABLED
const Page3Right = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar">

      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">

        <ProjectBox
          title="Splitit-Smart bill Splitter"
          description="SplitIt is a modern, full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to simplify expense management for groups."
          fullDescription="It provides a seamless and intuitive platform for users to track shared costs, calculate splits, and settle debts, eliminating the confusion and manual calculations often associated with shared finances."
          tech={["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "JWT", "TailwindCSS"]}
          images={[
            "/splitit/splitit1.jpg",
            "/splitit/splitit2.jpg",
            "/splitit/splitit3.png",
            "/splitit/splitit4.jpg"
          ]}
          gradient="bg-gradient-to-br from-cyan-50 to-cyan-100"
          btnColor="#06b6d4"
          githubLink="https://github.com/Kiruthick-02/Splitit-Smart-bill-Splitter"
        />

        <ProjectBox
          title="Next-Gen Chat Application"
          description="A MEAN-stack real-time chat platform featuring messaging, event planning, and in-chat games.Powered by Socket.io and secured with JWT, enabling instant communication and user management.Built for scalability and future expansion, supporting upcoming features like media sharing and AI bots."
          fullDescription="The platform uses an Angular-based SPA for a smooth and dynamic user experience, supported by a robust RESTful backend and MongoDB.
                            Its real-time updates, intuitive UI, and modular design ensure efficiency and developer friendliness.
                            Overall, it delivers a scalable and feature-rich communication system ready for future expansion."
          tech={["Angular", "NodeJS", "MongoDB", "ExpressJS", "Socket.io", "Webrtc", "TailwindCSS"]}
          images={[
            "/chatapp/1.png",
            "/chatapp/2.png",
            "/chatapp/3.png",
            "/chatapp/4.png",
            "/chatapp/5.png",
            "/chatapp/6.png",
            "/chatapp/7.png",
            "/chatapp/8.png",
            "/chatapp/9.png"
          ]}
          gradient="bg-gradient-to-br from-purple-50 to-purple-100"
          btnColor="#9333ea"
          githubLink="https://github.com/Kiruthick-02/Next-gen-chatapp"
        />

        <ProjectBox
          title="FitTrack - Fitness Tracker"
          description="FitTrack is a full-stack fitness tracking application that helps users monitor their workouts, nutrition, and progress with personalized insights and goal tracking."
          fullDescription="An all-in-one fitness companion that allows users to log workouts, track calories, set fitness goals, and monitor progress over time. Features include workout templates, nutrition database, progress charts, and AI-powered recommendations for optimal results."
          tech={["ReactJS", "NodeJS", "PostgreSQL", "ExpressJS", "ChartJS", "Stripe", "TailwindCSS"]}
          images={[
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
            "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800",
            "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800",
          ]}
          gradient="bg-gradient-to-br from-green-50 to-green-100"
          btnColor="#10b981"
          githubLink="https://github.com/yourusername/fittrack"
        />
        
        <ProjectBox
          title="ShopEase - E-Commerce Platform"
          description="ShopEase is a feature-rich e-commerce platform built with MERN stack, offering seamless shopping experience with secure payments and order management."
          fullDescription="A modern e-commerce solution with comprehensive features including product catalog, shopping cart, secure checkout with Stripe integration, order tracking, user reviews, wishlist functionality, and admin dashboard for inventory and sales management."
          tech={["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Redux", "Stripe", "AWS S3", "TailwindCSS"]}
          images={[
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
          ]}
          gradient="bg-gradient-to-br from-orange-50 to-orange-100"
          btnColor="#f97316"
          githubLink="https://github.com/yourusername/shopease"
        />
       
      </div>
    </div>
  );
};

// PAGE 4 LEFT - Contact Me
const Page4Left = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
  const { name, email, message } = formData;

  const subject = encodeURIComponent("New Contact Message");
  const body = encodeURIComponent(
    `Name: ${name}
    Email: ${email}
    Message: ${message}`
  );

  const mailToLink = `mailto:kiruthickrn@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailToLink;

  setFormData({ name: '', email: '', message: '' });
};


  return (
    <div className="h-full flex flex-col pb-20">
      <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Contact Me!</h2>
        
        <div className="space-y-4 md:space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none resize-none text-gray-800 placeholder-gray-400 text-sm md:text-base"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 md:py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors shadow-md text-sm md:text-base"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

// PAGE 4 RIGHT - Back Cover
const Page4Right = () => (
  <div className="h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center pb-20">
    <div className="text-center">
      <div className="text-6xl md:text-7xl mb-4 md:mb-6">📚</div>
      <p className="text-gray-400 text-xl md:text-2xl font-semibold">Thank You!</p>
    </div>
  </div>
);

export default PortfolioBook;