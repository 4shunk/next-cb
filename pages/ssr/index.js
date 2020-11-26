export default function SsrPage({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.id}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      posts: [{ id: 1 }, { id: 2 }]
    }
  };
}
