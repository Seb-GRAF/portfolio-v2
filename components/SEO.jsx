import React from 'react'
import Head from 'next/head'

const DOMAIN = 'https://seb-graf.com'

const SEO = ({
  title = 'Sébastien Graf',
  description = "Sebastien is a frontend developer who likes building stuff on the web. With his passion for tech, he's always looking to learn new technologies.",
  pageName = 'Frontend Developer',
  canonical = DOMAIN,
  ogType = 'website',
}) => {
  return (
    <Head>
      <title key='title'>{`${pageName} | ${title}`}</title>
      <meta name='description' content={description} />
      <meta key='og_type' property='og:type' content={ogType} />
      <meta key='og_title' property='og:title' content={title} />
      <meta
        key='og_description'
        property='og:description'
        content={description}
      />
      <meta key='og_locale' property='og:locale' content='en_IE' />
      <meta key='og_site_name' property='og:site_name' content={pageName} />
      <meta key='og_url' property='og:url' content={canonical ?? DOMAIN} />
      <meta key='og_site_name' property='og:site_name' content={pageName} />

      <meta name='robots' content='index,follow' />

      <meta
        key='twitter:card'
        name='twitter:card'
        content='summary_large_image'
      />
      <meta key='twitter:title' property='twitter:title' content={title} />
      <meta
        key='twitter:description'
        property='twitter:description'
        content={description}
      />

      <link rel='canonical' href={canonical ?? DOMAIN} />

      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
  )
}

export default SEO
