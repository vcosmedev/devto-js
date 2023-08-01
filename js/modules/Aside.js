


// Función para renderizar el aside con los posts filtrados por los tags
const renderAside = (data, container) => {
  const asideContainer = document.getElementById(container);

  // Limpiamos el aside para evitar duplicados
  asideContainer.innerHTML = '';

  // Creamos una lista para "Discuss"
  const discussList = document.createElement('ul');
  discussList.classList.add('list-group', 'mb-4');

  const discussTitle = document.createElement('li');
  discussTitle.classList.add('list-group-item', 'fw-bold');
  discussTitle.textContent = '#discuss';
  discussList.appendChild(discussTitle);

  // Creamos una lista para "Watercooler"
  const watercoolerList = document.createElement('ul');
  watercoolerList.classList.add('list-group', 'mb-4');

  const watercoolerTitle = document.createElement('li');
  watercoolerTitle.classList.add('list-group-item', 'fw-bold');
  watercoolerTitle.textContent = '#watercooler';
  watercoolerList.appendChild(watercoolerTitle);

  // Función para crear un elemento <p> con el texto de comentarios
  const createCommentsElement = (commentsCount) => {
    const commentsElement = document.createElement('p');
    commentsElement.classList.add('mb-0', 'comments-text'); // Agregar la clase "comments-text"
    const commentsText = commentsCount === 1 ? `${commentsCount} Comentario` : `${commentsCount} Comentarios`;
    commentsElement.textContent = commentsText;
    return commentsElement;
  };

  // Filtramos los posts por las categorías "Discuss" y "Watercooler"
  const discussPosts = data.filter(post => post.tags.includes('#discuss')).slice(0, 3);
  const watercoolerPosts = data.filter(post => post.tags.includes('#watercooler')).slice(0, 3);

  // Renderizamos los títulos y comentarios para cada categoría en la lista "Discuss"
  discussPosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const titleElement = document.createElement('h5');
    titleElement.textContent = post.title;

    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsElement = createCommentsElement(commentsCount);

    listItem.appendChild(titleElement);
    listItem.appendChild(commentsElement);

    discussList.appendChild(listItem);

    // Agregar el manejador de eventos para el elemento de la lista
    listItem.addEventListener('click', () => {
      redirectToPostDetail(post.id);
    });
  });

  // Renderizamos los títulos y comentarios para cada categoría en la lista "Watercooler"
  watercoolerPosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const titleElement = document.createElement('h5');
    titleElement.textContent = post.title;

    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsElement = createCommentsElement(commentsCount);

    listItem.appendChild(titleElement);
    listItem.appendChild(commentsElement);

    watercoolerList.appendChild(listItem);

    // Agregar el manejador de eventos para el elemento de la lista
    listItem.addEventListener('click', () => {
      redirectToPostDetail(post.id);
    });
  });

  // Agregamos las listas al aside
  asideContainer.appendChild(discussList);
  asideContainer.appendChild(watercoolerList);
};

// Llamamos a la función para renderizar el aside con los posts filtrados por los tags
//renderAside(data);

// Función para redireccionar a la página de detalle del post con el ID correspondiente
const redirectToPostDetail = (postId) => {
  window.location.href = `views/post.html?id=${postId}`;

};
export { renderAside }