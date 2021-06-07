const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');
    } 
    else {
      console.log(response.statusText)
      alert("Something went wrong. Make sure you're logged in if you want to log out");
      document.location.replace('/')
    }
  };
  
document.querySelector('#logout').addEventListener('click', logout);
  