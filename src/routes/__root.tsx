import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import '../styles/index.scss'
import './__root.scss'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <>
      <nav className="site-nav">
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: 'is-active' }}
        >
          Home
        </Link>
        <Link to="/about" activeProps={{ className: 'is-active' }}>
          About
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

function NotFound() {
  return (
    <section id="center">
      <h1>404</h1>
      <p>
        Essa rota não existe. <Link to="/">Voltar para a home</Link>
      </p>
    </section>
  )
}