import project1 from '@/assets/projectos/candy.jpg'
import project2 from '@/assets/projectos/pontocais.jpg'
import project3 from '@/assets/projectos/parkerbetume.jpg'
import project4 from '@/assets/projectos/angojordan.jpg'
import project5 from '@/assets/projectos/cooperativamineiramutungo.jpg'
import project6 from '@/assets/projectos/bancokeve.jpg'
import project7 from '@/assets/projectos/sanabel.png'
import project8 from '@/assets/projectos/angocaju.jpg'
import project9 from '@/assets/projectos/angoinvest.png'

const projectImages: Record<number, string> = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project7,
  8: project8,
  9: project9,
}

export interface Project {
  id: number
  title: string
  activity: string
  summary: string
  description: string
  image: string
  tags: string[]
}

export function parseProjectNotes(notes: string): Project[] {
  return notes
    .trim()
    .split(/\r?\n(?=\d+\.\s)/)
    .flatMap((section) => {
      const lines = section.split(/\r?\n/)
      const heading = lines[0]?.match(/^\s*(\d+)\.\s*(.+)$/)
      const activityIndex = lines.findIndex((line) => /^Actividades?:/i.test(line.trim()))
      const activityLine = lines[activityIndex]?.trim()
      const activity = activityLine?.replace(/^Actividades?:\s*/i, '').trim()
      const description = lines.slice(activityIndex + 1).join('\n').trim()

      if (!heading || activityIndex < 0 || !activity || !description) return []

      const id = Number(heading[1])
      const summary = description.length > 190
        ? `${description.slice(0, 187).trimEnd()}...`
        : description

      return [{
        id,
        title: heading[2].trim(),
        activity,
        summary,
        description,
        image: projectImages[id] ?? project1,
        tags: activity.split(/\s*,\s*/).filter(Boolean),
      }]
    })
}