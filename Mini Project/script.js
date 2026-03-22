const users = [
  {
    name: "Radha Madhav",
    pic: "https://images.unsplash.com/photo-1621355310264-03958a95f6d1?w=500",
    bio: "Radha Madhav jaisa koi nhi ha"
  },
  {
    name: "Ragistan",
    pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500",
    bio: "Prem aur leela ka roop"
  },
  {
    name: "Piraynka",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500",
    bio: "It is miss woman"
  },
  {
    name: "BUenenr",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    bio: "Sky is blue"
  },
  {
    name: "Gooba dei",
    pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500",
    bio: "lorem is extension vs code"
  }
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function showUsers(arr) {
  cardsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  if (arr.length === 0) {
    cardsContainer.innerHTML = "<p>No users found</p>";
    return;
  }

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    const blur = document.createElement("div");
    blur.style.backgroundImage = `url(${user.pic})`;
    blur.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    content.innerHTML = `
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
    `;

    card.append(img, blur, content);
    fragment.appendChild(card);
  });

  cardsContainer.appendChild(fragment);
}

// Initial render
showUsers(users);

// Search
inp.addEventListener("input", function () {
  const value = inp.value.trim().toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().startsWith(value)
  );

  showUsers(filtered);
});