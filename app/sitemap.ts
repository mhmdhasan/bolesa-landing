import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bolesa.net';
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add more routes here as your site grows
        // Example:
        // {
        //     url: `${baseUrl}/about`,
        //     lastModified: currentDate,
        //     changeFrequency: 'monthly',
        //     priority: 0.8,
        // },
    ];
}
