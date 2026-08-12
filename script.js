const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.main-nav');
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}

const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault();const data=new FormData(form);const nombre=data.get('nombre')||'';const telefono=data.get('telefono')||'';const email=data.get('email')||'';const modelo=data.get('modelo')||'';const mensaje=data.get('mensaje')||'';const subject=`Consulta reparación robot Xiaomi - ${modelo||nombre}`;const body=`Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nModelo: ${modelo}\n\nAvería:\n${mensaje}`;window.location.href=`mailto:soporte@kelatos.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});}
