import { HeroSection } from '@/components/containers/rooms-page/hero-section/hero-section';
import { RoomsSection } from '@/components/containers/rooms-page/rooms-section/rooms-section';
import { VideoSection } from '@/components/containers/rooms-page/video-section/video-section';

export default function Rooms() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <RoomsSection />
    </main>
  );
}
