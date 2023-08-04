/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['apod.nasa.gov', 'openweathermap.org', 'images.unsplash.com'],
    },
    env: {
      WEATHER_KEY: process.env.WEATHER_KEY,
      UNSPLASH_KEY: process.env.UNSPLASH_KEY,
    },
  }
  
module.exports = nextConfig
  