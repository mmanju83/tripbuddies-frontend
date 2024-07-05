import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import { useNavigate } from 'react-router-dom';
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function NotFoundPage() {
  const navigateTo = useNavigate();
  const handleSubmit = (values) => {
    values.preventDefault();
    navigateTo('/home');
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3/>
        <section className="nopage mt-header">
          <div className="container">
            <div className="row y-gap-30 justify-between items-center">
              <div className="col-xl-6 col-lg-6">
                <img src="/img/404.svg" alt="image" />
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="nopage__content pr-30 lg:pr-0">
                  <h1>
                    40<span className="text-accent-1">4</span>
                  </h1>
                  <h2 className="text-30 md:text-24 fw-700">
                    Oops! It looks like you're lost.
                  </h2>
                  <p>
                    The page you're looking for isn't available. Try to search
                    again or use the go to.
                  </p>

                  <button className="button -md -dark-1 bg-accent-1 text-white mt-25" type="submit" onClick={handleSubmit}>
                  Go back to homepage 
                    <i className="icon-arrow-top-right ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterFour />
      </main>
    </>
  );
}