const CommonBanner = ({ bannerBg, heading, subHeading }) => {
  return (
    <div
      className="hero h-[500px] lg:h-[600px]"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-5xl text-center hero-overlay bg-opacity-40 px-1 py-10 lg:py-20 rounded-3xl">
          <h1 className="mb-5 text-xl lg:text-5xl font-bold uppercase">
            {heading}
          </h1>
          <p className="mb-5 px-6 lg:px-12">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
