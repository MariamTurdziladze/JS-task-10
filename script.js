fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    const list = document.createElement("ul");
    data.forEach(info => {
        const listItem = document.createElement("li");
        listItem.textContent = `${info.title}`
        list.appendChild(listItem);
    });

     document.body.appendChild(list);
  }) 
  .catch(error => console.log(error));



  fetch("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        title: 'New Post',
        body: 'This is a a new post object in the request body with title, body, and userId properties',
        userId:2541785
    })
  })

  .then(response => {
    if (response.ok) {
        console.log("Post created successfully!");
        return response.json();
    } else {
        throw new error ("Post creation failed")
    }
    
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))


  const postId = 101;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
    method: 'DELETE' 
  })
    .then(response => {
        if (response.ok) {
            console.log("Post deleted successfully!");
            return response.json();
        } else {
            throw new error ("failed to delete the post")
        }
        
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))



  fetch("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        title: 'New Post 2',
        body: 'This is a a new post for Handle and log the several HTTP status codes',
        userId:11111
    })
  })

  .then(response => {
    switch (response.status) {
        case 200:
            console.log("200 OK: Successful request");
            break; // ამის გარეშე შემდეგ ქეისზე გადავა, იმის მიუხედავად, დაკმაყოფილებულია თუ არა პირობები
        case 201:
            console.log("201 Created: Successfully created resource.");
            break;
        case 404:
            console.log("404 Not Found: If the post ID for deletion is not found.");
            break;
        case 500:
            console.log("500 Internal Server Error: If there’s a server error.");
            break;    
        }

        return response.json();
    })

  .then(data => console.log(data))
  .catch(error => console.log(error))
