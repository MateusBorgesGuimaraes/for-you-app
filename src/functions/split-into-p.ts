export default function splitTextIntoParagraphs(
  text: string,
  level: number = 1,
): string[] {
  const paragraphs = text
    .split(/(?<=\.) (?=[A-Z])/)
    .map((paragraph) => paragraph.trim());

  let limit;
  switch (level) {
    case 1:
      limit = Math.ceil(paragraphs.length / 2);
      break;
    case 2:
      limit = Math.ceil(paragraphs.length / 4);
      break;
    case 3:
      limit = Math.ceil(paragraphs.length / 6);
      break;
    case 4:
      limit = Math.ceil(paragraphs.length / 8);
      break;
    default:
      limit = paragraphs.length;
  }

  const selectedParagraphs = paragraphs.slice(0, limit);

  if (selectedParagraphs.length > 0) {
    selectedParagraphs[selectedParagraphs.length - 1] += '...';
  }

  return selectedParagraphs;
}
