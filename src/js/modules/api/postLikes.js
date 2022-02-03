const postLikes = async(id) => {
  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/likes`;
  const request = await fetch(likesUrl, {
    method: "POST",
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
};
export default postLikes;
