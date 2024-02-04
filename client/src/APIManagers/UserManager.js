
//https://localhost:5001/api/UserProfile/GetWithPosts/1
export const GetPostsByUser = (id) => {
    return fetch(`https://localhost:5001/api/UserProfile/GetUserWithPosts/${id}`)
    .then((res) => res.json())
}