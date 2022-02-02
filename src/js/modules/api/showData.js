import Popup from "../popup.js";

const BaseUrl = 'https://api.tvmaze.com/shows';

const ShowDetails = async () => {
  const containersShows = document.querySelector('.container-movies');
  const shows = await fetch(BaseUrl);
  const result = await shows.json();
 
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
     
 pop.popupDetails(ida);
    })
  }
  )
};

export default ShowDetails;
