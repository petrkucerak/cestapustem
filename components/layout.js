import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen justify-between">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
