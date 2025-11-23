import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Code} from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaNodeJs, FaGithub, FaAngular,FaGlobe, FaFolder, FaEllipsisV,FaCode, FaMobileAlt, FaServer, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiFlask, SiVercel } from "react-icons/si";
import ProfileCard from './bits/ProfileCard';


const PortfolioBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');
  const [bookOpened, setBookOpened] = useState(false);

  const totalPages = 4;

  const openBook = () => {
    if (!bookOpened) {
      setBookOpened(true);
      setIsFlipping(true);
      setFlipDirection('open');
      setTimeout(() => {
        setCurrentPage(1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 1500);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages && !isFlipping && bookOpened) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 1200);
    }
  };

  const prevPage = () => {
    if (currentPage > 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
        setFlipDirection('');
      }, 1200);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
      
      {/* Book Container */}
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div 
          className="relative shadow-2xl" 
          style={{ 
            perspective: '3000px',
            width: 'calc(100% - 4rem)',
            height: 'calc(100% - 4rem)',
            maxWidth: '1400px',
            maxHeight: '800px'
          }}
        >
          {/* COVER PAGE (Page 0) - Enhanced Book Style */}
{!bookOpened && (
  <div 
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
    onClick={openBook}
    style={{ 
      zIndex: 100,
      height: "90vh",
      width: "75vh",
      perspective: "2500px"
    }}
  >
    {/* Book Wrapper with hover effect */}
    <div 
      className="relative w-full h-full transition-transform duration-500 group-hover:scale-105"
      style={{ transformStyle: "preserve-3d" }}
    >

      {/* ----- FRONT COVER ----- */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          transform: "translateZ(20px)",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.5), 0 0 30px rgba(220,38,38,0.3)",
          borderRadius: "6px",
          border: "2px solid rgba(220,38,38,0.3)"
        }}
      >
        {/* Animated leather texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 6px)",
            animation: "textureShift 20s linear infinite"
          }}
        />

        {/* Glowing inner border */}
        <div className="absolute inset-6 border-2 border-red-900/40 rounded-md shadow-inner" 
             style={{
               boxShadow: "inset 0 0 20px rgba(220,38,38,0.2)"
             }}
        />

        {/* ---- DEATH NOTE CONTENT ---- */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 p-6">
            <h1
              className="text-6xl md:text-7xl font-bold text-white group-hover:text-red-500 transition-colors duration-500"
              style={{
                fontFamily: "'Cinzel', serif",
                textShadow: "3px 3px 12px rgba(220,38,38,0.8), 0 0 30px rgba(220,38,38,0.4)"
              }}
            >
              PORTFOLIO
            </h1>

            <p
              className="text-lg text-red-400 tracking-[0.4em] animate-pulse"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              デスノート
            </p>

            {/* Enhanced Divider */}
            <div className="flex justify-center items-center gap-4 py-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
              <div className="w-5 h-5 border-2 border-red-600 rounded-full animate-spin-slow shadow-lg shadow-red-600/50"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-red-600 to-transparent"></div>
            </div>

            {/* Portfolio Info */}
            <p className="text-red-400 uppercase tracking-widest text-sm font-semibold">
              Welcome
            </p>
            <p className="text-2xl font-bold text-white tracking-wide group-hover:scale-105 transition-transform duration-300">
              Kiruthick Ranganathan
            </p>
            <p className="text-sm text-gray-400 tracking-wider">Full Stack Developer</p>

            {/* Enhanced Click instruction */}
            <div className="mt-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 border-2 border-red-600 rounded-lg backdrop-blur-sm group-hover:bg-red-600/40 transition-all duration-300">
                <p className="text-xs text-red-400 uppercase tracking-wider font-bold">
                  Click to Open
                </p>
                <ChevronRight className="w-4 h-4 text-red-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Corner ornaments */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-red-900/60"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-red-900/60"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-red-900/60"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-red-900/60"></div>
      </div>

      {/* ----- ENHANCED SPINE ----- */}
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-black via-gray-900 to-gray-800"
        style={{
          width: "42px",
          transform: "rotateY(-90deg) translateZ(-21px)",
          transformOrigin: "left",
          borderRadius: "6px 0 0 6px",
          boxShadow: "inset -15px 0 25px rgba(0,0,0,0.6)"
        }}
      >
        {/* Spine texture */}
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)"
             }}
        />
        <div className="h-full flex items-center justify-center">
          <p
            className="text-white text-xs font-bold tracking-widest rotate-90"
            style={{ 
              fontFamily: "'Cinzel', serif",
              textShadow: "1px 1px 3px rgba(0,0,0,0.8)"
            }}
          >
            KIRUTHICK RANGANATHAN
          </p>
        </div>
      </div>

      {/* ----- ENHANCED PAGE EDGES ----- */}
      <div
        className="absolute right-0 top-0 h-full bg-gradient-to-l from-gray-100 via-gray-200 to-white"
        style={{
          width: "20px",
          transform: "translateZ(19px)",
          boxShadow: "inset -4px 0 8px rgba(0,0,0,0.4)",
          borderRadius: "0 6px 6px 0"
        }}
      >
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="h-[2.5%] border-b border-gray-400/40"
            style={{
              opacity: 0.3 + (i % 3) * 0.1
            }}
          ></div>
        ))}
      </div>
    </div>
  </div>
)}


          {/* MAIN BOOK PAGES - Enhanced with better animations */}
          {bookOpened && (
            <div className="relative w-full h-full flex" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Left Page Container */}
              <div className="relative w-1/2 h-full" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Static Left Page */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" 
                     style={{ 
                       zIndex: 10, 
                       border: '3px solid #000',
                       boxShadow: 'inset 0 0 30px rgba(0,0,0,0.05)'
                     }}>
                  {currentPage === 1 && <Page1Left />}
                  {currentPage === 2 && <Page2Left />}
                  {currentPage === 3 && <Page3Left />}
                  {currentPage === 4 && <Page4Left />}
                  
                  {/* Enhanced page edge shadow */}
                  <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent via-gray-400/20 to-gray-600/30 pointer-events-none">
                    <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-r from-transparent to-gray-800/20"></div>
                  </div>
                  
                  {/* Left Page Navigation */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1 || isFlipping}
                      className={`w-12 h-12 flex items-center justify-center transition-all pointer-events-auto rounded-full shadow-lg ${
                        currentPage === 1 || isFlipping ? 'text-gray-300 cursor-not-allowed bg-gray-100' : 'text-black hover:text-white hover:bg-red-600 bg-white border-2 border-black'
                      }`}
                    >
                      <ChevronLeft className="w-7 h-7" />
                    </button>
                    <span className="text-gray-700 font-bold text-xl bg-white px-4 py-2 rounded-lg shadow-md" style={{ fontFamily: "'Courier New', monospace" }}>{currentPage * 2 - 1}</span>
                    <div className="w-12"></div>
                  </div>
                </div>

                {/* Flipping Left Page - Enhanced */}
                {isFlipping && flipDirection === 'prev' && (
                  <div 
                    className="absolute inset-0 origin-right"
                    style={{
                      transformStyle: 'preserve-3d',
                      animation: 'flipLeftPageEnhanced 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                      zIndex: 40
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 backface-hidden shadow-2xl border-3 border-black">
                      {currentPage === 2 && <Page1Right />}
                      {currentPage === 3 && <Page2Right />}
                      {currentPage === 4 && <Page3Right />}
                      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-l from-transparent via-gray-400/20 to-gray-600/30 pointer-events-none"></div>
                    </div>
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 backface-hidden shadow-2xl border-3 border-black"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      {currentPage === 2 && <Page1Left />}
                      {currentPage === 3 && <Page2Left />}
                      {currentPage === 4 && <Page3Left />}
                      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent via-gray-400/20 to-gray-600/30 pointer-events-none"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Center Spine */}
              <div className="w-3 bg-gradient-to-b from-gray-900 via-black to-gray-900 shadow-2xl z-50 relative">
                <div className="absolute inset-0 opacity-40" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)"
                }}></div>
              </div>

              {/* Right Page Container */}
              <div className="relative w-1/2 h-full" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Static Right Page */}
                <div className="absolute inset-0 bg-gradient-to-bl from-white to-gray-50" 
                     style={{ 
                       zIndex: 10, 
                       border: '3px solid #000',
                       boxShadow: 'inset 0 0 30px rgba(0,0,0,0.05)'
                     }}>
                  {currentPage === 1 && <Page1Right />}
                  {currentPage === 2 && <Page2Right />}
                  {currentPage === 3 && <Page3Right />}
                  {currentPage === 4 && <Page4Right />}
                  
                  {/* Enhanced page edge shadow */}
                  <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-l from-transparent via-gray-400/20 to-gray-600/30 pointer-events-none">
                    <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-l from-transparent to-gray-800/20"></div>
                  </div>
                  
                  {/* Right Page Navigation */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
                    <div className="w-12"></div>
                    <span className="text-gray-700 font-bold text-xl bg-white px-4 py-2 rounded-lg shadow-md" style={{ fontFamily: "'Courier New', monospace" }}>{currentPage * 2}</span>
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages || isFlipping}
                      className={`w-12 h-12 flex items-center justify-center transition-all pointer-events-auto rounded-full shadow-lg ${
                        currentPage === totalPages || isFlipping ? 'text-gray-300 cursor-not-allowed bg-gray-100' : 'text-black hover:text-white hover:bg-red-600 bg-white border-2 border-black'
                      }`}
                    >
                      <ChevronRight className="w-7 h-7" />
                    </button>
                  </div>
                </div>

                {/* Flipping Right Page - Enhanced */}
                {isFlipping && (flipDirection === 'next' || flipDirection === 'open') && (
                  <div 
                    className="absolute inset-0 origin-left"
                    style={{
                      transformStyle: 'preserve-3d',
                      animation: flipDirection === 'open' 
                        ? 'flipRightPageOpenEnhanced 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                        : 'flipRightPageEnhanced 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                      zIndex: 40
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-bl from-white to-gray-50 backface-hidden shadow-2xl border-3 border-black">
                      {(currentPage === 0 || currentPage === 1) && <Page1Right />}
                      {currentPage === 2 && <Page2Right />}
                      {currentPage === 3 && <Page3Right />}
                      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-l from-transparent via-gray-400/20 to-gray-600/30 pointer-events-none"></div>
                    </div>
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 backface-hidden shadow-2xl border-3 border-black"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      {(currentPage === 0 || currentPage === 1) && <Page2Left />}
                      {currentPage === 2 && <Page3Left />}
                      {currentPage === 3 && <Page4Left />}
                      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent via-gray-400/20 to-gray-600/30 pointer-events-none"></div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Enhanced Page Indicators */}
        {bookOpened && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const targetPage = i + 1;
                  if (targetPage !== currentPage && !isFlipping) {
                    setIsFlipping(true);
                    setFlipDirection(targetPage > currentPage ? 'next' : 'prev');
                    setTimeout(() => {
                      setCurrentPage(targetPage);
                      setIsFlipping(false);
                      setFlipDirection('');
                    }, 1200);
                  }
                }}
                disabled={isFlipping}
                className={`h-3 rounded-full transition-all ${
                  currentPage === i + 1 ? 'bg-red-600 w-12 shadow-lg shadow-red-600/50' : 'bg-gray-400 w-3 hover:bg-red-400 hover:w-8'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        @keyframes textureShift {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        @keyframes flipRightPageOpenEnhanced {
          0% {
            transform: perspective(2500px) rotateY(0deg) translateZ(0px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }
          15% {
            transform: perspective(2500px) rotateY(-15deg) translateZ(30px);
            box-shadow: 5px 25px 60px rgba(0,0,0,0.6);
          }
          50% {
            transform: perspective(2500px) rotateY(-90deg) translateZ(80px) translateX(20px);
            box-shadow: 15px 40px 90px rgba(0,0,0,0.8);
          }
          85% {
            transform: perspective(2500px) rotateY(-165deg) translateZ(30px);
            box-shadow: 5px 25px 60px rgba(0,0,0,0.6);
          }
          100% {
            transform: perspective(2500px) rotateY(-180deg) translateZ(0px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }
        }
        
        @keyframes flipRightPageEnhanced {
          0% {
            transform: perspective(2500px) rotateY(0deg) translateZ(0px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          }
          20% {
            transform: perspective(2500px) rotateY(-20deg) translateZ(25px);
            box-shadow: 5px 25px 60px rgba(0,0,0,0.5);
          }
          50% {
            transform: perspective(2500px) rotateY(-90deg) translateZ(60px) translateX(15px);
            box-shadow: 12px 35px 80px rgba(0,0,0,0.7);
          }
          80% {
            transform: perspective(2500px) rotateY(-160deg) translateZ(25px);
            box-shadow: 5px 25px 60px rgba(0,0,0,0.5);
          }
          100% {
            transform: perspective(2500px) rotateY(-180deg) translateZ(0px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          }
        }
        
        @keyframes flipLeftPageEnhanced {
          0% {
            transform: perspective(2500px) rotateY(0deg) translateZ(0px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          }
          20% {
            transform: perspective(2500px) rotateY(20deg) translateZ(25px);
            box-shadow: -5px 25px 60px rgba(0,0,0,0.5);
          }
          50% {
            transform: perspective(2500px) rotateY(90deg) translateZ(60px) translateX(-15px);
            box-shadow: -12px 35px 80px rgba(0,0,0,0.7);
          }
          80% {
            transform: perspective(2500px) rotateY(160deg) translateZ(25px);
            box-shadow: -5px 25px 60px rgba(0,0,0,0.5);
          }
          100% {
            transform: perspective(2500px) rotateY(180deg) translateZ(0px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
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
          background: #1f2937;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #374151;
        }
      `}</style>
    </div>
  );
};

//PAGE 1 LEFT - Profile Overview
const Page1Left = () => (
  <div className="h-full w-full flex flex-col p-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">

    {/* ---- TOP TWO COLUMNS ---- */}
    <div className="flex w-full">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-start justify-start p-4">
        <div className="scale-[0.75] md:scale-[0.85] transform origin-top">
          <ProfileCard
            name=""
            title=""
            handle="kiruthick"
            status="Online"
            avatarUrl="profile.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="w-1/2 flex flex-col items-start justify-start p-4 space-y-4">
        
        <a 
          href="https://www.linkedin.com/in/kiruthick-ranganathan-5941bb274/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="flex items-center gap-3 text-blue-700 text-lg hover:underline"
          target="_blank"
        >
          <FaLinkedin className="text-3xl" />
         <span style={{ fontFamily: "'Times New Roman', Times, serif" }}>Kiruthick Ranganathan</span>
        </a>

        <a 
          href="https://github.com/kiruthick"
          className="flex items-center gap-3 text-gray-900 text-lg hover:underline"
          target="_blank"
        >
          <FaGithub className="text-3xl" />
          <span style={{ fontFamily: "'Times New Roman', Times, serif" }}>Kiruthick-02</span>
        </a>

        <a 
          href="tel:+91 8122742785"
          className="flex items-center gap-3 text-green-600 text-lg hover:underline"
        >
          <FaPhone className="text-3xl" />
          <span>+91 8122742785</span>
        </a>

        <a 
          href="mailto:kiruthickrn@gmail.com"
          className="flex items-center gap-3 text-red-600 text-lg hover:underline"
        >
          <FaEnvelope className="text-3xl" />
          <span>kiruthickrn@gmail.com</span>
        </a>
      </div>
    </div>

    {/* ---- CENTERED SECTION BELOW BOTH COLUMNS ---- */}
    <div className="w-full flex flex-col items-center justify-center mb-10 text-center">

      <h1 className="text-3xl md:text-4xl font-bold text-black mb-1"
          style={{ fontFamily: "'Courier New', monospace" }}>
        Kiruthick R
      </h1>

      <p className="text-red-600 font-bold text-base md:text-lg mb-2"
         style={{ fontFamily: "'Courier New', monospace" }}>
        Full Stack Developer
      </p>

      <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-6 max-w-xl px-4"
         style={{ fontFamily: "'Arial', sans-serif" }}>
        Hi, I'm Kiruthick Ranganathan, a dedicated Decision and Computing Sciences student at Coimbatore Institute of Technology. I'm passionate about technology and always looking for opportunities to expand my knowledge and skills. As a third-year student, I’ve gained experience in software development, web design, and data analysis. I'm excited to apply what I’ve learned to real-world projects and make a positive impact in the field. I’m always open to new challenges and collaborations—feel free to reach out. Thank you for visiting my portfolio!
      </p>

      <div className="flex gap-3 md:gap-4 flex-wrap justify-center px-4">
        <button className="px-6 md:px-8 py-2 md:py-2.5 bg-black text-white rounded border-2 border-black font-bold hover:bg-white hover:text-black transition-colors text-sm md:text-base">
          Contact Me
        </button>

        <a href="/assets/resume.pdf">
          <button className="px-5 md:px-6 py-2 md:py-2.5 border-2 border-black text-black rounded font-bold hover:bg-black hover:text-white transition-colors text-sm md:text-base">
            Download CV
          </button>
        </a>
      </div>

    </div>

  </div>
);


// PAGE 1 RIGHT - Education
const Page1Right = () => (
  <div className="h-full flex flex-col pb-20 bg-gradient-to-bl from-white to-gray-50">
    <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 flex items-center gap-3 border-b-4 border-black pb-3" style={{ fontFamily: "'Courier New', monospace" }}>
        <span className="text-red-600 text-xl md:text-2xl">■</span> Education
      </h2>

      <div className="space-y-6 md:space-y-8">
        <div className="flex gap-3 md:gap-4 border-l-4 border-black pl-4">
          <span className="text-red-600 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-black text-base md:text-lg mb-1">Coimbatore Institute of Technology</h3>
            <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 font-semibold">2023 - 2028</p>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
              Pursuing B.Sc Decision and Computing Sciences. Focused on software development, web design, data analysis, and core computing principles.
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 border-l-4 border-black pl-4">
          <span className="text-red-600 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-black text-base md:text-lg mb-1">Higher Secondary Education</h3>
            <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 font-semibold">2021 - 2023</p>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
              Completed Higher Secondary with a strong focus on Mathematics and Computer Science.
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 border-l-4 border-black pl-4">
          <span className="text-red-600 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-black text-base md:text-lg mb-1">SSLC</h3>
            <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 font-semibold">2020 - 2021</p>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
              Completed SSLC with excellent academic performance and active participation in school events.            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// PAGE 2 LEFT - Work Experience
const Page2Left = () => (
  <div className="h-full flex flex-col pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 flex items-center gap-3 border-b-4 border-black pb-3" style={{ fontFamily: "'Courier New', monospace" }}>
        <span className="text-red-600 text-xl md:text-2xl">■</span> Work Experience
      </h2>

      <div className="space-y-6 md:space-y-8">
        <div className="flex gap-3 md:gap-4 border-l-4 border-black pl-4">
          <span className="text-red-600 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-black text-base md:text-lg mb-1">Freelance Web Designer</h3>
            <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 font-semibold">2025 - Present</p>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
              Designed modern landing pages, portfolio websites, and business websites. Specialized in branding, UI/UX layout design, and client-focused solutions.
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 border-l-4 border-black pl-4">
          <span className="text-red-600 text-lg md:text-xl mt-1">●</span>
          <div>
            <h3 className="font-bold text-black text-base md:text-lg mb-1">Freelance Graphic Designer</h3>
            <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 font-semibold">2025 - Present</p>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
              Created digital posters, banners, and social media creatives. Experienced in Canva and Adobe Creative Suite.
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
    <div className="h-full flex flex-col pb-20 bg-gradient-to-bl from-white to-gray-50">
      <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 border-b-4 border-black pb-3" style={{ fontFamily: "'Courier New', monospace" }}>
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-gray-100 p-5 md:p-6 rounded border-4 border-black hover:shadow-2xl transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded flex items-center justify-center mb-3 md:mb-4">
              <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>

            <h3 className="font-bold text-black text-base md:text-lg mb-2">Web Development</h3>
            <p className="text-gray-800 text-xs leading-relaxed mb-3 md:mb-4">
              I build modern, responsive, and high-performance websites using the latest web technologies.
            </p>

            <button
              onClick={() => setOpenWeb(!openWeb)}
              className="px-4 md:px-5 py-1.5 md:py-2 bg-black text-white text-xs md:text-sm rounded hover:bg-red-600 transition-colors font-bold border-2 border-black"
            >
              {openWeb ? "Show Less" : "Read More"}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openWeb ? "max-h-40 mt-3" : "max-h-0"}`}>
              <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
                Specializing in React, Next.js, REST APIs, and UI/UX-focused development. Creating scalable systems including dashboards, admin panels, and full-stack applications.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-5 md:p-6 rounded border-4 border-black hover:shadow-2xl transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded flex items-center justify-center mb-3 md:mb-4">
              <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>

            <h3 className="font-bold text-black text-base md:text-lg mb-2">App Development</h3>
            <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
              I develop powerful, user-friendly mobile apps for Android and iOS.
            </p>

            <button
              onClick={() => setOpenApp(!openApp)}
              className="px-4 md:px-5 py-1.5 md:py-2 bg-black text-white text-xs md:text-sm rounded hover:bg-red-600 transition-colors font-bold border-2 border-black"
            >
              {openApp ? "Show Less" : "Read More"}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openApp ? "max-h-40 mt-3" : "max-h-0"}`}>
              <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
                Building cross-platform apps using React and Angular with smooth UI, API integration, authentication, and scalable architecture.
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
  <div className="h-full flex flex-col pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 border-b-4 border-black pb-3" style={{ fontFamily: "'Courier New', monospace" }}>My Skills</h2>

      <div className="space-y-6 md:space-y-8">
        <div>
          <h3 className="font-bold text-black text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
            <span className="text-red-600">■</span> Front-End
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
            <SkillBox color="orange" name="HTML" icon={<FaHtml5 />} />
            <SkillBox color="blue" name="CSS" icon={<FaCss3Alt />} />
            <SkillBox color="yellow" name="JavaScript" icon={<FaJs />} />
            <SkillBox color="cyan" name="React.js" icon={<FaReact />} />
            <SkillBox color="red" name="Angular" icon={<FaAngular />} />
            <SkillBox color="cyan" name="TailwindCSS" icon={<SiTailwindcss />} />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-black text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
            <span className="text-red-600">■</span> Back-End
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
            <SkillBox color="blue" name="Python" icon={<FaPython />} />
            <SkillBox color="green" name="Node.js" icon={<FaNodeJs />} />
            <SkillBox color="gray" name="Flask" icon={<SiFlask />} />
            <SkillBox color="green" name="MongoDB" icon={<SiMongodb />} />
            <SkillBox color="blue" name="MySQL" icon={<SiMysql />} />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-black text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
            <span className="text-red-600">■</span> Services
          </h3>
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
    orange: 'bg-orange-100 text-orange-600 border-black',
    blue: 'bg-blue-100 text-blue-600 border-black',
    yellow: 'bg-yellow-100 text-yellow-700 border-black',
    cyan: 'bg-cyan-100 text-cyan-700 border-black',
    green: 'bg-green-100 text-green-700 border-black',
    red: 'bg-red-100 text-red-600 border-black',
    purple: 'bg-purple-100 text-purple-600 border-black',
    pink: 'bg-pink-100 text-pink-600 border-black',
    gray: 'bg-gray-200 text-gray-800 border-black',
    black: 'bg-black text-white border-black'
  };

  return (
    <div className={`${colors[color]} border-3 rounded p-2 md:p-3 flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer`}>
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
      <div className={`p-6 md:p-8 rounded border-4 border-black shadow-lg ${gradient} transition-transform hover:-translate-y-1 relative`}>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xl hover:bg-red-600 transition-all shadow-md hover:shadow-lg hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
          </a>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-black mb-2 pr-12">{title}</h3>
        <p className="text-gray-800 mb-5 text-sm md:text-base">{description}</p>

        <button
          onClick={() => setOpen(true)}
          className="px-6 py-2 bg-black text-white rounded font-bold shadow-md hover:bg-red-600 transition-colors border-2 border-black"
        >
          Know More
        </button>
      </div>

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

const Modal = ({ title, description, tech, images, onClose, selectedImage, setSelectedImage }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4">
        <div
          className="bg-white rounded-xl shadow-2xl border-8 border-black overflow-hidden"
          style={{
            width: 'min(1400px, calc(100% - 6rem))',
            height: 'min(800px, calc(100% - 6rem))',
            maxWidth: '90vw',
            maxHeight: '85vh'
          }}
        >
          <div className="bg-black px-8 py-5 flex justify-between items-center border-b-4 border-red-600">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Courier New', monospace" }}>
              📂 {title}
            </h2>

            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white text-2xl font-bold transition-all hover:rotate-90"
            >
              ✕
            </button>
          </div>

          <div className="h-[calc(100%-80px)] overflow-y-auto p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-3">
                <span className="text-red-600">■</span> Project Overview
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">{description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-3">
                <span className="text-red-600">■</span> Tech Stack Used
              </h3>

              <div className="flex gap-3 flex-wrap">
                {tech?.map((t, i) => (
                  <span key={i} className="px-5 py-2.5 rounded bg-gray-200 text-black border-2 border-black font-bold shadow-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {images?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-4">
                  <span className="text-red-600">■</span> Project Screenshots
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded border-4 border-black hover:border-red-600 shadow-lg hover:shadow-2xl cursor-pointer group overflow-hidden"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} className="w-full object-cover group-hover:scale-105 duration-300" alt={`Screenshot ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-12 py-4 rounded bg-black text-white font-bold text-lg shadow-lg hover:bg-red-600 transition border-2 border-black"
              >
                Close Project Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[200] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white" alt="Zoomed screenshot" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-5 -right-5 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full text-2xl flex items-center justify-center shadow-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Page3Right = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-gradient-to-bl from-white to-gray-50">
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-black pb-3" style={{ fontFamily: "'Courier New', monospace" }}>My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <ProjectBox
          title="Splitit-Smart Bill Splitter"
          description="SplitIt is a modern, full-stack MERN web application designed to simplify expense management for groups."
          fullDescription="It provides a seamless and intuitive platform for users to track shared costs, calculate splits, and settle debts, eliminating the confusion and manual calculations often associated with shared finances."
          tech={["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "JWT", "TailwindCSS"]}
          images={[
            "/splitit/splitit1.jpg",
            "/splitit/splitit2.jpg",
            "/splitit/splitit3.png",
            "/splitit/splitit4.jpg"
          ]}
          gradient="bg-gray-100"
          btnColor="#000000"
          githubLink="https://github.com/Kiruthick-02/Splitit-Smart-bill-Splitter"
        />

        <ProjectBox
          title="Next-Gen Chat Application"
          description="A MEAN-stack real-time chat platform featuring messaging, event planning, and in-chat games."
          fullDescription="The platform uses an Angular-based SPA for a smooth and dynamic user experience, supported by a robust RESTful backend and MongoDB. Its real-time updates, intuitive UI, and modular design ensure efficiency and developer friendliness. Overall, it delivers a scalable and feature-rich communication system ready for future expansion."
          tech={["Angular", "NodeJS", "MongoDB", "ExpressJS", "Socket.io", "WebRTC", "TailwindCSS"]}
          images={[
            "/chatapp/1.png",
            "/chatapp/2.png",
            "/chatapp/3.png",
            "/chatapp/4.png"
          ]}
          gradient="bg-gray-100"
          btnColor="#000000"
          githubLink="https://github.com/Kiruthick-02/Next-gen-chatapp"
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
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailToLink = `mailto:kiruthickrn@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="h-full flex flex-col pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-8 md:p-12 pb-0 overflow-y-auto flex-1 custom-scrollbar">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 border-b-4 border-black pb-3" style={{ fontFamily: "'Courier New', monospace" }}>Contact Me!</h2>
        
        <div className="space-y-4 md:space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-3 border-black rounded focus:border-red-600 focus:outline-none text-black placeholder-gray-500 text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-3 border-black rounded focus:border-red-600 focus:outline-none text-black placeholder-gray-500 text-sm md:text-base"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-3 border-black rounded focus:border-red-600 focus:outline-none resize-none text-black placeholder-gray-500 text-sm md:text-base"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 md:py-3 bg-black text-white rounded font-bold hover:bg-red-600 transition-colors shadow-md text-sm md:text-base border-2 border-black"
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
  <div className="h-full bg-black flex items-center justify-center pb-20 border-4 border-gray-800">
    <div className="text-center">
      <div className="text-6xl md:text-7xl mb-4 md:mb-6">📚</div>
      <p className="text-white text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Courier New', monospace" }}>Thank You!</p>
      <p className="text-gray-400 text-lg" style={{ fontFamily: "'Courier New', monospace" }}>End of Portfolio</p>
    </div>
  </div>
);

export default PortfolioBook;