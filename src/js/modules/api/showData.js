import Popup from "../popup.js";
import { getLikes, addLike } from './involveLikes.js';

const BaseUrl = 'https://api.tvmaze.com/shows';

const ShowDetails = async () => {
  const containersShows = document.querySelector('.container-movies');
  const shows = await fetch(BaseUrl);
  const result = await shows.json();
  console.log(result)
  for (let i = 0; i < 9 && i < result.length; i++) {
    const ShowList = `
    <img src="${result[i].image.original}" alt="">
   <div class="name-likes">
      <h3>${result[i].name}</h3>
      <i class="fa fa-thumbs-up">likes</i>
   </div>
   <button class="commentBtn">Comments</button>`;
   const card = document.createElement('div');
   card.classList.add('show-card');
   card.innerHTML = ShowList;
   containersShows.appendChild(card);
  }
  const pop = new Popup();
  const commentBtns = document.querySelectorAll('.commentBtn');
  commentBtns.forEach((buttonItem,index) => {
    buttonItem.addEventListener('click' , () => {
      const ida = index+1;
      console.log(ida)
 pop.popupDetails(ida);
    })
  }
  )

  const likes = document.createElement('li');
  likes.classList.add('LikeCounter');
  likes.innerHTML= '0 likes';
  containersShows.appendChild(likes);

  const likesData = await getLikes();
  const showLikes = (likesData, likes) => {
    likesData.forEach((movie) => {
      if ( movie, item_id === movie.id) {
        likes.innerHTML = `${movie.likes} likes `;
      }
    });
  };
  showLikes(likesData, likes);

  fa-thumbs-up.addEventListener('click', async() => {
    await addLike(movie.id);
    const update = await getLikes();
    showLikes(update, likes);
  });
};

export default ShowDetails;
