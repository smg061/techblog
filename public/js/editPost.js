let URL = window.location.href.split("/");
let postId = URL[4];

const updatePostHandler = async (event) => {
   let title = document.querySelector("#postTitle").value.trim();
   let body = document.querySelector("#postBody").value.trim();
   if (title && body) {
      let response = await fetch(`/api/posts/${postId}/edit`, {
         method: "PUT",
         body: JSON.stringify({ title, body }),
         headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
         document.location.replace(`/post/${postId}`);
         console.log(response);
      } else {
         console.log(response);
         alert(response.statusText);
      }
   }
};

document.querySelector("#editPost").addEventListener("click", updatePostHandler);
