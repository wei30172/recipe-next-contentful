import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Welcome To My</span>
              <span>Kitchen Cookbook</span>
            </h1>
            <h2>Spread The Happiness</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Cook For Love :)</p>
      </footer>
    </div>
  )
}