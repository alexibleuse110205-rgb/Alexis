/* ============================================
   NAVIGATION — scroll + menu mobile + page active
   ============================================ */
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

// Ajoute une bordure quand on scroll
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Menu burger (mobile)
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });
  // Ferme le menu au clic sur un lien
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
  }));
}

// Met en surbrillance le lien actif selon la page courante
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ============================================
   ANIMATIONS AU SCROLL (IntersectionObserver)
   ============================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============================================
   PAGE PROJETS — données + cartes + panneau
   ============================================ */

// ▼ MODIFIE ICI pour ajouter/modifier tes projets
const projets = [
  {
    id: 1,
    numero: "N°01",
    titre: "Étude de marché\nCerafel / Prince de Bretagne",
    annee: "2025",
    categorie: "Marketing",
    // Couleur de fond de la carte (gradient CSS)
    couleur: "linear-gradient(145deg, #1b4f72 0%, #2e86c1 100%)",
    contexte: "Dans le cadre de mon BUT GACO, j'ai réalisé une étude de marché pour Cerafel, la coopérative agricole bretonne derrière la marque Prince de Bretagne.",
    role: "Analyse de marché, collecte de données, enquêtes consommateurs, restitution des résultats sous forme de rapport et de présentation.",
    resultat: "Rapport complet d'étude de marché livré avec recommandations stratégiques. [ REMPLACE PAR TON RÉSULTAT RÉEL ]",
    // ▼ Remplace '#' par ton lien Google Drive une fois prêt
    lien: "#"
  },
  {
    id: 2,
    numero: "N°02",
    titre: "Dossier communication\nBrasserie du Bout du Monde",
    annee: "2024",
    categorie: "Communication",
    couleur: "linear-gradient(145deg, #6e3b1a 0%, #c07941 100%)",
    contexte: "Dossier de communication réalisé pour la Brasserie du Bout du Monde, entreprise bretonne artisanale.",
    role: "Élaboration d'une stratégie de communication, création de supports visuels, plan de diffusion.",
    resultat: "Dossier de communication complet. [ REMPLACE PAR TON RÉSULTAT RÉEL ]",
    lien: "#"
  },
  {
    id: 3,
    numero: "N°03",
    titre: "Mémoire BUT3\nQualité de service — Le Télégramme",
    annee: "2025",
    categorie: "Mémoire",
    couleur: "linear-gradient(145deg, #2c3e50 0%, #4a6274 100%)",
    contexte: "Mémoire de 3e année de BUT GACO portant sur la qualité de service dans la distribution du quotidien régional Le Télégramme.",
    role: "Recherches documentaires, entretiens terrain, analyse des processus ADV et logistique, rédaction du mémoire.",
    resultat: "Mémoire soutenu en [ DATE À COMPLÉTER ]. [ REMPLACE PAR TA NOTE / TON RÉSULTAT ]",
    lien: "#"
  }
];

// Génère les cartes dans la grille
function buildCards() {
  const grid = document.getElementById('cardsGrid');
  if (!grid) return;

  projets.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.setAttribute('aria-label', `Ouvrir le projet : ${p.titre.replace('\n', ' ')}`);
    card.innerHTML = `
      <div class="card-visual" style="background: ${p.couleur};">
        <span class="card-number">${p.numero}</span>
        <span class="card-category">${p.categorie}</span>
      </div>
      <div class="card-body">
        <h2 class="card-title">${p.titre.replace('\n', '<br>')}</h2>
        <p class="card-year">${p.annee}</p>
      </div>
    `;
    card.addEventListener('click', () => openDetail(p));
    grid.appendChild(card);
  });

  // Relance l'observer sur les nouvelles cartes
  document.querySelectorAll('.card.reveal').forEach(el => observer.observe(el));
}

// Ouvre le panneau de détail
function openDetail(projet) {
  const overlay = document.getElementById('detailOverlay');
  const panel = document.getElementById('detailPanel');

  // Extrait une couleur "simple" du gradient pour la bande
  const bandeColor = projet.couleur;

  panel.querySelector('#detailBande').style.background = bandeColor;
  panel.querySelector('#detailNumero').textContent = projet.numero;
  panel.querySelector('#detailTitre').textContent = projet.titre.replace('\n', ' ');
  panel.querySelector('#detailMeta').textContent = `${projet.categorie} · ${projet.annee}`;
  panel.querySelector('#detailContexte').textContent = projet.contexte;
  panel.querySelector('#detailRole').textContent = projet.role;
  panel.querySelector('#detailResultat').textContent = projet.resultat;

  // Bouton "Voir le dossier"
  const lienBtn = panel.querySelector('#detailLien');
  if (projet.lien === '#') {
    lienBtn.textContent = '[ Lien Google Drive à ajouter ]';
    lienBtn.style.opacity = '0.5';
    lienBtn.style.pointerEvents = 'none';
  } else {
    lienBtn.textContent = 'Voir le dossier ↗';
    lienBtn.href = projet.lien;
    lienBtn.style.opacity = '1';
    lienBtn.style.pointerEvents = 'all';
  }

  overlay.classList.add('open');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Ferme le panneau de détail
function closeDetail() {
  const overlay = document.getElementById('detailOverlay');
  const panel = document.getElementById('detailPanel');
  overlay.classList.remove('open');
  panel.classList.remove('open');
  document.body.style.overflow = '';
}

// Initialisation de la page projets
if (document.getElementById('cardsGrid')) {
  buildCards();

  document.getElementById('detailOverlay').addEventListener('click', closeDetail);
  document.getElementById('detailClose').addEventListener('click', closeDetail);

  // Fermeture avec Échap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
  });
}
