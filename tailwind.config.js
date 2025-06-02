module.exports = {
  content: [
    './src/**/*.{html,js}',
    './Project/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-50': 'rgb(240 243 255)',
        'primary-100': 'rgb(200 211 247)',
        'primary-300': 'rgb(117 144 235)',
        'primary-500': '#2852e4',
        'text-primary-50': 'rgb(240 243 255)',
        'text-primary-700': 'rgb(16 44 143)',
        'text-secondary-600': 'rgb(0 155 157)',
      },

      screens: {
        'desktop': '1024px',
        'lg': '1316px',
      },

      maxWidth: {
        'maxSpace': '1156px',
      },
    },
  },
  plugins: [],
}
