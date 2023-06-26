'use client'; // need to use it because  styled components does not support next 13 yet 

import DemonstrationSection from "@/components/sections/Demonstration/DemonstrationSection";
import PresentationSection from '@/components/sections/Presentation/PresentationSection';
import VideosSection from '@/components/sections/Videos/Videos';
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Home | Leadster"
  }, [])

  return (
    <>
      <PresentationSection />
      <VideosSection />
      <DemonstrationSection />
    </>
  )
}

export default Home;
