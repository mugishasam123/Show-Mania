export default class Popup {
  constructor() {
    this.popSection = document.querySelector(".popup-section");
  }

  popupDetails = async (id) => {
    this.popSection.style.display = "flex";
    const showUrl = `https://api.tvmaze.com/shows/${id}`;
    const request = await fetch(showUrl);
    const data = await request.json();
    const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/comments?item_id=${id}`;
    const commentRequest = await fetch(commentUrl);

    const comments = await commentRequest.json();
   
  const commentCounter = (comenta) => {
     if(comenta.length>0){
      var commentsCount = comenta.length;
     }
     else{
      var commentsCount = 0;
     }
     return commentsCount;
   }

   const commentNumber = commentCounter(comments);
   
   
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
   

    <h3 class="comments-counter">Comments(${commentNumber})</h3>
    <ul class="comments-list">
     
    
    </ul>
    <h3 class="form-title">Add new Comment</h3>
    <form class="myForm">
      <input id="name" type="text" placeholder="Your Name" value="" />
      <textarea name="" id="comment" value=""></textarea>
      <button class="submit-comment" type="submit">Submit</button>
    </form>
    </div>
    `;
    this.popSection.innerHTML = popupData;
    const commentList = document.querySelector(".comments-list");

    if (comments.length > 0) {
      comments.forEach((element) => {
        const commentData = `<p>${element.creation_date}</p>
        <p>${element.username} : ${element.comment}</p>
        `;

        const listNode = document.createElement("li");
        listNode.classList.add("comment-item");
        listNode.innerHTML = commentData;
        commentList.appendChild(listNode);
      });
    } else {
      commentList.innerHTML = "No comments Available";
    }

    const updateComments = async(id) => {
      const newCommentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/comments?item_id=${id}`;
      const newCommentRequest = await fetch(newCommentUrl);
      const newComments = await newCommentRequest.json();
     
    const itemIndex = newComments.length-1;
  
    
       const commentData = `<p>${newComments[itemIndex].creation_date}</p>
          <p>${newComments[itemIndex].username} : ${newComments[itemIndex].comment}</p>
          `;
  
          const listNode = document.createElement("li");
          listNode.classList.add("comment-item");
          listNode.innerHTML = commentData;
          commentList.appendChild(listNode);
          const newtot  = document.querySelector('.comments-counter');
          const newNumber = commentCounter(newComments)
          newtot.textContent = `Comments(${newNumber})`
        
    }

    const postComment = async (formdata) => {
      const postUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/comments`;
      await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "content-type": "application/json",
        },
      });
       updateComments(id);
    };

    const SubmitButtons = document.querySelectorAll(".submit-comment");
    const forma = document.querySelector('.myForm')
    SubmitButtons.forEach((buttonComment) => {
      buttonComment.addEventListener("click", (e) => {
        const user = document.querySelector('#name');
        const userComent = document.querySelector('#comment');
        e.preventDefault();
      const formdata={
          item_id: id,
          username: user.value,
          comment: userComent.value,
      }
      
        postComment(formdata);
        
       
        forma.reset();
      });
    });

    const closeBt = document.querySelector(".closeBtn");
    closeBt.addEventListener("click", () => {
      this.popSection.style.display = "none";
    });
  };
}
