const config = {
    plugins: {
      "@tailwindcss/postcss": {},
    },
    transpilePackages: ["@repo/ui"],
    experimental: { externalDir: true },
  
  };
  
  export default config;