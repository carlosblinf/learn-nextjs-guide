import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, I'm Brooks. I'm a software developer from Cuba. You contact me on <Link href="https://twitter.com/carlosblinf">twitter</Link> ]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
