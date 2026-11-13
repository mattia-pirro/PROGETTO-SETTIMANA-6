const servizi = [
    {
        id: 1,
        icona: '🏠',
        titolo: 'Progettazione residenziale',
        info: 'Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi.',
    },
    {
        id: 2,
        icona: '🪑',
        titolo: 'Interior design',
        info: 'Allestimenti d\'interno per case e uffici, con materiali selezionati e arredo su misura.',
    },
    {
        id: 3,
        icona: '🧱',
        titolo: 'Ristrutturazioni',
        info: 'Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese.',
    },
    {
        id: 4,
        icona: '🌳',
        titolo: 'Progettazione del verde',
        info: 'Giardini, terrazze e spazi esterni pensati per dialogare con l\'architettura.',
    },
    {
        id: 5,
        icona: '🏪',
        titolo: 'Spazi commerciali',
        info: 'Negozi, showroom e locali pubblici progettati per accogliere e raccontare il tuo brand.',
    },
    {
        id: 6,
        icona: '🏗️',
        titolo: 'Direzione lavori',
        info: 'Controllo di tempi, costi e qualità in cantiere, fino al collaudo finale.',
    }
];

const progetti = [
    {
        id: 1,
        titolo: 'Villa Litta',
        categoria: 'Progettazione residenziale',
        anno: '2024',
    },
    {
        id: 2,
        titolo: 'Loft Navigli',
        categoria: 'Interior design',
        anno: '2023',
    },
    {
        id: 3,
        titolo: 'Residence Stella',
        categoria: 'Ristrutturazioni',
        anno: '2023',
    },
    {
        id: 4,
        titolo: 'Giardino Sospeso',
        categoria: 'Progettazione del verde',
        anno: '2022',
    },
    {
        id: 5,
        titolo: 'Showroom Ford',
        categoria: 'Spazi commerciali',
        anno: '2024',
    },
    {
        id: 6,
        titolo: 'Residenze Lago',
        categoria: 'Direzione lavori',
        anno: '2022',
    }
];

const bodyPage = document.body;
const header = document.querySelector('.site-header');
const headerTitle = document.querySelector('.site-header-title');
const btnMode = document.querySelector('.toggle-tema');
const serviziGrid = document.querySelector('#servizi .card-grid');
const progettiGrid = document.querySelector('#lavori .card-grid');
const form = document.getElementById('form-contatti');
const notifica = document.querySelector('.container-notifica');

function aggiornaScroll() {
    const scroll = window.innerHeight * 0.8;
    const scrolled = window.scrollY > scroll;
    header.classList.toggle('scrolled', scrolled);
    btnMode.classList.toggle('scrolled', scrolled);
    headerTitle.classList.toggle('scrolled', scrolled);
};

window.addEventListener('scroll', aggiornaScroll);

bodyPage.classList.add('no-transition');
aggiornaScroll();

window.addEventListener('load', () => {
    aggiornaScroll();
    setTimeout(() => {
        bodyPage.classList.remove('no-transition');
    }, 100);
});


btnMode.addEventListener('click', () => {
    bodyPage.classList.toggle('dark');
    if (bodyPage.classList.contains('dark')) {
        btnMode.textContent = 'Tema chiaro';
        bodyPage.setAttribute('data-bs-theme', 'dark');
    } else {
        btnMode.textContent = 'Tema scuro';
        bodyPage.setAttribute('data-bs-theme', 'light');
    }
});

function renderServizi() {
    serviziGrid.textContent = '';

    servizi.forEach(servizio => {
        const article = document.createElement('article');
        article.classList.add('card-container', 'col-12', 'col-md-6', 'col-lg-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'h-100', 'border', 'text-center', 'p-2');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const icona = document.createElement('div');
        icona.classList.add('display-4', 'mb-3');
        icona.textContent = servizio.icona;

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title', 'fw-bold');
        cardTitle.textContent = servizio.titolo;

        const cardInfo = document.createElement('p');
        cardInfo.classList.add('card-text', 'text-muted');
        cardInfo.textContent = servizio.info;

        cardDiv.addEventListener('click', () => {
            const selezionato = cardDiv.classList.contains('selected');
            const allCard = serviziGrid.querySelectorAll('.card');
            allCard.forEach(function (classe) {
                classe.classList.remove('selected');
            });
            if (selezionato === true) {
                renderProgetti();
            } else {
                cardDiv.classList.add('selected');
                renderProgetti(servizio.titolo);
            }
        });

        cardBody.appendChild(icona);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardInfo);

        cardDiv.appendChild(cardBody);

        article.appendChild(cardDiv);
        serviziGrid.appendChild(article);
    });
};

const shuffledProjects = [...progetti].sort(() => Math.random() - 0.5);

function renderProgetti(categoria = null) {
    progettiGrid.textContent = '';
    let progettiFiltrati = [];

    if (categoria === null || categoria === undefined) {
        progettiFiltrati = [...shuffledProjects];
    } else {
        progettiFiltrati = [...shuffledProjects].filter(function (progetto) {
            return progetto.categoria === categoria;
        });
    }

    progettiFiltrati.forEach(progetto => {
        const article = document.createElement('article');

        if (categoria !== null) {
            article.classList.add('card-container', 'col-12', 'col-md-6', 'col-lg-4', 'filtered');
        } else {
            article.classList.add('card-container', 'col-12', 'col-md-6', 'col-lg-4');
        }

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'h-100', 'border', 'overflow-hidden');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', 'assets/img/works.jpg');
        img.setAttribute('alt', progetto.titolo);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title', 'fw-bold', 'mb-2');
        cardTitle.textContent = progetto.titolo;

        const cardCategoria = document.createElement('p');
        cardCategoria.classList.add('card-text', 'text-muted', 'mb-1');
        cardCategoria.textContent = progetto.categoria;

        const cardAnno = document.createElement('p');
        cardAnno.classList.add('card-text', 'text-muted', 'mb-1');
        cardAnno.textContent = progetto.anno;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardCategoria);
        cardBody.appendChild(cardAnno);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        article.appendChild(cardDiv);
        progettiGrid.appendChild(article);
    });
};

form.addEventListener('submit', e => {
    e.preventDefault();
    form.reset();
    notifica.classList.remove('d-none');
    setTimeout(() => {
        notifica.classList.add('d-none');
    }, 3000);
});

document.getElementById('myModal').addEventListener('hidden.bs.modal', () => {
    notifica.classList.add('d-none');
});

renderServizi();
renderProgetti();