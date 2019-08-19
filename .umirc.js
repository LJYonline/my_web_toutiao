
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'my-app-toutiao',
      dll: false,

      routes: {
        path: '/',
        component: '../layouts/index',
        router: [
          { path: '/dashBoard',component:'./dashBoard/index'},
        ]
      },
    }],
  ],
}
