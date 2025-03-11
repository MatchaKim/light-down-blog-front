import { getBoardList } from "@/app/api/boardApi";

export default async function Home() {
  const boardList = await getBoardList();
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {boardList.map((board) => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
    </div>
  );
}
