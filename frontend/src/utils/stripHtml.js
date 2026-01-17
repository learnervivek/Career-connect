// Utility function to strip HTML tags from text
export const stripHtmlTags = (html) => {
  if (!html) return "";

  // Create a temporary div element
  const temp = document.createElement("div");
  temp.innerHTML = html;

  // Get the text content (strips all HTML tags)
  return temp.textContent || temp.innerText || "";
};

// Utility function to clean description for display
export const cleanDescription = (description) => {
  return stripHtmlTags(description).trim();
};
