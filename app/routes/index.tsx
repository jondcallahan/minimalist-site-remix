import type { MetaFunction, LinksFunction } from "remix";
import openPropStyles from "../styles/bundled/open-props-styles.css";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Jon Callahan",
    description:
      "Hey I'm Jon Callahan, a Software Engineer at Intuit in Chicago. Learn more about my background, interests, and career.",
  };
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: openPropStyles },
];

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <main>
      <article>
        <picture>
          <source type="image/avif" srcSet="images/headshot_bw.avif" />
          <source type="image/webp" srcSet="images/headshot_bw.webp" />
          <source type="image/jpeg" srcSet="images/headshot_bw.jpeg" />
          <img
            src="images/headshot_bw.jpeg"
            alt="Jon Callahan's Headshot"
            height="250"
            width="250"
          />
        </picture>
        <h1>Jon Callahan</h1>
        <p className="subheader">Software Engineer in Chicago</p>
        <svg role="presentation" className="icon" viewBox="0 0 24 24">
          <line x1="3" x2="21" y1="24" y2="0" strokeWidth="2" />
          <line x1="21" x2="3" y1="24" y2="0" strokeWidth="2" />
        </svg>
        <p className="bio">
          After an early interest in investing, I received degrees in Finance
          and Entrepreneurship from Indiana University's Kelley School of
          Business. While there I took a gap year and lived in the wilderness of
          Baja California with <a href="https://nols.edu">NOLS</a>. After
          graduating, I spent 7 years in the San Francisco Bay Area steeped in
          the tech industry, hiking, biking, and running the local trails, and
          tasting my way through the myriad wine regions of Northern California.
          I now work remotely from Chicago for{" "}
          <a href="https://www.intuit.com">Intuit</a> writing software to help
          small business owners{" "}
          <a href="https://www.quickbooks.intuit.com/invoicing/">get paid</a>.
          In my free time, you may find me training for triathlons, barbecuing,
          or trying a new restaurant.
        </p>

        <section className="links">
          <a href="https://www.linkedin.com/in/jondcallahan/">
            <svg className="icon" viewBox="0 0 24 24">
              <title>Jon's LinkedIn profile</title>
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
            </svg>
          </a>
          <a href="https://twitter.com/jondcallahan">
            <svg className="icon" viewBox="0 0 32 32">
              <title>Jon's Twitter profile</title>
              <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
            </svg>
          </a>

          <a href="https://github.com/jondcallahan">
            <svg className="icon" viewBox="0 0 32 32">
              <title>Jon's Github profile</title>
              <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
            </svg>
          </a>

          <a href="mailto:j@joncallahan.com">
            <svg className="icon" viewBox="0 0 24 24">
              <title>Email Jon</title>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
            </svg>
          </a>
        </section>
      </article>
    </main>
  );
}
