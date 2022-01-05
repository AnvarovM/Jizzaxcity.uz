const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: {
    plugins: [
      tailwindcss("./tailwind.config.js"),
      require("autoprefixer")
  ]
  },
}
