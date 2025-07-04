const config = {
  assumptions: {
    iterableIsArray: true
  },
  comments: false,
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
  ]
};

export default config;