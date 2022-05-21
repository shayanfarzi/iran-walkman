import Link from "next/link";
import Layout from "../components/Layout";
import EmblaCarousel from "../components/EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const IndexPage = () => (
  <Layout title='ایران واکمن | پخش موسیقی آنلاین'>
    <EmblaCarousel slides={slides} />
  </Layout>
);

export default IndexPage;
