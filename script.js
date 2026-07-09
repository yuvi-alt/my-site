// theme toggle + storage
const themeBtn = document.getElementById('themeBtn');
const setTheme = (mode) => {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('theme', mode);
  themeBtn.textContent = mode === 'dark' ? '🌙' : '☀️';
};
setTheme(localStorage.getItem('theme') || 'dark');
themeBtn?.addEventListener('click', () => {
  setTheme((document.documentElement.dataset.theme === 'dark') ? 'light' : 'dark');
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// contact form → localStorage inbox
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
const inboxList = document.getElementById('inboxList');
const clearBtn = document.getElementById('clearInbox');

function loadInbox(){
  const inbox = JSON.parse(localStorage.getItem('inbox') || '[]');
  inboxList.innerHTML = '';
  inbox.forEach((m) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${m.name}</strong> — ${m.email}<br/><span class="muted">${m.message}</span><br/><small>${new Date(m.ts).toLocaleString()}</small>`;
    inboxList.appendChild(li);
  });
}
loadInbox();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const inbox = JSON.parse(localStorage.getItem('inbox') || '[]');
  inbox.push({...data, ts: new Date().toISOString()});
  localStorage.setItem('inbox', JSON.stringify(inbox));
  form.reset();
  msg.hidden = false;
  loadInbox();
  setTimeout(()=> msg.hidden = true, 2000);
});

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('inbox');
  loadInbox();
});
