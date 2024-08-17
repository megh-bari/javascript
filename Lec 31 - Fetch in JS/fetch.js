fetch("https://api.github.com/users/megh-bari")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error("ERORR!: Something went wrong!", e);
  });
