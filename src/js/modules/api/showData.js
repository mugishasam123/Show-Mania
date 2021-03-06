/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Popup from '../popup.js';
import getLikes from './getLikes.js';
import postLikes from './postLikes.js';

class DisplayShows {
  constructor() {
    this.allItemsCounter = (numberShows) => {
      let showsReturn = [];
      if (numberShows.length > 0) {
        numberShows.length = 9;
        showsReturn = numberShows;
      }
      return showsReturn.length;
    };
  }

  ShowDetails = async () => {
    const showsCount = document.querySelector('.show-count');

    const BaseUrl = 'https://api.tvmaze.com/shows';
    const containersShows = document.querySelector('.container-movies');
    const shows = await fetch(BaseUrl);
    const result = await shows.json();

    showsCount.textContent = `Tv Shows(${this.allItemsCounter(result)})`;
    const likesDta = await getLikes();
    for (let i = 0; i < 9; i += 1) {
      const ShowList = `
    <img src="${result[i].image.original}" alt="">
   <div class="name-likes">
      <h3>${result[i].name}</h3>
      <div class="likebtn-number">
      <i class="likebtn fa fa-thumbs-up"></i>
      <h3 class="like-part"></h3>
      </div>
      
   </div>
   <button class="commentbtn">Comments</button>`;
      const card = document.createElement('div');
      card.classList.add('show-card');
      card.innerHTML = ShowList;
      containersShows.appendChild(card);
    }
    const pop = new Popup();
    const commentBtns = document.querySelectorAll('.commentbtn');
    commentBtns.forEach((buttonItem, index) => {
      buttonItem.addEventListener('click', () => {
        const ida = index + 1;

        pop.popupDetails(ida);
      });
    });

    const likeSelect = document.querySelectorAll('.like-part');
    const newLikes = likesDta.shift();

    likeSelect.forEach((selectItem, selectIndex) => {
      const rettrivedLikes = likesDta.find((item) => item.item_id === selectIndex + 1);
      if (rettrivedLikes) {
        selectItem.textContent = `${rettrivedLikes.likes} likes`;
      } else {
        selectItem.textContent = '0 likes';
      }
    });

    const updateLikes = async (likt) => {
      const likeUpdate = await getLikes();
      const newRettrivedLikes = likeUpdate.find((item) => item.item_id === likt);

      likeSelect[likt - 1].textContent = `${newRettrivedLikes.likes} likes`;
    };
    const renderLikes = async (likt) => {
      await postLikes(likt);
      updateLikes(likt);
    };

    const likeBtns = document.querySelectorAll('.likebtn');
    likeBtns.forEach((likeBtnItem, likaIndex) => {
      likeBtnItem.addEventListener('click', () => {
        renderLikes(likaIndex + 1);
      });
    });
  };
}
export default DisplayShows;
