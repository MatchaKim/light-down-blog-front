"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { getBoardList } from "../api/boardApi";
import { User } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [boardList, setBoardList] = useState<string[]>([]);

  

  useEffect(() => {
    const fetchBoardList = async () => {
      const boardData = await getBoardList();
      setBoardList(boardData);
    }
    fetchBoardList();
    if (typeof window !== 'undefined') {
      const getUser = async () => {
        setLoading(true);
        try {
          const { data: { user }, error } = await supabase.auth.getUser();
          if (error) throw error;
          setUser(user);
        } catch (err) {
          console.error('Error fetching user:', err.message);
        } finally {
          setLoading(false);
        }
      };

      getUser();

      const { data: subscription } = supabase.auth.onAuthStateChange(
        (event, session) => {
          setUser(session?.user ?? null);
        }
      );

      return () => subscription?.unsubscribe();
    }
  }, []);

  return (
    <header style={{alignItems:'center',height:'52px',padding:'0px 16px',width:'100%',maxWidth:'100vw',display:'flex',justifyContent:'center',backgroundColor:'white'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
        <span>
          <strong style={{fontSize:'20px',fontWeight:'bold',color:'#222222'}}>김준식.DEV</strong>
        </span>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <p>Welcome, {user.email}!</p>
          ) : (
            <p></p>
          )}
        </div>
        <ul style={{display:'flex',gap:'12px',color:'white'}}>
          {boardList.map((board) => (
            <li style={{cursor:'pointer',fontSize:'14px',width:'57px',height:'33px',justifyContent:'center',alignItems:'center',display:'flex',fontWeight:'bold',color:"#707070"}} key={board.id}>{board.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
