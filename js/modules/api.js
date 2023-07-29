/*En resumen, este código proporciona funciones para obtener 
todas las publicaciones, crear nuevas publicaciones y obtener 
una publicación específica desde una base de datos en Firebase.*/


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

export { getPosts, postPosts, getUniquePost };
