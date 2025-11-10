/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"], // UI 패키지 트랜스파일링 허용
  experimental: { externalDir: true }, // 루트 밖 디렉토리 허용
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
