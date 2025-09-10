import React from 'react'
import GalleryHero from '../Components/Gallery/GalleryHero'
import Vid from '../Components/Gallery/Vid'
import FullscreenGallery from '../Components/Gallery/FullscreenGallery'


const GalleryPage = () => {
  return (
    <div className='min-h-screen bg-white'>
        <GalleryHero/>
        <Vid/>
       <FullscreenGallery/>
    </div>
  )
}

export default GalleryPage