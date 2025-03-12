"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        console.log(id, password);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: id,
            password: password
        });
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    }

 
  return (
    <div>
      <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;