import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { img } from 'motion/react-m'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem  
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={imgClassName}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}

                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid