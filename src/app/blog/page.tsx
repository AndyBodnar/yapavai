import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, updates, and project guides from Yavapai Waste Solutions.',
  keywords: [
    'Quad Cities dumpster rental blog',
    'waste disposal tips',
    'dumpster rental advice',
    'Yavapai Waste Solutions',
  ],
};

const posts = [
  {
    title: '2026 Clean Start: The Quad Cities Guide to Post-Holiday Cleanouts',
    slug: '2026-clean-start',
    date: 'January 2026',
    excerpt:
      'A practical guide to clearing holiday clutter, planning a smooth cleanup day, and choosing the right dumpster size for your 2026 reset.',
  },
];

const topics = [
  'Dumpster size guide for home projects',
  'How to prep a driveway for delivery',
  'What can and cannot go in a dumpster',
  'Local cleanup and construction tips',
];

export default function BlogPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Company <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            We are putting together practical guides and local project updates.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Latest Article
            </h2>
            {posts.map((post) => (
              <div key={post.slug}>
                <p className="text-sm text-foreground-subtle mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {post.title}
                </h3>
                <p className="text-foreground-muted mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn btn-secondary">
                  Read the Article
                </Link>
              </div>
            ))}
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Topics We Are Working On
            </h2>
            <ul className="space-y-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-2 text-foreground-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/quote" className="btn btn-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
