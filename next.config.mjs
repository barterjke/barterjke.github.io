/** @type {import('next').NextConfig} */

const repoName = 'portfolio';

const nextConfig = {
    outDre: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
