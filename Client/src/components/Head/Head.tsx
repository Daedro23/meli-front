import { Helmet } from 'react-helmet-async';

interface HeadProps {
    title: string; 
}

const Head: React.FC<HeadProps> = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel='icon' href='logo.png' type='image/x-icon' />
            <meta charSet='utf-8' />
            <meta 
                name='description' 
                content='Challenge Técnico Frontend' 
            />
            <meta name='keywords' content='Mercado Libre, React, Front-end, JavaScript' />
            <meta name='author' content='Danny Rodríguez' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='theme-color' content='#ffe600' />

            
            <meta property='og:title' content={title} />
            <meta property='og:locale' content='es_AR' />
            <meta property='og:url' content='https://www.mercadolibre.com.ar/' />
            <meta property='og:type' content='website' />


            {/* TAGS DE TWITTER */}
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:url' content='https://x.com/mercadolibre' />
            <meta name='twitter:site' content='@mercadolibre' />
            <meta
                name='twitter:description'
                content='Challenge Técnico Frontend'
            />
        </Helmet>
    );
};

export default Head;