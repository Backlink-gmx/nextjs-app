import React, {useContext} from 'react'
import { LandingHeroImageBG } from '@components/index/LandingImage'
// import { DocumentCardBasicExample } from '@components/index/CardRow'
import { StatsSection } from "@components/index/StatsSection"
import Blog from '../components/blog/blog'
import Blogs from '../components/blog/blog2'
import  { Carousel } from '@components/Carousel/index'
import  { PricingTable } from '@components/index/PricingTable'
import { carouselSlidesData } from '@components/Carousel/testimonyData'
// next cannot @layouts find this, maybe the module is already defined???
import Layout from '../layouts/Layout'
import { Context } from '@theme/ThemeProvider'
import { dark } from "@theme/dark"
import Head from 'next/head'
const Index: React.FC = (props: any) => {
  const [state, dispatch] = useContext(Context)
  const {theme=dark} = state
  return (
    <Layout title='Corporate Landing Page'>
      <Head>
      <title>Die Möglichkeiten</title>
        <meta property="og:Die Möglichkeiten ein defektes Auto online zu verkaufen " content="Die Möglichkeiten ein defektes Auto online zu verkaufen  Möglichkeiten, ein beschädigtes Auto gegen Bargeld zu verkaufen" key="Möglichkeiten, ein beschädigtes Auto gegen Bargeld zu verkaufen" />
      </Head>
      <LandingHeroImageBG {...props} />
      {/* <DocumentCardBasicExample theme={theme}/> */}
      <br />
      <StatsSection theme={theme} />
      <br />
      <br />
      <br />
      <Blog />
      {/* <Carousel slides={carouselSlidesData} theme={theme}/> */}
      <br />
      <br />
      <br />
      <Blogs />
      {/* <PricingTable /> */}
      <br />
      <br />
    </Layout>
  )
}
export default Index
