import { getVideoTestimonials, addVideoTestimonial } from '@/lib/db'
import { guardAdmin } from '@/lib/guardAdmin'

export async function GET() {
  try {
    const vids = await getVideoTestimonials()
    return Response.json(vids)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  if (!(await guardAdmin())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { youtube_url } = await req.json()
    if (!youtube_url) return Response.json({ error: 'URL required' }, { status: 400 })
    const vid = await addVideoTestimonial(youtube_url)
    return Response.json(vid)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
