import { RoomCard } from '@/components/room-card/room-card';
import { fetchRooms } from '@/services/api/get-rooms';
import { Room } from '@/types/rooms';

export default async function Test() {
  const rooms = await fetchRooms<Room>();

  return (
    <>
      <div>Test</div>
      <div>
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </>
  );
}
