import lineBottom from '../../assets/video/line-bottom.svg'
import lineTop from '../../assets/video/line-top.svg'
import play from '../../assets/video/play.svg'
import videoCover from '../../assets/video/video-cover.png'
import './VideoShowcase.scss'

export function VideoShowcase() {
  return (
    <section className="video-showcase" aria-label="Vídeo de apresentação">
      <div className="video-showcase-canvas">
        <img className="video-showcase-line video-showcase-line-top" src={lineTop} alt="" aria-hidden="true" />

        <div className="video-showcase-frame">
          <img
            className="video-showcase-cover"
            src={videoCover}
            alt="Robô humanoide a trabalhar num portátil"
            width="1237"
            height="598"
            loading="lazy"
          />
          {/* No video source in the design yet; wire onClick once there is one. */}
          <button type="button" className="video-showcase-play" aria-label="Reproduzir vídeo">
            <img src={play} alt="" />
          </button>
        </div>

        <img
          className="video-showcase-line video-showcase-line-bottom"
          src={lineBottom}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
