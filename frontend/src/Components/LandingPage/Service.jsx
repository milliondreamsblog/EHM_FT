import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';


const cn = (...classes) => classes.filter(Boolean).join(' ');


const CheckIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

 
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    
    const particles = [];
    const particleCount = 50;

    
    const greenColors = [
      'rgba(34, 197, 94, 0.6)',   // green-500
      'rgba(22, 163, 74, 0.5)',   // green-600
      'rgba(21, 128, 61, 0.4)',   // green-700
      'rgba(134, 239, 172, 0.7)', // green-300
      'rgba(74, 222, 128, 0.6)',  // green-400
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = greenColors[Math.floor(Math.random() * greenColors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

     
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

  
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

   
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const pricingTiers = [
  {
    title: "EcoDesign",
    monthlyPrice: 0,
    buttonText: "Book Now",
    popular: false,
    inverse: false,
    features: [
      "Eco-system architecture design",
      "Modular infrastructure planning",
      "Smart environmental technologies",
      "Efficiency optimization",
      "Low-impact development"
    ]
  },
  {
    title: "GreenManage",
    monthlyPrice: 9,
    buttonText: "Book Now",
    popular: true,
    inverse: true,
    features: [
      "Waste reduction strategies",
      "Green resource management",
      "Renewable energy integration",
      "Compliance & risk assessment",
      "Climate resilience planning"
    ]
  },
  {
    title: "KnowFlow",
    monthlyPrice: 19,
    buttonText: "Book Now",
    popular: false,
    inverse: false,
    features: [
      "Research paper sharing",
      "Community awareness programs",
      "Workshops and training",
      "Public policy communication",
      "Expert knowledge exchange"
    ]
  },
  {
    title: "UrbanSync",
    monthlyPrice: 0,
    buttonText: "Book Now",
    popular: false,
    inverse: false,
    features: [
      "Smart city frameworks",
      "Traffic and mobility solutions",
      "Land use planning",
      "Urban infrastructure modeling",
      "Sustainable zoning policies"
    ]
  }
];

export const Service = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
    
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[640px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-5xl md:text-6xl font-extrabold tracking-tight relative"
          >
            <motion.span
              animate={{
                backgroundPositionX: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-[length:200%_100%] text-transparent bg-clip-text drop-shadow-sm"
            >
               <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-emerald-500 animate-pulse" size={32} />
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Services
          </h1>
          <Sparkles className="text-teal-500 animate-pulse" size={32} />
        </div>
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-xl md:text-2xl leading-relaxed tracking-tight text-green-700 mt-8 font-medium"
          >
            End-to-end project delivery with 
            <span className="text-emerald-600 font-semibold"> efficiency</span>, 
            <span className="text-green-600 font-semibold"> impact</span>, and 
            <span className="text-teal-600 font-semibold"> ease</span>.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 md:flex-row lg:justify-center lg:items-end h-full">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                'card flex flex-col h-full transition duration-300 ease-in-out cursor-pointer p-10 rounded-3xl backdrop-blur-sm',
                'hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 border',
                inverse === true 
                  ? 'border-black text-white bg-black/80' 
                  : 'text-black bg-white/80 hover:bg-green-50/80 border-green-200/50'
              )}
            >
              <div className="flex justify-between">
                <h3 className='text-lg font-bold opacity-70'>
                  {title}
                </h3>
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  {popular === true && (
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C1EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C1EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      popular
                    </motion.span>
                  )}
                </div>
              </div>

              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tighter font-bold opacity-70">
                  /month
                </span>
              </div>

              <button
                className={cn(
                  "btn btn-primary w-full mt-[30px] py-3 px-6 rounded-lg font-semibold transition-all duration-200",
                  inverse === true 
                    ? 'bg-white text-black hover:bg-gray-100' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                )}
              >
                {buttonText}
              </button>

              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm gap-4">
                    <div className={cn("text-green-600", inverse === true && "text-white")}>
                      <CheckIcon />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;