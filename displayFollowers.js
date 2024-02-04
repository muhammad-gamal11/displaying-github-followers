import get from "./get.js";

const container = get(".container");
const display = (followers) => {
  const newFollowers = followers
    .map((follower) => {
      //   console.log(follower);
      const { avatar_url, html_url, login } = follower;
      return `
    <article class="card">
    <img src=${avatar_url} alt=${login}>
    <h4>${login}</h4>
    <a href=${html_url} class = 'btn'>view profile</a>
  </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default display;
