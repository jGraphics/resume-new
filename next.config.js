module.exports = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'loremflickr.com',
          port: '',
          pathname: '/g/600/600/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.tailwind-kit.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'example.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }