const Hero = () => {
  // Hexagon component
  const Hexagon = ({ children, className = "", size = 120 }) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = size/2 + (size/2 - 2) * Math.cos(angle);
      const y = size/2 + (size/2 - 2) * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    
    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <svg width={size} height={size} className="absolute inset-0">
          <defs>
            <clipPath id={`hexClip-${Math.random()}`}>
              <polygon points={points.join(' ')} />
            </clipPath>
          </defs>
          <polygon 
            points={points.join(' ')} 
            fill="white" 
            stroke="#e5e7eb" 
            strokeWidth="2"
          />
        </svg>
        <div 
          className="absolute inset-1 flex items-center justify-center overflow-hidden"
          style={{
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
          }}
        >
          {children}
        </div>
      </div>
    );
  };

  // Climate illustration components
  const illustrations = [
    // Wind turbines
    <div className="w-full h-full bg-gradient-to-b from-sky-200 to-green-200 flex items-center justify-center">
      <div className="space-y-2">
        <div className="w-8 h-12 bg-white rounded-full relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
        </div>
        <div className="w-12 h-1 bg-green-600 rounded"></div>
      </div>
    </div>,
    
    // Solar panels
    <div className="w-full h-full bg-gradient-to-br from-blue-300 to-green-300 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-1">
        {Array.from({length: 9}).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-blue-800 border border-blue-900"></div>
        ))}
      </div>
    </div>,
    
    // Factory/Building
    <div className="w-full h-full bg-gradient-to-b from-blue-200 to-gray-200 flex items-end justify-center">
      <div className="flex space-x-1">
        <div className="w-6 h-8 bg-gray-600"></div>
        <div className="w-8 h-12 bg-gray-700"></div>
        <div className="w-6 h-10 bg-gray-600"></div>
      </div>
    </div>,
    
    // Forest/Trees
    <div className="w-full h-full bg-gradient-to-b from-sky-300 to-green-300 flex items-end justify-center">
      <div className="flex space-x-1">
        <div className="w-3 h-8 bg-green-600 rounded-t-full"></div>
        <div className="w-4 h-10 bg-green-700 rounded-t-full"></div>
        <div className="w-3 h-9 bg-green-600 rounded-t-full"></div>
        <div className="w-4 h-7 bg-green-500 rounded-t-full"></div>
      </div>
    </div>,
    
    // Research/Lab
    <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
      <div className="space-y-2">
        <div className="w-8 h-6 bg-white rounded border-2 border-gray-300"></div>
        <div className="flex space-x-1">
          <div className="w-2 h-4 bg-blue-500 rounded-b"></div>
          <div className="w-2 h-5 bg-green-500 rounded-b"></div>
          <div className="w-2 h-3 bg-red-500 rounded-b"></div>
        </div>
      </div>
    </div>,
    
    // Electric Vehicle
    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-gray-200 flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-6 bg-blue-600 rounded-lg"></div>
        <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-400 rounded-full"></div>
      </div>
    </div>,
    
    // Recycling
    <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 border-4 border-green-600 rounded-full"></div>
        <div className="absolute top-2 left-2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">♻</span>
        </div>
      </div>
    </div>,
    
    // Community/People
    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center">
      <div className="flex space-x-1">
        <div className="w-3 h-6 bg-blue-600 rounded-t-full"></div>
        <div className="w-3 h-7 bg-green-600 rounded-t-full"></div>
        <div className="w-3 h-6 bg-purple-600 rounded-t-full"></div>
      </div>
    </div>,
    
    // Satellite/Space
    <div className="w-full h-full bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center">
      <div className="relative">
        <div className="w-6 h-4 bg-gray-300 rounded"></div>
        <div className="absolute -top-1 -left-1 w-2 h-6 bg-blue-600 rounded"></div>
        <div className="absolute -top-1 -right-1 w-2 h-6 bg-blue-600 rounded"></div>
      </div>
    </div>,
    
    // Ocean/Marine
    <div className="w-full h-full bg-gradient-to-b from-sky-300 to-blue-500 flex items-end justify-center">
      <div className="flex space-x-1">
        <div className="w-2 h-3 bg-blue-700 rounded-t"></div>
        <div className="w-3 h-4 bg-blue-800 rounded-t"></div>
        <div className="w-2 h-2 bg-blue-700 rounded-t"></div>
      </div>
    </div>
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Make climate<br />your career
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Discover impactful jobs at the world's leading climate tech companies and environmental nonprofits.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Explore jobs
            </button>
          </div>
          
          {/* Right Hexagon Grid */}
          <div className="lg:w-3/5 flex justify-center">
            <div className="relative">
              {/* Hexagon grid layout */}
              <div className="grid grid-cols-4 gap-2">
                {/* Row 1 - 2 hexagons */}
                <div className="col-start-2">
                  <Hexagon size={100}>
                    {illustrations[0]}
                  </Hexagon>
                </div>
                <div>
                  <Hexagon size={100}>
                    {illustrations[1]}
                  </Hexagon>
                </div>
                
                {/* Row 2 - 3 hexagons */}
                <div className="col-start-1">
                  <Hexagon size={100}>
                    {illustrations[2]}
                  </Hexagon>
                </div>
                <div>
                  <Hexagon size={100}>
                    {illustrations[3]}
                  </Hexagon>
                </div>
                <div>
                  <Hexagon size={100}>
                    {illustrations[4]}
                  </Hexagon>
                </div>
                
                {/* Row 3 - 3 hexagons */}
                <div className="col-start-2">
                  <Hexagon size={100}>
                    {illustrations[5]}
                  </Hexagon>
                </div>
                <div>
                  <Hexagon size={100}>
                    {illustrations[6]}
                  </Hexagon>
                </div>
                <div>
                  <Hexagon size={100}>
                    {illustrations[7]}
                  </Hexagon>
                </div>
                
                {/* Row 4 - 2 hexagons */}
                <div className="col-start-2">
                  <Hexagon size={100}>
                    {illustrations[8]}
                  </Hexagon>
                </div>
                <div>
                  <Hexagon size={100}>
                    {illustrations[9]}
                  </Hexagon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;