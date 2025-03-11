import { supabase } from "@/app/lib/supabaseClient";

export const getBoardList = async () => {
  const { data, error } = await supabase.from('board').select('*');
  console.log(data);
  if (error) {
    console.error(error);
    return [];
  }
  return data;
};