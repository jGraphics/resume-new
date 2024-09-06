// src/pages/work/[id].js

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const WorkDetail = ({ work }) => {
  const router = useRouter();
  const { id } = router.query;

  // Default to an empty object if the work is not available
  const currentWork = work || {};

  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <Link href="/" className="text-white hover:underline">
          Back to Home
        </Link>
      </header>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">{currentWork.title}</h1>
        <Image
          src={currentWork.image}
          alt={currentWork.title}
          width={1200}
          height={800}
          className="w-full h-auto mb-4"
        />
        <p className="text-lg">{currentWork.description}</p>
      </main>
    </div>
  );
};

// You can use getStaticPaths and getStaticProps to fetch and pass data
export async function getStaticPaths() {
  // Fetch or generate paths here
  // Example:
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // Add more paths as needed
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data for the work item
  // Example data fetch
  const workData = [
    { id: '1', title: 'Project One', image: 'https://example.com/image1.jpg', description: 'Description of project one.' },
    { id: '2', title: 'Project Two', image: 'https://example.com/image2.jpg', description: 'Description of project two.' },
    // Add more work data as needed
  ];
  const work = workData.find((item) => item.id === params.id) || {};

  return {
    props: {
      work,
    },
  };
}

export default WorkDetail;
