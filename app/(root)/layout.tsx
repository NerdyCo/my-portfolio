import Header from "@/components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default layout;
