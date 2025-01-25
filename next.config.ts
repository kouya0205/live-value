import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        pathname: '/production/uploads/images/**',
      },
    ],
    // domains: ['books.google.com', 'lh3.googleusercontent.com', 'uxdzrlzsdmmidamhidik.supabase.co'],
  },
  /* config options here */
};

export default nextConfig;
