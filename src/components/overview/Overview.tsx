import aboutRobot from '../../assets/overview/about-robot.png'
import btnPrimary from '../../assets/overview/btn-primary.svg'
import card from '../../assets/overview/card.svg'
import curve from '../../assets/overview/curve.svg'
import dividerH from '../../assets/overview/divider-h.svg'
import dividerV from '../../assets/overview/divider-v.svg'
import glowLeft from '../../assets/overview/glow-left.svg'
import glowRight from '../../assets/overview/glow-right.svg'
import './Overview.scss'

const features = [
  {
    title: 'Human-Like Dexterity',
    text: 'Continuous mechanical generation with each wheel pass, not isolated pulses.',
  },
  {
    title: 'Autonomous Learning',
    text: 'Operational availability guaranteed through software-based predictive maintenance.',
  },
  {
    title: 'Vision & Sensor Array',
    text: 'Provides up to 12 hours of continuous LED lighting, with surplus power for sensors.',
  },
]

const stats = [
  { value: '~0,7 Wh', label: 'Satisfied customers' },
  { value: '98%', label: 'Target Uptime' },
  { value: '1,8 kWh', label: 'Capacity / Night' },
]

function GetStarted() {
  return (
    <a href="#contact" className="overview-cta">
      <img src={btnPrimary} alt="" />
      <span>Get Started</span>
    </a>
  )
}

export function Overview() {
  return (
    <div className="overview">
      <div className="overview-canvas">
        <div className="overview-decor" aria-hidden="true">
          <img className="overview-glow-left" src={glowLeft} alt="" />
          <img className="overview-glow-right" src={glowRight} alt="" />
          <img className="overview-curve" src={curve} alt="" />
        </div>

        <section id="about" className="overview-about">
          <img
            className="overview-about-image"
            src={aboutRobot}
            alt="Pessoa ao lado de um robô humanoide num laboratório futurista"
            width="380"
            height="406"
          />
          <div className="overview-about-body">
            <p className="overview-outline" aria-hidden="true">
              About Us
            </p>
            <div className="overview-about-content">
              <div className="overview-heading">
                <p className="overview-kicker">Meet Kuvuma</p>
                <h2 className="overview-title overview-title-about">
                  Reinventando a Infraestrutura Rodoviaria
                </h2>
              </div>
              <p className="overview-text">
                KUVUMA is building next-generation infrastructure capable of
                generating renewable energy from everyday traffic. Our core
                innovation transforms vehicle movement into usable electricity,
                creating a new category of sustainable urban energy generation.
                Through smart engineering and clean technology, we aim to help
                cities reduce energy costs, improve sustainability, and unlock
                new renewable energy opportunities.
              </p>
              <GetStarted />
            </div>
          </div>
        </section>

        <section id="product" className="overview-product">
          <p className="overview-outline" aria-hidden="true">
            product
          </p>
          <div className="overview-product-header">
            <div className="overview-heading">
              <p className="overview-kicker">Key Features</p>
              <h2 className="overview-title overview-title-product">
                Quebra-molas Inteligente
              </h2>
            </div>
            <p className="overview-text overview-text-product">
              The smart speed bump is a smart infrastructure device that
              captures kinetic energy from passing vehicles and converts it into
              usable electricity.
            </p>
          </div>

          <div className="overview-card">
            <img className="overview-card-shape" src={card} alt="" />
            <div className="overview-card-body">
              <ul className="overview-features">
                {features.map((feature) => (
                  <li key={feature.title} className="overview-feature">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                    <a href="#how-it-works" className="overview-more">
                      View More
                    </a>
                  </li>
                ))}
              </ul>

              <img className="overview-divider" src={dividerH} alt="" />

              <dl className="overview-stats">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="overview-stat-group">
                    {i > 0 && (
                      <img className="overview-stat-divider" src={dividerV} alt="" />
                    )}
                    <div className="overview-stat">
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="overview-why">
          <div className="overview-heading overview-heading-why">
            <p className="overview-kicker">Why Kuvuma ?</p>
            <h2 className="overview-title overview-title-why">
              Transforming Traffic into{' '}
              <span className="overview-accent">Clean Energy</span>
            </h2>
          </div>
          <div className="overview-why-body">
            <p className="overview-text">
              A smart speed bump combining passive safety and distributed energy
              generation, featuring an architecture designed for asphalt
              durability, high efficiency, and remote management.
            </p>
            <GetStarted />
          </div>
        </section>
      </div>
    </div>
  )
}
