// declaraciones generales
// boddy
const cuerpo = document.body;
cuerpo.style.backgroundColor = '#23003a';
//cabecera
const cabecera = document.createElement('header');
cabecera.id = ('cabecera');
cuerpo.appendChild(cabecera);
// Div navegador
const navegador = document.createElement('div');
navegador.id = ('IdNav');
cabecera.appendChild(navegador);
// nav
const nav = document.createElement('nav');
nav.id = ('idNav');
navegador.appendChild(nav);
// Ul nav
const ulNav = document.createElement ('ul');
ulNav.id=('idUl');
navegador.appendChild(ulNav);
// array de links
const links = ["Index", "Productos", "Contacto"];
for( link of links) {
    const liNav = document.createElement ('li');
    liNav.id = ('idLiNav');
    liNav.innerHTML = `<a href="./pages/${link.toLowerCase()}.html">${link}</a>`;
    ulNav.appendChild(liNav);
}





