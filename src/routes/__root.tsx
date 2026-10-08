import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { Footer } from '../components/footer/Footer'
import '../styles/index.scss'
import './__root.scss'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>
        Essa rota não existe. <Link to="/">Voltar para a página inicial</Link>
      </p>
    </main>
  )
}
