export function cutText(text, limit) {
  text = text.trim();
  if (text.length <= limit) {
    return text;
  }

  text = text.slice(0, limit).replace(/\n/gi, ' ');

  const lastSpace = text.lastIndexOf(' ');
  if (lastSpace > 0) {
    text = text.substr(0, lastSpace);
  }

  return `${text}... `;
}

export default {
  cutText
};
