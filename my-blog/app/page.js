
"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";


export default function Home() {
 const [posts, setPosts] = useState([]);
 useEffect(() => {
  console.log(process.env.NEXT_PUBLIC_API_URL,'API_URL')
fetch('/api/posts')


 .then((res) => res.json())    
 .then(res => setPosts(res))


 }, []);
  return ( <>

   
  <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Here you can read the latest articles.</p>
    </main>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div className="border border-gray-200 p-4">
          <img className="rounded-lg object-cover" src={post.image} alt="Post Image" width={200}
  height={100}
  
  />
 <br />
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.description}</p>
        </div>))}
      
       
    </div>
  </>
    
  );
}
