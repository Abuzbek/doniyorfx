/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: 'export',
  // output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
