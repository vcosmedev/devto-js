import { getUniquePost } from './modules/api.js';
import { createUniquePost } from './modules/elements.js';
import { createTags } from './modules/elements.js';

const urlparams = new URLSearchParams(location.search);

const currentid = urlparams.get('id');

const data = await getUniquePost(currentid);

const renderPost = (data) => {
  const {
    author,
    profilePic,
    date,
    img,
    title,
    tags,
    reacts,
    comments,
    content,
  } = data;

  createUniquePost('author-post', author, false);
  createUniquePost('picauthor-post', profilePic, true);

  //localStorage.getItem('image');
  createUniquePost('picauthor-nav', profilePic, true);

  createUniquePost('date-post', date, false);
  createUniquePost('img-post', img, true);
  createUniquePost('title-post', title, false);
  createUniquePost('content-post', content, false);
  createUniquePost('comments-image-post', profilePic, true);
  createUniquePost('comments-total-post', comments, false);

  document.getElementById('tags-post').append(createTags(tags));
};

renderPost(data);
