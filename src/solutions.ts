export interface Solution {
  id: number
  title: string
  activity: string
  contentHtml: string
}

function escapeHtml (value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderInlineMarkdown (value: string): string {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]/g, '$1')
}

function renderMarkdown (markdown: string): string {
  const blocks: string[] = []
  const lines = markdown.split(/\r?\n/)
  let paragraph: string[] = []
  let list: string[] = []

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return
    }
    blocks.push(`<p>${renderInlineMarkdown(paragraph.join(' '))}</p>`)
    paragraph = []
  }

  const flushList = () => {
    if (list.length === 0) {
      return
    }
    blocks.push(`<ul>${list.map(item => `<li>${renderInlineMarkdown(item)}</li>`).join('')}</ul>`)
    list = []
  }

  for (const line of lines) {
    const trimmedLine = line.trim()
    let headingLevel = 0
    if (trimmedLine.startsWith('### ')) {
      headingLevel = 3
    } else if (trimmedLine.startsWith('## ')) {
      headingLevel = 2
    }
    const listItem = trimmedLine.startsWith('- ')

    if (!trimmedLine || trimmedLine === '---') {
      flushParagraph()
      flushList()
    } else if (headingLevel > 0) {
      flushParagraph()
      flushList()
      const headingText = trimmedLine.slice(headingLevel + 1)
      blocks.push(`<h${headingLevel}>${renderInlineMarkdown(headingText)}</h${headingLevel}>`)
    } else if (listItem) {
      flushParagraph()
      list.push(trimmedLine.slice(2))
    } else {
      flushList()
      paragraph.push(trimmedLine)
    }
  }

  flushParagraph()
  flushList()
  return blocks.join('')
}

export function parseSolutionNotes (notes: string): Solution[] {
  return notes
    .trim()
    .split(/\r?\n(?=\d+\.\s)/)
    .flatMap(section => {
      const lines = section.split(/\r?\n/)
      const heading = lines[0]?.trim().match(/^(\d+)\. (.+)$/)
      const activityIndex = lines.findIndex(line => /^Actividades?:/i.test(line.trim()))
      const activityLine = lines[activityIndex]?.trim()
      const activity = activityLine?.slice(activityLine.indexOf(':') + 1).trim()
      const description = lines.slice(activityIndex + 1).join('\n').trim()

      if (!heading || activityIndex < 0 || !activity || !description) {
        return []
      }

      return [{
        id: Number(heading[1]),
        title: heading[2].trim(),
        activity,
        contentHtml: renderMarkdown(description),
      }]
    })
}
