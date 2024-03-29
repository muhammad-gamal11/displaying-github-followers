// displaying the number of pages per screen

const paginate = (followers) => {
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  //   console.log(numberOfPages);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
