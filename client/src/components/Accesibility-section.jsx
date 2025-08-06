import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "../assets/accessibility-image.jpg",
    alt: "accessibility image"
  },
  {
    src: "../assets/accessibility-image-1.jpg",
    alt: "accessibility image"
  },
  {
    src: "../assets/accessibility-image-2.jpg",
    alt: "accessibility image"
  },
  {
    src: "../assets/accessibility-image-3.jpg",
    alt: "accessibility image"
  }
];

const paragraphContent = [
  "Designing with accessibility in mind is more than a moral imperative—it's a strategic advantage. When we build experiences that accommodate diverse needs, we create usability for everyone, not just those with permanent disabilities.",
  "Consider screen reader users, people with low vision, or someone browsing on a phone in sunlight. Features like proper heading structure, alt text, and contrast benefit all users.",
  "Ultimately, accessible design is human-centered. It's not just doing the right thing—it's doing things right. And when we get it right, everyone belongs."
];

export default function Accessibility() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState([0]);

  useEffect(() => {
    const cycleContent = () => {
      if (visibleParagraphs.length < paragraphContent.length) {
        setVisibleParagraphs(prev => [...prev, prev.length]);
      } else {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setTimeout(() => setVisibleParagraphs([0]), 800);
      }
    };

    const interval = setInterval(cycleContent, 3000);
    return () => clearInterval(interval);
  }, [visibleParagraphs]);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        
        {/* Animated Floating Circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/30 dark:bg-indigo-700/20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 50],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-24 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
          
          {/* TEXT SECTION */}
          <div className="space-y-8 min-h-[300px] backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 p-8 rounded-2xl shadow-lg">
            {paragraphContent.map((text, index) => (
              <AnimatePresence key={index}>
                {visibleParagraphs.includes(index) && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {text}
                  </motion.p>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* IMAGE SECTION */}
          <div className="relative flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-72 h-72 sm:w-80 sm:h-80 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl p-4 flex items-center justify-center backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-3/4 h-auto transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            
            {/* Enhanced Decorative Elements */}
            <motion.span 
              className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 dark:bg-blue-600/30 rounded-full blur-xl"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400/20 dark:bg-purple-600/30 rounded-full blur-xl"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}