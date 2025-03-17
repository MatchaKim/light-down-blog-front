"use client"
import Post from "@/app/components/Post";
import { getPostList } from "@/app/api/postApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [postList, setPostList] = useState<any[]>([]);
  useEffect(() => {
    const fetchPostList = async () => {
      const response = await getPostList();
      setPostList(response);
    }
    fetchPostList();
  }, []);

  return (
    <div style={{padding:'16px 16px',display:'flex',flexDirection:'column',alignItems:'center',gap:'16px', width: '100%'}}>  
      {postList.map((post: any) => (
      <Post title={post.title} writer={post.writer} content={post.subtitle} date={post.created_at} thumbnail={post.thumbnail_img} />
      ))}
    </div>
  );
}

export default Home;