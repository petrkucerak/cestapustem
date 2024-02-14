import Meta from "./meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col justify-between max-w-[800px] bg-white dark:bg-black">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
