// Je moet een API endpoint maken die online status retourneert
const statusEl = document.getElementById('status');

fetch('https://your-api/status')
  .then(res => res.json())
  .then(data => {
    statusEl.textContent = data.online ? '🟢 Online' : '🔴 Offline';
  })
  .catch(() => {
    statusEl.textContent = '❌ Niet bereikbaar';
  });
