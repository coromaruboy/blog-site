import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PostLink />
        <PostLink />
        <PostLink />
    </Layout>
  )
}

export default Home