import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, image, url }: SEOProps) => {
    const siteTitle = "NC - Furniture & Kitchen Equipment";
    const defaultImage = "/og-image.jpg"; // We might need to generate this or use a placeholder
    const siteUrl = "https://nc-designs.com"; // Placeholder URL

    return (
        <Helmet>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
