export default function PostPage({ post }) {
  return <div>{post.id}</div>;
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      post: {
        id: params.id
      }
    }
  };
}
