export default function splitContent(content: string) {
  return content
    .split(/(?<=\.) (?=[A-Z])/)
    .map((paragraph) => paragraph.trim());
}
