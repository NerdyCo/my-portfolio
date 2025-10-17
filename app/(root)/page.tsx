const MainPage = () => {
  return (
    <>
      <main className="flex flex-1 flex-col items-center mt-12 md:mt-14 xl:mt-28 gap-6">
        <h1 className="text-left text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight ">
          Hi, I&apos;m Teguh. <br /> A Developer & Web Designer.
        </h1>
        <p className="text-sm md:text-base xl:text-xl leading-relaxed">
          I build custom websites that blend sleek design with robust
          functionality. Using Laravel, Next.js, Figma, and Spring Boot, I
          deliver scalable digital experiences tailored to each client&apos;s
          vision.
        </p>
      </main>

      <footer>
        <p className="text-xs text-center mb-8">
          Built with Next.js, designed in Figma, driven by creativity.
        </p>
      </footer>
    </>
  );
};

export default MainPage;
