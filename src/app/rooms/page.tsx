import { HeroSection } from '@/components/containers/rooms-page/hero-section/hero-section';
import { VideoSection } from '@/components/containers/rooms-page/video-section/video-section';

export default function Rooms() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <div style={{ height: '100vh' }}>content</div>
    </main>
  );
}
