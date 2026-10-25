// Age gate
document.getElementById('age-confirm').addEventListener('click', () => {
  document.getElementById('age-gate').classList.add('hidden');
  localStorage.setItem('ageConfirmed', 'true');
});

if (localStorage.getItem('ageConfirmed') === 'true') {
  document.getElementById('age-gate').classList.add('hidden');
}

// Sample data for cards
const tools = [
  {
    name: "Candy AI",
    price: "Freemium",
    desc: "A warm, attentive companion that remembers your day and grows with every chat.",
    tags: ["Memory", "Voice", "Mobile"],
    rating: "9.4/10",
    featured: true
  },
  {
    name: "SECrets AI",
    price: "Paid",
    desc: "Premium voice-first partner with natural, expressive speech.",
    tags: ["Voice calls", "Custom persona", "NSFW filter"],
    rating: "9.1/10",
    featured: true
  },
  {
    name: "OurDream AI",
    price: "Freemium",
    desc: "Build worlds and play out branching adventures with AI characters.",
    tags: ["Stories", "Group chat", "Lore"],
    rating: "9.0/10",
    featured: true
  },
  {
    name: "GirlfriendGPT",
    price: "Freemium",
    desc: "Anime-styled companions with rich backstories and daily events.",
    tags: ["Anime", "Memory", "Gifts"],
    rating: "8.9/10",
    featured: true
  },
  {
    name: "EroPlay.ai",
    price: "Freemium",
    desc: "Turn short prompts into consistent character portraits.",
    tags: ["Portraits", "Styles", "HD"],
    rating: "8.8/10",
    featured: true
  },
  {
    name: "AI Call Girlfriend",
    price: "Freemium",
    desc: "A friendly robot app companion for learning and play.",
    tags: ["Robot", "App", "Kids-safe"],
    rating: "8.3/10",
    featured: false
  }
];

function createCard(tool) {
  const badge = tool.featured ? '<span class="badge">Featured</span>' : '<span class="badge">Reviewed</span>';
  return `
    <div class="card">
      ${badge}
      <h3>${tool.name}</h3>
      <div class="price">${tool.price}</div>
      <p class="desc">${tool.desc}</p>
      <div class="tags">${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="rating">${tool.rating}</div>
      <div class="actions">
        <a href="#" class="learn">Learn more</a>
        <a href="#" class="visit">Visit Site</a>
      </div>
    </div>
  `;
}

function renderCards(containerId, toolsList) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = toolsList.map(createCard).join('');
  }
}

// Render
renderCards('trending-cards', tools.slice(0, 5));
renderCards('companions-cards', tools);
renderCards('best-cards', tools.slice(0, 3));

// Simple search placeholder
document.getElementById('search').addEventListener('input', (e) => {
  console.log('Search:', e.target.value);
  // In a real site, filter cards here
});
