export default function PostPage({ post }) {
  return <div>{post.id}</div>;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1"
        }
      },
      {
        params: {
          id: "2"
        }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: {
        id: params.id
      }
    }
  };
}
