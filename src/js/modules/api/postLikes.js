const postLikes = () => {
    const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/likes`;
    const request =  await fetch(likesUrl, {
        method: "POST",
        body: JSON.stringify({
            "item_id": 1,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
}