/** @type {import('next').NextConfig} */
import tracer from 'dd-trace';

tracer.init();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
