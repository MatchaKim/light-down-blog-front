export interface PostProps {
    title: string;
    writer: string;
    content: string;
    date: string;
    thumbnail?: string;
}

const Post = ({ title, writer, content, date, thumbnail }: PostProps) => {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'4px',backgroundColor:'white',minWidth:'350px',width:'100%'}}>
        {thumbnail && <img src={thumbnail} style={{width:'100%',height:'228px',borderRadius:'4px 4px 0px 0px',objectFit:'cover'}} />}
        <div style={{ display: "flex", flexDirection: "column", width: '100%', gap: '8px', padding: '16px' }}>
            {title && <span style={{ color: "#222", fontSize: "18px", fontWeight: "600", lineHeight: "normal" }}>{title}</span>}
            {writer && <span style={{ color: "#707070", fontSize: "14px", fontWeight: "400", lineHeight: "normal" }}>{writer}</span>}
            {content && <span style={{color: "#222", fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>{content}</span>}
            {date && <span style={{color: "#707070", fontSize: "14px", fontWeight: "400", lineHeight: "normal", marginTop:'26px' }}>{date}</span>}
        </div>
        </div>
    );
}

export default Post;
