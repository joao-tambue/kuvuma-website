import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <section id="center">
      <h1>About</h1>
      <p>
        Rota criada em <code>src/routes/about.tsx</code> — o arquivo é dividido em
        chunk automaticamente pelo plugin.
      </p>
      <p>
        <Link to="/">Voltar para a home</Link>
      </p>
    </section>
  )
}