const getLikes = async() =>{
    const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/likes`;

      const likesRequest = await fetch(likesUrl)
     const likes = await  likesRequest.json();
    return likes;


}
export default getLikes;

