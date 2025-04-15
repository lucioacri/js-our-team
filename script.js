const membersCards = document.getElementById("members-cards");
const formButton = document.getElementById("form-button");
const newName = document.getElementById("new-name");
const newRole = document.getElementById("new-role");
const newEmail = document.getElementById("new-email");
const newImage = document.getElementById("new-image");
const newMemberForm = document.getElementById("new-member-form");

// FUNCTIONS

const generateHTMLcard = (name, role, email, img) => {
  return `
    <div class="col-4 my-col">
      <div class="my-card d-flex bg-black text-white m-2">
       <div class="card-image">
        <img src="./${img}" alt="${name}">
       </div>
       <div class="card-text">
        <h3> ${name} </h3>
        <p>${role}</p>
        <p>${email}</p>
       </div>
      </div>
     </div>`;
};

const createTeam = (teamMembers) => {
  let cardsHTML = ``;
  for (const member of teamMembers) {
    const { name, role, email, img } = member;
    cardsHTML += generateHTMLcard(name, role, email, img);
  }
  membersCards.innerHTML = cardsHTML;
};

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

createTeam(teamMembers);

// let cardsHTML = ``;
// for (const member of teamMembers) {
//   const { name, role, email, img } = member;
//   cardsHTML += generateHTMLcard(name, role, email, img);
// }
// membersCards.innerHTML = cardsHTML;

newMemberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newName.value;

  const role = newRole.value;

  const email = newEmail.value;

  const img = newImage.value;

  const newMember = { name, role, email, img };
  teamMembers.push(newMember);
  membersCards.innerHTML += generateHTMLcard(name, role, email, img);
});
