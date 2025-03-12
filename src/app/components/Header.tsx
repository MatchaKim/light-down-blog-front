"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Header = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 16px',backgroundColor:'red'}}>
      <nav >
        <span>
          <strong>My Blog</strong>
        </span>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <p>Welcome, {user.email}!</p>
          ) : (
            <p>Please log in.</p>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
