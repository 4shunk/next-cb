export default function StaticPage({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.id}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: [{ id: 1 }, { id: 2 }]
    }
  };
}
