import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import type { Product } from '@eatsmart/domain';
import { getScoreColor } from '@eatsmart/domain';
import { resolveProductImage } from '../utils/imageResolver';

interface ProductListItemProps {
  product: Product;
  onPress: () => void;
  isActive?: boolean;
  isArabic?: boolean;
}

export function ProductListItem({ product, onPress, isActive, isArabic }: ProductListItemProps) {
  const scoreColor = getScoreColor(product.score.tier);
  const scoreValue = Math.round(product.score.value);
  const label = isArabic ? product.score.label.ar : product.score.label.fr;

  return (
    <TouchableOpacity
      style={[styles.row, isActive && styles.rowActive, isArabic && styles.rowRtl]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* 52x52 Product Packshot Thumb */}
      <View style={styles.thumbWrap}>
        <Image
          source={resolveProductImage(product.image)}
          style={styles.thumbnail}
          resizeMode="contain"
        />
      </View>

      {/* Product Details */}
      <View style={[styles.details, isArabic && styles.detailsRtl]}>
        <Text style={[styles.brand, isArabic && styles.textRtl]}>
          {product.brand}
        </Text>
        <Text style={[styles.name, isArabic && styles.textRtl]} numberOfLines={1}>
          {product.name}
        </Text>

        {/* Status Line: Dot + Label */}
        <View style={[styles.statusLine, isArabic && styles.statusLineRtl]}>
          <View style={[styles.statusDot, { backgroundColor: scoreColor }]} />
          <Text style={[styles.statusText, { color: scoreColor }]}>
            {label}
          </Text>
          {product.isLocal && (
            <Text style={styles.localDot}>• 619</Text>
          )}
        </View>
      </View>

      {/* Yuka Score Disc */}
      <View style={[styles.scoreDisc, { backgroundColor: scoreColor }]}>
        <Text style={styles.scoreText}>{scoreValue}</Text>
      </View>

      {/* Chevron */}
      <View style={[styles.chevronWrap, isArabic && styles.chevronRtl]}>
        <ChevronRight size={18} color="#C7C7CC" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  rowRtl: {
    flexDirection: 'row-reverse',
  },
  rowActive: {
    backgroundColor: '#F8F8F9',
  },
  thumbWrap: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    marginRight: 14,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  details: {
    flex: 1,
    minWidth: 0,
  },
  detailsRtl: {
    alignItems: 'flex-end',
    marginRight: 14,
  },
  brand: {
    fontSize: 11,
    fontWeight: '700',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 2,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 3,
    letterSpacing: -0.2,
  },
  statusLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusLineRtl: {
    flexDirection: 'row-reverse',
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  statusText: {
    fontSize: 12.5,
    fontWeight: '600',
  },
  localDot: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#1E824C',
    marginLeft: 3,
  },
  textRtl: {
    textAlign: 'right',
  },
  scoreDisc: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  chevronWrap: {
    marginLeft: 6,
  },
  chevronRtl: {
    marginLeft: 0,
    marginRight: 6,
    transform: [{ scaleX: -1 }],
  },
});
