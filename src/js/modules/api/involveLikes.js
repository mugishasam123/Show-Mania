const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YNDJPVJpFp0pmLtqOwhR/likes/'
  );
  return response.json();
};

const addLike = async (movieId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2gQo9KoXKBGuzkF3ySa1/likes/${movieId}', {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

export { getLikes, addLike };