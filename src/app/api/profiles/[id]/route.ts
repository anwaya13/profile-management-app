// single profile by its ID.
import { NextResponse } from 'next/server';
import profiles from '@/data/profiles.json';
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 'id' parameter .
  const id = params.id;
  const profile = profiles.find((p) => p.id === id);

  // if a profile was found or not.
  if (profile) {
    return NextResponse.json(profile);
  } else {
    return new NextResponse('Profile not found', { status: 404 });
  }
}