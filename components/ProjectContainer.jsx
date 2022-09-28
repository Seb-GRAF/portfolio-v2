import { StyledLink } from '.'
import Image from 'next/image'

const ProjectContainer = ({
  title,
  builtWith,
  imageSrc,
  website,
  github,
  children,
}) => {
  return (
    <article className='project'>
      <div className='project__wrapper'>
        <div className='project__preview'>
          <Image
            src={imageSrc}
            alt={`screenshot of my project named ${title}`}
            layout='fill'
            objectFit='cover'
            loading='eager'
          />

          <div className='preview__decoration' />
        </div>

        <div className='project__description'>
          <h3>{title}</h3>
          <div className='project__info'>
            {children}
            <p>
              <i>{builtWith}</i>
            </p>

            <ul className='project__links'>
              {website && (
                <li>
                  <StyledLink href={website} name='Live Site' />
                </li>
              )}
              {github && (
                <li>
                  <StyledLink href={github} name='Github' />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectContainer
