const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addComponents,theme  }) {
  addComponents({
    ".scrollbar": {
      "&::-webkit-scrollbar": {
        width: "5px",
        height: "5px"
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: theme("borderRadius.sm"),
      },
      "&::-webkit-scrollbar-thumb": {
        // "@apply dark:bg-slate-800 dark:hover:bg-slate-700 bg-gray-300 hover:bg-slate-400;
        borderRadius: "0.15rem",
        backgroundColor: "rgba(105,105,105,0.3)",
      },
    },
  })
})
