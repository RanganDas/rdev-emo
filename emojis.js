// emojis.js
const emojis = {
    smileys: {
        smiley: "😄",
        wink: "😉",
        laughing: "😆",
        heartEyes: "😍",
        cryingLaughing: "😂",
        surprised: "😮",
        sunglasses: "😎",
      },
      animals: {
        dog: "🐶",
        cat: "🐱",
        elephant: "🐘",
        panda: "🐼",
        monkey: "🐒",
        horse: "🐴",
        rabbit: "🐰",
      },
      food: {
        pizza: "🍕",
        burger: "🍔",
        sushi: "🍣",
        iceCream: "🍦",
        coffee: "☕️",
        cake: "🍰",
        grapes: "🍇",

      },
      nature: {
        sun: "☀️",
        moon: "🌙",
        tree: "🌳",
        flower: "🌸",
        cloud: "☁️",
        umbrella: "☔️",
        lightning: "⚡️",
      },
      travel: {
        car: "🚗",
        airplane: "✈️",
        ship: "🚢",
        train: "🚆",
        bus: "🚌",
        bicycle: "🚲",
        rocket: "🚀",
      },
  };
  
  function getRandomEmoji() {
    const categories = Object.keys(emojis);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryEmojis = emojis[randomCategory];
    const emojiKeys = Object.keys(categoryEmojis);
    const randomEmojiKey = emojiKeys[Math.floor(Math.random() * emojiKeys.length)];
    return categoryEmojis[randomEmojiKey];
  }
  
  function searchEmojis(query) {
    const matchingEmojis = {};
    for (const category in emojis) {
      for (const emoji in emojis[category]) {
        if (emoji.includes(query)) {
          matchingEmojis[emoji] = emojis[category][emoji];
        }
      }
    }
    return matchingEmojis;
  }
  
  const customEmojis = {};

  function addCustomEmoji(name, emoji) {
    customEmojis[name] = emoji;
  }
  
  function getCustomEmoji(name) {
    return customEmojis[name];
  }
  
  
  function countEmojis() {
    let totalEmojis = 0;
    for (const category in emojis) {
      totalEmojis += Object.keys(emojis[category]).length;
    }
    return totalEmojis;
  }
  
  
  module.exports = {
    emojis,
    getRandomEmoji,
    searchEmojis,
    addCustomEmoji,
    getCustomEmoji,
    countEmojis
  };
  