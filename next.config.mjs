/** @type {import('next').NextConfig} */
const nextConfig = {
    logging:{
        fetches:{
            fullUrl:true
        }
    },devIndicators: {
        buildActivityPosition: 'bottom-right',
      },
};

export default nextConfig;
