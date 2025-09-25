// retrieval of all profile data.
import { NextResponse } from 'next/server';
import profiles from '@/data/profiles.json';

export async function GET() {
  return NextResponse.json(profiles);
}
