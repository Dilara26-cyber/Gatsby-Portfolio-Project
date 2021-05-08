/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Copy site of Dasher and Crank",
    description: "A project for my front-end portfolio.",
    menu: [
      {
        name: "UBE MACAPUNO",
        description: "Coconut Ice Cream with Filipino Purple Yams",
        vegan: true,
      },
      {
        name: "SALTY BEACH ",
        description: "Coconut Ice Cream, Sea Salt & Graham Cracker",
        vegan: true,
      },
      {
        name: "COCO MOCHA CHIP",
        description: "Coconut Ice Cream with Per'La Coffee and Dark Chocolate",
        vegan: true,
      },
      {
        name: "RASPBERRY COCONUT",
        description: "Coconut Rasberry Ice Cream",
        vegan: true,
      },
      {
        name: "CHOCOLATE BOMB",
        description:
          "Our Chocolate Coconut Base with Chocolate Chunks & Roasted Cocoa Nibs",
        vegan: true,
      },
      {
        name: "YOKO MATCHA",
        description: "Yoko Matcha in our Vegan Coconut Base",
        vegan: true,
      },
      {
        name: "PIÑA COLADA",
        description: "Pineapple, Coconut, & Rum Sorbet",
        vegan: true,
      },
      {
        name: "CARAMEL CONE",
        description:
          "Homemade Caramel Ice Cream with Brown Butter Waffle Cone Chunks",
        vegan: false,
      },
      {
        name: "CHAI TEA LATTE",
        description: "Overnight Chai Tea Infused Ice Cream",
        vegan: false,
      },
      {
        name: "HAZELNUT CRUNCH",
        description: "Hazelnut Ice Cream with Fudge Ripple and Toffee Crunch",
        vegan: false,
      },
      {
        name: "BROWNIE COOKIE CRUNCH",
        description:
          "Vanilla Ice Cream with Homemade Chocolate Chip Cookies, Brownies, Pretzels, and Mini Marshmallows",
        vegan: false,
      },
      {
        name: "ORANGE SPECULOOS",
        description: "Orange Ice Cream with Speculoos Cookie Pieces",
        vegan: false,
      },
      {
        name: "BANANA CHIP",
        description: "Banana Ice Cream with Dark Chocolate Chips",
        vegan: false,
      },
      {
        name: "BOYSENBERRY DREAM",
        description:
          "Boysenberry, a Hybrid of Blueberry and Raspberry, Ice Cream with a Marshmallow Fluff Swirl",
        vegan: false,
      },
      {
        name: "CAFÉ CON HAZELNUT",
        description: "Coffee and Hazelnut Ice Cream with Cocoa Nibs",
        vegan: false,
      },
      {
        name: "CHOCOLATE CRANK",
        description:
          "Dark Chocolate Ice Cream with a Homemade Fudge Ripple and English Toffee",
        vegan: false,
      },
      {
        name: "TAHITIAN VANILLA BEAN",
        description: "100% Tahitian Vanilla Bean Custard",
        vegan: false,
      },
      {
        name: "STRAWBERRY CREAM CHEESE WITH GUAVA JELLY",
        description: "Strawberry Ice Cream with Cream Cheese and Guava Jelly",
        vegan: false,
      },
      {
        name: "LEMON SPECULOOS",
        description: "Lemon Ice Cream with Belgian Speculoos Cookies",
        vegan: false,
      },
      {
        name: "SMOKED ALMOND",
        description: "Smoked Almond Ice Cream with Dulce De Leche Swirl",
        vegan: false,
      },
      {
        name: "PEANUT BUTTER CRUNCH",
        description:
          "Peanut Butter Ice Cream with Peanut Butter Swirl and Homemade Peanut Brittle",
        vegan: false,
      },
      {
        name: "BLACK MINT",
        description:
          "Peppermint and Activated Charcoal Ice Cream with Dark Chocolate Chunks",
        vegan: false,
      },
      {
        name: "LONDON FOG",
        description: "JoJo's Earl Grey Tea with Dark Chocolate Chunks",
        vegan: false,
      },
      {
        name: "BUTTER PECAN",
        description: "Brown Butter Ice Cream with Toasted Pecan Pieces",
        vegan: false,
      },
      {
        name: "RUBY ROSE",
        description:
          "Rosewater ice cream with shortbread cookies, white chocolate pearls, and ruby red chocolate pearls",
        vegan: false,
      },
      {
        name: "DEATH BY CHOCOLATE",
        description:
          "Chocolate Ice Cream with our Death By Chocolate Mix and Fudge Swirl",
        vegan: false,
      },
      {
        name: "LAVENDER",
        description: "Lavender Flower Infused Ice Cream",
        vegan: false,
      },
      {
        name: "FIVE SPICES",
        description:
          "A Combination of Fennel, Cinnamon, Fennel, Nutmeg, & Allspice",
        vegan: false,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-leaflet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jrqziz5vu3yy`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito",
              variants: ["300", "400", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
