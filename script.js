const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if(hamburger){
  hamburger.addEventListener('click', ()=> nav.classList.toggle('open'));
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      const el=document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); nav.classList.remove('open');}
    }
  });
});
// Header shadow on scroll
const header=document.getElementById('header');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>10) header.style.boxShadow='0 4px 20px rgba(0,0,0,0.25)';
  else header.style.boxShadow='none';
});
// Form handling - show thank you + send to FormSubmit via fetch for better UX
const form=document.getElementById('contactForm');
const thankyou=document.getElementById('thankyou');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const btn=form.querySelector('button[type="submit"]');
    const orig=btn.textContent;
    btn.textContent='Sending...';
    btn.disabled=true;
    try{
      const data=new FormData(form);
      // Send to FormSubmit via fetch (AJAX) - stays on page
      const res=await fetch(form.action, {method:'POST', body:data, headers:{'Accept':'application/json'}});
      // Show thank you regardless (FormSubmit returns 200)
      form.style.display='none';
      thankyou.style.display='block';
      thankyou.scrollIntoView({behavior:'smooth'});
      // Also store lead locally for user to see inbox
      const leads=JSON.parse(localStorage.getItem('growth_leads')||'[]');
      leads.push(Object.fromEntries(data.entries()));
      localStorage.setItem('growth_leads', JSON.stringify(leads));
    }catch(err){
      // Fallback: normal submit
      form.submit();
    }finally{
      btn.textContent=orig;
      btn.disabled=false;
    }
  });
}
