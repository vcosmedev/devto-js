const BASE_URI = 'https://devtojs27-default-rtdb.firebaseio.com';

const getPosts = async () => {
  const res = await fetch(`${BASE_URI}/posts/.json`);

  return await res.json();
};

const postPosts = async (data) => {
  const res = await fetch(`${BASE_URI}/posts/.json`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return await res.json();
};

const getUniquePost = async (id) => {
  const res = await fetch(`${BASE_URI}/posts/${id}/.json`);

  return await res.json();
};

const getImageAuthor = async () => {
  const res = await fetch(`https://randomuser.me/api/`);

  return await res.json();
};

export { getPosts, postPosts, getUniquePost, getImageAuthor };
