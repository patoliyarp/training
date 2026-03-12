export default async function posts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return (
    <>
      <h1>hello</h1>
      <div>
        {posts.map((post: { id: string; title: string }) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </>
  );
}
