import Faq from "@components/Faq";
import LatestReviews from "@components/LatestReviews";
import Cta from "@components/Cta";
import { Hero } from "@components/Hero";
import Content from "./Content";
import NewsletterForm from "@components/NewsletterForm";

const IndexPage = () => {
  return (
    <div className="relative overflow-hidden">
      <main>
		<Hero />
		<LatestReviews />
		<Cta />
		<Content />
		<Faq />
		<NewsletterForm />
      </main>
    </div>
  );
};

export default IndexPage;
