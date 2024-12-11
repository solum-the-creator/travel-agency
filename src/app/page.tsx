import { FacilitiesSection } from '@/components/containers/home-page/facilities-section/facilities-section';
import { HeroSection } from '@/components/containers/home-page/hero-section/hero-section';
import { RoomsSection } from '@/components/containers/home-page/rooms-section/rooms-section';
import { TestimoniesSection } from '@/components/containers/home-page/testimonies-section/testimonies-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FacilitiesSection />
      <RoomsSection />
      <TestimoniesSection />
    </main>
  );
}
