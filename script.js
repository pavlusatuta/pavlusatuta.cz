const target=new Date('2026-10-10T11:00:00');
function updateCountdown(){
 const el=document.getElementById('countdown');
 const diff=target-new Date();
 if(diff<=0){el.textContent='Dnes je náš velký den!';return;}
 const d=Math.floor(diff/86400000);
 const h=Math.floor((diff%86400000)/3600000);
 const m=Math.floor((diff%3600000)/60000);
 el.textContent=`Do svatby zbývá ${d} dní ${h} hodin ${m} minut`;
}
updateCountdown();
setInterval(updateCountdown,60000);
