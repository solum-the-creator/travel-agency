import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DetailsSection } from '@/components/containers/room-detail-page/details-section/details-section';
import { HeroSection } from '@/components/containers/room-detail-page/hero-section/hero-section';
import { rooms } from '@/constants/rooms';
import { getRoomById } from '@/utils/room-utils';

type RoomPageParams = {
  id: string;
};

export async function generateStaticParams(): Promise<RoomPageParams[]> {
  return rooms.map((room) => ({ id: room.id.toString() }));
}

export async function generateMetadata({ params }: { params: RoomPageParams }): Promise<Metadata> {
  const { id } = params;
  const room = getRoomById(parseInt(id));

  if (!room) {
    return {
      title: 'Room not found',
    };
  }

  return {
    title: `${room.title} - Details`,
    description: `Details of ${room.title}`,
  };
}

export default function RoomPage({ params }: { params: RoomPageParams }) {
  const { id } = params;
  const room = getRoomById(parseInt(id));

  if (!room) {
    notFound();
  }

  const { title, images, description, price, rating } = room;

  return (
    <main>
      <HeroSection />
      <DetailsSection
        title={title}
        price={price}
        rating={rating}
        description={description}
        images={images}
      />
    </main>
  );
}
