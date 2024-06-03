import Error from 'next/error'

export const getStaticProps = async () => {
  return {
    props: {},
    // Next.js should revalidate this page at most once every 60 seconds
    revalidate: 60,
  }
}

export default function NotFound() {
  return <Error statusCode={404} />
}
