const postCommentHandler = async (event) => {

    event.preventDefault();
    const URL = window.location.href.split('/');
    const current_post_id = URL[URL.length-1]
    const body = document.querySelector('#commentBody').value.trim();
    if (current_post_id && body) {
        const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ current_post_id, body }),
        post_id: current_post_id,
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.querySelector("#commentBody").value = "";
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector("#addComment").addEventListener('click', postCommentHandler);