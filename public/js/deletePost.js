let URL = window.location.href.split("/");
let postId = URL[4];
let fetchURL = `/api/posts/${postId}`;
console.log(fetchURL);
const deletePost = async (event) => {
  event.preventDefault();
  let response = await fetch(fetchURL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/dashboard`);
    console.log(response);
  } else {
    console.log(response);
    alert(response.statusText);
  }
};

document.querySelector("#deletePost").addEventListener("click", deletePost);
