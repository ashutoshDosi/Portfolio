import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '../data'

const Grid = () => {
  return (
    <section className='mt-10' id='about'>
      <BentoGrid>
      {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
        <BentoGridItem 
          id = {id}
          key= {id}
          title = {title}
          description = {description}
          className={className} 
          titleClassName={titleClassName} 
          />
      ))}
      </BentoGrid>
    </section>
  )
}

export default Grid;