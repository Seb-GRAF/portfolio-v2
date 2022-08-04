import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { StyledLink } from './'

gsap.registerPlugin(ScrollTrigger, SplitText)

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
            src={`/projects-screenshots/${projectName}.jpeg`}
            alt='screenshot of the project'
            layout='fill'
            objectFit='cover'
            loading='eager'
          />
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
                <StyledLink
                  href={
                    liveLink
                      ? liveLink
                      : `https://seb-graf.github.io/${projectName}`
                  }
                  name='Live Site'
                />
              </li>
              {!githubLinkLocked && (
                <li>
                  <StyledLink
                    href={`https://github.com/seb-graf/${projectName}`}
                    name='Github'
                  />
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
          projectName='tailwind-helper'
          projectTitle='Tailwind Helper'
          builtWith='Built using NextJS, Typescript and Tailwind CSS'
          liveLink='https://tailwindhelper.com'>
          <p>
            An open source tool that helps you with tailwind classes. It can
            convert units, helps you choose colors, visualize how a font will
            look and more. Still a work in progress.
          </p>
          <p>
            When switching from working with css to working with tailwind, I
            sometimes forget what the tailwind class for a specific style is, so
            this tool helps me to stay productive when I code with tailwind.
          </p>
        </ProjectContainer>
        <ProjectContainer
          projectName='aqifind'
          projectTitle='AqiFind'
          builtWith='Built using Next.js, Three.js, Tailwind CSS, GSAP and Vercel'
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
            for a final-year master&apos;s student. The project was a challenge
            because the student needed to be able manage the content themselves.
          </p>
          <p>
            I decided it was best to use a headless CMS so I could still have
            some freedom on the creative part by creating different schemas so
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
      </div>
    </section>
  )
}

export default Projects
