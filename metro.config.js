const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Добавляем поддержку ассетов
config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'gif', 'svg');

module.exports = config; 