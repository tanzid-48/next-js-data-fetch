import PostCard from '@/components/PostCard';
import React from 'react';
// there are different way to fetch DATA

 const PostsPage = async() => {

// const getPosts = async() =>{
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();

//  } 

// 2. const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json()


// 3. try catch
 const getPosts = async () => {
    // try{
    //      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // return res.json();
    // }
    // catch(error){
    // throw new Error('Failed to fetch Post')
    // }
//    4.

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if(!res.ok){
    throw new Error ('Failed to catch error');
  }
    return res.json();

 }

  const posts =  await getPosts()
    return (
        <div>

            <h3>posts are: {posts.length}</h3>

            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
              {
                posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
              }
            </div>
        </div>
    );
};

export default PostsPage;