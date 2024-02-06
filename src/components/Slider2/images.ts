import image1 from '@assets/images/pexels-fox-2046807.jpg'
import image2 from '@assets/images/pexels-george-sistonen-7247777.jpg'
import image3 from '@assets/images/pexels-josh-sorenson-1334597.jpg'
import image4 from '@assets/images/pexels-junior-teixeira-2047905.jpg'

export const images: ImageMetadata[] = [image1, image2, image3, image4]

export default function imagesByIndex(index: number): any {
  return images[index % images.length]
}
