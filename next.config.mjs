/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          pathname: '/wikipedia/**',
        },
        {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            pathname: '/originals/**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '/wikipedia/**',
          },
          {
            protocol: 'https',
            hostname: 'png.pngtree.com',
            pathname: '/png-clipart/**',
          },
          {
            protocol: 'https',
            hostname: 'static.vecteezy.com',
            pathname: '/system/resources/**',
          },
      ],
    },
  };
  
  export default nextConfig;
  