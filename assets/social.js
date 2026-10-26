/* ============================================================
   Y2O SOCIAL LINKS
   Adds Instagram, Facebook, and LinkedIn icons to the footer.
   To change a link, edit it here. Leave '' to hide an icon.
   ============================================================ */
var Y2O_SOCIAL = {
  instagram: 'https://www.instagram.com/youth2opportunities/',
  facebook:  'https://www.facebook.com/share/14rFLufJvhd/',
  linkedin:  'https://www.linkedin.com/company/youth-to-opportunities/',
  tiktok:    ''
};

(function(){
  function run(){
    var ICONS = {
      instagram:['Instagram','<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>'],
      facebook:['Facebook','<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3h-3V6.8c0-.5.4-.8.8-.8H15Z"/>'],
      linkedin:['LinkedIn','<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>'],
      tiktok:['TikTok','<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 2.6 2.3 4.3 5 4.5"/>']
    };
    // styles (added once)
    if (!document.getElementById('y2o-social-css')) {
      var st = document.createElement('style'); st.id = 'y2o-social-css';
      st.textContent = '.social{display:flex;gap:10px;margin-top:22px}' +
        '.social a{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:#fff;margin:0;transition:background .2s ease,color .2s ease,transform .2s ease}' +
        '.social a:hover{background:#FFC845;color:#141B47;transform:translateY(-2px)}';
      document.head.appendChild(st);
    }
    // find or create the icon row under the footer description
    var box = document.getElementById('y2o-social');
    if (!box) {
      var p = document.querySelector('footer .ft > div:first-child p') || document.querySelector('footer p');
      if (!p) return;
      box = document.createElement('div'); box.className = 'social'; box.id = 'y2o-social';
      p.parentNode.insertBefore(box, p.nextSibling);
    }
    var html = '';
    Object.keys(ICONS).forEach(function(k){
      var url = (Y2O_SOCIAL[k] || '').trim(); if (!url) return;
      html += '<a href="'+url+'" target="_blank" rel="noopener" aria-label="Y2O on '+ICONS[k][0]+'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ICONS[k][1]+'</svg></a>';
    });
    box.innerHTML = html; box.hidden = !html;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
