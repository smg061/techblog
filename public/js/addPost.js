const displayPostForm = (event) => {
  event.preventDefault();
  document
    .querySelector("#displayPostForm")
    .setAttribute("style", "display: none;");
  document.querySelector("#postForm").setAttribute("style", "display: ;");
};

const hidePostForm = (event) => {
  event.preventDefault();
  document
    .querySelector("#displayPostForm")
    .setAttribute("style", "display: ;");
  document.querySelector("#postForm").setAttribute("style", "display: none ;");
};
const postFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#postTitle").value.trim();
  const body = document.querySelector("#postBody").value.trim();
  if (title && body) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(response);
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#addPost").addEventListener("click", postFormHandler);
document
  .querySelector("#displayPostForm")
  .addEventListener("click", displayPostForm);

document.querySelector("#cancelPost").addEventListener("click", hidePostForm);
