// icon list
// https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
const toolList = [
  [
    ['HTML5', '#CD5434', 'html5'],
    ['CSS3', '#316DAB', 'css3'],
    ['Less', '#22365A', 'less'],
    ['JavaScript', '#ECD84D', 'javascript'],
    ['TypeScript', '#4074BA', 'typescript'],
    ['Node.js', '#7BA468', 'nodedotjs'],
  ],
  [
    ['Vue.js', '#61AF83', 'vuedotjs'],
    ['React', '#80D8F7', 'react'],
    ['Ant Design', '#2B72F5', 'antdesign'],
  ],
  [['Electron', '#2C2E3A', 'electron']],
  [
    ['NPM', '#BB423C', 'npm'],
    ['Webpack', '#98CDEE', 'webpack'],
    ['Vite', '#A656F5', 'vite'],
    ['Prettier', '#F0BD5C', 'prettier'],
    ['ESLint', '#4337B6', 'eslint'],
    ['stylelint', '#3d3d3d', 'stylelint'],
  ],
  [['Git', '#D8593E', 'git']],
  [
    ['macOS', '#c0c0c0', 'apple'],
    ['Linux', '#E9BA41', 'linux'],
  ],
  [
    ['Google Chrome', '#4A80EF', 'googlechrome'],
    ['Visual Studio Code', '#2F76C0', 'visualstudiocode'],
  ],
  // ['GraphQL', '#E10098', 'graphql'],
  // ['D3.js', '#F9A03C', 'd3.js'],
  // ['MongoDB', '#13aa52', 'mongodb'],
];

function generateToolsHtml() {
  let str = toolList
    .map((tools) => {
      return `<div>${tools
        .map((item) => {
          return `<img alt="${item[0]}" src="https://img.shields.io/badge/-${
            item[0]
          }-${item[1].slice(1)}?style=flat-square&logo=${
            item[2]
          }&logoColor=white" />`;
        })
        .join('<span>&nbsp;</span>')}</div>`;
    })
    .join('');

  console.log(str);
}

generateToolsHtml()