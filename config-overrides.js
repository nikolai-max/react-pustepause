const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
addLessLoader({
  javascriptEnabled: true,
  modifyVars: { 
      '@primary-color': '#5946DB',
      '@white': '#F0F5FE',
      '@body-background': '#F0F5FE',
      '@component-background': '#F0F5FE',
      '@text-color': '#7D8EDB',
      '@heading-color': '#5946DB',
      '@border-radius-base': '6px'
     },
}),
);