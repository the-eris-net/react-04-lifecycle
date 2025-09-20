import { useOutletContext } from 'react-router-dom';

export default function About() {
  const { aboutLike, setAboutLike } = useOutletContext();

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => setAboutLike(aboutLike + 1)}>
        자기소개 좋아요 : {aboutLike}
      </button>
    </div>
  );
}
