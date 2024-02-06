import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from './images'
import type { EmblaOptionsType } from 'embla-carousel'

import './Slider2.css'
import Slide from '../../assets/images/pexels-stas-knop-1462725.jpg'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

useEmblaCarousel.globalOptions = { loop: true }
const Slider2: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <span>{index + 1}</span>
              </div>
              <img
                className='embla__slide__img'
                src={imageByIndex(index)}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider2
