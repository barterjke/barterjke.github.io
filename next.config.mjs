/** @type {import('next').NextConfig} */

const repoName = 'portfolio';

const nextConfig = {
    output: 'export',
    distDir: 'docs',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
