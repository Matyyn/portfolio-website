export default function Head({ currentPage = "Home" }) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Mateen - Web Developer, Designer and Creator."
      : `${currentPage} - Mateen`
  }`;
  const desc =
    "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.";
  return (
    <>
      <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`} />
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="keywords"
        content="Mateen, Mateen, freelancers, react developer, reactjs freelancer, nextjs"
      />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`static/favicon/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`} />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
      ></meta>
    </>
  );
}
