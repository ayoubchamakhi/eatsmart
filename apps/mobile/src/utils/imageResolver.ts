import { ImageSourcePropType } from 'react-native';

const LOCAL_ASSET_MAP: Record<string, any> = {
  '/assets_v2/product_harissa_jar.png': require('../../assets/product_harissa_jar.png'),
  '/assets_v2/product_olive_oil.jpg': require('../../assets/product_olive_oil.jpg'),
  '/assets_v2/product_boga_cidre.jpg': require('../../assets/product_boga_cidre.jpg'),
  '/assets_v2/product_bimo_choco.jpg': require('../../assets/product_bimo_choco.jpg'),
  '/assets_v2/product_delice_yogurt.jpg': require('../../assets/product_delice_yogurt.jpg'),
  '/assets_v2/product_warda_sables.jpg': require('../../assets/product_warda_sables.jpg'),
  '/assets_v2/icon.png': require('../../assets/icon.png'),
  '/assets_v2/landing.png': require('../../assets/landing.png'),
};

export function resolveProductImage(imageUri?: string): ImageSourcePropType {
  if (!imageUri) {
    return require('../../assets/icon.png');
  }

  // 1. Direct match in local bundle
  if (LOCAL_ASSET_MAP[imageUri]) {
    return LOCAL_ASSET_MAP[imageUri];
  }

  // 2. Remote HTTP/HTTPS URL
  if (imageUri.startsWith('http://') || imageUri.startsWith('https://')) {
    return { uri: imageUri };
  }

  // 3. Local file URI from camera
  if (imageUri.startsWith('file://')) {
    return { uri: imageUri };
  }

  // 4. Default fallback
  return require('../../assets/icon.png');
}
