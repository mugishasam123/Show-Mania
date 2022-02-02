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
      <i class='counter fa fa-thumbs-up'> 0likes</i>
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
  const likesData = await getLikes();
  const counter = document.querySelector('.counter');
  const fa = document.querySelector('fa-thumbs-up');

  const showLikes = (likesData, counter) => {
    likesData.forEach((movie) => {
      if( movie.item_id === counter.id) {
        counter.innerHTML = `${movie.likes} likes`;
      }
    });
  };
  showLikes(likesData, counter);

  fa.addEventListener('click', async() => {
    await addLike(counter.id);
    const update = await getLikes();
    showLikes(update,fa);
  });
};

export default ShowDetails;
