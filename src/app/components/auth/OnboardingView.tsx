import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Wallet, TrendingUp, Send } from 'lucide-react';

interface OnboardingViewProps {
  onComplete: () => void;
}

const slides = [
  {
    id: 1,
    title: "Manage Your Expenses",
    description: "Track where your money goes with detailed breakdowns and analytics to stay on top of your finances.",
    icon: TrendingUp,
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Send & Request Money",
    description: "Instantly transfer funds to friends and family or request payments with just a few taps.",
    icon: Send,
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Exclusive Wallet Benefits",
    description: "Use our wallet for transactions and unlock exclusive cashbacks, discounts, and premium rewards.",
    icon: Wallet,
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop"
  }
];

export const OnboardingView = ({ onComplete }: OnboardingViewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-white dark:bg-black font-urbanist relative overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode='wait'>
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black z-10" />
          <img 
            src={slides[currentSlide].image} 
            alt="Background" 
            className="w-full h-[70%] object-cover opacity-80"
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex-1 z-10 flex flex-col justify-end px-8 pb-12">
        <div className="mb-8">
           <AnimatePresence mode='wait'>
             <motion.div
               key={currentSlide}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
             >
               <div className={`w-16 h-16 rounded-2xl ${slides[currentSlide].color} flex items-center justify-center mb-6 shadow-xl`}>
                 {React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 text-white" })}
               </div>
               <h1 className="text-4xl font-extrabold text-foreground mb-4 leading-tight">
                 {slides[currentSlide].title}
               </h1>
               <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                 {slides[currentSlide].description}
               </p>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mb-10">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              animate={{ 
                width: currentSlide === index ? 32 : 8,
                backgroundColor: currentSlide === index ? 'var(--primary)' : 'var(--muted-foreground)',
                opacity: currentSlide === index ? 1 : 0.3
              }}
              className="h-2 rounded-full transition-colors"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {currentSlide < slides.length - 1 ? (
            <>
              <button 
                onClick={handleSkip}
                className="px-6 py-4 text-muted-foreground font-bold hover:text-foreground transition-colors"
              >
                Skip
              </button>
              <button 
                onClick={handleNext}
                className="flex-1 bg-primary text-primary-foreground py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </>
          ) : (
             <button 
                onClick={handleNext}
                className="flex-1 bg-primary text-primary-foreground py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
          )}
        </div>
      </div>
    </div>
  );
};