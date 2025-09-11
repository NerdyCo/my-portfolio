import Header from "@/components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="flex flex-col min-h-screen px-8 md:px-10 lg:px-12 xl:px-32">
        <Header />

        <div className="flex-grow flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
