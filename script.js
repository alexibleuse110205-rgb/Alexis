/* ============================================================
   DONNÉES DES CARTES
   ============================================================ */
const CARDS = [
  { id:0, num:'01', type:'QUI SUIS-JE ?',   title:'Alexis\nBleuse',         holo:true,  visual:null,                                      emoji:'✦',  tilt:-1.5 },
  { id:1, num:'02', type:'PASSIONS',          title:'Mes\nPassions',          holo:false, visual:'linear-gradient(145deg,#7f1d1d,#e53e3e)', emoji:'❤',  tilt:2    },
  { id:2, num:'03', type:'PARCOURS',          title:'Mon\nParcours',          holo:false, visual:'linear-gradient(145deg,#1a3a5c,#2980b9)', emoji:'🎓', tilt:-1.8 },
  { id:3, num:'04', type:'EXPÉRIENCES',       title:'Expériences\nPro',       holo:false, visual:'linear-gradient(145deg,#1c1c1c,#444)',    emoji:'💼', tilt:2.2  },
  { id:4, num:'05', type:'MES COURS',         title:'Mes\nCours',             holo:false, visual:'linear-gradient(145deg,#0d3b5c,#1565c0)', emoji:'📚', tilt:-2   },
  { id:5, num:'06', type:'SAE',               title:'Mes\nSAE',               holo:false, visual:'linear-gradient(145deg,#1b4332,#40916c)', emoji:'🔬', tilt:1.5  },
  { id:6, num:'07', type:'PROJET TUTORÉ',     title:'Projet\nTutoré',         holo:false, visual:'linear-gradient(145deg,#6e3b1a,#c07941)', emoji:'📐', tilt:-2.2 },
  { id:7, num:'08', type:'COMPÉTENCES',       title:'Bilan des\nCompétences', holo:false, visual:'linear-gradient(145deg,#2c1b6b,#7c3aed)', emoji:'⚡', tilt:2    },
  { id:8, num:'09', type:'MON PROJET',        title:'Mon\nProjet',            holo:false, visual:'linear-gradient(145deg,#0a3d62,#1e6fa8)', emoji:'🚀', tilt:-1.5 },
  { id:9, num:'10', type:'CONTACT',           title:'Me\nContacter',          holo:false, visual:'linear-gradient(145deg,#111,#333)',       emoji:'✉', tilt:2    },
];
const TOTAL = CARDS.length;

/* ============================================================
   CONTENU DES VUES DÉTAIL
   ============================================================ */

function renderProfil() {
  return `
    <p class="detail-cat-label">À propos</p>
    <h2 class="detail-main-title">Alexis<br>Bleuse<span style="color:var(--accent);">.</span></h2>
    <div class="detail-divider"></div>
    <div class="profil-layout">
      <div class="profil-photo">
        <img src="./images/profil.jpg" alt="Alexis Bleuse" onerror="this.style.display='none'" />
      </div>
      <div>
        <p class="detail-text" style="margin-bottom:2rem;">
          Je m'appelle <strong>Alexis Bleuse</strong>, j'ai <strong>21 ans</strong>,
          je suis étudiant en <strong>BUT GACO</strong> (Gestion Administrative et
          Commerciale des Organisations) à l'IUT de Brest-Morlaix. En alternance
          depuis deux ans chez <strong>Le Télégramme</strong> dans le
          <strong>Pôle Logistique Réseaux</strong>.
        </p>
        <div class="detail-actions">
          <a href="mailto:alexis.bleuse6@gmail.com" class="btn btn-dark">Me contacter</a>
        </div>
      </div>
    </div>
  `;
}

/* ── Passions ──────────────────────────────────────────────── */
function renderPassions() {
  return `
    <p class="detail-cat-label">Centres d'intérêt</p>
    <h2 class="detail-main-title">Mes<br>Passions</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2.5rem;">
      Ce qui m'anime en dehors des études et du travail — le sport, l'esprit
      d'équipe et la découverte du monde.
    </p>

    <div class="passion-feature">
      <div class="passion-feature-photo">
        <img src="./images/handball.jpg" alt="Handball" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.style.display='none'" />
      </div>
      <div class="passion-feature-body">
        <div class="passion-feature-head">
          <span class="passion-feature-icon">🤾</span>
          <h3 class="passion-feature-title">Handball</h3>
        </div>
        <p class="detail-text">
          Je joue actuellement au <strong>Morlaix-Plougonven Handball</strong>, en
          senior prénational. Je pratique le handball depuis l'âge de 4 ans — c'est
          un sport qui m'accompagne depuis toujours. Cette pratique m'a permis de
          développer un vrai esprit d'équipe, beaucoup de communication, de solidarité
          et un esprit compétiteur qui me pousse à me dépasser.
        </p>
        <div class="passion-points">
          <span class="passion-point"><strong>Travail d'équipe</strong> · communication, entraide, cohésion</span>
          <span class="passion-point"><strong>Compétition</strong> · motivation, dépassement, ambition</span>
          <span class="passion-point"><strong>Mental</strong> · persévérance, confiance, gestion du stress</span>
          <span class="passion-point"><strong>Discipline</strong> · entraînement, sérieux, régularité</span>
        </div>
      </div>
    </div>

    <div class="passion-feature passion-feature--rev">
      <div class="passion-feature-photo">
        <img src="./images/football.jpg" alt="Football" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.style.display='none'" />
      </div>
      <div class="passion-feature-body">
        <div class="passion-feature-head">
          <span class="passion-feature-icon">⚽</span>
          <h3 class="passion-feature-title">Football</h3>
        </div>
        <p class="detail-text">
          Depuis deux saisons, je joue au football à
          <strong>Carantec-Henvic, à l'ESCH</strong>. En parallèle du handball,
          le football m'apporte de la polyvalence, un travail d'endurance et une autre
          façon de jouer collectif. Pratiquer deux sports différents m'aide à m'adapter
          et à progresser dans des environnements variés.
        </p>
        <div class="passion-points">
          <span class="passion-point"><strong>Adaptation</strong> · nouveau sport, règles, progression</span>
          <span class="passion-point"><strong>Polyvalence</strong> · endurance, technique, efforts</span>
          <span class="passion-point"><strong>Collectif</strong> · entraide, communication, cohésion</span>
          <span class="passion-point"><strong>Plaisir</strong> · découverte, partage, motivation</span>
        </div>
      </div>
    </div>

    <div class="passion-feature">
      <div class="passion-feature-photo">
        <img src="./images/voyage.jpg" alt="Voyage Portugal" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.style.display='none'" />
      </div>
      <div class="passion-feature-body">
        <div class="passion-feature-head">
          <span class="passion-feature-icon">✈️</span>
          <h3 class="passion-feature-title">Voyages</h3>
        </div>
        <p class="detail-text">
          J'aime beaucoup voyager. J'ai déjà eu la chance de visiter le
          <strong>Maroc, l'Espagne, le Portugal et l'Angleterre</strong>.
          Voyager me permet de découvrir de nouvelles cultures, de nouveaux paysages et
          d'autres façons de vivre. Plus tard, j'aimerais explorer l'<strong>Asie
          et le Brésil</strong> avec mes deux meilleures amies.
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

/* ── Parcours ──────────────────────────────────────────────── */
function renderParcours() {
  return `
    <p class="detail-cat-label">Formation</p>
    <h2 class="detail-main-title">Mon<br>Parcours</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2.5rem;">
      De mes premières années scolaires jusqu'à mon BUT, voici le chemin
      qui m'a mené là où j'en suis aujourd'hui.
    </p>

    <div class="timeline">

      <div class="tl-item tl-item--with-map">
        <div class="tl-item-content">
          <div class="tl-dot"></div>
          <p class="tl-date">Collège</p>
          <h3 class="tl-title">Collège des Deux Baies</h3>
          <p class="tl-sub">Carantec, Bretagne</p>
          <p class="tl-desc">
            Scolarisé au collège des Deux Baies à Carantec, où j'ai obtenu
            mon brevet avec la mention <strong>Très Bien</strong>. Cette période
            m'a permis d'acquérir de la rigueur et une méthode de travail solides.
          </p>
        </div>
        <div class="tl-map">
          <div class="tl-photo">
            <img src="./images/college.jpg" alt="Collège des Deux Baies" onerror="this.parentElement.style.display='none'" />
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Coll%C3%A8ge+des+Deux+Baies+Carantec&z=14&output=embed"
            width="100%" height="180" style="border:0;border-radius:12px;" loading="lazy"
            allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div class="tl-item tl-item--with-map">
        <div class="tl-item-content">
          <div class="tl-dot"></div>
          <p class="tl-date">Lycée</p>
          <h3 class="tl-title">Lycée Tristan Corbière — Bac STMG</h3>
          <p class="tl-sub">Morlaix, Bretagne</p>
          <p class="tl-desc">
            Baccalauréat STMG obtenu avec la mention <strong>Bien</strong>
            au lycée Tristan Corbière à Morlaix.
          </p>
          <div class="tl-why">
            <strong>Pourquoi le BAC STMG ?</strong><br>
            J'ai choisi cette filière pour son côté concret, tourné vers les entreprises,
            la gestion, le management et l'économie.
          </div>
        </div>
        <div class="tl-map">
          <div class="tl-photo">
            <img src="./images/lycee.jpg" alt="Lycée Tristan Corbière" onerror="this.parentElement.style.display='none'" />
          </div>
          <iframe
            src="https://maps.google.com/maps?q=Lyc%C3%A9e+Tristan+Corbi%C3%A8re+Morlaix&z=14&output=embed"
            width="100%" height="180" style="border:0;border-radius:12px;" loading="lazy"
            allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div class="tl-item tl-item--with-map">
        <div class="tl-item-content">
          <div class="tl-dot" style="background:var(--accent);outline-color:var(--accent);"></div>
          <p class="tl-date">Aujourd'hui</p>
          <h3 class="tl-title">BUT GACO — Parcours MRPE</h3>
          <p class="tl-sub">IUT de Brest-Morlaix — Morlaix, Bretagne</p>
          <p class="tl-desc">
            Bachelor Universitaire de Technologie en <strong>Gestion Administrative et
            Commerciale des Organisations</strong>, parcours
            <strong>Management des Relations avec les Partenaires et les Entreprises</strong>.
            Depuis la 2<sup>e</sup> année, je réalise mon parcours en alternance
            au sein du groupe <strong>Le Télégramme</strong>.
          </p>
          <div class="tl-why">
            <strong>Pourquoi le BUT GACO ?</strong><br>
            Sa polyvalence : marketing, gestion, droit, économie, comptabilité,
            management, logistique, développement durable. Une vraie diversité
            qui m'a permis de trouver mes centres d'intérêt professionnels.
          </div>
          <div class="tl-why" style="margin-top:0.6rem;">
            <strong>Pourquoi le parcours MRPE ?</strong><br>
            Le côté <strong>RSE</strong> m'a particulièrement attiré, ainsi que
            l'entrepreneuriat et le développement des relations avec les partenaires.
          </div>
        </div>
        <div class="tl-map">
          <div class="tl-photo">
            <img src="./images/iut.jpg" alt="IUT Morlaix" onerror="this.parentElement.style.display='none'" />
          </div>
          <iframe
            src="https://maps.google.com/maps?q=IUT+Morlaix+Bretagne&z=14&output=embed"
            width="100%" height="180" style="border:0;border-radius:12px;" loading="lazy"
            allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
  `;
}

/* ── Expériences ───────────────────────────────────────────── */
function renderExperiences() {
  return `
    <p class="detail-cat-label">Terrain</p>
    <h2 class="detail-main-title">Expériences<br>Professionnelles</h2>
    <div class="detail-divider"></div>

    <div class="exp-card">
      <div class="exp-photo">
        <img src="./images/jobs.jpg" alt="Premières expériences" onerror="this.parentElement.style.display='none'" />
      </div>
      <div class="exp-header">
        <h3 class="exp-company">Mes premières expériences</h3>
        <span class="exp-badge badge-past">Saisonnier</span>
      </div>
      <p class="exp-role">Petits jobs d'été — dès 14 ans</p>
      <p class="exp-dates">Divers secteurs · Bretagne</p>
      <p class="detail-text" style="margin:0.8rem 0;">
        Depuis l'âge de 14 ans, j'ai eu l'occasion de réaliser plusieurs expériences
        professionnelles pendant les périodes d'été. J'ai travaillé dans différents
        domaines comme les <strong>échalotes, la plonge, la pâtisserie</strong> ou encore
        en <strong>pépinière</strong>. Ces premières expériences m'ont permis de découvrir
        le monde du travail très tôt et de développer le goût du travail.
      </p>
      <ul class="exp-missions">
        <li>Goût du travail · Rigueur · Ponctualité</li>
        <li>Persévérance · Adaptation · Sens de l'effort</li>
        <li>Travail en équipe</li>
      </ul>
    </div>

    <div class="exp-card">
      <div class="exp-photo">
        <img src="./images/telegramme.jpg" alt="Le Télégramme" onerror="this.parentElement.style.display='none'" />
      </div>
      <div class="exp-header">
        <h3 class="exp-company">Groupe Le Télégramme</h3>
        <span class="exp-badge badge-current">En cours</span>
      </div>
      <p class="exp-role">Alternant — Pôle Logistique</p>
      <p class="exp-dates">Depuis 2 ans · Brest, Bretagne</p>
      <p class="detail-text" style="margin:0.8rem 0;">
        Depuis deux ans, je réalise mon alternance au sein du
        <strong>pôle logistique du Télégramme</strong>. Mes missions consistent
        principalement à participer à l'optimisation du service et à mettre en place
        des outils permettant d'améliorer l'organisation et le fonctionnement quotidien.
      </p>
      <ul class="exp-missions">
        <li>Étude d'améliorations des systèmes d'information logistique et ventes
          (applications mobiles diffuseurs et VCP, solutions de secours portage,
          pilotage planning transporteurs)</li>
        <li>Rédaction de cahiers des charges</li>
        <li>Mise en place d'automatismes bureautiques pour le service ADV
          (Google Script)</li>
      </ul>
      <div class="passion-points" style="margin-top:1rem;">
        <span class="passion-point"><strong>Sens de l'écoute</strong> · Esprit d'analyse · Autonomie</span>
        <span class="passion-point"><strong>Organisation</strong> · Esprit de synthèse · Circuits de décision</span>
        <span class="passion-point"><strong>Notions de codage</strong> · Automatisation bureautique (Google Script)</span>
      </div>
    </div>
  `;
}

/* ── Mes Cours ─────────────────────────────────────────────── */
function coursCard(code, name, link) {
  if (link) {
    return `<a href="${link}" target="_blank" rel="noopener" class="cours-item cours-item--link">
      <span class="cours-code">${code}</span>
      <span class="cours-name">${name}</span>
      <span class="cours-ext">Ouvrir le dossier ↗</span>
    </a>`;
  }
  return `<div class="cours-item">
    <span class="cours-code">${code}</span>
    <span class="cours-name">${name}</span>
  </div>`;
}

function renderCours() {
  return `
    <p class="detail-cat-label">Formation</p>
    <h2 class="detail-main-title">Mes<br>Cours</h2>
    <div class="detail-divider"></div>
    <div class="exp-photo" style="margin-bottom:1.8rem;">
      <img src="./images/iut.jpg" alt="IUT Morlaix" onerror="this.parentElement.style.display='none'" />
    </div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Liste des cours suivis au cours de mes trois années de BUT GACO.
      Pour certains enseignements, un lien vers le dossier ou projet associé
      est disponible directement sur la carte.
    </p>

    <div class="cours-year-block">
      <h3 class="cours-year-title">1ère Année</h3>
      <div class="cours-sem">
        <p class="cours-sem-label">1er Semestre</p>
        <div class="cours-grid">
          ${coursCard('R1.01','PPP1')}
          ${coursCard('R1.02','LV1 Anglais')}
          ${coursCard('R1.03-A','LV2 Espagnol')}
          ${coursCard('R1.04','Culture juridique')}
          ${coursCard('R1.05','Fondamentaux de la comptabilité')}
          ${coursCard('R1.06','Fondamentaux de l\'économie')}
          ${coursCard('R1.07','Technologies de l\'information et de la communication')}
          ${coursCard('R1.08','Gestion de projet et management opérationnel')}
          ${coursCard('R1.09','Fondamentaux du marketing')}
          ${coursCard('R1.10','Expression et Communication 1')}
        </div>
      </div>
      <div class="cours-sem">
        <p class="cours-sem-label">2e Semestre</p>
        <div class="cours-grid">
          ${coursCard('R2.01','PPP2')}
          ${coursCard('R2.02','LV1 Anglais')}
          ${coursCard('R2.03-12','LV2 Espagnol')}
          ${coursCard('R2.04','Droit de l\'entreprise')}
          ${coursCard('R2.05','Pilotage comptable des organisations')}
          ${coursCard('R2.06','Economie, organisations et développement durable')}
          ${coursCard('R2.07','Traitement de l\'information')}
          ${coursCard('R2.08','Management des organisations')}
          ${coursCard('R2.09','Marketing d\'études')}
          ${coursCard('R2.10','Expression et Communication 2')}
        </div>
      </div>
    </div>

    <div class="cours-year-block">
      <h3 class="cours-year-title">2ème Année</h3>
      <div class="cours-sem">
        <p class="cours-sem-label">3e Semestre</p>
        <div class="cours-grid">
          ${coursCard('R3.01','PPP')}
          ${coursCard('R3.02','LV1 Anglais')}
          ${coursCard('R3.03-A','LV2 Espagnol')}
          ${coursCard('R3.04','Droit du travail')}
          ${coursCard('R3.05','Stratégie d\'entreprise')}
          ${coursCard('R3.06','Marketing','https://canva.link/pjkhsdo2ondi2xs')}
          ${coursCard('R3.07','Ressources Humaines','https://canva.link/y7hwb0pn8w2vt0l')}
          ${coursCard('R3.08','Expression et Communication')}
          ${coursCard('R3.MRPE.10','Nouvelles approches de l\'entreprise')}
          ${coursCard('R3.MRPE.11','Management global du développement durable','https://docs.google.com/document/d/1Y0-ui77xCbmo4I_P4JCyvzIQ9uMjhtjZJ7VaecgFcBw/edit?usp=sharing')}
          ${coursCard('R3.MRPE.99','Logistique','https://docs.google.com/document/d/12BFD01_Zil_XSc6niE1GztKjgd3SPn8LtwELpfBwXtc/edit?usp=sharing')}
        </div>
      </div>
      <div class="cours-sem">
        <p class="cours-sem-label">4e Semestre</p>
        <div class="cours-grid">
          ${coursCard('R4.01','Projet personnel et professionnel')}
          ${coursCard('R4.02','LV1 Anglais')}
          ${coursCard('R4.03-B','LV2 Espagnol')}
          ${coursCard('R4.04','Droit des affaires')}
          ${coursCard('R4.05','Outils de pilotage')}
          ${coursCard('R4.06','Expression et communication')}
          ${coursCard('R4.MRPE.07','Commerce éco-responsable','https://docs.google.com/document/d/1dgnCIw8VWP97y2HATxr3EfoYijkQeu6zm8_ozHqPmMM/edit?usp=sharing')}
          ${coursCard('R4.MRPE.08','Responsabilité sociale et environnementale de l\'organisation')}
          ${coursCard('R4.MRPE.09','Entrepreneuriat et intraprenariat responsable','https://docs.google.com/document/d/12jMT99dYT__5lchVtj4a5DI1qngFh28n4ZjFYUhXyeg/edit?usp=sharing')}
          ${coursCard('R4.MRPE.10','Tourisme')}
        </div>
      </div>
    </div>

    <div class="cours-year-block">
      <h3 class="cours-year-title">3ème Année</h3>
      <div class="cours-sem">
        <p class="cours-sem-label">5e Semestre</p>
        <div class="cours-grid">
          ${coursCard('R5.01','Projet personnel et Professionnel')}
          ${coursCard('R5.02','Anglais des affaires')}
          ${coursCard('R5.03 A','Espagnol')}
          ${coursCard('R5.04','Achats','https://docs.google.com/document/d/1SBw-09q62CVsq_bKIUb9IZ9z5-ezhPh1908pVNKpvP8/edit?usp=sharing')}
          ${coursCard('R5.05','Logistique','https://canva.link/kjve4i0r0msgqw3')}
          ${coursCard('R5.MRPE.06','Reporting et achats','https://canva.link/rsv2akw8h0y7a1r')}
          ${coursCard('R5.MRPE.07','Management et reporting')}
          ${coursCard('R5.MRPE.08','Entrepreneuriat et Intrapreneuriat resp.')}
          ${coursCard('R5.MRPE.09','Management responsable d\'équipe')}
          ${coursCard('R5.MRPE.10','Droit Public')}
        </div>
      </div>
      <div class="cours-sem">
        <p class="cours-sem-label">6e Semestre</p>
        <div class="cours-grid">
          ${coursCard('R6.01','Démarche Qualité')}
          ${coursCard('R6.02','Anglais des affaires')}
          ${coursCard('R6.03','Traitement des données')}
          ${coursCard('R6.MRPE.04','Veille et pilotage dans une approche éco-responsable')}
          ${coursCard('R6.MRPE.05','Négociation et achat responsable')}
          ${coursCard('R6.06 MRPE','Adaptation locale S6')}
        </div>
      </div>
    </div>

    <div class="cours-bilan">
      <p class="detail-section-title" style="margin-top:0;">Ce que ces cours m'ont apporté</p>
      <p class="detail-text" style="margin-bottom:1rem;">
        Le BUT GACO aborde de nombreuses matières : gestion, comptabilité, droit,
        économie, marketing, communication, langues, RH, logistique, management
        et développement durable. Cette diversité m'a permis de développer une vraie
        polyvalence et de mieux comprendre le fonctionnement global d'une organisation.
      </p>
      <p class="detail-text">
        Avec le parcours MRPE, j'ai approfondi mes connaissances en RSE : comprendre
        les enjeux sociaux, environnementaux et économiques, imaginer des mesures
        adaptées, proposer des solutions réalistes et savoir les communiquer.
        Ces enseignements m'ont aussi permis d'identifier mes domaines de prédilection :
        <strong>logistique, management, entrepreneuriat et analyse d'entreprise</strong>.
      </p>
    </div>
  `;
}

/* ── Mes SAE ───────────────────────────────────────────────── */
function saeItem(code, name, link) {
  return `<div class="sae-item">
    <div class="sae-item-info">
      <span class="sae-item-code">${code}</span>
      <span class="sae-item-name">${name}</span>
    </div>
    ${link ? `<a href="${link}" target="_blank" rel="noopener" class="sae-link">Voir ↗</a>` : ''}
  </div>`;
}

function renderSAE() {
  return `
    <p class="detail-cat-label">Pratique</p>
    <h2 class="detail-main-title">Mes<br>SAE</h2>
    <div class="detail-divider"></div>

    <div class="tl-why" style="margin-bottom:2rem;">
      <strong>Qu'est-ce qu'une SAE ?</strong><br>
      Une SAÉ (Situation d'Apprentissage et d'Évaluation) est un projet concret
      qui permet de mettre en pratique les connaissances vues en cours dans une
      situation proche du monde professionnel.
    </div>

    <div class="sae-year-block">
      <h3 class="sae-year-title">1ère Année</h3>
      <p class="sae-sem-label">1er Semestre</p>
      ${saeItem('SAE 1.02','Participer au pilotage d\'une organisation','https://docs.google.com/document/d/1qHOfcSQYuSZucbQp1eF3KznqEzLxHbsPPDKJnniU_Jk/edit?tab=t.0')}
      ${saeItem('SAE 1.03','Concevoir la démarche marketing d\'une organisation','')}
      ${saeItem('SAE 1.04','Identifier les compétences professionnelles','')}
      <p class="sae-sem-label">2e Semestre</p>
      ${saeItem('SAE 2.02','Participer au pilotage d\'une organisation','')}
      ${saeItem('SAE 2.03','Mener une étude marketing','https://docs.google.com/presentation/d/1WNpRWmoW3F_MX5gzVF9QpXWaRZkho9Jju6QEpAmvQu0/edit?slide=id.g2c57ac4a2d4_1_16')}
    </div>

    <div class="sae-year-block">
      <h3 class="sae-year-title">2ème Année</h3>
      <p class="sae-sem-label">3e Semestre</p>
      ${saeItem('SAE 3.MRPE.01','Analyser et améliorer la performance d\'une organisation aux enjeux responsables et environnementaux','https://docs.google.com/document/d/1GMGkOwSqeYKhxQ602JbTiN1DiBZ_Y7vDuS9soDSZA9s/edit?tab=t.0')}
      ${saeItem('SAE 3.MRPE.02','Réaliser une étude conseil','')}
      <p class="sae-sem-label">4e Semestre</p>
      ${saeItem('SAE 4.MRPE.01','Envisager une création d\'activité en intégrant les enjeux environnementaux','https://docs.google.com/document/d/1sgYYbSfM2sxa9STV9Ux1kzbiUcxVQR-XvXOFDltIVnc/edit?tab=t.0')}
      ${saeItem('SAE 4.MRPE.02','Construire un plan d\'affaires','')}
    </div>

    <div class="sae-year-block">
      <h3 class="sae-year-title">3ème Année</h3>
      <p class="sae-sem-label">5e Semestre</p>
      ${saeItem('SAE 5.02','Conduire un projet de développement commercial dans un contexte international','https://docs.google.com/document/d/1Jqvaco7bihIsaaLKY2hJrOZ3hNoOPZH-fxjqXBPm2hQ/edit?tab=t.0')}
      <p class="sae-sem-label">6e Semestre</p>
      ${saeItem('SAE 6.0','Piloter et rendre compte d\'un projet — Adaptation locale S6','https://drive.google.com/file/d/15eqW4iVubhCZOpwGT7XrpHk-FMERgO7b/view?usp=sharing')}
    </div>

    <p class="detail-section-title">Les SAE qui m'ont le plus plu</p>

    <div class="sae-fave">
      <h4 class="sae-fave-title">SAE 3.MRPE.01 — Analyse de performance et enjeux RSE</h4>
      <p class="detail-text" style="margin-bottom:0.9rem;">
        Cette SAÉ portait sur l'<strong>analyse financière d'une organisation</strong>.
        Elle m'a permis de mieux comprendre un bilan et un compte de résultat,
        d'apprendre à interpréter les chiffres d'une entreprise et de développer
        une vision concrète de la performance organisationnelle.
      </p>
      <div class="passion-points">
        <span class="passion-point"><strong>Analyse financière</strong> · bilan, compte de résultat, chiffres</span>
        <span class="passion-point"><strong>Performance</strong> · indicateurs, interprétation, synthèse</span>
      </div>
    </div>

    <div class="sae-fave">
      <div class="exp-photo">
        <img src="./images/barbertruck.jpg" alt="Barbertruck" onerror="this.parentElement.style.display='none'" />
      </div>
      <h4 class="sae-fave-title">SAE 4.MRPE.01 — Créa IUT · Barbertruck 🏆</h4>
      <p class="detail-text" style="margin-bottom:0.9rem;">
        Concours inter-équipes organisé à l'IUT : chaque équipe devait créer une
        entreprise fictive de A à Z. Avec <strong>Noah et Justin</strong>, nous avons
        imaginé <strong>Barbertruck</strong> — un concept de barbier ambulant.
        Idée, concept, offre, cible, communication, présentation… et nous avons
        <strong>remporté le concours</strong> face aux autres équipes.
      </p>
      <div class="passion-points">
        <span class="passion-point"><strong>Créativité</strong> · idée originale, concept différenciant</span>
        <span class="passion-point"><strong>Esprit de compétition</strong> · se démarquer, convaincre, gagner</span>
        <span class="passion-point"><strong>Travail d'équipe</strong> · cohésion, répartition, synergie</span>
        <span class="passion-point"><strong>Présentation orale</strong> · argumentation, confiance, clarté</span>
      </div>
    </div>

    <div class="sae-fave">
      <h4 class="sae-fave-title">SAE 5 / 6 — Kavaton 🏆</h4>
      <p class="detail-text" style="margin-bottom:0.9rem;">
        Même principe que Barbertruck : un concours inter-équipes à l'IUT, avec un
        thème imposé. En 3<sup>e</sup> année, nous avons travaillé sur le projet
        <strong>Kavaton</strong> en remobilisant toutes les compétences acquises
        les années précédentes — analyse, stratégie, cohérence de l'offre,
        gestion de projet et défense devant un jury.
      </p>
      <div class="passion-points">
        <span class="passion-point"><strong>Compétition</strong> · thème imposé, se démarquer, convaincre</span>
        <span class="passion-point"><strong>Gestion de projet</strong> · étapes, délais, organisation</span>
        <span class="passion-point"><strong>Prise de recul</strong> · analyse, synthèse, décision</span>
        <span class="passion-point"><strong>Confiance</strong> · prise de parole, assurance, progression</span>
      </div>
    </div>

    <div class="cours-bilan">
      <p class="detail-section-title" style="margin-top:0;">Ce que les SAE m'ont apporté</p>
      <p class="detail-text">
        Les SAÉ m'ont offert une expérience concrète et professionnalisante.
        Elles m'ont permis de relier la théorie à la pratique et de développer
        des compétences clés : <strong>autonomie, organisation, travail d'équipe,
        communication, esprit d'analyse, gestion de projet</strong>. Et surtout,
        elles ont renforcé ma confiance en moi face à des enjeux réels.
      </p>
    </div>
  `;
}

/* ── Projet Tutoré ─────────────────────────────────────────── */
function renderProjetTutore() {
  return `
    <p class="detail-cat-label">Académique</p>
    <h2 class="detail-main-title">Projet<br>Tutoré</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2rem;">
      Un projet tutoré est un projet réalisé en groupe tout au long de l'année,
      avec l'accompagnement d'un enseignant. Il permet de mettre en pratique les
      compétences vues en cours à travers des missions concrètes.
    </p>

    <div class="pt-card">
      <div class="exp-photo">
        <img src="./images/tendouck.jpg" alt="Projet Tendouck" onerror="this.parentElement.style.display='none'" />
      </div>
      <div class="pt-header">
        <h3 class="pt-title">Projet Tendouck</h3>
        <span class="pt-badge">1ère année</span>
      </div>
      <div class="pt-body">
        <p class="detail-text" style="margin-bottom:0.9rem;">
          En partenariat avec l'association <strong>Solidarité Santé Brest</strong>,
          organiser une <strong>soirée caritative</strong> afin de récolter des fonds
          pour participer à la construction de puits au Sénégal. La soirée a réuni
          environ <strong>100 personnes</strong> et nous avons récolté
          <strong>environ 3 000 €</strong>.
        </p>
        <p class="detail-text">
          Nous avons géré l'intégralité de l'organisation : trouver un lieu,
          prévoir la communication, vendre les places, gérer la logistique,
          préparer le déroulement de la soirée et suivre le budget.
        </p>
        <div class="passion-points" style="margin-top:1rem;">
          <span class="passion-point"><strong>Gestion d'événement</strong> · lieu, logistique, déroulement</span>
          <span class="passion-point"><strong>Communication</strong> · promotion, vente, partenaires</span>
          <span class="passion-point"><strong>Budget</strong> · dépenses, recettes, suivi</span>
        </div>
      </div>
    </div>

    <div class="pt-card">
      <div class="exp-photo">
        <img src="./images/alternants.jpg" alt="Événement Alternants" onerror="this.parentElement.style.display='none'" />
      </div>
      <div class="pt-header">
        <h3 class="pt-title">Temps fort Alternants BUT GACO</h3>
        <span class="pt-badge">2ème année</span>
        <a href="https://canva.link/s7kf991qmkqf7kh" target="_blank" rel="noopener" class="sae-link" style="margin-left:auto;">Voir ↗</a>
      </div>
      <div class="pt-body">
        <p class="detail-text" style="margin-bottom:0.9rem;">
          Créer un <strong>temps fort destiné aux alternants</strong> de la promo BUT GACO
          afin de favoriser les échanges, la cohésion et le partage d'expériences
          entre étudiants.
        </p>
        <p class="detail-text" style="margin-bottom:0.9rem;">
          Au programme : une <strong>visite d'entreprise</strong> (Le Saint, La But),
          un <strong>escape game</strong>, un <strong>repas au restaurant</strong>,
          des <strong>olympiades</strong> et différents événements organisés tout
          au long de l'année.
        </p>
        <p class="detail-text">
          Plus d'autonomie et une organisation plus exigeante qu'en 1<sup>ère</sup> année :
          réflexion sur le contenu, coordination des prestataires, gestion de la
          communication et accueil des participants.
        </p>
        <div class="passion-points" style="margin-top:1rem;">
          <span class="passion-point"><strong>Autonomie</strong> · responsabilités, décisions, initiative</span>
          <span class="passion-point"><strong>Coordination</strong> · planning, équipe, prestataires</span>
          <span class="passion-point"><strong>Expérience terrain</strong> · visites, activités, animation</span>
        </div>
      </div>
    </div>

    <div class="pt-card">
      <div class="pt-header">
        <h3 class="pt-title">Étude de marché — Cerafel / Prince de Bretagne</h3>
        <span class="pt-badge">3ème année</span>
      </div>
      <div class="pt-body">
        <img src="./images/cerafel.jpg" alt="Cerafel Prince de Bretagne" style="width:160px;height:auto;border-radius:10px;border:1px solid var(--border);margin-bottom:1rem;display:block;" onerror="this.style.display='none'" />
        <p class="detail-text" style="margin-bottom:0.9rem;">
          Réalisation d'une <strong>étude de marché complète</strong> pour Cerafel,
          la coopérative agricole bretonne derrière la marque Prince de Bretagne.
          Un projet plus professionnel, davantage tourné vers l'analyse et la rigueur
          méthodologique.
        </p>
        <p class="detail-text">
          Étude quantitative via <strong>questionnaire consommateurs</strong>, analyse
          concurrentielle, segmentation du marché, recommandations stratégiques et
          présentation orale des résultats.
        </p>
        <div class="passion-points" style="margin-top:1rem;">
          <span class="passion-point"><strong>Marketing</strong> · étude, segmentation, concurrence</span>
          <span class="passion-point"><strong>Analyse de données</strong> · chiffres, tendances, synthèse</span>
          <span class="passion-point"><strong>Présentation orale</strong> · professionnalisme, clarté, conviction</span>
        </div>
      </div>
    </div>

    <div class="cours-bilan">
      <p class="detail-section-title" style="margin-top:0;">Ce que ces projets m'ont apporté</p>
      <div class="passion-points">
        <span class="passion-point"><strong>Gestion de projet</strong> · organisation, délais, répartition</span>
        <span class="passion-point"><strong>Travail d'équipe</strong> · écoute, adaptation, entraide</span>
        <span class="passion-point"><strong>Budget</strong> · dépenses, recettes, suivi</span>
        <span class="passion-point"><strong>Communication</strong> · promotion, partenaires, présentation</span>
        <span class="passion-point"><strong>Autonomie</strong> · responsabilités, décisions, initiative</span>
        <span class="passion-point"><strong>Confiance en moi</strong> · aisance, assurance, progression</span>
        <span class="passion-point"><strong>Professionnalisation</strong> · pratique, réalité, expérience</span>
      </div>
    </div>
  `;
}

/* ── Bilan des compétences ─────────────────────────────────── */
function renderBilanCompetences() {
  return `
    <p class="detail-cat-label">Savoir · Savoir-faire · Savoir-être</p>
    <h2 class="detail-main-title">Bilan des<br>Compétences</h2>
    <div class="detail-divider"></div>
    <p class="detail-text" style="margin-bottom:2.5rem;">
      Trois ans de BUT GACO, deux ans d'alternance et une vie sportive intense —
      voici ce que j'ai acquis, ce que je sais faire et qui je suis.
    </p>

    <!-- SAVOIRS -->
    <p class="detail-section-title">📚 Savoirs — Ce que je connais</p>
    <div class="bilan-grid">
      <div class="bilan-card"><span class="bilan-card-icon">⚖️</span><span class="bilan-card-label">Droit</span><span class="bilan-card-sub">Droit du travail, des affaires, de l'entreprise</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">📊</span><span class="bilan-card-label">Comptabilité</span><span class="bilan-card-sub">Bilan, compte de résultat, analyse financière</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">📈</span><span class="bilan-card-label">Marketing</span><span class="bilan-card-sub">Études de marché, segmentation, stratégie</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">🏭</span><span class="bilan-card-label">Logistique</span><span class="bilan-card-sub">Supply chain, distribution, gestion des flux</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">👥</span><span class="bilan-card-label">Management</span><span class="bilan-card-sub">Gestion d'équipe, reporting, organisation</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">🌱</span><span class="bilan-card-label">RSE</span><span class="bilan-card-sub">Développement durable, enjeux sociaux et environnementaux</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">💰</span><span class="bilan-card-label">Économie</span><span class="bilan-card-sub">Micro/macro économie, organisations, marchés</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">🚀</span><span class="bilan-card-label">Entrepreneuriat</span><span class="bilan-card-sub">Business plan, création d'activité, intrapreneuriat</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">💬</span><span class="bilan-card-label">Communication</span><span class="bilan-card-sub">Communication écrite, orale, supports visuels, relation client</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">👔</span><span class="bilan-card-label">Management d'équipe</span><span class="bilan-card-sub">Animation, coordination, motivation, gestion des relations</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">🔎</span><span class="bilan-card-label">Audit</span><span class="bilan-card-sub">Analyse des processus, identification des écarts, recommandations</span></div>
      <div class="bilan-card"><span class="bilan-card-icon">🛒</span><span class="bilan-card-label">Achats</span><span class="bilan-card-sub">Processus d'achat, sélection fournisseurs, négociation, cahier des charges</span></div>
    </div>

    <!-- SAVOIR-FAIRE -->
    <p class="detail-section-title" style="margin-top:2.5rem;">🛠️ Savoir-faire — Ce que je sais faire</p>
    <div class="bilan-grid">
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">📋</span><span class="bilan-card-label">Étude de marché</span><span class="bilan-card-sub">Analyse concurrentielle, questionnaire quantitatif, synthèse</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">📝</span><span class="bilan-card-label">Rédaction de cahier des charges</span><span class="bilan-card-sub">Cadrage, spécifications fonctionnelles, livrables</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">⚙️</span><span class="bilan-card-label">Automatisation bureautique</span><span class="bilan-card-sub">Scripts Google Apps pour automatiser des tâches répétitives (ADV)</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🖥️</span><span class="bilan-card-label">Utilisation CRM</span><span class="bilan-card-sub">Suivi clients, mises à jour fichiers, gestion des abonnés</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🚚</span><span class="bilan-card-label">Gestion de la distribution</span><span class="bilan-card-sub">Suivi des réseaux (VCP, portage), fichiers de distribution, planification</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">📊</span><span class="bilan-card-label">Traitement de données statistiques</span><span class="bilan-card-sub">Tableaux de bord, indicateurs, analyse des résultats de distribution</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">📦</span><span class="bilan-card-label">Gestion des commandes & réclamations</span><span class="bilan-card-sub">Traitement des demandes éditeurs, suivi et résolution des litiges (ADV)</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🔍</span><span class="bilan-card-label">Analyse & proposition d'amélioration</span><span class="bilan-card-sub">Diagnostic des processus existants, identification des axes d'optimisation</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🗣️</span><span class="bilan-card-label">Présentation orale</span><span class="bilan-card-sub">Argumentation, prise de parole devant un jury, conviction</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">📄</span><span class="bilan-card-label">Rédaction & synthèse</span><span class="bilan-card-sub">Rapports, comptes-rendus, dossiers professionnels</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🎪</span><span class="bilan-card-label">Organisation d'événements</span><span class="bilan-card-sub">Planification, logistique, communication, gestion du budget</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🗂️</span><span class="bilan-card-label">Gestion de projet</span><span class="bilan-card-sub">Planification, répartition des tâches, respect des délais</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">🧩</span><span class="bilan-card-label">Diagnostic d'entreprise</span><span class="bilan-card-sub">SWOT, Forces de Porter, analyse interne/externe, recommandations</span></div>
      <div class="bilan-card bilan-card--blue"><span class="bilan-card-icon">📐</span><span class="bilan-card-label">Tableaux professionnels</span><span class="bilan-card-sub">Mise en page soignée, tableaux de bord, rapports structurés</span></div>
    </div>

    <!-- SAVOIR-ÊTRE -->
    <p class="detail-section-title" style="margin-top:2.5rem;">🌟 Savoir-être — Qui je suis</p>
    <div class="bilan-grid">
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">🎯</span><span class="bilan-card-label">Autonomie</span><span class="bilan-card-sub">Je sais travailler seul et prendre des initiatives</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">👂</span><span class="bilan-card-label">Écoute active</span><span class="bilan-card-sub">Comprendre les besoins, reformuler, s'adapter</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">🤝</span><span class="bilan-card-label">Esprit d'équipe</span><span class="bilan-card-sub">Collaboration, entraide, cohésion de groupe</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">💪</span><span class="bilan-card-label">Persévérance</span><span class="bilan-card-sub">Ne pas abandonner face aux difficultés</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">🔄</span><span class="bilan-card-label">Adaptabilité</span><span class="bilan-card-sub">Nouveaux environnements, imprévus, changements</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">🧠</span><span class="bilan-card-label">Esprit d'analyse</span><span class="bilan-card-sub">Recul, synthèse, prise de décision raisonnée</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">⏰</span><span class="bilan-card-label">Rigueur</span><span class="bilan-card-sub">Organisation, respect des délais, sérieux</span></div>
      <div class="bilan-card bilan-card--green"><span class="bilan-card-icon">🔥</span><span class="bilan-card-label">Motivation</span><span class="bilan-card-sub">Engagement, implication, volonté d'apprendre</span></div>
    </div>

    <!-- LOGICIELS -->
    <p class="detail-section-title" style="margin-top:2.5rem;">🖥️ Logiciels maîtrisés</p>
    <div class="bilan-tools">
      <span class="bilan-tool">Canva</span>
      <span class="bilan-tool">Excel</span>
      <span class="bilan-tool">Google Sheets</span>
      <span class="bilan-tool">Google Script</span>
      <span class="bilan-tool">GitHub</span>
      <span class="bilan-tool">Google Docs</span>
      <span class="bilan-tool">Google Slides</span>
      <span class="bilan-tool">PowerPoint</span>
      <span class="bilan-tool">Word</span>
    </div>

    <!-- CERTIFICATIONS -->
    <p class="detail-section-title" style="margin-top:2rem;">🏅 Certifications</p>
    <div class="bilan-certs">
      <div class="bilan-cert">
        <span class="bilan-cert-icon">🏆</span>
        <div>
          <p class="bilan-cert-name">PIX</p>
          <p class="bilan-cert-desc">Certification nationale des compétences numériques</p>
        </div>
      </div>
      <div class="bilan-cert">
        <span class="bilan-cert-icon">✍️</span>
        <div>
          <p class="bilan-cert-name">Certificat Voltaire</p>
          <p class="bilan-cert-desc">Orthographe et expression écrite en français</p>
        </div>
      </div>
    </div>
  `;
}

/* ── Mon Projet ────────────────────────────────────────────── */
function renderMonProjet() {
  return `
    <p class="detail-cat-label">Avenir</p>
    <h2 class="detail-main-title">Mon<br>Projet</h2>
    <div class="detail-divider"></div>

    <div class="proj-section">
      <div class="proj-section-badge">À court terme</div>
      <h3 class="proj-section-title">CDD — Service ADV, Le Télégramme</h3>
      <div class="exp-photo" style="margin-bottom:1.4rem;">
        <img src="./images/telegramme.jpg" alt="Le Télégramme" onerror="this.parentElement.style.display='none'" />
      </div>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        Dès septembre, je vais réaliser un <strong>CDD au sein du service
        Administration des Ventes</strong> du groupe Le Télégramme (direction
        Logistique et Réseau). J'ai fait ce choix pour apprendre un métier
        plus technique et concret — mon alternance dans le pôle logistique
        était davantage axée sur l'optimisation et l'analyse des processus
        (il n'y avait pas vraiment de partie technique au quotidien), et je
        souhaitais acquérir une vraie maîtrise opérationnelle d'un métier.
      </p>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        Mes missions seront variées : gestion de la distribution des titres accessoires
        (multi-titres) auprès du réseau VCP, traitement des demandes de repérage,
        gestion des fichiers de distribution, suivi des réclamations éditeurs,
        préparation des fichiers pour les différents réseaux (vente au numéro, VCP,
        partenariats), et gestion des abonnés postaux (nouveaux clients, mises à jour,
        facturation, encaissements).
      </p>
      <div class="passion-points">
        <span class="passion-point"><strong>Organisation</strong> · rigueur, méthode, priorités</span>
        <span class="passion-point"><strong>Gestion administrative</strong> · fichiers, contrats, suivi</span>
        <span class="passion-point"><strong>Relation professionnelle</strong> · éditeurs, clients, réseau</span>
        <span class="passion-point"><strong>Autonomie</strong> · responsabilités, décisions, confiance</span>
        <span class="passion-point"><strong>Analyse</strong> · statistiques, données, résultats</span>
        <span class="passion-point"><strong>Logistique</strong> · distribution, commandes, coordination</span>
      </div>
    </div>

    <div class="proj-section">
      <div class="proj-section-badge proj-section-badge--long">À moyen terme</div>
      <h3 class="proj-section-title">Une pause réfléchie — vers la finance ?</h3>
      <p class="detail-text" style="margin-bottom:1.2rem;">
        Pour la suite, je suis encore en réflexion. J'ai décidé de faire une
        <strong>pause dans mes études</strong>, car je ne souhaite pas faire un master
        simplement pour poursuivre. Je préfère prendre le temps de mieux me connaître,
        de découvrir davantage le monde professionnel et de trouver une voie qui me
        correspond vraiment.
      </p>
      <p class="detail-text">
        Le <strong>domaine financier</strong> est un secteur qui m'intéresse. En BUT GACO,
        j'ai pu découvrir la comptabilité et l'analyse financière. Si je m'oriente vers
        cette voie, je devrai réfléchir à la formation la plus adaptée : licence
        spécialisée ou master en finance. Les stages, expériences professionnelles et
        échanges avec des professionnels m'aideront à affiner ce choix.
      </p>
    </div>

    <div class="proj-section" style="border-bottom:none;padding-bottom:0;">
      <div class="proj-section-badge" style="background:#7c3aed;">À long terme</div>
      <h3 class="proj-section-title">Créer ma propre entreprise</h3>
      <p class="detail-text">
        À plus long terme, <strong>j'aimerais ouvrir ma propre entreprise</strong>.
        C'est un projet qui m'attire profondément — j'aime l'idée de construire
        quelque chose par moi-même, de prendre des responsabilités et de développer
        un projet qui me ressemble. Créer une entreprise demande du temps, de
        l'expérience et de la réflexion. Avant de me lancer, je souhaite continuer
        à apprendre, découvrir différents environnements professionnels et trouver
        une idée solide. Ce projet reste un objectif important pour moi.
      </p>
    </div>
  `;
}

/* ── Contact ───────────────────────────────────────────────── */
function renderContact() {
  return `
    <p class="detail-cat-label">Me joindre</p>
    <h2 class="detail-main-title">Me<br>Contacter</h2>
    <div class="detail-divider"></div>

    <div class="profil-layout" style="margin-bottom:2rem;">
      <div class="profil-photo">
        <img src="./images/profil.jpg" alt="Alexis Bleuse" onerror="this.style.display='none'" />
      </div>
      <div>
        <p class="detail-text">
          Disponible pour toute opportunité professionnelle, stage, alternance ou
          simplement pour échanger. N'hésite pas à me contacter via l'un de ces canaux.
        </p>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:0.8rem;margin-bottom:2rem;">

      <a href="mailto:alexis.bleuse6@gmail.com" class="contact-item">
        <span class="contact-item-icon">✉️</span>
        <div>
          <p class="contact-item-label">Email</p>
          <p class="contact-item-value">alexis.bleuse6@gmail.com</p>
        </div>
      </a>

      <a href="tel:0609589865" class="contact-item">
        <span class="contact-item-icon">📱</span>
        <div>
          <p class="contact-item-label">Téléphone</p>
          <p class="contact-item-value">06 09 58 98 65</p>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/alexis-bleuse-054bb3271/" target="_blank" rel="noopener" class="contact-item">
        <span class="contact-item-icon">💼</span>
        <div>
          <p class="contact-item-label">LinkedIn</p>
          <p class="contact-item-value">Alexis Bleuse — linkedin.com/in/alexis-bleuse-054bb3271</p>
        </div>
      </a>

    </div>

    <div style="margin-top:1.5rem;padding:1.2rem 1.5rem;background:var(--accent-light);border-left:3px solid var(--accent);border-radius:0 12px 12px 0;">
      <p style="font-size:0.82rem;color:#555;line-height:1.75;">
        <strong style="color:var(--accent);">Ouvert aux opportunités</strong> —
        Disponible pour toute opportunité dans les domaines de la
        <strong>logistique, du management ou de l'administration des ventes</strong> en Bretagne.
      </p>
    </div>
  `;
}

/* ── Dispatch ──────────────────────────────────────────────── */
function renderDetail(card) {
  switch (card.id) {
    case 0: return renderProfil();
    case 1: return renderPassions();
    case 2: return renderParcours();
    case 3: return renderExperiences();
    case 4: return renderCours();
    case 5: return renderSAE();
    case 6: return renderProjetTutore();
    case 7: return renderBilanCompetences();
    case 8: return renderMonProjet();
    case 9: return renderContact();
    default: return '<p class="ph-block">Contenu à venir.</p>';
  }
}

/* ============================================================
   GALERIE — TRAVELLING À TRAVERS LES CARTES
   ============================================================ */
if (document.getElementById('cardsStage')) {

  const stage            = document.getElementById('cardsStage');
  const scrollPctEl      = document.getElementById('scrollPct');
  const cardCtrEl        = document.getElementById('cardCtr');
  const slotThumb        = document.getElementById('slotThumb');
  const slotCount        = document.getElementById('slotCount');
  const detailView       = document.getElementById('detailView');
  const detailHero       = document.getElementById('detailHero');
  const detailSidebar    = document.getElementById('detailSidebar');
  const detailHeroTitle  = document.getElementById('detailHeroTitle');
  const detailHeroType   = document.getElementById('detailHeroType');
  const detailHeroMini   = document.getElementById('detailHeroMiniInner');
  const detailRight      = document.getElementById('detailRight');
  const detailCont       = document.getElementById('detailContent');
  const closeBtn         = document.getElementById('closeBtn');
  const marqueeInner     = document.querySelector('.marquee-inner');

  /* ── Emojis qui tombent lors de l'ouverture ─────────────── */
  function spawnFallingEmojis(card) {
    if (!detailHero) return;
    /* Nettoyer les anciens */
    detailHero.querySelectorAll('.fall-emoji').forEach(e => e.remove());
    const count = 14;
    for (let i = 0; i < count; i++) {
      const el  = document.createElement('span');
      el.className = 'fall-emoji';
      const size  = 1.4 + Math.random() * 2.8;
      const x     = 3 + Math.random() * 88;
      const delay = (Math.random() * 400).toFixed(0) + 'ms';
      const dur   = (550 + Math.random() * 600).toFixed(0) + 'ms';
      const rot   = (-200 + Math.random() * 400).toFixed(0) + 'deg';
      const op    = (0.25 + Math.random() * 0.55).toFixed(2);
      el.textContent = card.emoji;
      el.style.cssText = `left:${x}%;font-size:${size}rem;opacity:${op};--dur:${dur};--delay:${delay};--rot:${rot};`;
      el.style.animationDelay = delay;
      detailHero.appendChild(el);
      const total = parseInt(dur) + parseInt(delay) + 150;
      setTimeout(() => el.remove(), total);
    }
  }

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
      <div class="tcard-edges"></div>
      <div class="tcard-bg-num">${c.num}</div>
      <div class="tcard-top">
        <span class="tcard-logo-txt">←®</span>
        <span class="tcard-feat">✦ FEATURED ✦</span>
        <span class="tcard-type">(${c.type})</span>
      </div>
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

  /* ── Marquee : animation continue + boost au scroll ─────── */
  let mOffset = 0, mBoost = 0, mLastY = 0;
  function tickMarquee() {
    mOffset += 0.013 + mBoost;
    mBoost  *= 0.93;
    if (mOffset >= 50) mOffset -= 50;
    if (marqueeInner) marqueeInner.style.transform = `translateX(-${mOffset}%)`;
    requestAnimationFrame(tickMarquee);
  }
  tickMarquee();

  /* ── Panneau collection ─────────────────────────────────── */
  const collPanel = document.createElement('div');
  collPanel.className = 'coll-panel';
  collPanel.innerHTML = `
    <div class="coll-panel-header">
      <span class="coll-panel-title">Ma Collection</span>
      <button class="coll-panel-close" id="collPanelClose">✕</button>
    </div>
    <p class="coll-panel-sub"><span id="collPanelCount">0</span>/${TOTAL} cartes collectées</p>
    <div class="coll-panel-grid" id="collPanelGrid"></div>
  `;
  document.body.appendChild(collPanel);

  const collOverlay = document.createElement('div');
  collOverlay.className = 'coll-overlay';
  document.body.appendChild(collOverlay);

  const collGrid = document.getElementById('collPanelGrid');
  CARDS.forEach((c, i) => {
    const item = document.createElement('div');
    item.className = 'coll-mini-card';
    item.dataset.cardId = i;
    item.style.background = c.holo
      ? 'linear-gradient(135deg,#ff9ff3,#feca57,#48dbfb,#ff6b6b,#54a0ff)'
      : c.visual;
    item.innerHTML = `
      <span class="coll-mini-emoji">${c.emoji}</span>
      <span class="coll-mini-label">${c.type}</span>
    `;
    item.addEventListener('click', () => {
      closeColl();
      setTimeout(() => {
        window.scrollTo({ top: LOOP + i * STEP, behavior: 'smooth' });
      }, 350);
    });
    collGrid.appendChild(item);
  });

  let collOpen = false;
  const collectionUiEl = document.getElementById('collectionUi');

  function openColl() {
    collPanel.classList.add('open');
    collOverlay.classList.add('open');
    collOpen = true;
  }
  function closeColl() {
    collPanel.classList.remove('open');
    collOverlay.classList.remove('open');
    collOpen = false;
  }
  collectionUiEl?.addEventListener('click', () => collOpen ? closeColl() : openColl());
  document.getElementById('collPanelClose')?.addEventListener('click', closeColl);
  collOverlay.addEventListener('click', closeColl);

  function updateCollPanel() {
    Array.from(collGrid.children).forEach((item, i) => {
      item.classList.toggle('collected', visitedIds.has(i));
    });
    const el = document.getElementById('collPanelCount');
    if (el) el.textContent = visitedIds.size;
  }

  /* ── État interne ───────────────────────────────────────── */
  let STEP = 0, LOOP = 0;

  function init() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const isMobile = vw < 700;
    const cardW = isMobile ? 250 : 310;
    const cardH = isMobile ? 350 : 470;
    const SIDE  = isMobile ?  60 : 260;

    STEP = Math.max(Math.round(vh / 2 + cardH / 2 - 110), Math.round(vh * 0.62));
    LOOP = TOTAL * STEP;

    document.body.style.minHeight = (3 * LOOP + vh) + 'px';
    scene.style.height = ((TOTAL - 1) * STEP + cardH + 80) + 'px';

    wrapperEls.forEach((wrapper, i) => {
      const xLeft = vw / 2 + (i % 2 === 0 ? SIDE : -SIDE) - cardW / 2;
      wrapper.style.left      = xLeft + 'px';
      wrapper.style.top       = (i * STEP) + 'px';
      wrapper.style.transform = `rotate(${CARDS[i].tilt}deg)`;
    });

    window.scrollTo(0, LOOP);
    updateCamera();
  }

  function updateCamera() {
    if (detailOpen) return;
    const vh       = window.innerHeight;
    const isMobile = window.innerWidth < 700;
    const cardH    = isMobile ? 350 : 470;
    const rawScroll = window.scrollY - LOOP;

    scene.style.transform = `translateY(${-rawScroll + (vh - cardH) / 2}px)`;

    const rawIndex  = rawScroll / STEP;
    const activeIdx = ((Math.round(rawIndex) % TOTAL) + TOTAL) % TOTAL;

    wrapperEls.forEach((w, i) => {
      let dist = rawIndex - i;
      dist = ((dist % TOTAL) + TOTAL) % TOTAL;
      if (dist > TOTAL / 2) dist -= TOTAL;
      w.classList.toggle('is-active', Math.abs(dist) < 0.5);
    });

    const normIdx = ((rawIndex % TOTAL) + TOTAL) % TOTAL;
    if (scrollPctEl) scrollPctEl.textContent =
      String(Math.round(normIdx / TOTAL * 100) % 100).padStart(2, '0') + '%';
    if (cardCtrEl) cardCtrEl.textContent =
      String(activeIdx + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');
  }

  /* ── Boucle infinie : téléportation invisible ────────────── */
  let teleporting = false;
  function checkLoop() {
    const rawScroll = window.scrollY - LOOP;
    if (rawScroll < 0)          { teleporting = true; window.scrollTo(0, window.scrollY + LOOP); }
    else if (rawScroll >= LOOP) { teleporting = true; window.scrollTo(0, window.scrollY - LOOP); }
  }

  let rafId = null;
  window.addEventListener('scroll', () => {
    const dy = Math.abs(window.scrollY - mLastY);
    mBoost = Math.min(mBoost + dy * 0.003, 0.45);
    mLastY = window.scrollY;

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

    /* Animation : carte vole vers le slot collection */
    const slotRect  = slotThumb.getBoundingClientRect();
    const shellRect = shell.getBoundingClientRect();
    const flyClone  = shell.cloneNode(true);
    flyClone.style.cssText = `
      position:fixed;
      left:${shellRect.left}px; top:${shellRect.top}px;
      width:${shellRect.width}px; height:${shellRect.height}px;
      margin:0;
      transition:transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.65s ease;
      pointer-events:none; z-index:9999; transform-origin:top left;
    `;
    document.body.appendChild(flyClone);
    flyClone.getBoundingClientRect();
    const sc  = slotRect.width / shellRect.width;
    const dx  = slotRect.left - shellRect.left;
    const dy2 = slotRect.top  - shellRect.top;
    flyClone.style.transform = `translate(${dx}px,${dy2}px) scale(${sc})`;
    flyClone.style.opacity   = '0.5';
    setTimeout(() => flyClone.remove(), 700);

    /* Collection */
    visitedIds.add(cardId);
    if (slotCount) slotCount.textContent = visitedIds.size;
    if (slotThumb) { slotThumb.textContent = card.emoji; slotThumb.classList.add('filled'); }
    updateCollPanel();

    /* Hero : couleur de fond de la carte */
    const heroBg = card.holo
      ? 'linear-gradient(135deg,#7f6bbf,#c084fc,#818cf8)'
      : card.visual;
    if (detailHero) detailHero.style.background = heroBg;

    /* Emojis qui tombent */
    spawnFallingEmojis(card);

    /* Mini carte dans la sidebar : clone du shell à l'échelle */
    if (detailHeroMini) {
      detailHeroMini.innerHTML = '';
      const miniShell = shell.cloneNode(true);
      miniShell.style.cssText = 'pointer-events:none;width:310px;height:470px;';
      detailHeroMini.appendChild(miniShell);
    }

    /* Grand titre */
    if (detailHeroTitle) detailHeroTitle.textContent = card.title.replace('\n', ' ');
    if (detailHeroType)  detailHeroType.textContent  = `(${card.type})`;

    /* Contenu */
    if (detailCont)  detailCont.innerHTML  = renderDetail(card);
    if (detailRight) detailRight.scrollTop = 0;

    setTimeout(() => {
      detailView.classList.add('open');
      detailOpen = true;
      document.body.style.overflow = 'hidden';
    }, 280);
  }

  /* ── Fermer le détail ────────────────────────────────────── */
  function closeDetail() {
    detailView.classList.remove('open');
    detailOpen = false;
    document.body.style.overflow = '';
    requestAnimationFrame(updateCamera);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDetail);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });
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
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
