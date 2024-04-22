import React from "react";
import { Container, PostCard } from "../components";
import appwriteServices from "../appwrite/config";
function AllPost() {
  const [posts, setPost] = React.useState([]);
  React.useEffect(() => {
    // function to fetch post --
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await appwriteServices.getPosts([]);
        if (fetchPosts) setPost(fetchedPosts.documents);
      } catch (e) {
        console.log("error while loading post ", e);
      }
    };
    // Call the fetchPosts function
    fetchPosts();
  }, []); // Empty dependency array to ensure this effect runs only once when the component mounts
  //   appwriteService.getPosts([]).then((posts) => {
  //     if (posts) {
  //         setPosts(posts.documents)
  //     }
  // })
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
