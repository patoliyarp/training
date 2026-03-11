interface PageProps {
  params: {
    slug: string;
  };
}

export default async function blogDetail({ params }: PageProps) {
  const { slug } = await params;

  return <h1>Blog Post: {slug}</h1>;
}
