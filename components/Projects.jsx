import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import Flip from 'gsap/dist/Flip'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, Flip)

const ProjectContainer = ({
  projectName,
  projectTitle,
  children,
  builtWith,
  githubLinkLocked,
  liveLink,
}) => {
  return (
    <article className={`project ${projectName}`}>
      <div className='project__wrapper'>
        <div
          className='project__preview'
          href={`https://seb-graf.github.io/${projectName}`}
          target='_blank'>
          <Image
            src={`/projects-screenshots/${projectName}.png`}
            alt='screenshot of the project'
            layout='fill'
            objectFit='cover'
          />
          <video
            muted
            loop
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src={`/projects-videos/${projectName}.mp4`}
            alt='screen recording of the project showing what it looks like to navigate through the website'></video>
        </div>
        <div className='project__description'>
          <h3>{projectTitle}</h3>
          <div className='project__info'>
            {children}
            <p>
              <i>{builtWith}</i>
            </p>

            <ul className='project__links'>
              <li>
                <a
                  className='project__link'
                  href={
                    liveLink
                      ? liveLink
                      : `https://seb-graf.github.io/${projectName}`
                  }
                  target='_blank'
                  rel='noopener noreferrer'>
                  <div data-link-alt='Live Site' className='link__wrapper'>
                    <span>Live Site</span>
                  </div>
                  {/* <Image
                    src='/arrow.svg'
                    alt=''
                    layout='fill'
                    objectFit='cover'
                  /> */}
                </a>
              </li>
              {!githubLinkLocked && (
                <li>
                  <a
                    className='project__link'
                    href={`https://github.com/seb-graf/${projectName}`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div data-link-alt='GitHub' className='link__wrapper'>
                      <span>GitHub</span>
                    </div>
                    <figure>
                      {/* <Image
                        src='/arrow.svg'
                        alt=''
                        layout='fill'
                        objectFit='cover'
                      /> */}
                    </figure>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='projects__wrapper'>
        <h2 className='projects__title'>
          <span>02.</span>
          <span>Projects</span>
        </h2>
        <ProjectContainer
          projectName='pollution'
          projectTitle='AqiFind'
          builtWith='Built using Next.js, Three.js, Tailwind CSS, GSAP and Vercel'
          githubLinkLocked={true}
          liveLink='https://aqifind.com'>
          <p>
            AqiFind gives you information on air pollution, letting you search
            for a city to learn more on its current air quality and its weather.
          </p>
          <p>
            The app fetches data from Aqicn REST Api, and lays the data out in a
            user-friendly format using graphs. The main page shows a 3d globe
            build with ThreeJS that displays every station with an AQI (air
            quality index) higher than the norm.
          </p>
        </ProjectContainer>
        <ProjectContainer
          projectName='master-student-portfolio'
          projectTitle="Master's Student Portfolio"
          builtWith='Built using React, Firebase, GSAP and Prismic CMS'
          githubLinkLocked={true}
          liveLink='https://yinyin-lim.com'>
          <p>
            I was commissioned to design and develop an interactive portfolio
            for a final-year master's student. The project was a challenge
            because the student needed to be able manage the content themselves.
          </p>
          <p>
            I decided it was best to use a headless CMS so I could still have
            some freedom on the creative part by creating different "slices" so
            that the content can be customized by the owner of the website.
          </p>
        </ProjectContainer>
        <ProjectContainer
          projectName='switzerland'
          projectTitle='Discover Switzerland'
          builtWith='Built using React, React-Router and and GSAP as well as Framer Motion'>
          <p>
            An image-based website showcasing Switzerland. The goal is to give
            the viewer an overview of the country, the culture and some cities,
            guiding the user through a smooth experience.
          </p>
          <p>
            I opted to use GSAP and a smooth scroll library to give a modern and
            interactive feel.
          </p>
        </ProjectContainer>
        <ProjectContainer
          projectName='fashionify'
          projectTitle='Fashionify'
          builtWith='Built using React, React-Router and Framer Motion'>
          <p>
            A fictional clothing shop where the user can browse through a
            catalog of apparel, search for keywords, sort by gender, by type,
            and add items to their cart.
          </p>
        </ProjectContainer>
        {/* <ProjectContainer
          projectName="battleship"
          projectTitle="Battleship"
          projectDescription="A single player battleship game. The user can choose a random fleet or drag and drop the ships onto the board. The AI fires randomly until it hits and then hunts the ship down."
          builtWith="Built with vanilla Javascript and using TDD via Jest"
        /> */}
      </div>
    </section>
  )
}

export default Projects
