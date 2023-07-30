
/*import { getPosts } from './modules/api.js';


const processData = async () => {
    const dataposts = await getPosts();
  
    const keys = Object.keys(dataposts);
  
    const array = keys.reduce((accum, key) => {
      const currobj = dataposts[key];
  
      currobj['id'] = key;
  
      return [...accum, currobj];
    }, []);
  
    return array;
  };

/*const data = [
    {
      title: '#discuss',
      links: [
        { title: '38 programming languages. Tried them all!', comments: '4 Comentarios' },
        { title: 'Cracking the Work-Life Balance Code: Unconventional Strategies for Remote Developers', comments: '2 Comentarios' },
        // Otros enlaces relacionados con el tema '#discuss' pueden seguir aquí
      ],
    },
    {
      title: '#watercooler',
      links: [
        { title: 'How to Manage Your Time as a Software Developer ⌛️', comments: '4 Comentarios' },
        { title: 'The ideal, professional workplace', comments: 'New' },
        // Otros enlaces relacionados con el tema '#watercooler' pueden seguir aquí
      ],
    },
  ];
  
  // Función para crear una tarjeta
  const createCard = (title, links) => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-4');
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title', 'd-flex', 'justify-content-between');
    cardTitle.textContent = title;
  
    const separator = document.createElement('hr');
    separator.classList.add('my-2');
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(separator);
  
    links.forEach((linkData) => {
      const linkContainer = document.createElement('a');
      linkContainer.classList.add('listing__type', 'my-2', 'text-dark', 'text-decoration-none');
      linkContainer.textContent = linkData.title;
  
      const commentsContainer = document.createElement('div');
      const commentsLink = document.createElement('a');
      commentsLink.classList.add('comment__vinc');
      commentsLink.href = '#';
      commentsLink.textContent = linkData.comments;
  
      commentsContainer.appendChild(commentsLink);
      linkContainer.appendChild(commentsContainer);
      cardBody.appendChild(linkContainer);
    });
  
    card.appendChild(cardBody);
    return card;
  };
  
  // Función para renderizar el aside
  const renderAside = (data) => {
    const asideContainer = document.getElementById('asideContainer');
  
    data.forEach((themeData) => {
      const card = createCard(themeData.title, themeData.links);
      asideContainer.appendChild(card);
    });
  };
  
  // Llamamos a la función para renderizar el aside
  renderAside(data);*/