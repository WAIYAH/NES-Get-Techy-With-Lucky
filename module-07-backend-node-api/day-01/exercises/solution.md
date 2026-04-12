# Module 07, Day 01 — Solution: Explore APIs with Postman/Thunder Client

### 1. GET all posts
- **URL:** `https://jsonplaceholder.typicode.com/posts`
- **Method:** GET
- **Status Code:** 200 OK
- **How many posts returned?** 100

### 2. GET a single post
- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Method:** GET
- **Status Code:** 200 OK
- **Post title:** "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"

### 3. GET a non-existent resource
- **URL:** `https://jsonplaceholder.typicode.com/posts/999`
- **Method:** GET
- **Status Code:** 404 Not Found
- **Why?** The resource with ID 999 doesn't exist. 404 means the server understood the request but couldn't find the resource.

### 4. POST a new resource
- **URL:** `https://jsonplaceholder.typicode.com/posts`
- **Method:** POST
- **Status Code:** 201 Created
- **What ID was returned?** 101 (JSONPlaceholder fakes the creation and returns the next ID)

### 5. Try another API
- **URL:** `https://dog.ceo/api/breeds/image/random`
- **Method:** GET
- **What did it return?** A JSON object with "status": "success" and "message" containing a random dog image URL
