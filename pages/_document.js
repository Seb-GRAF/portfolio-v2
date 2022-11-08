import { Html, Head, Main, NextScript } from 'next/document';
import { SEO } from '../components';

function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Arvo&family=Press+Start+2P&display=swap&Space+Grotesk&display=swap'
          rel='stylesheet'
        />
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Arvo&family=Space+Grotesk&display=swap'
          rel='stylesheet'
        /> */}
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <SEO />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
