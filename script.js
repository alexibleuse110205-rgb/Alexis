/* ===================================================
   NAV — scroll effect + menu mobile + lien actif
   =================================================== */
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
  }));
}

// Lien actif selon la page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

/* ===================================================
   REVEAL AU SCROLL (pages secondaires)
   =================================================== */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ===================================================
   GALERIE TRADING CARDS — uniquement sur index.html
   =================================================== */
if (document.getElementById('cardsStage')) {

  /* --- Données des cartes ---
     Pour modifier/ajouter un projet : édite ce tableau.
     "visual" est un emoji ou une couleur CSS (string).
     "lien" : remplace '#' par ton URL Google Drive.
  --------------------------------------------------- */
  const CARDS = [
    {
      id: 0,
      type: 'PROFILE',
      title: 'Alexis\nBleuse',
      year: '2026',
      num: '01',
      featured: false,
      holo: true,
      visual: null,
      detail: {
        eyebrow: 'À propos de moi',
        title: 'Alexis Bleuse',
        contexte: 'Étudiant en 3ᵉ année de BUT GACO (parcours MRPE) à l\'IUT de Brest-Morlaix, passionné par la gestion de projet, le commerce et l\'entrepreneuriat.',
        role: 'En alternance au service ADV Logistique du groupe Le Télégramme depuis [ DATE À COMPLÉTER ], je gère les flux commandes et la coordination logistique au quotidien.',
        resultat: '[ Ajoute ici ce que tu retiens de ton parcours, tes ambitions, ce qui te définit. ]',
        lien: 'contact.html',
        lienLabel: 'Me contacter'
      }
    },
    {
      id: 1,
      type: 'PROJECT',
      title: 'Étude de marché\nCerafel',
      year: '2025',
      num: '02',
      featured: true,
      holo: false,
      visual: 'linear-gradient(145deg, #1b4f72 0%, #2e86c1 100%)',
      emoji: '🌿',
      detail: {
        eyebrow: 'Marketing · 2025',
        title: 'Étude de marché\nCerafel / Prince de Bretagne',
        contexte: 'Dans le cadre du BUT GACO, réalisation d\'une étude de marché complète pour Cerafel, la coopérative agricole bretonne derrière la marque Prince de Bretagne, leader des légumes bretons.',
        role: 'Analyse du marché, segmentation des cibles consommateurs, enquêtes terrain, analyse de la concurrence, restitution sous forme de rapport et de présentation orale.',
        resultat: 'Rapport d\'étude livré avec recommandations stratégiques. [ Ajoute ta note ou ton résultat ]',
        lien: '#',
        lienLabel: 'Voir le dossier'
      }
    },
    {
      id: 2,
      type: 'PROJECT',
      title: 'Dossier\nBrasserie',
      year: '2024',
      num: '03',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #6e3b1a 0%, #c07941 100%)',
      emoji: '🍺',
      detail: {
        eyebrow: 'Communication · 2024',
        title: 'Dossier communication\nBrasserie du Bout du Monde',
        contexte: 'Élaboration d\'un dossier de communication complet pour la Brasserie du Bout du Monde, entreprise artisanale bretonne spécialisée dans les bières de qualité.',
        role: 'Diagnostic communication, définition des cibles, stratégie éditoriale, création de supports de communication et plan de diffusion multicanal.',
        resultat: 'Dossier de communication complet présenté à l\'entreprise. [ Ajoute ta note ou le retour de l\'entreprise ]',
        lien: '#',
        lienLabel: 'Voir le dossier'
      }
    },
    {
      id: 3,
      type: 'PROJECT',
      title: 'Mémoire BUT3\nLe Télégramme',
      year: '2025',
      num: '04',
      featured: true,
      holo: false,
      visual: 'linear-gradient(145deg, #1a1a2e 0%, #4a4a7a 100%)',
      emoji: '📰',
      detail: {
        eyebrow: 'Mémoire · 2025',
        title: 'Mémoire BUT3 — Qualité de service dans la distribution Le Télégramme',
        contexte: 'Mémoire de fin de 3ᵉ année de BUT GACO portant sur la qualité de service dans la distribution du quotidien régional Le Télégramme, dans le cadre de mon alternance au service ADV Logistique.',
        role: 'Recherches documentaires, entretiens avec les équipes logistiques et ADV, analyse des processus, mesure de la satisfaction client, rédaction et soutenance du mémoire.',
        resultat: 'Soutenu en [ DATE ]. Note : [ à compléter ]. Résultat : [ à compléter ]',
        lien: '#',
        lienLabel: 'Voir le mémoire'
      }
    },
    {
      id: 4,
      type: 'PROJECT',
      title: 'Business Plan\nEntrepreneuriat',
      year: '2024',
      num: '05',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #1a4731 0%, #27ae60 100%)',
      emoji: '💡',
      detail: {
        eyebrow: 'Entrepreneuriat · 2024',
        title: 'Business Plan\nProjet de création d\'entreprise',
        contexte: 'Dans le cadre du parcours MRPE (Management Responsable de Projet et Entrepreneuriat), élaboration d\'un business plan complet pour un projet de création d\'entreprise.',
        role: 'Analyse de marché, modèle économique, prévisions financières, stratégie commerciale, pitch de présentation devant un jury.',
        resultat: '[ Décris ton projet, ta note, le retour du jury. ]',
        lien: '#',
        lienLabel: 'Voir le dossier'
      }
    },
    {
      id: 5,
      type: 'PROJECT',
      title: 'Analyse\nFinancière',
      year: '2023',
      num: '06',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #4a0e0e 0%, #c0392b 100%)',
      emoji: '📊',
      detail: {
        eyebrow: 'Finance · 2023',
        title: 'Analyse financière d\'entreprise',
        contexte: 'Analyse financière approfondie d\'une entreprise réelle dans le cadre des TD de gestion financière du BUT GACO.',
        role: 'Lecture des bilans et comptes de résultat, calcul des soldes intermédiaires de gestion (SIG), analyse de la rentabilité et de la solvabilité, rédaction d\'un rapport d\'analyse.',
        resultat: '[ Précise l\'entreprise analysée et ta note. ]',
        lien: '#',
        lienLabel: 'Voir le rapport'
      }
    },
    {
      id: 6,
      type: 'PROJECT',
      title: 'Dossier\nCommercial',
      year: '2023',
      num: '07',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #2e4057 0%, #048a81 100%)',
      emoji: '🤝',
      detail: {
        eyebrow: 'Commercial · 2023',
        title: 'Dossier commercial\n[ Précise le nom du projet ]',
        contexte: '[ Décris le contexte de ce projet commercial : quel client, quel produit/service, quel marché. ]',
        role: '[ Décris ton rôle : prospection, rédaction de l\'offre, négociation, etc. ]',
        resultat: '[ Note ou résultat obtenu. ]',
        lien: '#',
        lienLabel: 'Voir le dossier'
      }
    },
    {
      id: 7,
      type: 'PROJECT',
      title: 'Marketing\nDigital',
      year: '2024',
      num: '08',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #6c3483 0%, #a569bd 100%)',
      emoji: '📱',
      detail: {
        eyebrow: 'Marketing Digital · 2024',
        title: 'Stratégie marketing digital\n[ Précise le nom du projet ]',
        contexte: '[ Décris le projet : quelle entreprise/marque, quel objectif digital. ]',
        role: 'Audit des réseaux sociaux, définition d\'une stratégie de contenu, planning éditorial, [ ajoute tes actions ]. ',
        resultat: '[ Note ou résultat. ]',
        lien: '#',
        lienLabel: 'Voir le dossier'
      }
    },
    {
      id: 8,
      type: 'PROJECT',
      title: 'Enquête\nSatisfaction',
      year: '2023',
      num: '09',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #784212 0%, #e67e22 100%)',
      emoji: '📋',
      detail: {
        eyebrow: 'Études · 2023',
        title: 'Enquête satisfaction client\n[ Précise le nom du projet ]',
        contexte: '[ Contexte : quelle entreprise, quel produit/service concerné par l\'enquête. ]',
        role: 'Conception du questionnaire, collecte des données, analyse des résultats, préconisations d\'amélioration.',
        resultat: '[ Note ou résultat. ]',
        lien: '#',
        lienLabel: 'Voir le rapport'
      }
    },
    {
      id: 9,
      type: 'PROJECT',
      title: 'Événementiel\n[ Nom à compléter ]',
      year: '2024',
      num: '10',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #154360 0%, #1a5276 100%)',
      emoji: '🎪',
      detail: {
        eyebrow: 'Communication Événementielle · 2024',
        title: 'Dossier événementiel\n[ Précise le nom du projet ]',
        contexte: '[ Contexte : quel événement, quelle organisation. ]',
        role: '[ Décris ta contribution à l\'organisation de l\'événement. ]',
        resultat: '[ Note ou résultat. ]',
        lien: '#',
        lienLabel: 'Voir le dossier'
      }
    },
    {
      id: 10,
      type: 'PARCOURS',
      title: 'Mon\nParcours',
      year: '2026',
      num: '11',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #f0ede8 0%, #d5cfc8 100%)',
      emoji: '🎓',
      detail: {
        eyebrow: 'Formation',
        title: 'Mon parcours académique',
        contexte: 'De la 3ᵉ jusqu\'au BUT GACO, un parcours orienté gestion, commerce et management. Retrouve le détail sur la page Parcours.',
        role: '• Collège → Lycée BAC [ à compléter ] → BUT GACO parcours MRPE à l\'IUT de Brest-Morlaix\n• Alternance au groupe Le Télégramme',
        resultat: '[ Ajoute tes mention, résultats, récompenses. ]',
        lien: 'parcours.html',
        lienLabel: 'Voir mon parcours complet'
      }
    },
    {
      id: 11,
      type: 'CONTACT',
      title: 'Me\ncontacter',
      year: '2026',
      num: '12',
      featured: false,
      holo: false,
      visual: 'linear-gradient(145deg, #111111 0%, #444444 100%)',
      emoji: '✉',
      detail: {
        eyebrow: 'Disponible',
        title: 'Travaillons\nensemble.',
        contexte: 'Étudiant en BUT GACO parcours MRPE, je suis ouvert à des opportunités de stage, d\'alternance ou de projet en lien avec la gestion, le commerce ou le management.',
        role: 'Email : alexibleuse110205@gmail.com\nLinkedIn : [ à ajouter ]\n[ Autres moyens de contact ]',
        resultat: '[ Ajoute ici ta disponibilité : "disponible à partir de [ date ]" ]',
        lien: 'contact.html',
        lienLabel: 'Voir la page contact'
      }
    }
  ];

  const TOTAL = CARDS.length;
  let collected = 0;
  let detailOpen = false;
  let scrollLocked = false;

  /* --- Références DOM --- */
  const stage      = document.getElementById('cardsStage');
  const scrollPct  = document.getElementById('scrollPct');
  const cardCtr    = document.getElementById('cardCounter');
  const slotThumb  = document.getElementById('slotThumb');
  const slotCount  = document.getElementById('slotCount');
  const detailView = document.getElementById('detailView');
  const closeBtn   = document.getElementById('detailCloseBtn');
  const detailProg = document.getElementById('detailProgress');
  const detailRight= document.getElementById('detailRight');

  /* --- Création des éléments de carte dans le DOM --- */
  const cardEls = CARDS.map(c => {
    const el = document.createElement('div');
    el.className = 'tcard' + (c.holo ? ' tcard--holo' : '');
    el.dataset.id = c.id;

    const visualHtml = c.holo
      ? `<div class="tcard-visual"><div class="holo-avatar">AB</div></div>`
      : `<div class="tcard-visual" style="background:${c.visual};font-size:2.5rem;color:rgba(255,255,255,0.85);">${c.emoji || ''}</div>`;

    el.innerHTML = `
      <div class="tcard-top">
        <span class="tcard-logo">AB</span>
        <span class="tcard-type">(${c.type})</span>
      </div>
      ${c.featured ? `<div class="tcard-badge">FEATURED</div>` : ''}
      ${visualHtml}
      <div class="tcard-name">${c.title.replace('\n','<br>')}</div>
      <div class="tcard-bottom">
        <span class="tcard-year">YEAR ${c.year}</span>
        <span class="tcard-num">NUMBER ${c.num}/${TOTAL}</span>
      </div>
      <div class="tcard-copyright">© ${c.year} ALEXIS BLEUSE — IUT BREST-MORLAIX</div>
      <div class="tcard-hint">Cliquer pour ouvrir</div>
    `;

    el.addEventListener('click', () => openDetail(c.id));
    stage.appendChild(el);
    return el;
  });

  /* --- Hauteur de page = nb cartes × 100vh --- */
  document.body.style.minHeight = (TOTAL + 1.5) * 100 + 'vh';

  /* --- Mise à jour des positions des cartes au scroll --- */
  function updateCards() {
    if (detailOpen) return;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const totalScroll = TOTAL * vh;
    const rawIndex = scrollY / vh;
    const current = Math.min(Math.floor(rawIndex), TOTAL - 1);
    const slotProg = rawIndex - current; // 0→1 dans le slot courant

    // Pourcentage global
    const pct = Math.round(Math.min(scrollY / totalScroll, 1) * 100);
    scrollPct.textContent = String(pct).padStart(2, '0') + '%';
    cardCtr.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');

    cardEls.forEach((el, i) => {
      const diff = i - current;

      if (diff < 0) {
        // Carte déjà passée
        el.style.transform = 'translateY(-60px) scale(0.88)';
        el.style.opacity   = '0';
        el.classList.remove('is-active');
        el.style.zIndex = '1';

      } else if (diff === 0) {
        // Carte courante — elle sort vers le haut quand slotProg dépasse 0.6
        const exitT  = Math.max(0, (slotProg - 0.6) / 0.4);
        const exitY  = -exitT * 60;
        const exitS  = 1 - exitT * 0.1;
        const exitO  = 1 - exitT;
        el.style.transform = `translateY(${exitY}px) scale(${exitS})`;
        el.style.opacity   = String(exitO);
        el.style.zIndex    = '20';
        el.classList.toggle('is-active', exitT < 0.1);

      } else if (diff === 1) {
        // Prochaine carte — entre par le bas
        const enterT = Math.max(0, (slotProg - 0.4) / 0.6);
        const eased  = easeOutCubic(Math.min(enterT, 1));
        const startY = 80;
        const y      = startY * (1 - eased);
        const s      = 0.88 + eased * 0.12;
        const o      = eased;
        el.style.transform = `translateY(${y}px) scale(${s})`;
        el.style.opacity   = String(o);
        el.style.zIndex    = '15';
        el.classList.remove('is-active');

      } else {
        // Cartes loin derrière
        el.style.transform = 'translateY(100px) scale(0.85)';
        el.style.opacity   = '0';
        el.style.zIndex    = '1';
        el.classList.remove('is-active');
      }
    });
  }

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  window.addEventListener('scroll', updateCards, { passive: true });
  updateCards();

  /* --- Ouvrir le détail d'une carte --- */
  function openDetail(id) {
    const card = CARDS[id];
    const el   = cardEls[id];

    // 1. Animation : la carte vole vers le coin haut gauche
    const rect       = el.getBoundingClientRect();
    const targetRect = document.getElementById('slotThumb').getBoundingClientRect();

    const dx = targetRect.left + targetRect.width / 2 - (rect.left + rect.width / 2);
    const dy = targetRect.top  + targetRect.height / 2 - (rect.top  + rect.height / 2);
    const scale = targetRect.width / rect.width;

    el.style.transition = 'transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease';
    el.style.transform  = `translate(${dx}px, ${dy}px) scale(${scale})`;
    el.style.opacity    = '0.7';
    el.classList.remove('is-active');

    // 2. Mise à jour du compteur de collection
    collected = Math.max(collected, id + 1);
    slotCount.textContent = collected;
    slotThumb.textContent = CARDS[id].emoji || CARDS[id].title[0];
    slotThumb.classList.add('has-card');

    // 3. Ouvrir la vue détail après l'animation
    setTimeout(() => fillDetail(card), 350);
    setTimeout(() => {
      detailView.classList.add('open');
      if (closeBtn) closeBtn.style.display = 'flex';
      detailOpen = true;
      document.body.style.overflow = 'hidden';
    }, 300);
  }

  function fillDetail(card) {
    // Mini carte dans la colonne gauche
    const miniVisual = document.getElementById('detailMiniVisual');
    const miniName   = document.getElementById('detailMiniName');
    if (miniVisual) miniVisual.style.background = card.holo
      ? 'linear-gradient(135deg,#ff6b6b,#feca57,#48dbfb,#ff9ff3,#54a0ff)'
      : card.visual;
    if (miniName) miniName.textContent = card.title.replace('\n', ' ');

    // Texte éditorial
    document.getElementById('detailEyebrow').textContent = card.detail.eyebrow;
    document.getElementById('detailTitle').innerHTML      = card.detail.title.replace('\n', '<br>');
    document.getElementById('detailContexte').textContent = card.detail.contexte;
    document.getElementById('detailRole').textContent     = card.detail.role;
    document.getElementById('detailResultat').textContent = card.detail.resultat;

    // Bouton lien
    const lienBtn = document.getElementById('detailLien');
    if (lienBtn) {
      lienBtn.textContent = card.detail.lienLabel;
      lienBtn.href = card.detail.lien;
      lienBtn.style.opacity = card.detail.lien === '#' ? '0.45' : '1';
      lienBtn.style.pointerEvents = card.detail.lien === '#' ? 'none' : 'all';
    }

    // Reset scroll de la colonne droite
    if (detailRight) detailRight.scrollTop = 0;
    if (detailProg) detailProg.textContent = '00%';
  }

  /* --- Fermer le détail --- */
  function closeDetail() {
    detailView.classList.remove('open');
    if (closeBtn) closeBtn.style.display = 'none';
    detailOpen = false;
    document.body.style.overflow = '';

    // Réinitialise les cartes
    cardEls.forEach(el => {
      el.style.transition = '';
      el.style.opacity = '';
    });
    setTimeout(updateCards, 50);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

  // Progression du scroll dans la vue détail
  if (detailRight && detailProg) {
    detailRight.addEventListener('scroll', () => {
      const p = detailRight.scrollTop / (detailRight.scrollHeight - detailRight.clientHeight);
      detailProg.textContent = String(Math.round(p * 100)).padStart(2, '0') + '%';
    });
  }
}
