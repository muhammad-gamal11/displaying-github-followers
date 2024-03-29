const displayButtons = (container, pages, index) => {
  //   console.log(container, pages, index);
  let buttons = pages.map((_, pageIndex) => {
    // console.log(pageIndex);
    return `<button data-index="${pageIndex}" class="page-btn ${
      index === pageIndex && "active-btn"
    } ">${pageIndex + 1}</button>`;
  });
  buttons.push('<button class="next-btn">next</button>');
  buttons.unshift('<button class="prev-btn">prev</button>');
  container.innerHTML = buttons.join("");
};

export default displayButtons;
