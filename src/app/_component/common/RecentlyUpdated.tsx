import Link from 'next/link';

export default function RecentlyUpdated() {
  return (
    <div className="access">
      <section className="access-lastmod">
        <h2 className="panel-heading">Recently Updated</h2>
        <ul className="panel-content">
          <li className="text-truncate">
            <Link href={'url'}>Writing a New Post</Link>
          </li>
          <li className="text-truncate">
            <Link href={'url'}>Writing a New Post</Link>
          </li>
          <li className="text-truncate">
            <Link href={'url'}>Writing a New Post</Link>
          </li>
          <li className="text-truncate">
            <Link href={'url'}>Writing a New Post</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
