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

const container = document.getElementById("content");

// clear container
container.textContent = "";

// build each post safely
posts.forEach(({ name, username, location, avatar, post, comment, likes }) => {
  const postContainer = document.createElement("div");
  postContainer.className = "post-container";

  // --- Post section ---
  const postSection = document.createElement("section");
  postSection.className = "post";

  const headerDiv = document.createElement("div");

  const profileImg = document.createElement("img");
  profileImg.className = "profile-picture side-padding";
  profileImg.src = avatar;
  profileImg.alt = `${name}'s profile picture`;

  const infoDiv = document.createElement("div");
  const nameP = document.createElement("p");
  nameP.className = "font-bold";
  nameP.textContent = name;

  const locationP = document.createElement("p");
  locationP.textContent = location;

  infoDiv.append(nameP, locationP);
  headerDiv.append(profileImg, infoDiv);

  const postImg = document.createElement("img");
  postImg.src = post;
  postImg.alt = `${name}'s post`;

  postSection.append(headerDiv, postImg);

  // --- Interactions section ---
  const interactions = document.createElement("section");
  interactions.className = "interactions side-padding";

  const iconsDiv = document.createElement("div");
  const icons = [
    { src: "/images/icon-heart.png", alt: "heart icon" },
    { src: "/images/icon-comment.png", alt: "comment icon" },
    { src: "/images/icon-dm.png", alt: "direct message icon" },
  ];
  icons.forEach(({ src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    iconsDiv.appendChild(img);
  });

  const likesP = document.createElement("p");
  likesP.className = "font-bold";
  likesP.textContent = `${likes} likes`;

  const commentP = document.createElement("p");
  const userSpan = document.createElement("span");
  userSpan.className = "font-bold";
  userSpan.textContent = username + " ";
  const commentText = document.createTextNode(comment);
  commentP.append(userSpan, commentText);

  interactions.append(iconsDiv, likesP, commentP);

  postContainer.append(postSection, interactions);
  container.appendChild(postContainer);
});
