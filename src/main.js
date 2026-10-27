import { projects } from './data/projects.js';
import { skills, glyphs } from './data/skills.js';
const projectList = document.getElementById('missionList');
const search = document.getElementById('projectSearch');
const count = document.getElementById('matchCount');
let filter = 'all';
let selected = 'OP-01';
function renderProjects() { const q = search.value.trim().toLowerCase(); const results = projects.filter(p => (filter === 'all' || p.groups.includes(filter)) && [p.title, p.description, p.overview, p.kind, ...p.tags].join(' ').toLowerCase().includes(q)); count.textContent = String(results.length).padStart(2, '0') + ' / 09 FILES'; projectList.replaceChildren(); for (const p of results) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'mission' + (selected === p.id ? ' selected' : '');
    card.setAttribute('aria-label', 'Open mission briefing: ' + p.title);
    card.innerHTML = `<span class="mission-number">▰ ${p.id} / OPERATION BRIEF</span><span class="m-icon" aria-hidden="true">${p.icon}</span><h3>${p.title}</h3><p>${p.description}</p><span class="bottom"><span class="m-status">${p.kind}</span><span class="open">OPEN ↗</span></span>`;
    card.addEventListener('click', () => openProject(p.id));
    projectList.appendChild(card);
} if (!results.length) {
    const empty = document.createElement('div');
    empty.className = 'mission-empty';
    empty.textContent = 'NO MATCHING MISSIONS. Try another category or keyword.';
    projectList.appendChild(empty);
} }
function selectMarker(id) { selected = id; for (const btn of document.querySelectorAll('.mapmarker')) {
    btn.classList.toggle('selected', btn.dataset.project === id);
} renderProjects(); }
const dlg = document.getElementById('projectDialog');
function openProject(id) { const p = projects.find(x => x.id === id); if (!p)
    return; selectMarker(id); document.getElementById('modalId').textContent = 'OPERATION / ' + p.id + ' // ENGINEERING DIVISION'; document.getElementById('modalTitle').textContent = p.title; document.getElementById('modalKind').textContent = p.kind; document.getElementById('modalOverview').textContent = p.overview; const ul = document.getElementById('modalTasks'); ul.replaceChildren(); p.tasks.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }); const tags = document.getElementById('modalTags'); tags.replaceChildren(); p.tags.forEach(t => { const el = document.createElement('span'); el.textContent = t; tags.appendChild(el); }); document.getElementById('modalScope').textContent = p.scope; if (typeof dlg.showModal === 'function')
    dlg.showModal();
else
    dlg.setAttribute('open', ''); }
document.getElementById('modalClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg)
    dlg.close(); });
document.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click', () => openProject(el.dataset.project)));
document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => { filter = b.dataset.filter; document.querySelectorAll('.filter').forEach(x => { const on = x === b; x.classList.toggle('active', on); x.setAttribute('aria-pressed', on); }); renderProjects(); }));
search.addEventListener('input', renderProjects);
renderProjects();
const slots = document.getElementById('equipSlots');
const display = document.getElementById('itemDisplay');
function equip(i) { const s = skills[i]; document.getElementById('itemCode').textContent = 'ITM // ' + String(i + 1).padStart(2, '0'); document.getElementById('itemName').textContent = s.title; document.getElementById('itemDescription').textContent = s.desc; display.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true">${glyphs[s.glyph]}</svg>`; [...slots.children].forEach((b, j) => { b.classList.toggle('active', j === i); b.setAttribute('aria-pressed', String(j === i)); }); }
skills.forEach((s, i) => { let btn = document.createElement('button'); btn.type = 'button'; btn.className = 'slot'; btn.setAttribute('aria-label', 'Inspect ' + s.title); btn.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true">${glyphs[s.glyph]}</svg><strong>${s.title}</strong><small>${s.type}</small>`; btn.addEventListener('click', () => equip(i)); slots.appendChild(btn); });
equip(0);
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => { const night = document.body.classList.toggle('night'); themeToggle.textContent = night ? '☀' : '☾'; themeToggle.setAttribute('aria-label', night ? 'Switch to daylight battleground mode' : 'Switch to night reconnaissance mode'); themeToggle.title = themeToggle.getAttribute('aria-label'); });
const recruiterToggle = document.getElementById('recruiterToggle');
recruiterToggle.addEventListener('click', () => { let on = document.body.classList.toggle('recruiter'); recruiterToggle.querySelector('span').textContent = on ? 'GAME VIEW' : 'RECRUITER VIEW'; recruiterToggle.classList.toggle('recruiter-active', on); });
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => { let open = mobileMenu.classList.toggle('show'); menuToggle.setAttribute('aria-expanded', String(open)); });
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileMenu.classList.remove('show'); menuToggle.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
for (const b of ['printIntro', 'footerPrint'])
    document.getElementById(b).addEventListener('click', () => window.print());
document.getElementById('copyIntro').addEventListener('click', async () => { const text = document.getElementById('placementIntro').textContent.trim(); const b = document.getElementById('copyIntro'); try {
    if (navigator.clipboard && window.isSecureContext)
        await navigator.clipboard.writeText(text);
    else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        if (!document.execCommand('copy'))
            throw Error('copy unavailable');
        ta.remove();
    }
    b.querySelector('span').textContent = '✓ COPIED TO CLIPBOARD';
    setTimeout(() => b.querySelector('span').textContent = '▤ COPY INTRODUCTION', 1800);
}
catch (e) {
    b.querySelector('span').textContent = 'COPY UNAVAILABLE — SELECT TEXT';
    setTimeout(() => b.querySelector('span').textContent = '▤ COPY INTRODUCTION', 2500);
} });
const overlay = document.getElementById('dropOverlay');
let dropTimer = null;
document.getElementById('deployBtn').addEventListener('click', () => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.getElementById('operations').scrollIntoView();
    return;
} if (dropTimer)
    return; overlay.classList.add('show'); overlay.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; dropTimer = setTimeout(() => { overlay.classList.remove('show'); overlay.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; document.getElementById('operations').scrollIntoView({ behavior: 'smooth' }); dropTimer = null; }, 1800); });
const sections = [...document.querySelectorAll('main section[id]')];
const navanchors = [...document.querySelectorAll('.navlinks a')];
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { let current = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) {
        navanchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.target.id));
    } }, { rootMargin: '-20% 0px -65% 0px' });
    sections.forEach(s => observer.observe(s));
}
