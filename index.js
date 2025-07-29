const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const container = document.getElementById("inner");

const display = posts.map(
  ({ name, username, location, avatar, post, comment, likes }) => {
    const render = `<div class="post-container">
      <section class="post">
        <div>
          <img
            class="profile-picture side-padding"
            src="${avatar}"
            alt="${avatar}"
          />
          <div>
            <p class="font-bold">${name}</p>
            <p>${location}</p>
          </div>
        </div>
        <img src="${post}" alt="${post}" />
      </section>
      <section class="interactions side-padding">
        <div>
          <img
            src="/images/icon-heart.png"
            alt="Black icon of a heart representing a like or favorite action."
          />
          <img
            src="/images/icon-comment.png"
            alt="Black icon of a speech bubble representing a comment or message."
          />
          <img
            src="/images/icon-dm.png"
            alt="Black icon of a paper airplane representing a direct message or send feature"
          />
        </div>
        <p class="font-bold">${likes} likes</p>
        <p><span class="font-bold">${username}</span> ${comment}</p>
      </section>
    </div>`;
    return render;
  }
);

container.innerHTML = display;
