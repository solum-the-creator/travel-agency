import roomsData from '@data/rooms.json';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const roomId = params.slug;

  const room = roomsData.find((room) => room.id === parseInt(roomId));

  if (!room) {
    return NextResponse.json({ error: 'Room not found' }, { status: 404 });
  }

  return NextResponse.json(room);
}
