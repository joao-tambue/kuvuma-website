import btnPrimary from '../../assets/overview/btn-primary.svg'
import step1 from '../../assets/how-it-works/step-1.png'
import step2 from '../../assets/how-it-works/step-2.png'
import step3 from '../../assets/how-it-works/step-3.png'
import './HowItWorks.scss'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

const steps = [
  {
    title: 'Passage and Conversion',
    text: lorem,
    image: step1,
    alt: 'Médico ao lado de um robô assistente com ecrã no peito',
  },
  {
    title: 'Generation & Management',
    text: lorem,
    image: step2,
    alt: 'Robô a empurrar um carrinho com caixas',
  },
  {
    title: 'Applications & Software',
    text: lorem,
    image: step3,
    alt: 'Robô a servir chá a uma senhora',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-canvas">
        <div className="how-it-works-heading">
          <p className="how-it-works-kicker">How it work</p>
          <h2 className="how-it-works-title">
            The complete <span className="how-it-works-accent">end-to-end</span> flow
          </h2>
        </div>

        <ol className="how-it-works-steps">
          {steps.map((step, i) => (
            <li key={step.title} className="how-it-works-step">
              <span className="how-it-works-number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="how-it-works-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <a href="#contact" className="how-it-works-cta">
                  <img src={btnPrimary} alt="" />
                  <span>Read More</span>
                </a>
              </div>
              <img
                className="how-it-works-image"
                src={step.image}
                alt={step.alt}
                width="528"
                height="564"
                loading="lazy"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
