export function makeLetterBold(word, searchQuery) {
  if (typeof word !== "string" || typeof searchQuery !== "string") {
    throw new Error("Both word and searchQuery must be strings.");
  }

  const regex = new RegExp(searchQuery, "gi");
  return word.replace(regex, (match) => `<strong>${match}</strong>`);
}
