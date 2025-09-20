import { useState } from 'react';

export default function Home() {
  const [like, setLike] = useState(0);

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => setLike(like + 1)}>
        홈페이지 좋아요 : {like}
      </button>
    </div>
  );
}
