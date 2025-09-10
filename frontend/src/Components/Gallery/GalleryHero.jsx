import { Typewriter } from 'react-simple-typewriter';



const GalleryHero = () => {
 
  
   const data = [
    {
      title: 'Mountain View',
      value: 'Nature',
      image: '/Demo/pic4.jpeg'
    },
    {
      title: 'Beach',
      value: 'Ocean',
      image: '/Demo/pic5.jpeg'
    },
    {
      title: 'Forest',
      value: 'Wilderness',
      image: '/Demo/pic11.jpg'
    },
    {
      title: 'Desert',
      value: 'Sand',
      image: '/Demo/pic3.jpeg'
    },
    {
      title: 'Cityscape',
      value: 'Urban',
      image: '/Demo/pic7.jpg'
    },
    {
      title: 'Northern Lights',
      value: 'Aurora',
      image: '/Demo/pic21.jpeg'
    },
    {
      title: 'Waterfall',
      value: 'Nature',
      image: '/Demo/pic12.jpg'
    }
  ];




  const boxStyle = 'bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col ';

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-indigo-100 py-32 md:py-36 lg:py-36 px-4 md:px-8 lg:px-20">
   
   <div className="relative rounded-xl overflow-hidden mb-10 w-90 h-[90vh] flex items-center justify-center">
      <img
        src="/Demo/su.jpg"
        alt="Mountain landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex  flex-col items-center justify-center text-center ">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-green-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-lg">
          <Typewriter
            words={["The Future is Ecosystem-Centric"]}
            loop={true}
            cursor={true}
            typeSpeed={120}
            deleteSpeed={100}
            delaySpeed={5000}
          />
        </h1>
      </div>
    </div>
      <div className="max-w-9xl mx-auto">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]'>
        {data.map((item, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i === 1 || i === 4 || i === 5 || i === 6 ? 'md:col-span-2' : ''
            } ${i === 2 ? 'md:row-span-2' : ''} group relative`}
          >
          
            <div className="flex-1 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
             </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default GalleryHero;