/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // uncomment this function if you want to use rewrites function
  // async rewrites() {
  //   return [
  //     {
  //       source: "(a|A)(b|B)(o|O)(u|U)(t|T)",
  //       destination: "/About",
  //     },
  //   ];
  // },
  pageExtensions: ["page.tsx", "page.ts"],
};
