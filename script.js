/* ============================================================
   DONNÉES DES CARTES — MODIFIE ICI LE CONTENU
   Chaque objet = une catégorie du portfolio.
   ============================================================ */
const CARDS = [

  /* ── CARTE 1 : QUI SUIS-JE ? ──────────────────────────── */
  {
    id: 0, num: '01', type: 'QUI SUIS-JE ?',
    title: 'Alexis\nBleuse',
    holo: true, visual: null, emoji: '✦',
    tilt: -1.5,   /* inclinaison de la carte en degrés (négatif = gauche) */
  },

  /* ── CARTE 2 : MON PARCOURS ────────────────────────────── */
  {
    id: 1, num: '02', type: 'PARCOURS',
    title: 'Mon\nParcours',
    holo: false, visual: 'linear-gradient(145deg, #1a3a5c 0%, #2980b9 100%)', emoji: '🎓',
    tilt: 2,
  },

  /* ── CARTE 3 : EXPÉRIENCES PRO ─────────────────────────── */
  {
    id: 2, num: '03', type: 'EXPÉRIENCES',
    title: 'Expériences\nPro',
    holo: false, visual: 'linear-gradient(145deg, #1c1c1c 0%, #444 100%)', emoji: '💼',
    tilt: -1.8,
  },

  /* ── CARTE 4 : PROJETS TUTORÉS ─────────────────────────── */
  {
    id: 3, num: '04', type: 'PROJETS',
    title: 'Projets\nTutorés',
    holo: false, visual: 'linear-gradient(145deg, #1a4731 0%, #27ae60 100%)', emoji: '📐',
    tilt: 2.2,
  },

  /* ── CARTE 5 : DOSSIERS ────────────────────────────────── */
  {
    id: 4, num: '05', type: 'DOSSIERS',
    title: 'Mes\nDossiers',
    holo: false, visual: 'linear-gradient(145deg, #6e3b1a 0%, #c07941 100%)', emoji: '📁',
    tilt: -2,
  },

  /* ── CARTE 6 : COMPÉTENCES ─────────────────────────────── */
  {
    id: 5, num: '06', type: 'COMPÉTENCES',
    title: 'Mes\nCompétences',
    holo: false, visual: 'linear-gradient(145deg, #2c1b6b 0%, #7c3aed 100%)', emoji: '⚡',
    tilt: 1.5,
  },

  /* ── CARTE 7 : PASSIONS ────────────────────────────────── */
  {
    id: 6, num: '07', type: 'PASSIONS',
    title: 'Mes\nPassions',
    holo: false, visual: 'linear-gradient(145deg, #7f1d1d 0%, #e53e3e 100%)', emoji: '❤',
    tilt: -2.2,
  },
];

const TOTAL = CARDS.length; /* ← met à jour si tu ajoutes des cartes */

/* ============================================================
   CONTENU DES VUES DÉTAIL — MODIFIE ICI LES TEXTES
   ============================================================ */

/* ── Qui suis-je ? ──────────────────────────────────────── */
function renderProfil() {
  return `
    <div class="profil-photo">
      <!-- ▼ Remplace l'emoji par une balise <img src="ta-photo.jpg"> -->
      <span style="font-size:0.55rem;color:rgba(255,255,255,0.8);font-weight:700;text-align:center;letter-spacing:0.5px;">
        PHOTO<br>À AJOUTER
      </span>
    </div>

    <p class="detail-cat-label">À propos</p>
    <h2 class="detail-main-title">Alexis<br>Bleuse<span style="color:var(--accent);">.</span></h2>
    <div class="detail-divider"></div>

    <!-- ▼ Modifie l'accroche ici -->
    <p class="detail-text" style="margin-bottom:1.5rem;">
      Étudiant en 3<sup>e</sup> année de <strong>BUT GACO</strong> (parcours MRPE)
      à l'IUT de Brest-Morlaix, en alternance au service
      <strong>ADV Logistique</strong> du groupe <strong>Le Télégramme</strong>.
    </p>

    <!-- ▼ Ajoute une description plus longue sur toi ici -->
    <p class="detail-text" style="margin-bottom:2rem;">
      [ Décris-toi en quelques phrases : ta personnalité, ce qui te motive,
      tes ambitions, ce que tu apportes dans un projet ou une équipe. ]
    </p>

    <div class="detail-actions">
      <a href="contact.html" class="btn btn-dark">Me contacter</a>
      <!-- ▼ Remplace '#' par le lien de ton CV hébergé sur Google Drive -->
      <a href="#" class="btn btn-outline">
        Télécharger mon CV
        <span class="ph-block" style="display:inline;padding:0.1rem 0.4rem;font-size:0.65rem;margin-left:0.3rem;">lien à ajouter</span>
      </a>
    </div>
  `;
}

/* ── Mon parcours ───────────────────────────────────────── */
function renderParcours() {
  return `
    <p class="detail-cat-label">Formation</p>
    <h2 class="detail-main-title">Mon<br>Parcours</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2.5rem;">
      Un chemin construit autour de la gestion, du commerce et du management.
    </p>

    <div class="timeline">

      <!-- ▼ COLLÈGE : remplace les placeholders par tes vraies infos -->
      <div class="tl-item">
        <div class="tl-dot"></div>
        <p class="tl-date">[ 20XX – 20XX ]</p>
        <h3 class="tl-title">Collège</h3>
        <p class="tl-sub">[ Nom du collège ] — [ Ville ]</p>
        <p class="tl-desc">[ Décris cette période si tu veux (optionnel). ]</p>
      </div>

      <!-- ▼ LYCÉE : remplace les placeholders -->
      <div class="tl-item">
        <div class="tl-dot"></div>
        <p class="tl-date">[ 20XX – 20XX ]</p>
        <h3 class="tl-title">Lycée — BAC [ série à compléter ]</h3>
        <p class="tl-sub">[ Nom du lycée ] — [ Ville ]</p>
        <p class="tl-desc">[ Décris ton bac, tes matières fortes, ta mention. ]</p>
        <div class="tl-why">
          <strong>Pourquoi ce choix ?</strong><br>
          [ Explique pourquoi tu as choisi cette filière au lycée,
          ce que tu y as appris, comment ça t'a orienté vers le BUT GACO. ]
        </div>
      </div>

      <!-- BUT GACO -->
      <div class="tl-item">
        <div class="tl-dot" style="background:var(--accent);outline-color:var(--accent);"></div>
        <p class="tl-date">[ 20XX – En cours ]</p>
        <h3 class="tl-title">BUT GACO — Parcours MRPE</h3>
        <p class="tl-sub">IUT de Brest-Morlaix</p>
        <p class="tl-desc">
          Bachelor Universitaire de Technologie en Gestion Administrative et
          Commerciale des Organisations, parcours MRPE —
          <em>Management Responsable de Projet et Entrepreneuriat</em>.
          En alternance depuis la 2<sup>e</sup> année au groupe Le Télégramme.
        </p>
        <div class="tl-why">
          <strong>Pourquoi le BUT GACO ?</strong><br>
          [ Explique ton choix du BUT GACO : le côté professionnalisant,
          l'alternance, la polyvalence gestion/commerce/logistique... ]
        </div>
        <div class="tl-why" style="margin-top:0.6rem;">
          <strong>Pourquoi le parcours MRPE ?</strong><br>
          Le parcours <em>Management Responsable de Projet et Entrepreneuriat</em>
          m'a attiré pour sa dimension concrète : piloter des projets, développer
          une posture d'entrepreneur, et intégrer les enjeux de responsabilité
          dans les organisations.
          [ Complète avec ce qui t'a vraiment motivé dans ce parcours. ]
        </div>
      </div>

    </div><!-- fin .timeline -->
  `;
}

/* ── Expériences pro ────────────────────────────────────── */
function renderExperiences() {
  return `
    <p class="detail-cat-label">Terrain</p>
    <h2 class="detail-main-title">Expériences<br>Professionnelles</h2>
    <div class="detail-divider"></div>

    <!-- ── ALTERNANCE (EN COURS) ── -->
    <div class="exp-card">
      <div class="exp-header">
        <h3 class="exp-company">Groupe Le Télégramme</h3>
        <span class="exp-badge badge-current">En cours</span>
      </div>
      <p class="exp-role">Alternant — Service ADV Logistique</p>
      <!-- ▼ Remplace par tes dates exactes -->
      <p class="exp-dates">[ Mois 20XX ] → Aujourd'hui · Brest, Bretagne</p>
      <ul class="exp-missions">
        <!-- ▼ Remplace par tes vraies missions -->
        <li>Gestion et suivi des commandes clients au sein du service ADV.</li>
        <li>Coordination avec les équipes logistiques pour l'acheminement des abonnements.</li>
        <li class="ph-block">[ Ajoute une mission ]</li>
        <li class="ph-block">[ Ajoute une mission ]</li>
      </ul>
    </div>

    <!-- ── EXPÉRIENCE 2 (placeholder) — duplique ce bloc si besoin ── -->
    <div class="exp-card">
      <div class="exp-header">
        <h3 class="exp-company ph-block" style="display:inline-block;">[ Nom de l'entreprise ]</h3>
        <span class="exp-badge badge-past">Passée</span>
      </div>
      <p class="exp-role ph-block">[ Ton poste ]</p>
      <p class="exp-dates ph-block">[ Mois 20XX ] → [ Mois 20XX ] · [ Ville ]</p>
      <ul class="exp-missions">
        <li class="ph-block">[ Description de ta mission ]</li>
        <li class="ph-block">[ Description de ta mission ]</li>
      </ul>
    </div>

    <!-- ▼ Ajoute d'autres expériences en copiant le bloc ci-dessus -->
  `;
}

/* ── Projets tutorés ────────────────────────────────────── */
function renderProjets() {
  return `
    <p class="detail-cat-label">Académique</p>
    <h2 class="detail-main-title">Projets<br>Tutorés</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Projets réalisés dans le cadre du BUT GACO,
      seul ou en équipe, pour des entreprises réelles.
    </p>

    <!-- ── PROJET 1 : Cerafel ── -->
    <div class="projet-card">
      <div class="projet-header">
        <h3 class="projet-title">Étude de marché — Cerafel / Prince de Bretagne</h3>
        <span class="projet-year">2025</span>
      </div>
      <div class="projet-body">
        <p class="detail-section-title">Contexte</p>
        <!-- ▼ Modifie la description ici -->
        <p class="detail-text">
          Réalisation d'une étude de marché complète pour Cerafel, la coopérative
          agricole bretonne derrière la marque Prince de Bretagne.
          Analyse du marché, segmentation, enquêtes consommateurs, étude concurrentielle.
        </p>
        <p class="detail-section-title">Ce que ça m'a apporté</p>
        <!-- ▼ Modifie ce que ce projet t'a appris -->
        <p class="detail-text">
          [ Décris ce que ce projet t'a apporté : compétences développées,
          méthodes apprises, savoir-être renforcé, difficultés surmontées. ]
        </p>
      </div>
    </div>

    <!-- ── PROJET 2 : Business Plan ── -->
    <div class="projet-card">
      <div class="projet-header">
        <h3 class="projet-title">Business Plan / Entrepreneuriat</h3>
        <span class="projet-year">2024</span>
      </div>
      <div class="projet-body">
        <p class="detail-section-title">Contexte</p>
        <p class="detail-text">
          Élaboration d'un business plan complet dans le cadre du parcours MRPE
          (Management Responsable de Projet et Entrepreneuriat) : analyse de marché,
          modèle économique, prévisions financières, pitch devant un jury.
        </p>
        <p class="detail-section-title">Ce que ça m'a apporté</p>
        <p class="detail-text ph-block">
          [ Décris ce que ce projet t'a apporté. ]
        </p>
      </div>
    </div>

    <!-- ▼ PROJET 3 (placeholder) — copie le bloc ci-dessus pour en ajouter -->
    <div class="projet-card">
      <div class="projet-header">
        <h3 class="projet-title ph-block">[ Nom du projet à compléter ]</h3>
        <span class="projet-year ph-block" style="display:inline;">20XX</span>
      </div>
      <div class="projet-body">
        <p class="detail-section-title">Contexte</p>
        <p class="detail-text ph-block">[ Décris le contexte du projet. ]</p>
        <p class="detail-section-title">Ce que ça m'a apporté</p>
        <p class="detail-text ph-block">[ Ce que tu as appris / développé. ]</p>
      </div>
    </div>

  `;
}

/* ── Dossiers ───────────────────────────────────────────── */
function renderDossiers() {
  return `
    <p class="detail-cat-label">Productions</p>
    <h2 class="detail-main-title">Mes<br>Dossiers</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Dossiers, rapports et mémoires produits au cours de ma formation.
      Clique sur "Voir le dossier" pour accéder au document.
    </p>

    <!-- ── DOSSIER 1 : Brasserie du Bout du Monde ── -->
    <div class="dossier-item">
      <div class="dossier-info">
        <h3 class="dossier-title">Dossier communication — Brasserie du Bout du Monde</h3>
        <p class="dossier-desc">Stratégie et supports de communication pour une brasserie artisanale bretonne. [ Ajoute une courte description. ]</p>
      </div>
      <!-- ▼ Remplace '#' par le lien Google Drive de ce dossier -->
      <a href="#" class="btn btn-accent" target="_blank" rel="noopener"
         style="opacity:0.5;pointer-events:none;"
         title="Lien à ajouter dans script.js">
        Voir ↗
      </a>
    </div>

    <!-- ── DOSSIER 2 : Mémoire BUT3 ── -->
    <div class="dossier-item">
      <div class="dossier-info">
        <h3 class="dossier-title">Mémoire BUT3 — Qualité de service dans la distribution Le Télégramme</h3>
        <p class="dossier-desc">Mémoire de 3<sup>e</sup> année portant sur la qualité de service logistique. [ Ajoute une courte description. ]</p>
      </div>
      <!-- ▼ Remplace '#' par le lien Google Drive de ce mémoire -->
      <a href="#" class="btn btn-accent" target="_blank" rel="noopener"
         style="opacity:0.5;pointer-events:none;">
        Voir ↗
      </a>
    </div>

    <!-- ▼ DOSSIER 3 (placeholder) — copie le bloc ci-dessus pour en ajouter -->
    <div class="dossier-item">
      <div class="dossier-info">
        <h3 class="dossier-title ph-block">[ Nom du dossier à compléter ]</h3>
        <p class="dossier-desc ph-block">[ Courte description du dossier. ]</p>
      </div>
      <a href="#" class="btn btn-outline" style="opacity:0.5;pointer-events:none;">Voir ↗</a>
    </div>

  `;
}

/* ── Compétences ────────────────────────────────────────── */
function renderCompetences() {
  return `
    <p class="detail-cat-label">Savoir-faire</p>
    <h2 class="detail-main-title">Mes<br>Compétences</h2>
    <div class="detail-divider"></div>

    <div class="skills-grid">

      <div class="skill-cat">
        <div class="skill-cat-icon">📊</div>
        <h3 class="skill-cat-name">Gestion & Administration</h3>
        <div class="skill-tags">
          <span class="skill-tag">Administration des ventes</span>
          <span class="skill-tag">Gestion des commandes</span>
          <span class="skill-tag">Facturation</span>
          <span class="skill-tag">Suivi client</span>
          <!-- ▼ Ajoute tes compétences -->
          <span class="skill-tag ph">[ à compléter ]</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="skill-cat-icon">🚚</div>
        <h3 class="skill-cat-name">Logistique</h3>
        <div class="skill-tags">
          <span class="skill-tag">Gestion des flux</span>
          <span class="skill-tag">Coordination logistique</span>
          <span class="skill-tag">Suivi des livraisons</span>
          <span class="skill-tag ph">[ à compléter ]</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="skill-cat-icon">📈</div>
        <h3 class="skill-cat-name">Commercial & Marketing</h3>
        <div class="skill-tags">
          <span class="skill-tag">Étude de marché</span>
          <span class="skill-tag">Communication</span>
          <span class="skill-tag">Relation client</span>
          <span class="skill-tag ph">[ à compléter ]</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="skill-cat-icon">🖥️</div>
        <h3 class="skill-cat-name">Outils bureautiques</h3>
        <div class="skill-tags">
          <span class="skill-tag">Excel</span>
          <span class="skill-tag">Word</span>
          <span class="skill-tag">PowerPoint</span>
          <!-- ▼ Ajoute tes logiciels (ERP, CRM...) -->
          <span class="skill-tag ph">[ logiciel ]</span>
          <span class="skill-tag ph">[ logiciel ]</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="skill-cat-icon">🌐</div>
        <h3 class="skill-cat-name">Langues</h3>
        <div class="skill-tags">
          <span class="skill-tag">Français — Natif</span>
          <!-- ▼ Ajoute tes langues et niveaux -->
          <span class="skill-tag ph">[ Anglais — niveau ]</span>
          <span class="skill-tag ph">[ autre langue ]</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="skill-cat-icon">🤝</div>
        <h3 class="skill-cat-name">Savoir-être</h3>
        <div class="skill-tags">
          <span class="skill-tag">Rigueur</span>
          <span class="skill-tag">Autonomie</span>
          <span class="skill-tag">Travail en équipe</span>
          <span class="skill-tag ph">[ à compléter ]</span>
        </div>
      </div>

    </div><!-- fin .skills-grid -->
  `;
}

/* ── Passions ───────────────────────────────────────────── */
function renderPassions() {
  return `
    <p class="detail-cat-label">Centres d'intérêt</p>
    <h2 class="detail-main-title">Mes<br>Passions</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Ce qui m'anime en dehors des études et du travail.
    </p>

    <div class="passions-grid">

      <!-- ▼ Modifie les icônes et textes pour les adapter à tes vraies passions -->
      <div class="passion-card">
        <div class="passion-icon">⚽</div>
        <p class="passion-name ph-block">[ Ta passion ]</p>
        <p class="passion-desc ph-block">[ Courte description. ]</p>
      </div>

      <div class="passion-card">
        <div class="passion-icon">🎵</div>
        <p class="passion-name ph-block">[ Ta passion ]</p>
        <p class="passion-desc ph-block">[ Courte description. ]</p>
      </div>

      <div class="passion-card">
        <div class="passion-icon">✈️</div>
        <p class="passion-name ph-block">[ Ta passion ]</p>
        <p class="passion-desc ph-block">[ Courte description. ]</p>
      </div>

      <div class="passion-card">
        <div class="passion-icon">📚</div>
        <p class="passion-name ph-block">[ Ta passion ]</p>
        <p class="passion-desc ph-block">[ Courte description. ]</p>
      </div>

      <!-- ▼ Ajoute autant de passion-card que tu veux -->

    </div><!-- fin .passions-grid -->
  `;
}

/* ============================================================
   DISPATCH — choisit le bon rendu selon la carte
   ============================================================ */
function renderDetail(card) {
  switch(card.id) {
    case 0: return renderProfil();
    case 1: return renderParcours();
    case 2: return renderExperiences();
    case 3: return renderProjets();
    case 4: return renderDossiers();
    case 5: return renderCompetences();
    case 6: return renderPassions();
    default: return '<p class="ph-block">Contenu à venir.</p>';
  }
}

/* ============================================================
   GALERIE — ANIMATION DES CARTES AU SCROLL
   ============================================================ */
if (document.getElementById('cardsStage')) {

  /* Références DOM */
  const stage      = document.getElementById('cardsStage');
  const scrollPctEl= document.getElementById('scrollPct');
  const cardCtrEl  = document.getElementById('cardCtr');
  const slotThumb  = document.getElementById('slotThumb');
  const slotCount  = document.getElementById('slotCount');
  const detailView = document.getElementById('detailView');
  const detailMiniV= document.getElementById('detailMiniVisual');
  const detailMiniN= document.getElementById('detailMiniName');
  const detailRight= document.getElementById('detailRight');
  const detailCont = document.getElementById('detailContent');
  const detailProg = document.getElementById('detailScrollPct');
  const closeBtn   = document.getElementById('closeBtn');

  let detailOpen = false;
  let collected  = 0;

  /* Hauteur de scroll : chaque carte occupe 100vh, + 60vh à la fin */
  document.body.style.minHeight = (TOTAL + 0.6) * 100 + 'vh';

  /* ── Création des éléments cartes ──────────────────────── */
  const cardEls = CARDS.map(c => {
    const el = document.createElement('article');
    el.className = 'tcard' + (c.holo ? ' tcard--holo' : '');
    el.setAttribute('aria-label', c.type);

    const visualHtml = c.holo
      ? `<div class="tcard-visual"><div class="holo-avatar">AB</div></div>`
      : `<div class="tcard-visual" style="background:${c.visual};">${c.emoji}</div>`;

    el.innerHTML = `
      <div class="tcard-top">
        <span class="tcard-logo">AB</span>
        <span class="tcard-type">${c.type}</span>
      </div>
      ${visualHtml}
      <div class="tcard-name">${c.title.replace('\n', '<br>')}</div>
      <div class="tcard-bottom">
        <span class="tcard-year">YEAR 2026</span>
        <span class="tcard-num">NUMBER ${c.num}/${String(TOTAL).padStart(2,'0')}</span>
      </div>
      <div class="tcard-copy">© 2026 ALEXIS BLEUSE — IUT BREST-MORLAIX — BUT GACO MRPE</div>
    `;

    el.addEventListener('click', () => { if (el.classList.contains('is-active')) openDetail(c.id); });
    stage.appendChild(el);
    return el;
  });

  /* ── Easing ─────────────────────────────────────────────── */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInCubic(t)  { return t * t * t; }

  /* ── Calcul de la position d'une carte ──────────────────── */
  /* offset = i - rawIndex
       > 0  : carte en dessous du centre (arrive du bas)
       ≈ 0  : carte au centre (active)
       < 0  : carte au-dessus du centre (sort par le haut)
  */
  function applyCardStyle(el, offset, tilt) {
    let tx = 0, ty, sc, op, rot, zi;
    const isActive = Math.abs(offset) < 0.12;

    if (offset > 1.4) {
      /* ── Loin en dessous : invisible ── */
      ty = 110; sc = 0.88; op = 0; rot = tilt; zi = 1;

    } else if (offset > 0) {
      /* ── Entrée depuis le bas (offset 1.4 → 0) ──
         La carte monte, se redresse et grossit légèrement.
         On voit aussi la prochaine carte pointer depuis le bas → effet empilé. */
      const t = easeOutCubic(1 - offset / 1.4); /* 0→1 */
      ty  = (1 - t) * 75;          /* 75vh → 0 */
      sc  = 0.88 + t * 0.12;       /* 0.88 → 1 */
      op  = 0.15 + t * 0.85;       /* 0.15 → 1 */
      rot = tilt * (1 - t);        /* incliné → droit */
      zi  = 10 + Math.round(t * 10);

    } else if (offset >= -0.12) {
      /* ── Zone active (centré) ── */
      ty = 0; sc = 1; op = 1; rot = 0; zi = 25;

    } else if (offset >= -1.2) {
      /* ── Sortie vers le haut (offset 0 → -1.2) ──
         La carte accélère vers le haut et disparaît. */
      const t = easeInCubic(Math.min(-offset / 1.2, 1)); /* 0→1 */
      ty  = -t * 75;               /* 0 → -75vh */
      sc  = 1 - t * 0.1;          /* 1 → 0.9 */
      op  = 1 - t;                 /* 1 → 0 */
      rot = -tilt * t * 0.4;      /* légère contre-rotation en sortant */
      zi  = 20 - Math.round(t * 10);

    } else {
      /* ── Loin au-dessus : invisible ── */
      ty = -110; sc = 0.85; op = 0; rot = 0; zi = 1;
    }

    el.style.transform = `translateY(${ty}vh) rotate(${rot}deg) scale(${sc})`;
    el.style.opacity   = String(Math.max(0, Math.min(1, op)));
    el.style.zIndex    = String(zi);
    el.classList.toggle('is-active', isActive);
    el.style.cursor    = isActive ? 'pointer' : 'default';
  }

  /* ── Boucle de mise à jour au scroll ────────────────────── */
  function updateGallery() {
    if (detailOpen) return;

    const scrollY  = window.scrollY;
    const vh       = window.innerHeight;
    const rawIndex = scrollY / vh; /* 0 à TOTAL */

    /* Affichage du pourcentage */
    const pct = Math.round(Math.min(rawIndex / TOTAL, 1) * 100);
    if (scrollPctEl) scrollPctEl.textContent = String(pct).padStart(2, '0') + '%';

    /* Numéro de carte active */
    const activeIdx = Math.min(Math.floor(rawIndex + 0.12), TOTAL - 1);
    if (cardCtrEl) cardCtrEl.textContent =
      String(activeIdx + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');

    /* Position de chaque carte */
    cardEls.forEach((el, i) => {
      const offset = i - rawIndex;
      applyCardStyle(el, offset, CARDS[i].tilt);
    });
  }

  /* Utilise requestAnimationFrame pour que l'animation soit fluide */
  let rafId = null;
  window.addEventListener('scroll', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateGallery);
  }, { passive: true });

  updateGallery(); /* initialisation */

  /* ── Ouvrir le détail d'une carte ───────────────────────── */
  function openDetail(cardId) {
    const card = CARDS[cardId];
    const el   = cardEls[cardId];

    /* Animation : la carte vole vers le slot collection (coin haut gauche) */
    const cardRect = el.getBoundingClientRect();
    const slotRect = slotThumb.getBoundingClientRect();
    const dx = slotRect.left + slotRect.width  / 2 - (cardRect.left + cardRect.width  / 2);
    const dy = slotRect.top  + slotRect.height / 2 - (cardRect.top  + cardRect.height / 2);
    const sc = slotRect.width / cardRect.width;

    el.classList.add('collecting');
    el.style.transform = `translate(${dx}px, ${dy}px) scale(${sc})`;
    el.style.opacity   = '0.6';

    /* Mise à jour du compteur */
    collected = Math.max(collected, cardId + 1);
    if (slotCount) slotCount.textContent = collected;
    if (slotThumb) {
      slotThumb.textContent = card.emoji;
      slotThumb.classList.add('filled');
    }

    /* Remplissage de la vue détail */
    if (detailMiniV) {
      detailMiniV.style.background = card.holo
        ? 'linear-gradient(135deg,#ff9ff3,#feca57,#48dbfb,#ff6b6b,#54a0ff)'
        : card.visual;
      detailMiniV.textContent = card.holo ? '' : card.emoji;
    }
    if (detailMiniN) detailMiniN.textContent = card.title.replace('\n', ' ');
    if (detailCont)  detailCont.innerHTML  = renderDetail(card);
    if (detailRight) detailRight.scrollTop = 0;
    if (detailProg)  detailProg.textContent = '00%';

    /* Ouverture avec un léger délai pour laisser l'animation démarrer */
    setTimeout(() => {
      detailView.classList.add('open');
      if (closeBtn) closeBtn.style.display = 'flex';
      detailOpen = true;
      document.body.style.overflow = 'hidden';
    }, 280);
  }

  /* ── Fermer le détail ────────────────────────────────────── */
  function closeDetail() {
    detailView.classList.remove('open');
    if (closeBtn) closeBtn.style.display = 'none';
    detailOpen = false;
    document.body.style.overflow = '';

    /* Réinitialise les cartes sans transition brusque */
    cardEls.forEach(el => {
      el.classList.remove('collecting', 'smooth');
      el.style.transition = '';
    });
    requestAnimationFrame(updateGallery);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDetail);
  document.getElementById('detailBackBtn')?.addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

  /* Progression du scroll dans la colonne droite du détail */
  if (detailRight && detailProg) {
    detailRight.addEventListener('scroll', () => {
      const max = detailRight.scrollHeight - detailRight.clientHeight;
      const pct = max > 0 ? Math.round(detailRight.scrollTop / max * 100) : 0;
      detailProg.textContent = String(pct).padStart(2, '0') + '%';
    });
  }
}

/* ============================================================
   NAV (pages secondaires : parcours.html, contact.html…)
   ============================================================ */
const nav    = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('navMenu');

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
}

/* Lien actif */
const cp = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === cp) a.classList.add('active');
});

/* Animations au scroll sur les pages secondaires */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
