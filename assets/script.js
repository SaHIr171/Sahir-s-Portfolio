const BOOKS = [
  {
    "title": "Sumnima",
    "author": "BP Koirala",
    "desc": "A Nepali classic blending spirituality, tradition, and personal freedom."
  },
  {
    "title": "Open Secret",
    "author": "KP Dhungana",
    "desc": "A candid portrayal of life’s realities in Nepali society."
  },
  {
    "title": "And Then There Were None",
    "author": "Agatha Christie",
    "desc": "Ten strangers, one island, and a trail of suspense."
  },
  {
    "title": "The God Delusion",
    "author": "Richard Dawkins",
    "desc": "A powerful, rational voice questioning faith and championing science."
  },
  {
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "desc": "Gregor Samsa’s unsettling transformation; simple language, deep questions."
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "desc": "A psychological journey through guilt and redemption that lingers."
  },
  {
    "title": "Life Comes From Life",
    "author": "A. C. Bhaktivedanta Swami Prabhupada",
    "desc": "Philosophical dialogues reflecting on the origins of existence."
  },
  {
    "title": "Unleashing Nepal",
    "author": "Sujeev Shakya",
    "desc": "An exploration of Nepal’s economic and cultural transformation."
  },
  {
    "title": "The Mysterious Affair at Styles",
    "author": "Agatha Christie",
    "desc": "Poirot’s first case — clever, witty, classic Christie."
  },
  {
    "title": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "desc": "A luxury train, a murder, and an ingenious solution."
  },
  {
    "title": "Concise History of Economic Thought",
    "author": "B.N. Ghosh, Rama Ghosh",
    "desc": "How economic ideas evolved and shaped policy."
  },
  {
    "title": "The Girl in Room 105",
    "author": "Chetan Bhagat",
    "desc": "A contemporary thriller with familiar emotions and twists."
  },
  {
    "title": "Thus Spake Zarathustra",
    "author": "Friedrich Nietzsche",
    "desc": "Challenges conventional thinking; demanding but rewarding."
  },
  {
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "desc": "A psychological thriller built on silence and secrets."
  },
  {
    "title": "2 States",
    "author": "Chetan Bhagat",
    "desc": "A light, funny love story meeting cultural boundaries."
  },
  {
    "title": "China: A History",
    "author": "John Keay",
    "desc": "A sweeping narrative of China’s vast past."
  },
  {
    "title": "Ijoriya",
    "author": "Subin Bhattarai",
    "desc": "A heartfelt Nepali romance about relationships and youth."
  }
];

function demoFetch() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
      const pre = document.getElementById('apiResult');
      if (pre) pre.textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
}

function renderList(list) {
  const results = document.getElementById('results');
  if (!results) return;
  results.innerHTML = '';

  list.forEach(b => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    const card = document.createElement('div');
    card.className = 'card h-100 shadow-sm';

    const body = document.createElement('div');
    body.className = 'card-body d-flex flex-column';

    const title = document.createElement('h3');
    title.className = 'h6 mb-1';
    title.textContent = b.title;

    const author = document.createElement('div');
    author.className = 'small text-muted mb-2';
    author.textContent = b.author;

    const desc = document.createElement('p');
    desc.className = 'mb-3';
    desc.textContent = b.desc;

    const actions = document.createElement('div');
    actions.className = 'mt-auto';

    const btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-outline-primary';
    btn.textContent = 'Mark as To‑Read';
    btn.addEventListener('click', () => alert('Happy reading: ' + b.title));

    actions.appendChild(btn);
    body.appendChild(title);
    body.appendChild(author);
    body.appendChild(desc);
    body.appendChild(actions);
    card.appendChild(body);
    col.appendChild(card);
    results.appendChild(col);
  });

  const total = document.getElementById('totalCount');
  const authors = new Set(list.map(b => b.author));
  if (total) total.textContent = list.length;
  const authorCount = document.getElementById('authorCount');
  if (authorCount) authorCount.textContent = authors.size;
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  const randomBtn = document.getElementById('randomBtn');
  if (!input) return;

  renderList(BOOKS);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const filtered = BOOKS.filter(b => (b.title + ' ' + b.author).toLowerCase().includes(q));
    renderList(filtered);
  });

  if (randomBtn) randomBtn.addEventListener('click', () => {
    const pick = BOOKS[Math.floor(Math.random() * BOOKS.length)];
    alert('Random pick: ' + pick.title + ' — ' + pick.author);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSearch();
});
