import { supabase } from "@/app/lib/supabaseClient";

export const getUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
  
    if (error) {
      console.error('Get user error:', error);
    } else {
      console.log('User:', user);
    }
  };
  