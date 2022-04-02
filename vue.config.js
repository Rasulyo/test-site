// module.exports = {
//   lintOnSave: false
// }

// module.exports = {
//   css: {
//       loaderOptions:{
//           sass:{
//             prependData: ' @import  "@/assets/style/styles.scss"; '
//           }
//       }
//   }
// }
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: ' @import "@/assets/style/styles.scss"; ' 
      }
    }
  },
  lintOnSave: false
};