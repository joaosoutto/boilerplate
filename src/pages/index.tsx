import Home from 'templates/Home'

// export default function Index(props: type here) {
//   return <Home {...props} />
// }

export default function Index() {
  return <Home />
}

// ATENTION:
// Methods like getStaticProps or getServerSideProps ONLY WOKR ON /pages !!

// getStaticProps: generate static in build time
// getServerSideProps: gerenate via SSR on each request

// export function getServerSideProps/getStaticProps() {
//   make some logic here
//   consume an API
//   context reading

//    then return data:
//    return {
//      props: {
//        data here
//      }
//    }
//  }
