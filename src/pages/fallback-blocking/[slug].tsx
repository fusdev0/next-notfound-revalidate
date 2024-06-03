import type { GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = (async (context) => {
  const { params } = context
  const slug = params?.slug
  if (slug === 'normal') {
    return {
      props: {},
      // Next.js should revalidate this page at most once every 30 seconds
      revalidate: 30,
    }
  }

  return {
    notFound: true,
    // this page does not exist, but Next.js should still revalidate it at most once every 120 seconds
    revalidate: 120,
  }
}) satisfies GetStaticProps<{}>

export default function Page() {
  return (
    <div>
      Page with <pre>fallback</pre> set to <pre>&apos;blocking&apos;</pre>
    </div>
  )
}
