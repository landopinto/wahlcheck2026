const UI = {
  en: {
    pageTitle: "Munich Wahlcheck - English",
    eyebrow: "Munich Local Election 2026",
    title: "Party Match Questionnaire (English)",
    lede:
      "Answer the 34 statements from the SZ Wahlcheck graphic. You can also select up to 5 top issues that matter most to you; those are weighted more strongly in the proximity score.",
    disclaimer:
      "Disclaimer: This is a personal project built with OpenAI. It is not voting advice and does not recommend any party.",
    sources:
      "Purpose: to help you compare how parties answered the SZ questionnaire. Sources: <a href=\"https://gfx.sueddeutsche.de/storytelling-assets/2026-02/wahlcheck/Wahlcheck%20Grafik.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">SZ Wahlcheck questionnaire (PDF)</a>, <a href=\"https://commons.wikimedia.org/wiki/Category:Logos_of_political_parties_in_Germany\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons party logos</a>.",
    backToTop: "Back to top",
    calculate: "Calculate Party Proximity",
    reset: "Reset all answers",
    topIssueBtn: "Top issue",
    topIssueBtnActive: "Top issue selected",
    topIssueInfo: (count, max) => `Top issues selected: ${count} / ${max}`,
    topIssueLimit: "Maximum 5 top issues reached",
    topIssueTag: "Top issue",
    topIssueTip: "Marked as one of your top issues",
    progress: (answered, total) => `${answered} / ${total} answered`,
    resultsTitle: "Your Proximity Ranking",
    resultsNote: "Percentages are based on matching your answers with each party profile in this local data file.",
    showAll: "Show all parties",
    showTop3: "Show top 3 only",
    showImpact: "Show answer impact",
    hideImpact: "Hide answer impact",
    impactColumn: "Impact",
    impactLabel: (pct) => `${pct}pp`,
    calcNoTopIssues:
      "Calculation note: you selected 0 top issues. All answered statements are weighted equally (1x).",
    calcSomeTopIssues: (count, max) =>
      `Calculation note: you selected ${count}/${max} top issues. Selected top issues get stronger weighting and stronger disagreement penalty.`,
    calcMaxTopIssues:
      "Calculation note: you selected all 5 top issues. Top issues have maximum weighting and strongest disagreement penalty.",
    clickHint: "Click to show where you align or disagree",
    alignedTitle: (n) => `In line with your views (${n})`,
    somewhatTitle: (n) => `Somewhat aligned (${n})`,
    notAlignedTitle: (n) => `Not in line with your views (${n})`,
    noAligned: "No fully aligned answers in your completed set.",
    noSomewhat: "No somewhat aligned answers in your completed set.",
    noNotAligned: "No conflicting answers in your completed set.",
    youParty: (you, party) => `(You: ${you} | Party: ${party})`,
    answer: { 1: "Agree", 0: "Neutral", "-1": "Disagree", skip: "Skip" },
    saveNotSaved: "Not saved",
    saveLoaded: "Saved from previous session",
    saveReset: "Reset - not saved",
    saveAt: (time) => `Saved at ${time}`,
    answerOne: "Please answer at least one statement.",
    impactHeading: "Potential impact on Munich",
    showQuestionImpacts: "Show Munich impact",
    hideQuestionImpacts: "Hide Munich impact"
  },
  de: {
    pageTitle: "Muenchen Wahlcheck - Deutsch",
    eyebrow: "Kommunalwahl Muenchen 2026",
    title: "Partei-Match Fragebogen (Deutsch)",
    lede:
      "Beantworte die 34 Thesen aus der SZ-Wahlcheck-Grafik. Du kannst zusaetzlich bis zu 5 Top-Themen markieren; diese werden in der Naehe-Berechnung staerker gewichtet.",
    disclaimer:
      "Hinweis: Das ist ein persoenliches Projekt mit OpenAI. Es ist keine Wahlempfehlung und empfiehlt keine Partei.",
    sources:
      "Zweck: dir zu zeigen, wie Parteien den SZ-Fragebogen beantwortet haben. Quellen: <a href=\"https://gfx.sueddeutsche.de/storytelling-assets/2026-02/wahlcheck/Wahlcheck%20Grafik.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">SZ Wahlcheck Fragebogen (PDF)</a>, <a href=\"https://commons.wikimedia.org/wiki/Category:Logos_of_political_parties_in_Germany\" target=\"_blank\" rel=\"noopener noreferrer\">Wikimedia Commons Parteilogos</a>.",
    backToTop: "Nach oben",
    calculate: "Partei-Naehe berechnen",
    reset: "Alle Antworten zuruecksetzen",
    topIssueBtn: "Top-Thema",
    topIssueBtnActive: "Top-Thema gesetzt",
    topIssueInfo: (count, max) => `Top-Themen: ${count} / ${max}`,
    topIssueLimit: "Maximal 5 Top-Themen erreicht",
    topIssueTag: "Top-Thema",
    topIssueTip: "Als eines deiner Top-Themen markiert",
    progress: (answered, total) => `${answered} / ${total} beantwortet`,
    resultsTitle: "Dein Naehe-Ranking",
    resultsNote: "Die Prozente basieren auf dem Abgleich deiner Antworten mit den hinterlegten Parteiprofilen.",
    showAll: "Alle Parteien anzeigen",
    showTop3: "Nur Top 3 anzeigen",
    showImpact: "Antwort-Einfluss anzeigen",
    hideImpact: "Antwort-Einfluss ausblenden",
    impactColumn: "Einfluss",
    impactLabel: (pct) => `${pct}pp`,
    calcNoTopIssues:
      "Berechnungshinweis: Du hast 0 Top-Themen gewaehlt. Alle beantworteten Thesen werden gleich gewichtet (1x).",
    calcSomeTopIssues: (count, max) =>
      `Berechnungshinweis: Du hast ${count}/${max} Top-Themen gewaehlt. Gewaehlte Top-Themen werden staerker gewichtet und bei Widerspruch staerker negativ bewertet.`,
    calcMaxTopIssues:
      "Berechnungshinweis: Du hast alle 5 Top-Themen gewaehlt. Top-Themen haben maximale Gewichtung und die staerkste Widerspruchsstrafe.",
    clickHint: "Klicken fuer Uebereinstimmungen und Abweichungen",
    alignedTitle: (n) => `Passt zu deinen Ansichten (${n})`,
    somewhatTitle: (n) => `Teilweise passend (${n})`,
    notAlignedTitle: (n) => `Passt nicht zu deinen Ansichten (${n})`,
    noAligned: "Keine vollstaendige Uebereinstimmung in deinen beantworteten Thesen.",
    noSomewhat: "Keine teilweise passenden Antworten in deinen beantworteten Thesen.",
    noNotAligned: "Keine abweichenden Antworten in deinen beantworteten Thesen.",
    youParty: (you, party) => `(Du: ${you} | Partei: ${party})`,
    answer: { 1: "Stimme zu", 0: "Neutral", "-1": "Stimme nicht zu", skip: "Ueberspringen" },
    saveNotSaved: "Nicht gespeichert",
    saveLoaded: "Aus letzter Sitzung geladen",
    saveReset: "Zurueckgesetzt - nicht gespeichert",
    saveAt: (time) => `Gespeichert um ${time}`,
    answerOne: "Bitte beantworte mindestens eine These.",
    impactHeading: "Moegliche Auswirkungen auf Muenchen",
    showQuestionImpacts: "Muenchen-Auswirkungen zeigen",
    hideQuestionImpacts: "Muenchen-Auswirkungen ausblenden"
  }
};

const questions = [
  { id: "rent_freeze", text: { en: "A citywide rent freeze should be introduced.", de: "Ein stadtweiter Mietenstopp soll eingefuehrt werden." }, w: { social: 1.0, market: -0.8 } },
  { id: "bike_highway", text: { en: "A bicycle highway ring around the old town should be built.", de: "Ein Fahrrad-Highway-Ring um die Altstadt soll gebaut werden." }, w: { eco: 0.9, car: -1.0 } },
  { id: "basic_income", text: { en: "Munich should test an unconditional basic income pilot.", de: "Muenchen soll ein Pilotprojekt zum bedingungslosen Grundeinkommen testen." }, w: { social: 0.9, market: -0.4 } },
  { id: "no_new_business_districts", text: { en: "No new large business districts should be designated.", de: "Keine neuen grossen Gewerbegebiete sollen ausgewiesen werden." }, w: { eco: 0.3, market: -0.9 } },
  { id: "no_new_tram_routes", text: { en: "No new tram routes should be planned.", de: "Es sollen keine neuen Tramlinien geplant werden." }, w: { eco: -0.8, car: 0.7 } },
  { id: "no_road_widening", text: { en: "Road lanes should no longer be widened.", de: "Strassenfahrbahnen sollen nicht mehr verbreitert werden." }, w: { eco: 0.8, car: -0.8 } },
  { id: "no_tall_buildings", text: { en: "No buildings over 35 meters should be approved.", de: "Keine Gebaeude ueber 35 Meter sollen genehmigt werden." }, w: { tradition: 0.6, market: -0.3 } },
  { id: "genai_in_schools", text: { en: "Generative AI should be used in school lessons.", de: "Generative KI soll im Schulunterricht eingesetzt werden." }, w: { market: 0.4, tradition: -0.3 } },
  { id: "no_business_tax_increase", text: { en: "Business tax should not be increased.", de: "Die Gewerbesteuer soll nicht erhoeht werden." }, w: { market: 1.0, social: -0.5 } },
  { id: "no_more_refugees", text: { en: "Munich should stop taking in additional refugees.", de: "Muenchen soll keine weiteren Gefluechteten aufnehmen." }, w: { migration: 1.0, tradition: 0.6 } },
  { id: "ban_short_term_rentals", text: { en: "Short-term rentals via online platforms should be banned.", de: "Kurzzeitvermietungen ueber Online-Plattformen sollen verboten werden." }, w: { social: 0.8, market: -0.8 } },
  { id: "no_less_space_for_cars", text: { en: "Car traffic should not lose more road space.", de: "Der Autoverkehr soll keinen weiteren Strassenraum verlieren." }, w: { car: 1.0, eco: -0.8 } },
  { id: "no_new_mosque", text: { en: "No additional mosque should be built.", de: "Es soll keine weitere Moschee gebaut werden." }, w: { tradition: 0.9, migration: 0.8 } },
  { id: "free_public_transport", text: { en: "Public transport should be free for everyone.", de: "Der Oeffentliche Nahverkehr soll fuer alle kostenlos sein." }, w: { social: 0.9, eco: 0.7, market: -0.9 } },
  { id: "more_cctv", text: { en: "Video surveillance in public spaces should be expanded.", de: "Videoueberwachung im oeffentlichen Raum soll ausgebaut werden." }, w: { security: 1.0, tradition: 0.3 } },
  { id: "ban_gender_language", text: { en: "Gender-inclusive language should be banned in city administration.", de: "Gendergerechte Sprache soll in der Stadtverwaltung verboten werden." }, w: { tradition: 1.0, social: -0.8 } },
  { id: "no_city_debt", text: { en: "The city should not take on new debt.", de: "Die Stadt soll keine neuen Schulden aufnehmen." }, w: { market: 0.8, social: -0.4 } },
  { id: "no_property_tax_increase", text: { en: "Property tax should not be increased.", de: "Die Grundsteuer soll nicht erhoeht werden." }, w: { market: 0.9 } },
  { id: "no_open_space_solar", text: { en: "No new open-space solar parks should be built.", de: "Es sollen keine neuen Freiflaechen-Solarparks gebaut werden." }, w: { eco: -1.0, tradition: 0.2 } },
  { id: "no_city_hospital", text: { en: "No new municipal hospital should be built.", de: "Es soll kein neues staedtisches Krankenhaus gebaut werden." }, w: { market: 0.6, social: -0.7 } },
  { id: "no_new_wind", text: { en: "No additional wind turbines should be built.", de: "Es sollen keine weiteren Windkraftanlagen gebaut werden." }, w: { eco: -1.0, tradition: 0.3 } },
  { id: "no_congestion_charge", text: { en: "There should be no congestion charge for cars.", de: "Es soll keine City-Maut fuer Autos geben." }, w: { car: 0.9, eco: -0.9, market: 0.2 } },
  { id: "no_new_bike_streets", text: { en: "No additional bike streets should be designated.", de: "Es sollen keine weiteren Fahrradstrassen ausgewiesen werden." }, w: { car: 0.9, eco: -0.8 } },
  { id: "no_third_runway", text: { en: "There should be no third runway at Munich airport.", de: "Es soll keine dritte Startbahn am Flughafen Muenchen geben." }, w: { eco: 0.9, market: -0.6 } },
  { id: "no_urban_farming", text: { en: "No areas should be reserved for urban farming.", de: "Es sollen keine Flaechen fuer Urban Farming reserviert werden." }, w: { eco: -0.6, market: 0.3 } },
  { id: "no_higher_parking_fees", text: { en: "Parking fees should not be increased.", de: "Parkgebuehren sollen nicht erhoeht werden." }, w: { car: 0.8, eco: -0.7 } },
  { id: "no_climate_priority", text: { en: "City policy should not prioritize climate goals.", de: "Stadtpolitik soll Klimaziele nicht priorisieren." }, w: { eco: -1.0 } },
  { id: "no_a100_renovation", text: { en: "The old A100 underpass at Allach station should not be renovated.", de: "Die alte A100-Unterfuehrung am Bahnhof Allach soll nicht saniert werden." }, w: { market: -0.4, car: -0.2 } },
  { id: "no_new_city_housing", text: { en: "No additional city-owned housing companies should be created.", de: "Es sollen keine weiteren staedtischen Wohnungsbaugesellschaften gegruendet werden." }, w: { market: 0.8, social: -0.8 } },
  { id: "no_superblocks", text: { en: "No superblocks (traffic-calmed neighborhoods) should be introduced.", de: "Es sollen keine Superblocks (verkehrsberuhigte Quartiere) eingefuehrt werden." }, w: { car: 0.9, eco: -0.8 } },
  { id: "no_subsidized_housing", text: { en: "No further social housing should be subsidized.", de: "Es soll kein weiterer sozialer Wohnungsbau gefoerdert werden." }, w: { market: 0.9, social: -1.0 } },
  { id: "no_tourist_tax_increase", text: { en: "Tourist tax should not be increased.", de: "Die Tourismusabgabe soll nicht erhoeht werden." }, w: { market: 0.7 } },
  { id: "no_gender_neutral_toilets", text: { en: "No additional gender-neutral toilets should be installed.", de: "Es sollen keine weiteren genderneutralen Toiletten installiert werden." }, w: { tradition: 0.9, social: -0.8 } },
  { id: "no_car_space_reallocation", text: { en: "No more car space should be converted to bike and pedestrian use.", de: "Es soll kein weiterer Autoraum in Rad- und Fussverkehrsflaechen umgewandelt werden." }, w: { car: 1.0, eco: -0.9 } }
];

const parties = [
  { name: "Greens (Die Gruenen)", symbol: "GRN", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%BCndnis%2090%20-%20Die%20Gr%C3%BCnen%20Logo%20(transparent).svg", v: { eco: 1, social: 0.8, market: -0.2, car: -1, security: -0.3, migration: -0.9, tradition: -0.9 } },
  { name: "SPD", symbol: "SPD", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Sozialdemokratische%20Partei%20Deutschlands%2C%20Logo%20um%202000.svg", v: { eco: 0.5, social: 0.8, market: -0.2, car: -0.4, security: 0.1, migration: -0.4, tradition: -0.2 } },
  { name: "Linke", symbol: "LIN", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Die%20Linke%20logo.svg", v: { eco: 0.7, social: 1, market: -1, car: -0.6, security: -0.6, migration: -1, tradition: -1 } },
  { name: "Volt", symbol: "VLT", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Volt%20Deutschland%20logo%20(28%20October%202018).jpg", v: { eco: 0.8, social: 0.6, market: 0.1, car: -0.7, security: -0.2, migration: -0.8, tradition: -0.8 } },
  { name: "OeDP", symbol: "OeDP", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/OEDP%20Logo%20CMYK.svg", v: { eco: 0.9, social: 0.3, market: -0.1, car: -0.5, security: 0.1, migration: -0.3, tradition: 0.2 } },
  { name: "Rosa Liste", symbol: "RL", v: { eco: 0.7, social: 0.9, market: -0.4, car: -0.7, security: -0.4, migration: -0.9, tradition: -1 } },
  { name: "Die PARTEI", symbol: "PAR", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Die%20PARTEI%20Logo.svg", v: { eco: 0.3, social: 0.6, market: -0.3, car: -0.3, security: -0.2, migration: -0.4, tradition: -0.7 } },
  { name: "CSU", symbol: "CSU", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/CSU%20Logo%20since%202016.svg", v: { eco: -0.2, social: 0.1, market: 0.6, car: 0.9, security: 0.8, migration: 0.6, tradition: 0.9 } },
  { name: "FDP", symbol: "FDP", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20der%20Freien%20Demokraten.svg", v: { eco: -0.1, social: -0.1, market: 1, car: 0.6, security: 0.3, migration: 0.2, tradition: 0.1 } },
  { name: "Freie Waehler", symbol: "FW", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Freie%20W%C3%A4hler%20Bayern.png", v: { eco: -0.1, social: 0.2, market: 0.4, car: 0.7, security: 0.6, migration: 0.4, tradition: 0.5 } },
  { name: "Muenchen Liste", symbol: "ML", v: { eco: 0, social: 0.2, market: 0.2, car: 0.5, security: 0.4, migration: 0.2, tradition: 0.2 } },
  { name: "MUT", symbol: "MUT", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Partei%20mut%20Logo.png", v: { eco: 0.2, social: 0.3, market: 0.1, car: 0.1, security: 0.2, migration: 0.1, tradition: 0 } },
  { name: "Bayernpartei", symbol: "BP", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Bayernpartei%20Logo.svg", v: { eco: -0.3, social: 0.1, market: 0.4, car: 0.8, security: 0.6, migration: 0.5, tradition: 0.8 } },
  { name: "AfD", symbol: "AfD", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/AfD%20Logo%202021.svg", v: { eco: -1, social: -0.4, market: 0.3, car: 1, security: 1, migration: 1, tradition: 1 } }
];

const questionsEl = document.getElementById("questions");
const showResultsBtn = document.getElementById("showResults");
const showResultsBottomBtn = document.getElementById("showResultsBottom");
const resetAnswersBtn = document.getElementById("resetAnswers");
const toggleQuestionImpactsBtn = document.getElementById("toggleQuestionImpacts");
const resultsEl = document.getElementById("results");
const resultsTitleEl = document.getElementById("resultsTitle");
const resultsNoteEl = document.getElementById("resultsNote");
const resultsListEl = document.getElementById("resultsList");
const toggleAllResultsBtn = document.getElementById("toggleAllResults");
const toggleImpactBtn = document.getElementById("toggleImpact");
const calcBannerEl = document.getElementById("calcBanner");
const progressLabelEl = document.getElementById("progressLabel");
const progressBarEl = document.getElementById("progressBar");
const topIssueInfoEl = document.getElementById("topIssueInfo");
const controlsEl = document.querySelector(".controls");
const saveStatusEl = document.getElementById("saveStatus");
const eyebrowEl = document.getElementById("eyebrowText");
const titleEl = document.getElementById("titleText");
const ledeEl = document.getElementById("ledeText");
const disclaimerEl = document.getElementById("disclaimerText");
const sourceEl = document.getElementById("sourceText");
const langEnBtn = document.getElementById("langEn");
const langDeBtn = document.getElementById("langDe");
const backToTopBtn = document.getElementById("backToTop");

const STORAGE_KEY = "wahlcheck_answers_v1";
const TOP_ISSUES_KEY = "wahlcheck_top_issues_v1";
const LANGUAGE_KEY = "wahlcheck_lang_v1";
const IMPACT_VISIBILITY_KEY = "wahlcheck_show_impacts_v1";
const TOP_ISSUE_MAX = 5;
const TOP_ISSUE_WEIGHT = 2;
const TOP_ISSUE_CONFLICT_MULTIPLIER = 1.5;
const FULL_DISAGREEMENT_PENALTY = 0.3;
const TOP_FULL_DISAGREEMENT_PENALTY = 1.1;

let currentLang = localStorage.getItem(LANGUAGE_KEY) === "de" ? "de" : "en";
let lastComputedScores = [];
let showAllResults = false;
let showImpactDetails = false;
let showQuestionImpacts = localStorage.getItem(IMPACT_VISIBILITY_KEY) === "1";
let saveState = { type: "not_saved", time: null };
let topIssues = new Set();
let expandedParties = new Set();

function t() {
  return UI[currentLang];
}

function clampStance(value) {
  if (value > 0.25) return 1;
  if (value < -0.25) return -1;
  return 0;
}

function partyStanceForQuestion(party, question) {
  const score = Object.entries(question.w).reduce((sum, [dim, weight]) => sum + weight * (party.v[dim] || 0), 0);
  return clampStance(score);
}

function getUserAnswers() {
  return questions.map((q) => {
    const checked = document.querySelector(`input[name="q_${q.id}"]:checked`);
    if (!checked || checked.value === "skip") return { id: q.id, answer: null };
    return { id: q.id, answer: Number(checked.value) };
  });
}

function getAnswerMap() {
  return new Map(getUserAnswers().map((entry) => [entry.id, entry.answer]));
}

function saveTopIssues() {
  localStorage.setItem(TOP_ISSUES_KEY, JSON.stringify(Array.from(topIssues)));
}

function loadTopIssues() {
  const raw = localStorage.getItem(TOP_ISSUES_KEY);
  if (!raw) {
    topIssues = new Set();
    return;
  }
  try {
    const items = JSON.parse(raw);
    const valid = Array.isArray(items) ? items.filter((id) => questions.some((q) => q.id === id)).slice(0, TOP_ISSUE_MAX) : [];
    topIssues = new Set(valid);
  } catch (_err) {
    topIssues = new Set();
    localStorage.removeItem(TOP_ISSUES_KEY);
  }
}

function renderTopIssueInfo() {
  const count = topIssues.size;
  const atLimit = count >= TOP_ISSUE_MAX;
  topIssueInfoEl.textContent = atLimit ? `${t().topIssueInfo(count, TOP_ISSUE_MAX)} - ${t().topIssueLimit}` : t().topIssueInfo(count, TOP_ISSUE_MAX);
  topIssueInfoEl.classList.toggle("warn", atLimit);
}

function optionChecked(value, selected) {
  if (selected === null || selected === undefined) return value === "skip" ? "checked" : "";
  return Number(value) === selected ? "checked" : "";
}

const QUESTION_IMPACTS = {
  en: {
    rent_freeze: [{ dir: "up", label: "Tenant stability" }, { dir: "down", label: "Rental supply" }, { dir: "down", label: "Landlord returns" }],
    bike_highway: [{ dir: "up", label: "Bike safety" }, { dir: "down", label: "Car lanes" }, { dir: "up", label: "Active mobility" }],
    basic_income: [{ dir: "up", label: "Income security" }, { dir: "down", label: "City budget" }, { dir: "up", label: "Spending power" }],
    no_new_business_districts: [{ dir: "down", label: "Job growth" }, { dir: "up", label: "Green space" }, { dir: "down", label: "Tax base" }],
    no_new_tram_routes: [{ dir: "down", label: "Transit coverage" }, { dir: "up", label: "Car usage" }, { dir: "down", label: "Street access" }],
    no_road_widening: [{ dir: "up", label: "Air quality" }, { dir: "down", label: "Car throughput" }, { dir: "up", label: "Street safety" }],
    no_tall_buildings: [{ dir: "up", label: "Skyline control" }, { dir: "down", label: "Housing supply" }, { dir: "up", label: "Heritage look" }],
    genai_in_schools: [{ dir: "up", label: "Digital skills" }, { dir: "up", label: "Teacher tools" }, { dir: "down", label: "Privacy protection" }],
    no_business_tax_increase: [{ dir: "up", label: "Business margin" }, { dir: "up", label: "Investment pace" }, { dir: "down", label: "City revenue" }],
    no_more_refugees: [{ dir: "down", label: "Refugee intake" }, { dir: "down", label: "Integration demand" }, { dir: "up", label: "Shelter capacity" }],
    ban_short_term_rentals: [{ dir: "up", label: "Long-term rentals" }, { dir: "down", label: "Tourist beds" }, { dir: "up", label: "Neighborhood stability" }],
    no_less_space_for_cars: [{ dir: "up", label: "Car lanes" }, { dir: "down", label: "Bike lanes" }, { dir: "down", label: "Walkability" }],
    no_new_mosque: [{ dir: "down", label: "Worship space" }, { dir: "down", label: "Social inclusion" }, { dir: "up", label: "Status quo" }],
    free_public_transport: [{ dir: "up", label: "Transit ridership" }, { dir: "down", label: "Fare revenue" }, { dir: "up", label: "Mobility access" }],
    more_cctv: [{ dir: "up", label: "Camera coverage" }, { dir: "up", label: "Case detection" }, { dir: "down", label: "Privacy rights" }],
    ban_gender_language: [{ dir: "up", label: "Language uniformity" }, { dir: "down", label: "Inclusion climate" }, { dir: "up", label: "Admin consistency" }],
    no_city_debt: [{ dir: "down", label: "Debt burden" }, { dir: "down", label: "Capital projects" }, { dir: "up", label: "Fiscal reserve" }],
    no_property_tax_increase: [{ dir: "up", label: "Owner relief" }, { dir: "down", label: "City revenue" }, { dir: "down", label: "Service funding" }],
    no_open_space_solar: [{ dir: "down", label: "Solar output" }, { dir: "up", label: "Open land" }, { dir: "down", label: "Energy transition" }],
    no_city_hospital: [{ dir: "down", label: "Bed capacity" }, { dir: "down", label: "Emergency resilience" }, { dir: "up", label: "Budget room" }],
    no_new_wind: [{ dir: "down", label: "Wind output" }, { dir: "up", label: "Landscape protection" }, { dir: "down", label: "Climate pace" }],
    no_congestion_charge: [{ dir: "up", label: "Car entries" }, { dir: "down", label: "Clean air" }, { dir: "down", label: "Transit shift" }],
    no_new_bike_streets: [{ dir: "up", label: "Car access" }, { dir: "down", label: "Bike safety" }, { dir: "down", label: "Mode shift" }],
    no_third_runway: [{ dir: "down", label: "Airport capacity" }, { dir: "up", label: "Land protection" }, { dir: "down", label: "Noise levels" }],
    no_urban_farming: [{ dir: "down", label: "Local produce" }, { dir: "up", label: "Buildable land" }, { dir: "down", label: "Community gardens" }],
    no_higher_parking_fees: [{ dir: "up", label: "Car parking" }, { dir: "down", label: "City revenue" }, { dir: "down", label: "Transit shift" }],
    no_climate_priority: [{ dir: "down", label: "Emissions cuts" }, { dir: "up", label: "Short-term savings" }, { dir: "down", label: "Green investment" }],
    no_a100_renovation: [{ dir: "down", label: "Road reliability" }, { dir: "up", label: "Budget savings" }, { dir: "down", label: "Traffic flow" }],
    no_new_city_housing: [{ dir: "down", label: "Affordable stock" }, { dir: "up", label: "Private role" }, { dir: "down", label: "Rent relief" }],
    no_superblocks: [{ dir: "up", label: "Car permeability" }, { dir: "down", label: "Public space" }, { dir: "down", label: "Street safety" }],
    no_subsidized_housing: [{ dir: "down", label: "Social housing" }, { dir: "up", label: "Budget savings" }, { dir: "down", label: "Housing access" }],
    no_tourist_tax_increase: [{ dir: "up", label: "Visitor demand" }, { dir: "down", label: "Tourism revenue" }, { dir: "up", label: "Hotel margin" }],
    no_gender_neutral_toilets: [{ dir: "down", label: "Inclusive access" }, { dir: "up", label: "Traditional design" }, { dir: "down", label: "Visitor comfort" }],
    no_car_space_reallocation: [{ dir: "up", label: "Car capacity" }, { dir: "down", label: "Bike network" }, { dir: "down", label: "Ped safety" }]
  },
  de: {
    rent_freeze: [{ dir: "up", label: "Mietstabilitaet" }, { dir: "down", label: "Mietangebot" }, { dir: "down", label: "Vermieterertrag" }],
    bike_highway: [{ dir: "up", label: "Radsicherheit" }, { dir: "down", label: "Autospuren" }, { dir: "up", label: "Radmobilitaet" }],
    basic_income: [{ dir: "up", label: "Einkommensschutz" }, { dir: "down", label: "Stadtbudget" }, { dir: "up", label: "Kaufkraft" }],
    no_new_business_districts: [{ dir: "down", label: "Jobwachstum" }, { dir: "up", label: "Gruenflaeche" }, { dir: "down", label: "Steuerbasis" }],
    no_new_tram_routes: [{ dir: "down", label: "Nahverkehrsnetz" }, { dir: "up", label: "Autonutzung" }, { dir: "down", label: "Quartierszugang" }],
    no_road_widening: [{ dir: "up", label: "Luftqualitaet" }, { dir: "down", label: "Autodurchsatz" }, { dir: "up", label: "Strassensicherheit" }],
    no_tall_buildings: [{ dir: "up", label: "Skylinekontrolle" }, { dir: "down", label: "Wohnangebot" }, { dir: "up", label: "Stadtbild" }],
    genai_in_schools: [{ dir: "up", label: "Digitalkompetenz" }, { dir: "up", label: "Lehrerwerkzeuge" }, { dir: "down", label: "Datenschutz" }],
    no_business_tax_increase: [{ dir: "up", label: "Unternehmensmarge" }, { dir: "up", label: "Investitionstempo" }, { dir: "down", label: "Stadteinnahmen" }],
    no_more_refugees: [{ dir: "down", label: "Aufnahmequote" }, { dir: "down", label: "Integrationsdruck" }, { dir: "up", label: "Unterkunftsreserve" }],
    ban_short_term_rentals: [{ dir: "up", label: "Langzeitmieten" }, { dir: "down", label: "Touristenbetten" }, { dir: "up", label: "Quartiersruhe" }],
    no_less_space_for_cars: [{ dir: "up", label: "Autospuren" }, { dir: "down", label: "Radspuren" }, { dir: "down", label: "Fusswege" }],
    no_new_mosque: [{ dir: "down", label: "Gebetsraum" }, { dir: "down", label: "Inklusion" }, { dir: "up", label: "Status quo" }],
    free_public_transport: [{ dir: "up", label: "OePNV Nutzung" }, { dir: "down", label: "Fahrgelderloese" }, { dir: "up", label: "Mobilitaetszugang" }],
    more_cctv: [{ dir: "up", label: "Kameraabdeckung" }, { dir: "up", label: "Falldetektion" }, { dir: "down", label: "Privatrechte" }],
    ban_gender_language: [{ dir: "up", label: "Sprachuniform" }, { dir: "down", label: "Inklusionsklima" }, { dir: "up", label: "Verwaltungsklarheit" }],
    no_city_debt: [{ dir: "down", label: "Schuldenlast" }, { dir: "down", label: "Investitionen" }, { dir: "up", label: "Finanzpuffer" }],
    no_property_tax_increase: [{ dir: "up", label: "Eigentuemerentlastung" }, { dir: "down", label: "Stadteinnahmen" }, { dir: "down", label: "Servicebudget" }],
    no_open_space_solar: [{ dir: "down", label: "Solarleistung" }, { dir: "up", label: "Freiflaechen" }, { dir: "down", label: "Energiewende" }],
    no_city_hospital: [{ dir: "down", label: "Bettenkapazitaet" }, { dir: "down", label: "Notfallstabilitaet" }, { dir: "up", label: "Budgetspielraum" }],
    no_new_wind: [{ dir: "down", label: "Windleistung" }, { dir: "up", label: "Landschaftsschutz" }, { dir: "down", label: "Klimatempo" }],
    no_congestion_charge: [{ dir: "up", label: "Autoeinfahrten" }, { dir: "down", label: "Saubere Luft" }, { dir: "down", label: "OePNV Wechsel" }],
    no_new_bike_streets: [{ dir: "up", label: "Autozugang" }, { dir: "down", label: "Radsicherheit" }, { dir: "down", label: "Verkehrswandel" }],
    no_third_runway: [{ dir: "down", label: "Flugkapazitaet" }, { dir: "up", label: "Flaechenschutz" }, { dir: "down", label: "Laermpegel" }],
    no_urban_farming: [{ dir: "down", label: "Lokalproduktion" }, { dir: "up", label: "Bauflaechen" }, { dir: "down", label: "Gemeinschaftsgaerten" }],
    no_higher_parking_fees: [{ dir: "up", label: "Autoparken" }, { dir: "down", label: "Stadteinnahmen" }, { dir: "down", label: "OePNV Wechsel" }],
    no_climate_priority: [{ dir: "down", label: "Emissionssenkung" }, { dir: "up", label: "Kurzfristsparen" }, { dir: "down", label: "Grueninvestitionen" }],
    no_a100_renovation: [{ dir: "down", label: "Strassenzuverlaessigkeit" }, { dir: "up", label: "Budgetsparen" }, { dir: "down", label: "Verkehrsfluss" }],
    no_new_city_housing: [{ dir: "down", label: "Sozialwohnbestand" }, { dir: "up", label: "Privatrolle" }, { dir: "down", label: "Mietentlastung" }],
    no_superblocks: [{ dir: "up", label: "Autodurchfahrt" }, { dir: "down", label: "Quartiersraum" }, { dir: "down", label: "Strassensicherheit" }],
    no_subsidized_housing: [{ dir: "down", label: "Sozialwohnungsbau" }, { dir: "up", label: "Budgetsparen" }, { dir: "down", label: "Wohnzugang" }],
    no_tourist_tax_increase: [{ dir: "up", label: "Besuchernachfrage" }, { dir: "down", label: "Tourismuserloese" }, { dir: "up", label: "Hotelmarge" }],
    no_gender_neutral_toilets: [{ dir: "down", label: "Inklusiver Zugang" }, { dir: "up", label: "Traditionsdesign" }, { dir: "down", label: "Besucherkomfort" }],
    no_car_space_reallocation: [{ dir: "up", label: "Autokapazitaet" }, { dir: "down", label: "Radnetz" }, { dir: "down", label: "Fussgaengerschutz" }]
  }
};

function buildImpactBubbles(question) {
  const localized = QUESTION_IMPACTS[currentLang]?.[question.id] || QUESTION_IMPACTS.en[question.id] || [];
  const bubbles = localized.slice(0, 3);

  if (bubbles.length === 0) {
    return [{ arrow: "↑", dir: "up", label: currentLang === "de" ? "Stadteffekt" : "City impact" }];
  }

  return bubbles.map((bubble) => ({
    arrow: bubble.dir === "up" ? "↑" : "↓",
    dir: bubble.dir === "down" ? "down" : "up",
    label: bubble.label
  }));
}

function updateQuestionImpactsToggle() {
  toggleQuestionImpactsBtn.textContent = showQuestionImpacts ? t().hideQuestionImpacts : t().showQuestionImpacts;
  toggleQuestionImpactsBtn.setAttribute("aria-pressed", showQuestionImpacts ? "true" : "false");
}

function updateQuestionImpactsVisibilityInDom() {
  document.querySelectorAll(".question-impact-wrap").forEach((el) => {
    el.classList.toggle("hidden", !showQuestionImpacts);
  });
}

function createQuestionCards(existingAnswerMap = null) {
  const answerMap = existingAnswerMap || getAnswerMap();
  questionsEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const limitReached = topIssues.size >= TOP_ISSUE_MAX;

  questions.forEach((q, idx) => {
    const selected = answerMap.get(q.id);
    const isTop = topIssues.has(q.id);
    const topIssueLabel = isTop ? t().topIssueBtnActive : t().topIssueBtn;
    const labels = t().answer;
    const impactBubbles = buildImpactBubbles(q)
      .map(
        (bubble) => `
          <div class="topic-impact-bubble ${bubble.dir}">
            <span class="impact-arrow">${bubble.arrow}</span>
            <span>${bubble.label}</span>
          </div>
        `
      )
      .join("");
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-head">
        <h3>${idx + 1}. ${q.text[currentLang]}</h3>
        <button
          type="button"
          class="top-issue-btn ${isTop ? "active" : ""}"
          data-top-issue="${q.id}"
          ${!isTop && limitReached ? "disabled" : ""}
        >${topIssueLabel}</button>
      </div>
      <div class="options">
        <label class="option"><input type="radio" name="q_${q.id}" value="1" ${optionChecked("1", selected)} /> ${labels[1]}</label>
        <label class="option"><input type="radio" name="q_${q.id}" value="0" ${optionChecked("0", selected)} /> ${labels[0]}</label>
        <label class="option"><input type="radio" name="q_${q.id}" value="-1" ${optionChecked("-1", selected)} /> ${labels[-1]}</label>
        <label class="option"><input type="radio" name="q_${q.id}" value="skip" ${optionChecked("skip", selected)} /> ${labels.skip}</label>
      </div>
      <div class="question-impact-wrap ${showQuestionImpacts ? "" : "hidden"}">
        <p class="topic-impact-title">${t().impactHeading}</p>
        <div class="topic-impact-bubbles">${impactBubbles}</div>
      </div>
    `;
    fragment.appendChild(card);
  });

  questionsEl.appendChild(fragment);
  updateQuestionImpactsVisibilityInDom();
  renderTopIssueInfo();
}

function getTimeStamp() {
  const locale = currentLang === "de" ? "de-DE" : "en-US";
  return new Date().toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
}

function renderSaveStatus() {
  if (saveState.type === "saved") {
    saveStatusEl.textContent = t().saveAt(saveState.time || getTimeStamp());
  } else if (saveState.type === "loaded") {
    saveStatusEl.textContent = t().saveLoaded;
  } else if (saveState.type === "reset") {
    saveStatusEl.textContent = t().saveReset;
  } else {
    saveStatusEl.textContent = t().saveNotSaved;
  }
}

function saveAnswersToCache() {
  const answers = getUserAnswers().map((entry) => ({ id: entry.id, answer: entry.answer }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  saveState = { type: "saved", time: getTimeStamp() };
  renderSaveStatus();
}

function loadAnswersFromCache() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    saveState = { type: "not_saved", time: null };
    renderSaveStatus();
    return;
  }

  let cachedAnswers = [];
  try {
    cachedAnswers = JSON.parse(raw);
  } catch (_err) {
    localStorage.removeItem(STORAGE_KEY);
    saveState = { type: "not_saved", time: null };
    renderSaveStatus();
    return;
  }

  const answerMap = new Map(cachedAnswers.map((a) => [a.id, a.answer]));
  createQuestionCards(answerMap);
  saveState = { type: "loaded", time: null };
  renderSaveStatus();
}

function resetAllAnswers() {
  topIssues = new Set();
  showImpactDetails = false;
  expandedParties = new Set();
  createQuestionCards(new Map());
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(TOP_ISSUES_KEY);
  lastComputedScores = [];
  showAllResults = false;
  resultsEl.classList.add("hidden");
  resultsListEl.innerHTML = "";
  toggleAllResultsBtn.classList.add("hidden");
  toggleImpactBtn.classList.add("hidden");
  saveState = { type: "reset", time: null };
  renderSaveStatus();
  updateProgress();
}

function toggleTopIssue(questionId) {
  if (topIssues.has(questionId)) {
    topIssues.delete(questionId);
  } else {
    if (topIssues.size >= TOP_ISSUE_MAX) return;
    topIssues.add(questionId);
  }
  saveTopIssues();
  const currentAnswers = getAnswerMap();
  createQuestionCards(currentAnswers);
}

function toggleQuestionImpacts() {
  showQuestionImpacts = !showQuestionImpacts;
  localStorage.setItem(IMPACT_VISIBILITY_KEY, showQuestionImpacts ? "1" : "0");
  updateQuestionImpactsToggle();
  updateQuestionImpactsVisibilityInDom();
}

function answerLabel(value) {
  if (value === 1) return t().answer[1];
  if (value === -1) return t().answer[-1];
  return t().answer[0];
}

function formatImpactValue(value) {
  const locale = currentLang === "de" ? "de-DE" : "en-US";
  return new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);
}

function renderCalculationBanner() {
  const count = topIssues.size;
  calcBannerEl.classList.remove("warn", "info", "good");
  if (count === 0) {
    calcBannerEl.textContent = t().calcNoTopIssues;
    calcBannerEl.classList.add("warn");
  } else if (count < TOP_ISSUE_MAX) {
    calcBannerEl.textContent = t().calcSomeTopIssues(count, TOP_ISSUE_MAX);
    calcBannerEl.classList.add("info");
  } else {
    calcBannerEl.textContent = t().calcMaxTopIssues;
    calcBannerEl.classList.add("good");
  }
}

function buildDetailsMarkup(scoreItem) {
  const aligned = [];
  const somewhatAligned = [];
  const notAligned = [];
  const totalWeight = scoreItem.details.reduce((acc, d) => acc + d.weight, 0);

  scoreItem.details.forEach((d) => {
    const questionText = questions[d.questionIndex].text[currentLang];
    const isTopIssue = topIssues.has(questions[d.questionIndex].id);
    const topBadge = isTopIssue
      ? ` <span class="top-issue-badge" title="${t().topIssueTip}">${t().topIssueTag}</span>`
      : "";
    const line = `${questionText}${topBadge} <span class="detail-compare">${t().youParty(answerLabel(d.userAnswer), answerLabel(d.partyAnswer))}</span>`;
    const impactPct = totalWeight > 0 ? (d.effectiveScore * d.weight * 100) / totalWeight : 0;
    const diff = Math.abs(d.userAnswer - d.partyAnswer);
    if (diff === 0) {
      aligned.push({ line, isTopIssue, impactPct });
    } else if (diff === 1) {
      somewhatAligned.push({ line, isTopIssue, impactPct });
    } else {
      notAligned.push({ line, isTopIssue, impactPct });
    }
  });

  const alignedHtml = aligned.length
    ? aligned
        .map((x) => {
          const impact = showImpactDetails
            ? `<span class="impact-chip">${t().impactLabel(formatImpactValue(x.impactPct))}</span>`
            : "";
          return `<li class="${x.isTopIssue ? "detail-top-issue" : ""}"><span class="detail-text">${x.line}</span>${impact}</li>`;
        })
        .join("")
    : `<li>${t().noAligned}</li>`;
  const notAlignedHtml = notAligned.length
    ? notAligned
        .map((x) => {
          const impact = showImpactDetails
            ? `<span class="impact-chip">${t().impactLabel(formatImpactValue(x.impactPct))}</span>`
            : "";
          return `<li class="${x.isTopIssue ? "detail-top-issue" : ""}"><span class="detail-text">${x.line}</span>${impact}</li>`;
        })
        .join("")
    : `<li>${t().noNotAligned}</li>`;
  const somewhatHtml = somewhatAligned.length
    ? somewhatAligned
        .map((x) => {
          const impact = showImpactDetails
            ? `<span class="impact-chip">${t().impactLabel(formatImpactValue(x.impactPct))}</span>`
            : "";
          return `<li class="${x.isTopIssue ? "detail-top-issue" : ""}"><span class="detail-text">${x.line}</span>${impact}</li>`;
        })
        .join("")
    : `<li>${t().noSomewhat}</li>`;

  const impactHead = showImpactDetails ? `<span class="impact-col-title">${t().impactColumn}</span>` : "";
  const impactListClass = showImpactDetails ? "with-impact" : "";

  return `
    <div class="party-details ${expandedParties.has(scoreItem.party) ? "" : "hidden"}">
      <div class="detail-block">
        <div class="detail-head">
          <h4 class="good">${t().alignedTitle(aligned.length)}</h4>
          ${impactHead}
        </div>
        <ul class="detail-list ${impactListClass}">${alignedHtml}</ul>
      </div>
      <div class="detail-block">
        <div class="detail-head">
          <h4>${t().somewhatTitle(somewhatAligned.length)}</h4>
          ${impactHead}
        </div>
        <ul class="detail-list ${impactListClass}">${somewhatHtml}</ul>
      </div>
      <div class="detail-block">
        <div class="detail-head">
          <h4 class="bad">${t().notAlignedTitle(notAligned.length)}</h4>
          ${impactHead}
        </div>
        <ul class="detail-list ${impactListClass}">${notAlignedHtml}</ul>
      </div>
    </div>
  `;
}

function renderResults() {
  renderCalculationBanner();
  const visibleScores = showAllResults ? lastComputedScores : lastComputedScores.slice(0, 3);
  resultsListEl.innerHTML = visibleScores
    .map((s) => `
      <article class="result-item" data-party="${s.party}">
        <button class="result-main" type="button">
          <div class="result-label result-head">
            <span class="party-name-wrap">
              ${s.logo ? `<img class="party-logo" src="${s.logo}" alt="${s.party} logo" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" /><span class="party-symbol fallback">${s.symbol}</span>` : `<span class="party-symbol">${s.symbol}</span>`}
              <span>${s.party}</span>
            </span>
            <span>${s.percent}%</span>
          </div>
          <div class="bar"><span style="width:${s.percent}%"></span></div>
          <div class="result-toggle-note">${t().clickHint}</div>
        </button>
        ${buildDetailsMarkup(s)}
      </article>
    `)
    .join("");

  if (lastComputedScores.length > 3) {
    toggleAllResultsBtn.classList.remove("hidden");
    toggleAllResultsBtn.textContent = showAllResults ? t().showTop3 : t().showAll;
  } else {
    toggleAllResultsBtn.classList.add("hidden");
  }

  if (lastComputedScores.length > 0) {
    toggleImpactBtn.classList.remove("hidden");
    toggleImpactBtn.textContent = showImpactDetails ? t().hideImpact : t().showImpact;
  } else {
    toggleImpactBtn.classList.add("hidden");
  }
}

function calculateScores() {
  saveAnswersToCache();
  expandedParties = new Set();
  const answers = getUserAnswers();
  const answeredCount = answers.filter((a) => a.answer !== null).length;

  if (answeredCount === 0) {
    resultsEl.classList.remove("hidden");
    resultsListEl.innerHTML = `<p>${t().answerOne}</p>`;
    toggleAllResultsBtn.classList.add("hidden");
    toggleImpactBtn.classList.add("hidden");
    controlsEl.insertAdjacentElement("afterend", resultsEl);
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const scores = parties.map((party) => {
    let sum = 0;
    let count = 0;
    const details = [];

    answers.forEach((entry, i) => {
      if (entry.answer === null) return;
      const stance = partyStanceForQuestion(party, questions[i]);
      const similarity = 1 - Math.abs(entry.answer - stance) / 2;
      const questionId = questions[i].id;
      const isTopIssue = topIssues.has(questionId);
      let weight = isTopIssue ? TOP_ISSUE_WEIGHT : 1;
      if (isTopIssue && similarity < 1) {
        weight *= TOP_ISSUE_CONFLICT_MULTIPLIER;
      }
      const diff = Math.abs(entry.answer - stance);
      let effectiveScore = similarity;
      if (diff === 2) {
        effectiveScore = effectiveScore - (isTopIssue ? TOP_FULL_DISAGREEMENT_PENALTY : FULL_DISAGREEMENT_PENALTY);
      }
      sum += effectiveScore * weight;
      count += weight;
      details.push({ questionIndex: i, userAnswer: entry.answer, partyAnswer: stance, similarity, effectiveScore, weight });
    });

    const normalized = Math.max(0, Math.min(1, sum / count));
    return { party: party.name, symbol: party.symbol, logo: party.logo, percent: Math.round(normalized * 100), details };
  });

  scores.sort((a, b) => b.percent - a.percent);
  lastComputedScores = scores;
  showAllResults = false;
  renderResults();

  resultsEl.classList.remove("hidden");
  controlsEl.insertAdjacentElement("afterend", resultsEl);
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateProgress() {
  const answered = getUserAnswers().filter((a) => a.answer !== null).length;
  progressLabelEl.textContent = t().progress(answered, questions.length);
  progressBarEl.style.width = `${(answered / questions.length) * 100}%`;
}

function applyLanguageStrings() {
  const txt = t();
  document.documentElement.lang = currentLang;
  document.title = txt.pageTitle;
  eyebrowEl.textContent = txt.eyebrow;
  titleEl.textContent = txt.title;
  ledeEl.textContent = txt.lede;
  disclaimerEl.textContent = txt.disclaimer;
  sourceEl.innerHTML = txt.sources;
  showResultsBtn.textContent = txt.calculate;
  showResultsBottomBtn.textContent = txt.calculate;
  resetAnswersBtn.textContent = txt.reset;
  updateQuestionImpactsToggle();
  resultsTitleEl.textContent = txt.resultsTitle;
  resultsNoteEl.textContent = txt.resultsNote;
  backToTopBtn.textContent = txt.backToTop;
  langEnBtn.classList.toggle("active", currentLang === "en");
  langDeBtn.classList.toggle("active", currentLang === "de");
  renderTopIssueInfo();
}

function updateBackToTopVisibility() {
  if (window.scrollY > 450) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "de") return;
  currentLang = lang;
  localStorage.setItem(LANGUAGE_KEY, currentLang);

  const currentAnswers = getAnswerMap();
  applyLanguageStrings();
  createQuestionCards(currentAnswers);
  renderSaveStatus();
  updateProgress();

  if (!resultsEl.classList.contains("hidden") && lastComputedScores.length > 0) {
    renderResults();
  }
}

loadTopIssues();
applyLanguageStrings();
createQuestionCards();
loadAnswersFromCache();
updateProgress();

langEnBtn.addEventListener("click", () => setLanguage("en"));
langDeBtn.addEventListener("click", () => setLanguage("de"));

questionsEl.addEventListener("click", (event) => {
  const topIssueButton = event.target.closest("[data-top-issue]");
  if (!topIssueButton) return;
  const questionId = topIssueButton.getAttribute("data-top-issue");
  if (!questionId) return;
  toggleTopIssue(questionId);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("input[type='radio']")) {
    saveAnswersToCache();
    updateProgress();
  }
});

showResultsBtn.addEventListener("click", calculateScores);
showResultsBottomBtn.addEventListener("click", calculateScores);
resetAnswersBtn.addEventListener("click", resetAllAnswers);
toggleQuestionImpactsBtn.addEventListener("click", toggleQuestionImpacts);

toggleAllResultsBtn.addEventListener("click", () => {
  showAllResults = !showAllResults;
  renderResults();
});

toggleImpactBtn.addEventListener("click", () => {
  showImpactDetails = !showImpactDetails;
  renderResults();
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTopVisibility);
updateBackToTopVisibility();

resultsListEl.addEventListener("click", (event) => {
  const button = event.target.closest(".result-main");
  if (!button) return;
  const card = button.closest(".result-item");
  const partyName = card.getAttribute("data-party");
  const details = card.querySelector(".party-details");
  details.classList.toggle("hidden");
  if (details.classList.contains("hidden")) {
    expandedParties.delete(partyName);
  } else {
    expandedParties.add(partyName);
  }
});
