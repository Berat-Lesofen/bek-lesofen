const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');

function setCommonContent() {
  const isArticle = body.dataset.page === 'article';
  const logoPath = isArticle ? '../assets/images/logo.png' : 'assets/images/logo.png';
  const logoEl = document.querySelector('#logo');
  if (logoEl) {
    logoEl.innerHTML = `<span class="logo-frame"><img src="${logoPath}" alt="${siteContent.siteName}" class="logo-img" /></span>`;
  }
  const footerLogoEl = document.querySelector('#footer-logo');
  if (footerLogoEl) {
    footerLogoEl.innerHTML = `<span class="logo-frame logo-frame-footer"><img src="${logoPath}" alt="${siteContent.siteName}" class="logo-img" /></span>`;
  }
  document.querySelector('#footer-name').textContent = siteContent.siteName;
  document.querySelector('#footer-tagline').textContent = siteContent.tagline;
  document.querySelector('#year').textContent = new Date().getFullYear();
}

function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const isMobile = window.innerWidth <= 720;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: isMobile ? 0.02 : 0.08,
      rootMargin: isMobile ? '0px 0px -15px 0px' : '0px 0px -40px 0px'
    }
  );

  document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach((el) => {
    observer.observe(el);
  });
}

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const heroProfile = document.querySelector('.hero-profile');
  if (!hero || !heroProfile) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth <= 900 || window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  hero.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 900) return;
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    heroProfile.style.transform = `translate3d(${x * 3.5}px, ${y * 3.5}px, 0)`;
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    heroProfile.style.transform = 'translate3d(0, 0, 0)';
  });
}

function renderHome() {
  document.title = `${siteContent.siteName} | ${siteContent.tagline}`;
  document.querySelector('meta[name="description"]').content = siteContent.description;

  document.querySelector('#hero-eyebrow').textContent = siteContent.hero.eyebrow;
  document.querySelector('#hero-title').innerHTML = siteContent.hero.title;
  document.querySelector('#hero-text').innerHTML = siteContent.hero.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
  document.querySelector('#hero-button').innerHTML = siteContent.hero.button;

  document.querySelector('#about-eyebrow').textContent = siteContent.about.eyebrow;
  document.querySelector('#about-title').innerHTML = siteContent.about.title;
  document.querySelector('#about-text').textContent = siteContent.about.text;
  document.querySelector('#about-text').insertAdjacentHTML('afterend', `<p class="about-detail">${siteContent.about.detail}</p>`);
  document.querySelector('#tags').innerHTML = siteContent.about.tags.map((tag) => `<span>${tag}</span>`).join('');
  document.querySelector('#about-image').innerHTML = `
    <div class="about-frame">
      <div class="about-frame-inner">
        <img src="${siteContent.about.image.src}" alt="${siteContent.about.image.alt}" loading="lazy">
      </div>
      <div class="about-frame-caption">
        <span>01 / PORTRAIT</span>
        <span>${siteContent.siteName.toUpperCase()}</span>
      </div>
    </div>
  `;

  document.querySelector('#categories-eyebrow').textContent = siteContent.categories.eyebrow;
  document.querySelector('#categories-title').textContent = siteContent.categories.title;
  document.querySelector('#categories-intro').textContent = siteContent.categories.intro;
  document.querySelector('#category-grid').innerHTML = siteContent.categories.items
    .map((category, index) => `
      <a class="category-card reveal-on-scroll" href="#yazilar" data-category-link="${category.name}" style="--reveal-index: ${index};">
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
      .map((post, index) => `
        <article class="post-card${post.featured ? ' featured-post' : ''}${post.image.src ? ' has-image' : ''} reveal-on-scroll" style="--reveal-index: ${index};">
          ${post.image.src ? `<figure class="post-card-image"><img src="${post.image.src}" alt="${post.image.alt}" loading="lazy"></figure>` : ''}
          <p class="post-meta">${post.meta}</p>
          <h3>${post.title}</h3>
          <p>${post.text}</p>
          <a href="${post.url}" aria-label="${post.title} yazısının devamını oku">Devamını oku <span aria-hidden="true">→</span></a>
        </article>
      `)
      .join('');

    initScrollReveal();
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
  emailLink.innerHTML = `
    <svg class="email-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    <span class="email-text">${siteContent.contact.email}</span>
    <span class="email-arrow" aria-hidden="true">↗</span>
  `;

  initHeroParallax();
  initScrollReveal();
}

function renderArticle() {
  const post = siteContent.posts.items.find((item) => item.slug === body.dataset.postSlug);
  if (!post) return;
  document.title = `${post.title} | ${siteContent.siteName}`;
  document.querySelector('meta[name="description"]').content = post.text;
  document.querySelector('#article-category').textContent = post.category;
  document.querySelector('#article-title').textContent = post.title;
  document.querySelector('#article-date').textContent = post.date;
  document.querySelector('#article-reading-time').textContent = post.readingTime;
  document.querySelector('#article-intro').textContent = post.article.intro;
  const image = document.querySelector('#article-image');
  if (post.image.src) {
    image.innerHTML = `<img src="../${post.image.src}" alt="${post.image.alt}" loading="lazy">`;
  } else {
    image.hidden = true;
  }
  document.querySelector('#article-content').innerHTML = post.article.sections.map((section, idx) => `
    <section class="article-section reveal-on-scroll" style="--reveal-index: ${idx};">
      <h2>${section.heading}</h2>
      ${section.paragraphs.map((paragraph) => /^\s*<(div|blockquote|table|ul|ol|h3|h4|figure|hr)/i.test(paragraph) ? paragraph : `<p>${paragraph}</p>`).join('')}
    </section>
  `).join('');

  initScrollReveal();
}

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

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

setCommonContent();
if (body.dataset.page === 'article') renderArticle();
else renderHome();
