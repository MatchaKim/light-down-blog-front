import { supabase } from "../lib/supabaseClient";

export const getPostList = async () => {
  const { data, error } = await supabase.from('post').select('*');
  if (error) {
    console.error(error);
    return [];
  }
  return data;
};

export const getPostListByBoardId = async (boardId: string, page: number,pageSize: number) => {
  const { data, error } = await supabase.from('post').select('*').eq('board_id', boardId).order('created_at', { ascending: false }).range((page - 1) * pageSize, page * pageSize - 1);
  if (error) {
    console.error(error);
    return [];
  }
  return data;
};

export const createPost = async (post: any) => {
  const { data, error } = await supabase.from('post').insert(post);
  if (error) {
    console.error(error);
    return false;
  }
  return true;
};