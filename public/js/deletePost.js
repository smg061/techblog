let URL = window.location.href.split("/");
let postId = URL[4];
let fetchURL = `/api/posts/${postId}`;
console.log(fetchURL);
const deletePost = async (req, res) => {
  let response = await fetch(fetchURL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
    document.location.replace(`/dashboard`);
  if (response.ok) {
    console.log(response);
  } else {
    console.log(response);
    alert(response.statusText);
  }
};

document.querySelector("#deletePost").addEventListener("click", deletePost);
