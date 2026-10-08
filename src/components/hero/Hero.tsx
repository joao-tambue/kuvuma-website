import { Link } from '@tanstack/react-router'
import arrowDown from '../../assets/hero/arrow-down.svg'
import btnGhost from '../../assets/hero/btn-ghost.svg'
import btnPrimary from '../../assets/hero/btn-primary.svg'
import flagAo from '../../assets/hero/flag-ao.svg'
import glowLeft from '../../assets/hero/glow-left.svg'
import glowRight from '../../assets/hero/glow-right.svg'
import grid from '../../assets/hero/grid.svg'
import lineBottom from '../../assets/hero/line-bottom.svg'
import lineLeft from '../../assets/hero/line-left.svg'
import lineRight from '../../assets/hero/line-right.svg'
import lineTopLeft from '../../assets/hero/line-top-left.svg'
import lineTopRight from '../../assets/hero/line-top-right.svg'
import navFrame from '../../assets/hero/nav-frame.svg'
import './Hero.scss'

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact us', href: '#contact' },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__canvas">
        <div className="hero__decor" aria-hidden="true">
          <img className="hero__grid" src={grid} alt="" />
          <img className="hero__glow hero__glow--right" src={glowRight} alt="" />
          <img className="hero__glow hero__glow--left" src={glowLeft} alt="" />
          <div className="hero__noise" />
          <img className="hero__line hero__line--left" src={lineLeft} alt="" />
          <img className="hero__line hero__line--right" src={lineRight} alt="" />
          <img className="hero__line hero__line--top-left" src={lineTopLeft} alt="" />
          <img className="hero__nav-frame" src={navFrame} alt="" />
          <img className="hero__line hero__line--top-right" src={lineTopRight} alt="" />
          <img className="hero__line hero__line--bottom" src={lineBottom} alt="" />
        </div>

        <header className="hero__header">
          <Link to="/" className="hero__logo">
            Kuvuma Green
          </Link>

          <nav className="hero__nav" aria-label="Principal">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="hero__lang"
              aria-label="Idioma: Português (Angola)"
            >
              <img className="hero__flag" src={flagAo} alt="" width="32" height="24" />
              <img className="hero__chevron" src={arrowDown} alt="" width="24" height="24" />
            </button>
          </nav>

          <a href="#contact" className="hero__cta hero__cta--primary">
            <img src={btnPrimary} alt="" />
            <span>Get in Touch</span>
          </a>
        </header>

        <div className="hero__content">
          <h1 className="hero__title">
            <span>Smart</span>
            <span className="hero__title-accent">Tech for</span>
            <span>Tomorrow</span>
          </h1>
          <p className="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#about" className="hero__cta hero__cta--ghost">
            <img src={btnGhost} alt="" />
            <span>Discover More</span>
          </a>
        </div>
      </div>
    </section>
  )
}
