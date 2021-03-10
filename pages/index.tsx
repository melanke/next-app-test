import Link from 'next/link'
import Layout from '../components/Layout'
import PrincipalWithGroup from '../components/PrincipalWithGroup'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <PrincipalWithGroup />
  </Layout>
)

export default IndexPage
