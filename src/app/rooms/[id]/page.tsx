import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DetailsSection } from '@/components/containers/room-detail-page/details-section/details-section';
import { HeroSection } from '@/components/containers/room-detail-page/hero-section/hero-section';
import { RoomImagesSection } from '@/components/containers/room-detail-page/room-images-section/room-images-section';
import { fetchRoomById } from '@/services/api/get-room-by-id';
import { fetchRooms } from '@/services/api/get-rooms';
import { RoomDetails } from '@/types/rooms';

type RoomPageParams = {
  id: string;
};

export async function generateStaticParams(): Promise<RoomPageParams[]> {
  const rooms = await fetchRooms<RoomDetails>();
  return rooms.map((room) => ({ id: room.id.toString() }));
}

export async function generateMetadata({ params }: { params: RoomPageParams }): Promise<Metadata> {
  const { id } = params;
  const room = await fetchRoomById<RoomDetails>(id);

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

export default async function RoomPage({ params }: { params: RoomPageParams }) {
  const { id } = params;
  const room = await fetchRoomById<RoomDetails>(id);

  if (!room) {
    notFound();
  }

  return (
    <main>
      <HeroSection />
      <DetailsSection {...room} />
      <RoomImagesSection images={room.images} />
    </main>
  );
}
