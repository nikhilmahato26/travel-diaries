import { deleteVideoTestimonial } from '@/lib/db'
import { guardAdmin } from '@/lib/guardAdmin'

export async function DELETE(req, { params }) {
  if (!(await guardAdmin())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { id } = params
    await deleteVideoTestimonial(id)
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
