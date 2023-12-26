/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.canva.com',
            port: '',
            pathname: '/design/DAF0WWhOYmM/view',
          },
        ],
      },
}

module.exports = nextConfig
