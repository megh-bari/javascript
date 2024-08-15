const requestURL = "https://api.github.com/users/megh-bari";
const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const userData = JSON.parse(xhr.responseText);
    const avatarImg = document.querySelector(".avatar img");
    const followersCount = document.getElementById("followerCount");
    const getData = document.getElementById('getData');
    getData.innerHTML = "Your Data"

    avatarImg.src = userData.avatar_url;
    avatarImg.alt = userData.login;


    followersCount.textContent = `My followers: ${userData.followers}`;

    document.querySelector(".avatar").style.display = "flex";
    document.querySelector(".followers").style.display = "block";
    
  }
};

document.getElementById('getData').addEventListener('click', function () {
    xhr.send();
});
