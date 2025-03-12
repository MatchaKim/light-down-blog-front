import { getBoardList } from "@/app/api/boardApi";
import Post from "@/app/components/Post";
export default async function Home() {
  const boardList = await getBoardList();
  return (
    <div style={{padding:'16px',display:'flex',flexDirection:'column',alignItems:'center',gap:'16px',backgroundColor:'yellow', width: '100%'}}>
      <h1>Hello</h1>
      <ul style={{display:'flex',flexDirection:'column',gap:'16px'}}>
        {boardList.map((board) => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
      <Post title="2025년 서울런 멘토단 참여 대학생 모집" writer="김준식" content="훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다." date="2025-03-11" thumbnail="https://miro.medium.com/v2/resize:fit:925/1*r56bUG6ccbLuoB9IIjPMqA.jpeg" />
      <Post title="네트워크 이론과 실제를 공부하다" writer="김준식" content="네트워크 이론과 실제를 공부함에 있어 중요한 요소는 무엇일까? 오늘은 그것에대해 알아보도록 하자" date="2025-03-11" />
      <Post title="네트워크 이론과 실제를 공부하다" writer="김준식" content="네트워크 이론과 실제를 공부함에 있어 중요한 요소는 무엇일까? 오늘은 그것에대해 알아보도록 하자" date="2025-03-11" />
    </div>
  );
}
