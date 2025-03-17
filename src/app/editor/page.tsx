"use client"
import ToastEditor from "@/app/components/ToastEditor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBoardList } from "@/app/api/boardApi";
import { createPost } from "@/app/api/postApi";

const EditorPage = () => {
    const [boardList, setBoardList] = useState<any[]>([]);
    const router = useRouter();
    const [boardId, setBoardId] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');

    const getBoardListAndSet = async () => {
        const response = await getBoardList();
        setBoardList(response);
    }
    const [markdown, setMarkdown] = useState<string>('');

    const handleChange = (markdown: string) => {
        console.log(markdown);
        setMarkdown(markdown);
    }
    const handlePublish = async () => {
        console.log('발행');
        const response = await createPost(
            {
                title: title,
                sub_title: subtitle,
                content: markdown,
                board_id: boardId
            }
        );
        if(response.status === 200){
            alert('발행 성공');
            router.push('/');
        }
        return response;
    }
    const handlePublishAndKeep = async () => {
        const response = await handlePublish();
        if(response.status==200){
            alert('발행 성공');
            alert('발행 후 유지');
        }
    }

    useEffect(() => {
        getBoardListAndSet();
    }, []);
    return (
        <div style={{width:'100%',height:'100%'}}>
            <div>
            <select value={boardId} onChange={(e) => setBoardId(e.target.value)} style={{width:'20%',border:'1px solid #ccc',padding:'0 10px',height:'40px'}}>
                {boardList.map((board:any) => (
                    <option value={board.id}>{board.name}</option>
                ))}
            </select>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="제목" style={{width:'60%',border:'1px solid #ccc',padding:'0 10px',height:"40px"}} />
            <button onClick={handlePublish} style={{width:'10%',border:'1px solid #ccc',height:'40px',backgroundColor:'#296bce',color:'#fff'}}>발행</button>
            <button onClick={handlePublishAndKeep} style={{width:'10%',border:'1px solid #ccc',height:'40px',backgroundColor:'#000',color:'#fff'}}>발행 후 유지</button>
            </div>
            <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} type="text" placeholder="부제" style={{width:'100%',border:'1px solid #ccc',padding:'0 10px',height:"40px"}} />
            <ToastEditor onChange={handleChange} />
        </div>
    );
};

export default EditorPage;