import React from 'react'
import { ProjectContainer } from './'
import ReactMarkdown from 'react-markdown'

const Projects = ({ projects }) => {
  return (
    <section className='projects' id='projects'>
      <div className='projects__wrapper'>
        <h2 className='projects__title'>
          <span>02.</span>
          <span>Projects</span>
        </h2>
        {projects
          .filter(({ featured }) => featured)
          .map(
            ({
              title,
              description: { markdown },
              techStack,
              projectPicture: { url },
              website,
              github,
            }) => (
              <ProjectContainer
                title={title}
                imageSrc={url}
                builtWith={techStack}
                website={website}
                github={github}
                key={title}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </ProjectContainer>
            )
          )}
      </div>
    </section>
  )
}

export default Projects
