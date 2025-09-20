import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const { homeLike, setHomeLike } = useOutletContext();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => setHomeLike(homeLike + 1)}>
        홈페이지 좋아요 : {homeLike}
      </button>
    </div>
  );
}
