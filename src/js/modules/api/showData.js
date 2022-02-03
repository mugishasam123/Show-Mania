import Popup from "../popup.js";
import getLikes from "./getLikes.js";

const BaseUrl = "https://api.tvmaze.com/shows";

const ShowDetails = async () => {
  const containersShows = document.querySelector(".container-movies");
  const shows = await fetch(BaseUrl);
  const result = await shows.json();
  const likesDta = await getLikes();
  console.log(likesDta);

  for (let i = 0; i < 9 && i < result.length; i++) {
    const ShowList = `
    <img src="${result[i].image.original}" alt="">
   <div class="name-likes">
      <h3>${result[i].name}</h3>
      <div class="likeBtn-number">
      
      <h3 class="like-part"></h3>
      </div>
      
   </div>
   <button class="commentBtn">Comments</button>`;
    const card = document.createElement("div");
    card.classList.add("show-card");
    card.innerHTML = ShowList;
    containersShows.appendChild(card);
  }
  const pop = new Popup();
  const commentBtns = document.querySelectorAll(".commentBtn");
  commentBtns.forEach((buttonItem, index) => {
    buttonItem.addEventListener("click", () => {
      const ida = index + 1;

      pop.popupDetails(ida);
    });
  });

const likeSelect = document.querySelectorAll('.like-part');
const newLikes = likesDta.shift();
console.log(likesDta)
likesDta.forEach((likeItem,likeIndex) => {
  likeSelect.forEach((selectItem,selectIndex) => {
    if(likeIndex== selectIndex){
      selectItem.textContent = `${likeItem.likes} likes`
    }
    else{
      selectItem.textContent = `0 likes`
    }
  })
})

};

export default ShowDetails;
