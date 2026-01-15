import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const entries: Record<string, unknown> = {};
  formData.forEach((value, key) => {
    if (value instanceof File) {
      entries[key] = {
        name: value.name,
        type: value.type,
        size: value.size,
      };
    } else {
      entries[key] = value;
    }
  });

  // TODO: Integrate email or storage provider as needed.
  return NextResponse.json({ ok: true, received: entries });
}
