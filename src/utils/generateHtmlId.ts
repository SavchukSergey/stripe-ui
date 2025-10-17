export function generateHtmlId() {
  return `g-${Math.random().toString(36).substring(2, 7)}`;
}