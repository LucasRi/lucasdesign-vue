// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './dist' : '/'
}

const router = createRouter({
  history: createWebHistory('./dist'),
  routes,
});