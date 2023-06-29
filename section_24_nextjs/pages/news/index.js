//our-domain.com/news

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/1'>Next.js is a great framework</Link></li>
        <li>Something else</li>
      </ul>
    </>
  );
}

export default NewsPage;