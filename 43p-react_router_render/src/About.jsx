import { useState } from 'react';

export default function About() {
  const [like, setLike] = useState(0);

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => setLike(like + 1)}>
        자기소개 좋아요 : {like}
      </button>
    </div>
  );
}
