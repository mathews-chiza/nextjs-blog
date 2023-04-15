import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer with 3 years experience developing business cloud-based solutions for various clients</p>
        <p>
          (This is a simple website - you'll be building a site like this on{'  '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
