import { Link } from '@tanstack/react-router'
import btnPrimary from '../../assets/overview/btn-primary.svg'
import card from '../../assets/footer/card.svg'
import glow from '../../assets/footer/glow.svg'
import telegram from '../../assets/footer/telegram.svg'
import whatsapp from '../../assets/footer/whatsapp.svg'
import './Footer.scss'

const phone = '+244 941 019 521'
const phoneDigits = phone.replace(/\D/g, '')
const email = 'startupkuvuma@gmail.com'

const infoLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
]

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <img className="site-footer-glow" src={glow} alt="" aria-hidden="true" />

      <div className="site-footer-card">
        <img className="site-footer-card-shape" src={card} alt="" aria-hidden="true" />

        <div className="site-footer-card-body">
          <div className="site-footer-brand">
            <Link to="/" className="site-footer-logo">
              Kuvuma
            </Link>
            <ul className="site-footer-social">
              <li>
                <a
                  href={`https://t.me/+${phoneDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <img src={telegram} alt="" width="40" height="40" />
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${phoneDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <img src={whatsapp} alt="" width="40" height="40" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer-columns">
            <nav className="site-footer-column site-footer-column-info" aria-label="Info">
              <h2 className="site-footer-heading">Info</h2>
              <ul className="site-footer-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-footer-column">
              <h2 className="site-footer-heading">Contact us</h2>
              <ul className="site-footer-list site-footer-list-tight">
                <li>
                  <a href={`tel:+${phoneDigits}`}>{phone}</a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
            </div>

            <div className="site-footer-column">
              <h2 className="site-footer-heading">Find us</h2>
              <address className="site-footer-address">
                <p>Luanda, Angola | Equipa KUVUMA</p>
                <p className="site-footer-hours">Everyday from 10 am to 8 pm</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-cta-row">
        <p className="site-footer-slogan">
          Shall we <span className="site-footer-accent">light up</span> and{' '}
          <span className="site-footer-accent">protect</span> our roads together?
        </p>
        <a href={`mailto:${email}`} className="site-footer-cta">
          <img src={btnPrimary} alt="" />
          <span>Send Us Email</span>
        </a>
      </div>

      <div className="site-footer-bottom">
        <p>© 2023 — Copyright</p>
        <a href="#privacy">Privacy</a>
      </div>
    </footer>
  )
}
