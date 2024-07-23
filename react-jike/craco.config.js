/**
 * 扩展webpack配置
 */

const path = require('path')

module.exports = {
  // webpack配置
  webpack: {
    // 别名
    alias: { '@': path.resolve(__dirname, 'src') }
  }
}
