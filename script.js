const body = document.body;
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');

// content.js içindeki bilgileri sayfaya yerleştirir.
document.title = `${siteContent.siteName} | Kişisel Web Sitesi`;
document.querySelector('meta[name="description"]').content = siteContent.description;
document.querySelector('#logo').innerHTML = `${siteContent.shortName}<span>.</span>`;
document.querySelector('#footer-logo').innerHTML = `${siteContent.shortName}<span>.</span>`;
document.querySelector('#footer-name').textContent = siteContent.siteName;
document.querySelector('#footer-tagline').textContent = siteContent.tagline;

document.querySelector('#hero-eyebrow').textContent = siteContent.hero.eyebrow;
document.querySelector('#hero-title').innerHTML = siteContent.hero.title;
document.querySelector('#hero-text').innerHTML = siteContent.hero.paragraphs
  .map((paragraph) => `<p>${paragraph}</p>`)
  .join('');
document.querySelector('#hero-button').innerHTML = siteContent.hero.button;

document.querySelector('#about-eyebrow').textContent = siteContent.about.eyebrow;
document.querySelector('#about-title').innerHTML = siteContent.about.title;
document.querySelector('#about-text').textContent = siteContent.about.text;
document.querySelector('#about-text').insertAdjacentHTML('afterend', `<p class="about-detail">${siteContent.about.detail}</p>`);
document.querySelector('#tags').innerHTML = siteContent.about.tags
  .map((tag) => `<span>${tag}</span>`)
  .join('');

document.querySelector('#categories-eyebrow').textContent = siteContent.categories.eyebrow;
document.querySelector('#categories-title').textContent = siteContent.categories.title;
document.querySelector('#categories-intro').textContent = siteContent.categories.intro;
document.querySelector('#category-grid').innerHTML = siteContent.categories.items
  .map((category, index) => `
    <a class="category-card" href="#yazilar" data-category-link="${category.name}">
      <span class="category-number">0${index + 1}</span>
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <span class="category-arrow" aria-hidden="true">→</span>
    </a>
  `)
  .join('');

document.querySelector('#posts-eyebrow').textContent = siteContent.posts.eyebrow;
document.querySelector('#posts-title').textContent = siteContent.posts.title;
const postGrid = document.querySelector('#post-grid');
const filterControls = document.querySelector('#filter-controls');

function renderPosts(activeCategory = 'Tümü') {
  const visiblePosts = activeCategory === 'Tümü'
    ? siteContent.posts.items
    : siteContent.posts.items.filter((post) => post.category === activeCategory);

  postGrid.innerHTML = visiblePosts
    .map((post) => `
    <article class="post-card${post.featured ? ' featured-post' : ''}">
      <p class="post-meta">${post.meta}</p>
      <h3>${post.title}</h3>
      <p>${post.text}</p>
      <a href="#iletisim" aria-label="Yazı hakkında iletişime geç">Oku <span aria-hidden="true">→</span></a>
    </article>
  `)
  .join('');
}

const filters = ['Tümü', ...siteContent.categories.items.map((category) => category.name)];
filterControls.innerHTML = filters
  .map((filter) => `<button class="filter-button${filter === 'Tümü' ? ' active' : ''}" type="button" data-filter="${filter}">${filter}</button>`)
  .join('');

filterControls.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-button');
  if (!button) return;
  document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  renderPosts(button.dataset.filter);
});

document.querySelectorAll('[data-category-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const category = link.dataset.categoryLink;
    document.querySelectorAll('.filter-button').forEach((item) => {
      item.classList.toggle('active', item.dataset.filter === category);
    });
    renderPosts(category);
  });
});

renderPosts();

document.querySelector('#contact-eyebrow').textContent = siteContent.contact.eyebrow;
document.querySelector('#contact-title').innerHTML = siteContent.contact.title;
const emailLink = document.querySelector('#email-link');
emailLink.href = `mailto:${siteContent.contact.email}`;
emailLink.innerHTML = `${siteContent.contact.email} <span aria-hidden="true">↗</span>`;

// Daha önce seçilen tema varsa sayfa açıldığında geri yüklenir.
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

function updateThemeButton() {
  const isDark = body.classList.contains('dark');
  themeButton.querySelector('span').textContent = isDark ? '☀' : '☾';
  themeButton.setAttribute('aria-label', isDark ? 'Açık temaya geç' : 'Koyu temaya geç');
}

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeButton();
});

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
updateThemeButton();
