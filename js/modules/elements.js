const createTags = (strtags) => {
  const tags = strtags.split(', ');
  const container = document.createElement('div');
  container.classList.add('mb-3');

  const printtags = tags.slice(0, 4);

  printtags.forEach((tag) => {
    const a = document.createElement('a');
    a.classList.add('me-2');
    a.innerText = tag;

    container.appendChild(a);
  });

  return container;
};

const createPost = (data, isfirst) => {
  const { id, author, profilePic, date, img, title, tags, comments, readtime } =
    data;

  const divpadre = document.createElement('div');
  divpadre.classList.add('card');
  divpadre.style.cssText = 'width: 100%; border-radius: 5px; cursor:pointer';

  divpadre.addEventListener('click', () =>
    window.open(`./views/post.html?id=${id}`, '_self')
  );

  const imgprincipal = document.createElement('img');
  imgprincipal.src = img;
  imgprincipal.classList.add('card-img-top');

  isfirst && divpadre.appendChild(imgprincipal);

  const divbody = document.createElement('div');
  divbody.classList.add('card-body');

  const cardaux1 = document.createElement('div');
  cardaux1.classList.add('d-flex');

  const cardaux2 = document.createElement('div');
  cardaux2.classList.add('mt-3', 'ps-md-5');

  const cardaux11 = document.createElement('div');
  cardaux11.classList.add('me-3');

  const cardaux12 = document.createElement('div');

  const cardaux11image = document.createElement('img');
  cardaux11image.src = profilePic;
  cardaux11image.classList.add('rounded-circle');
  cardaux11image.style.cssText = 'width: 32px; heigth: 32px';

  const cardaux121 = document.createElement('div');

  const cardaux121h6 = document.createElement('h6');
  cardaux121h6.innerText = `${author} `;

  const cardaux122sp = document.createElement('small');
  cardaux122sp.classList.add('text-body-secondary');
  cardaux122sp.innerText = date;

  const cardaux2h3 = document.createElement('h3');
  cardaux2h3.classList.add('fw-bold');
  cardaux2h3.innerText = title;

  const cardaux22padre = document.createElement('div');
  cardaux22padre.classList.add(
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );

  const cardaux22padre1 = document.createElement('div');
  cardaux22padre1.classList.add('d-flex');

  const cardaux22padre11 = document.createElement('div');
  cardaux22padre11.classList.add('d-flex', 'align-items-center');

  const cardaux22padre12 = document.createElement('div');
  cardaux22padre12.classList.add('d-flex', 'align-items-center');

  //SVG COMENTARIOS
  const cardaux22padre12svg = document.createElement('span');
  cardaux22padre12svg.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon">
  <path
      d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
  </path>
</svg>`;

  const cardaux22padre2 = document.createElement('div');

  const cardaux22padre2smll = document.createElement('small');
  cardaux22padre2smll.classList.add('text-body-secondary');
  cardaux22padre2smll.innerText = `${readtime} min read`;

  //save
  const cardaux22padre2btn = document.createElement('button');
  cardaux22padre2btn.classList.add('btn');
  cardaux22padre2btn.innerHTML = `<svg aria-hidden="true" focusable="false" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
  class="crayons-icon c-btn__icon">
  <path
      d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z">
  </path>
</svg>`;

  //APPENDS

  cardaux22padre2.append(cardaux22padre2smll, cardaux22padre2btn);

  if (comments !== 0) {
    const cardaux22padre12smll = document.createElement('small');
    cardaux22padre12smll.classList.add('ms-1', 'd-flex');
    cardaux22padre12smll.innerText = comments.length;

    const spansmallcomm = document.createElement('span');
    spansmallcomm.classList.add('d-none', 'd-sm-block', 'ms-1');
    spansmallcomm.innerText = 'comments';

    cardaux22padre12smll.appendChild(spansmallcomm);
    cardaux22padre12.append(cardaux22padre12svg, cardaux22padre12smll);
  } else {
    const cardaux22padre12smll = document.createElement('small');
    cardaux22padre12smll.classList.add(
      'ms-1',
      'd-flex',
      'd-none',
      'd-sm-block'
    );
    cardaux22padre12smll.innerText = 'Add comments';

    const cardaux22padre12smll2 = document.createElement('small');
    cardaux22padre12smll2.classList.add('ms-1', 'd-flex', 'd-sm-none');
    cardaux22padre12smll2.innerText = '0';
    cardaux22padre12.append(
      cardaux22padre12svg,
      cardaux22padre12smll,
      cardaux22padre12smll2
    );
  }

  if (reacts !== 0) {
    const cardaux22padre11sp = createReactions(reacts);
    const cardaux22padre11smll = document.createElement('small');
    cardaux22padre11smll.classList.add('d-none', 'd-sm-block', 'ms-3');
    cardaux22padre11smll.innerText = `${reacts.length} reactions`;

    cardaux22padre11.append(cardaux22padre11sp, cardaux22padre11smll);
  }

  cardaux22padre1.append(cardaux22padre11, cardaux22padre12);

  cardaux22padre.append(cardaux22padre1, cardaux22padre2);

  cardaux2.appendChild(cardaux2h3);

  if (tags !== 0) {
    const cardaux21 = createTags(tags);
    cardaux2.appendChild(cardaux21);
  }

  cardaux2.appendChild(cardaux22padre);

  cardaux121.appendChild(cardaux121h6);

  cardaux12.append(cardaux121, cardaux122sp);

  cardaux11.appendChild(cardaux11image);

  cardaux1.append(cardaux11, cardaux12);

  divbody.append(cardaux1, cardaux2);

  divpadre.appendChild(divbody);

  return 'ola';
};

const createUniquePost = (elementid, value, image) => {
  const currentelement = document.getElementById(elementid);
  image ? (currentelement.src = value) : (currentelement.innerText = value);
};

export { createPost, createUniquePost };
