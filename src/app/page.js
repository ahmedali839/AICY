
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-background text-text-primary font-sans">
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-heading">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-text-secondary">
          We build amazing things for the web. Explore our projects and see what we can do for you.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/projects" className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-lg">
            View Our Work
          </Link>
          <Link href="/about" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-lg">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
