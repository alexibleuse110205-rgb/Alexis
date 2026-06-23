/* ============================================================
   DONNÉES DES CARTES — MODIFIE ICI LE CONTENU
   ============================================================ */
const CARDS = [

  /* ── CARTE 1 : QUI SUIS-JE ? ──────────────────────────── */
  {
    id: 0, num: '01', type: 'QUI SUIS-JE ?',
    title: 'Alexis\nBleuse',
    holo: true, visual: null, emoji: '✦',
    tilt: -1.5,
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

  /* ── CARTE 8 : MON PROJET ─────────────────────────────── */
  {
    id: 7, num: '08', type: 'MON PROJET',
    title: 'Mon\nProjet',
    holo: false, visual: 'linear-gradient(145deg, #0a3d62 0%, #1e6fa8 100%)', emoji: '🚀',
    tilt: -1.8,
  },

  /* ── CARTE 9 : CONTACT ─────────────────────────────────── */
  {
    id: 8, num: '09', type: 'CONTACT',
    title: 'Me\nContacter',
    holo: false, visual: 'linear-gradient(145deg, #111 0%, #333 100%)', emoji: '✉',
    tilt: 2,
  },
];

const TOTAL = CARDS.length;

/* ============================================================
   CONTENU DES VUES DÉTAIL
   ============================================================ */

function renderProfil() {
  return `
    <div class="profil-photo">
      <span style="font-size:0.55rem;color:rgba(255,255,255,0.8);font-weight:700;text-align:center;letter-spacing:0.5px;">
        PHOTO<br>À AJOUTER
      </span>
    </div>

    <p class="detail-cat-label">À propos</p>
    <h2 class="detail-main-title">Alexis<br>Bleuse<span style="color:var(--accent);">.</span></h2>
    <div class="detail-divider"></div>

    <p class="detail-text" style="margin-bottom:1.5rem;">
      Étudiant en 3<sup>e</sup> année de <strong>BUT GACO</strong> (parcours MRPE)
      à l'IUT de Brest-Morlaix, en alternance au service
      <strong>ADV Logistique</strong> du groupe <strong>Le Télégramme</strong>.
    </p>

    <p class="detail-text" style="margin-bottom:2rem;">
      [ Décris-toi en quelques phrases : ta personnalité, ce qui te motive,
      tes ambitions, ce que tu apportes dans un projet ou une équipe. ]
    </p>

    <div class="detail-actions">
      <a href="contact.html" class="btn btn-dark">Me contacter</a>
      <a href="#" class="btn btn-outline">
        Télécharger mon CV
        <span class="ph-block" style="display:inline;padding:0.1rem 0.4rem;font-size:0.65rem;margin-left:0.3rem;">lien à ajouter</span>
      </a>
    </div>
  `;
}

function renderParcours() {
  return `
    <p class="detail-cat-label">Formation</p>
    <h2 class="detail-main-title">Mon<br>Parcours</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2.5rem;">
      De mes premières années scolaires jusqu'à mon BUT, voici le chemin qui m'a
      menée là où j'en suis aujourd'hui.
    </p>

    <div class="timeline">

      <div class="tl-item">
        <div class="tl-dot"></div>
        <p class="tl-date">[ 20XX – 20XX ]</p>
        <h3 class="tl-title">Collège des Deux Baies — Carantec</h3>
        <p class="tl-sub">Carantec, Bretagne</p>
        <p class="tl-desc">
          J'ai été scolarisée au collège des Deux Baies à Carantec, où j'ai obtenu
          mon brevet avec la mention <strong>Très Bien</strong>. Cette période m'a
          permis d'acquérir de bonnes bases, de la rigueur et une méthode de travail.
        </p>
      </div>

      <div class="tl-item">
        <div class="tl-dot"></div>
        <p class="tl-date">[ 20XX – 20XX ]</p>
        <h3 class="tl-title">Lycée — Baccalauréat STMG</h3>
        <p class="tl-sub">[ Nom du lycée ] — Bretagne</p>
        <p class="tl-desc">
          Baccalauréat obtenu avec la mention <strong>Bien</strong>.
        </p>
        <div class="tl-why">
          <strong>Pourquoi le BAC STMG ?</strong><br>
          J'ai choisi cette filière pour son côté concret, tourné vers les entreprises,
          la gestion, le management et l'économie. C'était une formation qui correspondait
          à mon envie de mieux comprendre le fonctionnement des organisations.
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-dot" style="background:var(--accent);outline-color:var(--accent);"></div>
        <p class="tl-date">[ 20XX ] — En cours</p>
        <h3 class="tl-title">BUT GACO — Parcours MRPE</h3>
        <p class="tl-sub">IUT de Brest-Morlaix — Morlaix, Bretagne</p>
        <p class="tl-desc">
          Bachelor Universitaire de Technologie en <strong>Gestion Administrative et
          Commerciale des Organisations</strong>, parcours
          <strong>Management des Relations avec les Partenaires et les Entreprises</strong>.
          Depuis trois ans, cette formation me permet de développer des compétences variées
          dans plusieurs domaines. Depuis la 2<sup>e</sup> année, je réalise mon parcours
          en alternance au sein du groupe <strong>Le Télégramme</strong>.
        </p>
        <div class="tl-why">
          <strong>Pourquoi le BUT GACO ?</strong><br>
          J'ai choisi le BUT GACO pour sa polyvalence. Cette formation touche à plusieurs
          matières comme le marketing, la communication, la gestion, le droit, l'économie,
          la comptabilité, le management ou encore la gestion de projet. Cela m'a permis
          de découvrir différents domaines avant de définir plus précisément mon projet
          professionnel.
        </div>
        <div class="tl-why" style="margin-top:0.6rem;">
          <strong>Pourquoi le parcours MRPE ?</strong><br>
          J'ai choisi le parcours MRPE car il correspondait davantage à mes centres
          d'intérêt. Le côté <strong>RSE</strong> m'a particulièrement attirée, car
          c'est un sujet essentiel aujourd'hui pour les entreprises — elles doivent
          prendre en compte leur impact social, environnemental et économique. Ce parcours
          m'intéressait aussi pour son côté entrepreneurial et le développement de
          relations avec les partenaires et les entreprises.
        </div>
      </div>

    </div>
  `;
}

function renderExperiences() {
  return `
    <p class="detail-cat-label">Terrain</p>
    <h2 class="detail-main-title">Expériences<br>Professionnelles</h2>
    <div class="detail-divider"></div>

    <div class="exp-card">
      <div class="exp-header">
        <h3 class="exp-company">Groupe Le Télégramme</h3>
        <span class="exp-badge badge-current">En cours</span>
      </div>
      <p class="exp-role">Alternant — Service ADV Logistique</p>
      <p class="exp-dates">[ Mois 20XX ] → Aujourd'hui · Brest, Bretagne</p>
      <ul class="exp-missions">
        <li>Gestion et suivi des commandes clients au sein du service ADV.</li>
        <li>Coordination avec les équipes logistiques pour l'acheminement des abonnements.</li>
        <li class="ph-block">[ Ajoute une mission ]</li>
        <li class="ph-block">[ Ajoute une mission ]</li>
      </ul>
    </div>

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
  `;
}

function renderProjets() {
  return `
    <p class="detail-cat-label">Académique</p>
    <h2 class="detail-main-title">Projets<br>Tutorés</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Projets réalisés dans le cadre du BUT GACO,
      seul ou en équipe, pour des entreprises réelles.
    </p>

    <div class="projet-card">
      <div class="projet-header">
        <h3 class="projet-title">Étude de marché — Cerafel / Prince de Bretagne</h3>
        <span class="projet-year">2025</span>
      </div>
      <div class="projet-body">
        <p class="detail-section-title">Contexte</p>
        <p class="detail-text">
          Réalisation d'une étude de marché complète pour Cerafel, la coopérative
          agricole bretonne derrière la marque Prince de Bretagne.
          Analyse du marché, segmentation, enquêtes consommateurs, étude concurrentielle.
        </p>
        <p class="detail-section-title">Ce que ça m'a apporté</p>
        <p class="detail-text">
          [ Décris ce que ce projet t'a apporté : compétences développées,
          méthodes apprises, savoir-être renforcé, difficultés surmontées. ]
        </p>
      </div>
    </div>

    <div class="projet-card">
      <div class="projet-header">
        <h3 class="projet-title">Business Plan / Entrepreneuriat</h3>
        <span class="projet-year">2024</span>
      </div>
      <div class="projet-body">
        <p class="detail-section-title">Contexte</p>
        <p class="detail-text">
          Élaboration d'un business plan complet dans le cadre du parcours MRPE :
          analyse de marché, modèle économique, prévisions financières, pitch devant un jury.
        </p>
        <p class="detail-section-title">Ce que ça m'a apporté</p>
        <p class="detail-text ph-block">[ Décris ce que ce projet t'a apporté. ]</p>
      </div>
    </div>

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

function renderDossiers() {
  return `
    <p class="detail-cat-label">Productions</p>
    <h2 class="detail-main-title">Mes<br>Dossiers</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Dossiers, rapports et mémoires produits au cours de ma formation.
    </p>

    <div class="dossier-item">
      <div class="dossier-info">
        <h3 class="dossier-title">Dossier communication — Brasserie du Bout du Monde</h3>
        <p class="dossier-desc">Stratégie et supports de communication pour une brasserie artisanale bretonne.</p>
      </div>
      <a href="#" class="btn btn-accent" target="_blank" rel="noopener"
         style="opacity:0.5;pointer-events:none;" title="Lien à ajouter dans script.js">
        Voir ↗
      </a>
    </div>

    <div class="dossier-item">
      <div class="dossier-info">
        <h3 class="dossier-title">Mémoire BUT3 — Qualité de service dans la distribution Le Télégramme</h3>
        <p class="dossier-desc">Mémoire de 3<sup>e</sup> année portant sur la qualité de service logistique.</p>
      </div>
      <a href="#" class="btn btn-accent" target="_blank" rel="noopener"
         style="opacity:0.5;pointer-events:none;">
        Voir ↗
      </a>
    </div>

    <div class="dossier-item">
      <div class="dossier-info">
        <h3 class="dossier-title ph-block">[ Nom du dossier à compléter ]</h3>
        <p class="dossier-desc ph-block">[ Courte description du dossier. ]</p>
      </div>
      <a href="#" class="btn btn-outline" style="opacity:0.5;pointer-events:none;">Voir ↗</a>
    </div>
  `;
}

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
          <span class="skill-tag ph">[ logiciel ]</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="skill-cat-icon">🌐</div>
        <h3 class="skill-cat-name">Langues</h3>
        <div class="skill-tags">
          <span class="skill-tag">Français — Natif</span>
          <span class="skill-tag ph">[ Anglais — niveau ]</span>
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

    </div>
  `;
}

function renderPassions() {
  return `
    <p class="detail-cat-label">Centres d'intérêt</p>
    <h2 class="detail-main-title">Mes<br>Passions</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2.5rem;">
      Ce qui m'anime en dehors des études et du travail — le sport, l'esprit
      d'équipe et la découverte du monde.
    </p>

    <!-- ── HANDBALL ── -->
    <div class="passion-feature">
      <div class="passion-feature-photo">
        <!-- ▼ Remplace ce bloc par <img src="handball.jpg" alt="Handball"> -->
        <span class="passion-photo-ph">📷 PHOTO<br>Handball</span>
      </div>
      <div class="passion-feature-body">
        <div class="passion-feature-head">
          <span class="passion-feature-icon">🤾</span>
          <h3 class="passion-feature-title">Handball</h3>
        </div>
        <p class="detail-text">
          Je joue actuellement au <strong>Morlaix-Plougonven Handball</strong>, en
          senior prénational. Je pratique le handball depuis l'âge de 4 ans, c'est
          donc un sport qui m'accompagne depuis longtemps. Cette pratique m'a permis
          de développer un vrai esprit d'équipe, car le handball demande beaucoup de
          communication, de solidarité et de confiance entre les joueurs. C'est aussi
          un sport qui m'a donné un esprit compétiteur, avec l'envie de progresser,
          de me dépasser et de toujours donner le meilleur de moi-même.
        </p>
        <div class="passion-points">
          <span class="passion-point"><strong>Travail d'équipe</strong> · communication, entraide, cohésion</span>
          <span class="passion-point"><strong>Compétition</strong> · motivation, dépassement, ambition</span>
          <span class="passion-point"><strong>Mental</strong> · persévérance, confiance, gestion du stress</span>
          <span class="passion-point"><strong>Discipline</strong> · entraînement, sérieux, régularité</span>
        </div>
      </div>
    </div>

    <!-- ── FOOTBALL ── -->
    <div class="passion-feature passion-feature--rev">
      <div class="passion-feature-photo">
        <!-- ▼ Remplace ce bloc par <img src="football.jpg" alt="Football"> -->
        <span class="passion-photo-ph">📷 PHOTO<br>Football</span>
      </div>
      <div class="passion-feature-body">
        <div class="passion-feature-head">
          <span class="passion-feature-icon">⚽</span>
          <h3 class="passion-feature-title">Football</h3>
        </div>
        <p class="detail-text">
          Depuis deux saisons, j'ai commencé à jouer au football à
          <strong>Carantec-Henvic, à l'ESCH</strong>. En plus du handball, le football
          me permet de découvrir un autre sport collectif, avec d'autres règles,
          d'autres efforts et une autre façon de jouer en équipe. Cela m'apporte de la
          polyvalence et m'aide à m'adapter à un nouvel environnement sportif. Le
          football me permet aussi de travailler mon endurance, ma vision du jeu et ma
          capacité à progresser dans une discipline différente.
        </p>
        <div class="passion-points">
          <span class="passion-point"><strong>Adaptation</strong> · nouveau sport, règles, progression</span>
          <span class="passion-point"><strong>Polyvalence</strong> · endurance, technique, efforts</span>
          <span class="passion-point"><strong>Collectif</strong> · entraide, communication, cohésion</span>
          <span class="passion-point"><strong>Plaisir</strong> · découverte, partage, motivation</span>
        </div>
      </div>
    </div>

    <!-- ── VOYAGES ── -->
    <div class="passion-feature">
      <div class="passion-feature-photo">
        <!-- ▼ Remplace ce bloc par <img src="voyages.jpg" alt="Voyages"> -->
        <span class="passion-photo-ph">📷 PHOTO<br>Voyages</span>
      </div>
      <div class="passion-feature-body">
        <div class="passion-feature-head">
          <span class="passion-feature-icon">✈️</span>
          <h3 class="passion-feature-title">Voyages</h3>
        </div>
        <p class="detail-text">
          J'aime beaucoup voyager. J'ai déjà eu la chance de découvrir plusieurs pays
          comme le <strong>Maroc, l'Espagne, le Portugal et l'Angleterre</strong>.
          Voyager est quelque chose que j'adore, car cela permet de sortir de son
          quotidien, de découvrir de nouvelles cultures, de nouveaux paysages et de
          nouvelles façons de vivre. Plus tard, j'aimerais voyager encore davantage,
          notamment en <strong>Asie et au Brésil</strong>, avec mes deux meilleures amies.
        </p>
        <div class="passion-points">
          <span class="passion-point"><strong>Ouverture d'esprit</strong> · cultures, rencontres, découvertes</span>
          <span class="passion-point"><strong>Curiosité</strong> · paysages, traditions, expériences</span>
          <span class="passion-point"><strong>Autonomie</strong> · organisation, adaptation, confiance</span>
          <span class="passion-point"><strong>Partage</strong> · souvenirs, amitié, moments forts</span>
        </div>
      </div>
    </div>
  `;
}

function renderContact() {
  return `
    <p class="detail-cat-label">Me joindre</p>
    <h2 class="detail-main-title">Contact</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Tu veux me contacter pour une opportunité, un projet ou juste discuter ?
    </p>

    <div class="contact-links" style="display:flex;flex-direction:column;gap:1rem;margin-bottom:2.5rem;">

      <a href="mailto:alexibleuse110205@gmail.com" class="contact-item">
        <span class="contact-item-icon">✉</span>
        <div>
          <p class="contact-item-label">Email</p>
          <p class="contact-item-value">alexibleuse110205@gmail.com</p>
        </div>
      </a>

      <a href="#" target="_blank" rel="noopener" class="contact-item">
        <span class="contact-item-icon">🔗</span>
        <div>
          <p class="contact-item-label">LinkedIn</p>
          <p class="contact-item-value">
            [ Ton profil LinkedIn ]
            <span class="ph-block" style="display:inline;font-size:0.7rem;margin-left:0.4rem;">lien à ajouter</span>
          </p>
        </div>
      </a>

      <a href="https://github.com/alexibleuse110205-rgb" target="_blank" rel="noopener" class="contact-item">
        <span class="contact-item-icon">⌥</span>
        <div>
          <p class="contact-item-label">GitHub</p>
          <p class="contact-item-value">alexibleuse110205-rgb</p>
        </div>
      </a>

    </div>

    <div class="cv-section">
      <div style="font-size:2.5rem;margin-bottom:1rem;">📄</div>
      <h2 style="font-family:var(--font-serif);font-size:1.3rem;font-weight:700;margin-bottom:0.7rem;">Mon CV</h2>
      <p style="margin-bottom:1rem;">Télécharge mon CV au format PDF.</p>
      <a href="#" class="btn btn-dark" download style="margin:0 auto;width:fit-content;">
        Télécharger le CV
        <span class="ph-block" style="display:inline;font-size:0.7rem;margin-left:0.4rem;">lien à ajouter</span>
      </a>
    </div>
  `;
}

function renderMonProjet() {
  return `
    <p class="detail-cat-label">Avenir</p>
    <h2 class="detail-main-title">Mon<br>Projet</h2>
    <div class="detail-divider"></div>

    <!-- ── À COURT TERME ── -->
    <div class="proj-section">
      <div class="proj-section-badge">À court terme</div>
      <h3 class="proj-section-title">CDD — Service ADV, Le Télégramme</h3>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        L'année prochaine, je vais faire un <strong>CDD au sein du service Administration
        des Ventes</strong>, dans la société Le Télégramme. Ce service fait partie de la
        direction Logistique et Réseau. Ce contrat va me permettre de continuer à développer
        mes compétences professionnelles et de mieux comprendre le fonctionnement d'une entreprise.
      </p>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        Mes missions seront variées : gestion de la distribution des titres accessoires
        (<em>multi-titres</em>) auprès du réseau des vendeurs colporteurs de presse, traitement
        des demandes de repérage, gestion des fichiers de distribution, suivi des réclamations
        auprès des éditeurs, et participation à la logistique administrative des ventes.
      </p>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        Je m'occuperai aussi de la gestion de certaines commandes (Diverto, Version Femina,
        Le Poher), de la préparation des fichiers de distribution pour les différents réseaux
        (vente au numéro, VCP, partenariats), et de la gestion des abonnés postaux
        (nouveaux clients, mises à jour, facturation, encaissements).
      </p>
      <div class="passion-points" style="margin-bottom:0;">
        <span class="passion-point"><strong>Organisation</strong> · rigueur, méthode, priorités</span>
        <span class="passion-point"><strong>Gestion administrative</strong> · fichiers, contrats, suivi</span>
        <span class="passion-point"><strong>Relation professionnelle</strong> · éditeurs, clients, réseau</span>
        <span class="passion-point"><strong>Autonomie</strong> · responsabilités, décisions, confiance</span>
        <span class="passion-point"><strong>Analyse</strong> · statistiques, données, résultats</span>
        <span class="passion-point"><strong>Logistique</strong> · distribution, commandes, coordination</span>
      </div>
    </div>

    <!-- ── L'ANNÉE PROCHAINE ── -->
    <div class="proj-section">
      <div class="proj-section-badge proj-section-badge--long">À plus long terme</div>
      <h3 class="proj-section-title">Une pause réfléchie… et l'entrepreneuriat</h3>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        Pour la suite, je suis encore en réflexion. J'ai décidé de faire une
        <strong>pause dans mes études</strong>, car je ne voulais pas faire un master
        simplement pour faire un master. Je préfère prendre le temps de mieux me connaître,
        de découvrir davantage le monde professionnel et de trouver une voie qui me correspond
        vraiment.
      </p>
      <p class="detail-text">
        À plus long terme, <strong>j'aimerais ouvrir ma propre entreprise</strong>. C'est un
        projet qui m'attire, car j'aime l'idée de construire quelque chose par moi-même, de
        prendre des responsabilités et de développer un projet qui me ressemble. Cette année
        en CDD sera donc une étape importante pour gagner en expérience, en maturité et en
        confiance avant de construire la suite de mon parcours.
      </p>
    </div>
  `;
}

/* ── Dispatch ──────────────────────────────────────────────── */
function renderDetail(card) {
  switch(card.id) {
    case 0: return renderProfil();
    case 1: return renderParcours();
    case 2: return renderExperiences();
    case 3: return renderProjets();
    case 4: return renderDossiers();
    case 5: return renderCompetences();
    case 6: return renderPassions();
    case 7: return renderMonProjet();
    case 8: return renderContact();
    default: return '<p class="ph-block">Contenu à venir.</p>';
  }
}

/* ============================================================
   GALERIE — TRAVELLING À TRAVERS LES CARTES
   Principe : les cartes sont fixes dans une grande scène.
   Au scroll, c'est la scène entière (caméra) qui se déplace.
   ============================================================ */
if (document.getElementById('cardsStage')) {

  const stage       = document.getElementById('cardsStage');
  const scrollPctEl = document.getElementById('scrollPct');
  const cardCtrEl   = document.getElementById('cardCtr');
  const slotThumb   = document.getElementById('slotThumb');
  const slotCount   = document.getElementById('slotCount');
  const detailView  = document.getElementById('detailView');
  const detailMiniV = document.getElementById('detailMiniVisual');
  const detailMiniN = document.getElementById('detailMiniName');
  const detailRight = document.getElementById('detailRight');
  const detailCont  = document.getElementById('detailContent');
  const detailProg  = document.getElementById('detailScrollPct');
  const closeBtn    = document.getElementById('closeBtn');
  const marqueeInner = document.querySelector('.marquee-inner');

  let detailOpen = false;
  const visitedIds = new Set();

  /* Scène — grand décor, translate comme une caméra */
  const scene = document.createElement('div');
  scene.className = 'scene';
  stage.appendChild(scene);

  /* ── Création des cartes dans la scène ─────────────────── */
  const wrapperEls = CARDS.map(c => {
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';

    const shell = document.createElement('div');
    shell.className = 'tcard-shell';

    const el = document.createElement('article');
    el.className = 'tcard' + (c.holo ? ' tcard--holo' : '');
    el.setAttribute('aria-label', c.type);

    const visualHtml = c.holo
      ? `<div class="tcard-visual"><div class="tcard-visual-ring"><div class="holo-avatar">AB</div></div></div>`
      : `<div class="tcard-visual"><div class="tcard-visual-ring">${c.emoji}</div></div>`;

    if (!c.holo) el.style.background = c.visual;

    el.innerHTML = `
      <div class="tcard-bg-num">${c.num}</div>
      <div class="tcard-top">
        <span class="tcard-logo-txt">←®</span>
        <span class="tcard-type">${c.type}</span>
      </div>
      <div class="tcard-top-line"></div>
      ${visualHtml}
      <div class="tcard-name-block">
        <span class="tcard-collected-badge">Collected</span>
        <div class="tcard-name">${c.title.replace('\n', '<br>')}</div>
      </div>
      <div class="tcard-bottom">
        <div class="tcard-bottom-col">
          <span class="tcard-year-label">Year</span>
          <span class="tcard-year-val">2026</span>
        </div>
        <div class="tcard-bottom-sep"></div>
        <div class="tcard-bottom-col">
          <span class="tcard-num-label">Number</span>
          <span class="tcard-num-val">${c.num}/${String(TOTAL).padStart(2,'0')}</span>
        </div>
      </div>
      <div class="tcard-copy">© 2026 Alexis Bleuse · IUT Brest-Morlaix · BUT GACO MRPE</div>
    `;

    shell.appendChild(el);
    wrapper.appendChild(shell);
    scene.appendChild(wrapper);

    wrapper.addEventListener('click', () => {
      if (wrapper.classList.contains('is-active')) openDetail(c.id);
    });

    /* Tilt 3D au survol */
    shell.addEventListener('mousemove', e => {
      if (!wrapper.classList.contains('is-active')) return;
      const r = shell.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale(1.05)`;
      el.style.boxShadow = `${x * -18}px ${y * 14}px 60px rgba(0,0,0,0.4), 0 40px 100px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.28)`;
      el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
      el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    });
    shell.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });

    return wrapper;
  });

  /* ── État interne ───────────────────────────────────────── */
  let STEP = 0, LOOP = 0;

  /* ── Initialisation / redimensionnement ─────────────────── */
  function init() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const isMobile = vw < 700;
    const cardW = isMobile ? 250 : 310;
    const cardH = isMobile ? 350 : 470;
    const SIDE  = isMobile ?  60 : 260;

    /* Espacement : garantit ~100px de la carte suivante visible en bas */
    STEP = Math.max(Math.round(vh / 2 + cardH / 2 - 110), Math.round(vh * 0.62));
    LOOP = TOTAL * STEP;

    /* Corps suffisamment long pour 3 boucles (téléportation) */
    document.body.style.minHeight = (3 * LOOP + vh) + 'px';

    /* Hauteur de la scène */
    scene.style.height = ((TOTAL - 1) * STEP + cardH + 80) + 'px';

    /* Placement fixe de chaque carte en quinconce */
    wrapperEls.forEach((wrapper, i) => {
      const xLeft = vw / 2 + (i % 2 === 0 ? SIDE : -SIDE) - cardW / 2;
      wrapper.style.left      = xLeft + 'px';
      wrapper.style.top       = (i * STEP) + 'px';
      wrapper.style.transform = `rotate(${CARDS[i].tilt}deg)`;
    });

    window.scrollTo(0, LOOP);
    updateCamera();
  }

  /* ── Caméra : translateY de la scène ────────────────────── */
  function updateCamera() {
    if (detailOpen) return;

    const vh      = window.innerHeight;
    const isMobile = window.innerWidth < 700;
    const cardH   = isMobile ? 350 : 470;
    const rawScroll = window.scrollY - LOOP;

    /* Déplace la scène : à rawScroll=0 la carte 0 est au centre du viewport */
    scene.style.transform = `translateY(${-rawScroll + (vh - cardH) / 2}px)`;

    /* Carte active = la plus proche du centre */
    const rawIndex  = rawScroll / STEP;
    const activeIdx = ((Math.round(rawIndex) % TOTAL) + TOTAL) % TOTAL;

    wrapperEls.forEach((w, i) => {
      let dist = rawIndex - i;
      dist = ((dist % TOTAL) + TOTAL) % TOTAL;
      if (dist > TOTAL / 2) dist -= TOTAL;
      w.classList.toggle('is-active', Math.abs(dist) < 0.5);
    });

    /* UI */
    const normIdx = ((rawIndex % TOTAL) + TOTAL) % TOTAL;
    if (scrollPctEl) scrollPctEl.textContent =
      String(Math.round(normIdx / TOTAL * 100) % 100).padStart(2, '0') + '%';
    if (cardCtrEl) cardCtrEl.textContent =
      String(activeIdx + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');

    /* Marquee : parallaxe horizontal (vitesse différente des cartes) */
    if (marqueeInner) {
      marqueeInner.style.transform = `translateX(${-(normIdx / TOTAL) * 50}%)`;
    }
  }

  /* ── Boucle infinie : téléportation invisible ────────────── */
  let teleporting = false;
  function checkLoop() {
    const rawScroll = window.scrollY - LOOP;
    if (rawScroll < 0)       { teleporting = true; window.scrollTo(0, window.scrollY + LOOP); }
    else if (rawScroll >= LOOP) { teleporting = true; window.scrollTo(0, window.scrollY - LOOP); }
  }

  let rafId = null;
  window.addEventListener('scroll', () => {
    if (teleporting) { teleporting = false; return; }
    checkLoop();
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateCamera);
  }, { passive: true });

  window.addEventListener('resize', init, { passive: true });

  init();

  /* ── Ouvrir le détail d'une carte ───────────────────────── */
  function openDetail(cardId) {
    const card    = CARDS[cardId];
    const wrapper = wrapperEls[cardId];
    const shell   = wrapper.querySelector('.tcard-shell');

    /* Clone la shell pour l'animation de vol */
    const slotRect  = slotThumb.getBoundingClientRect();
    const shellRect = shell.getBoundingClientRect();

    const clone = shell.cloneNode(true);
    clone.style.cssText = `
      position:fixed;
      left:${shellRect.left}px;
      top:${shellRect.top}px;
      width:${shellRect.width}px;
      height:${shellRect.height}px;
      margin:0;
      transition:transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.65s ease;
      pointer-events:none;
      z-index:9999;
      transform-origin:top left;
    `;
    document.body.appendChild(clone);

    /* Force reflow puis anime */
    clone.getBoundingClientRect();
    const sc = slotRect.width / shellRect.width;
    const dx = slotRect.left - shellRect.left;
    const dy = slotRect.top  - shellRect.top;
    clone.style.transform = `translate(${dx}px,${dy}px) scale(${sc})`;
    clone.style.opacity   = '0.5';

    setTimeout(() => { clone.remove(); }, 700);

    /* Mise à jour compteur — 1 par carte unique visitée */
    visitedIds.add(cardId);
    if (slotCount) slotCount.textContent = visitedIds.size;
    if (slotThumb) {
      slotThumb.textContent = card.emoji;
      slotThumb.classList.add('filled');
    }

    /* Remplissage vue détail */
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
    requestAnimationFrame(updateGallery);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDetail);
  document.getElementById('detailBackBtn')?.addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

  if (detailRight && detailProg) {
    detailRight.addEventListener('scroll', () => {
      const max = detailRight.scrollHeight - detailRight.clientHeight;
      const pct = max > 0 ? Math.round(detailRight.scrollTop / max * 100) : 0;
      detailProg.textContent = String(pct).padStart(2, '0') + '%';
    });
  }
}

/* ============================================================
   NAV (pages secondaires)
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

const cp = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === cp) a.classList.add('active');
});

const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
