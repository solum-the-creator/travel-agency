import roomsData from '@data/rooms.json';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedRooms = roomsData.slice(startIndex, endIndex);

  const hasMore = roomsData.length > endIndex;
  return NextResponse.json({ data: paginatedRooms, hasMore });
}
