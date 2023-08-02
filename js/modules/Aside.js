// Función para renderizar el aside con los posts filtrados por los tags
const renderAside = (data, container) => {
  const asideContainer = document.getElementById(container);

  asideContainer.innerHTML = '';

  // obtener tres elementos aleatorios de un arreglo
  const getRandomElements = (array, numElements) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numElements);
  };

  //  posts por las categorías "Discuss" y "Watercooler"
  const discussPosts = data.filter((post) => post.tags.includes('#discuss'));
  const watercoolerPosts = data.filter((post) =>
    post.tags.includes('#watercooler')
  );

  // posts aleatorios para cada categoría
  const randomDiscussPosts = getRandomElements(discussPosts, 3);
  const randomWatercoolerPosts = getRandomElements(watercoolerPosts, 3);

  // lista para "Discuss"
  const discussList = document.createElement('ul');
  discussList.classList.add('list-group', 'mb-4');

  const discussTitle = document.createElement('li');
  discussTitle.classList.add('list-group-item', 'fw-bold');
  discussTitle.textContent = '#discuss';
  discussList.appendChild(discussTitle);

  // lista para "Watercooler"
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
    const commentsText =
      commentsCount === 1
        ? `${commentsCount} Comentario`
        : `${commentsCount} Comentarios`;
    commentsElement.textContent = commentsText;
    return commentsElement;
  };

  // títulos y comentarios para cada categoría en la lista "Discuss"
  randomDiscussPosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.style.cssText = 'cursor: pointer';

    const titleElement = document.createElement('h5');
    titleElement.textContent = post.title;

    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsElement = createCommentsElement(commentsCount);

    listItem.appendChild(titleElement);
    listItem.appendChild(commentsElement);

    discussList.appendChild(listItem);

    //  manejador de eventos para el elemento de la lista
    listItem.addEventListener('click', () => {
      redirectToPostDetail(post.id);
    });
  });

  // ítulos y comentarios para cada categoría en la lista "Watercooler"
  randomWatercoolerPosts.forEach((post) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.style.cssText = 'cursor: pointer';

    const titleElement = document.createElement('h5');
    titleElement.textContent = post.title;

    const commentsCount = post.comments ? post.comments.length : 0;
    const commentsElement = createCommentsElement(commentsCount);

    listItem.appendChild(titleElement);
    listItem.appendChild(commentsElement);

    watercoolerList.appendChild(listItem);

    //  manejador de eventos para el elemento de la lista
    listItem.addEventListener('click', () => {
      redirectToPostDetail(post.id);
    });
  });
  // listas al aside

  asideContainer.appendChild(discussList);
  asideContainer.appendChild(watercoolerList);
};

// función para renderizar el aside con los posts filtrados por los tags
//renderAside(data);

// Función para redireccionar a la página de detalle del post con el ID correspondiente
const redirectToPostDetail = (postId) => {
  window.location.href = `views/post.html?id=${postId}`;
};
export { renderAside };
