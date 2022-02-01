export default class Popup{
    
constructor(){
    this.popSection = document.querySelector('.popup-section');
}





  popupDetails = async(id) => {
      this.popSection.style.display = 'visible';
    const showUrl = `https://api.tvmaze.com/shows/${id}`;
    const request = await fetch(showUrl)
    const data = await request.json();
    
        const popupData = `
      <div class="popup-window">
      <div class="title-close">
        <h2 class="show-title">${data.name}</h2>
        <i class="closeBtn fa fa-close"></i>
      </div>
   
      <img class="show-img" src="${data.image.original}" alt="" />
      <p class="show-summary">
        ${data.summary}
      </p>
      <div class="language-rating">
        <h3 class="language">Language: ${data.language}</h3>
        <h3 class="rating">Rating: ${data.rating.average}</h3>
      </div>
      <h3 class="premier-date">premiered on ${data.premiered}</h3>
    </div>`
    this.popSection.innerHTML = popupData;
    
      const closeBt = document.querySelector('.closeBtn');
      closeBt.addEventListener('click', () => {
          this.popSection.style.display = 'none';
      })
  
  }
}