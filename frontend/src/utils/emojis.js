const emojiList = ["😀", "😂", "😍", "😎", "🤔", "😢", "😡", "😴", "🎉", "🤖", "🚀"];

// Function to generate a random emoji from the provided list
export function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[randomIndex];
}

