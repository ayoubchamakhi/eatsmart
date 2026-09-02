import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, Leaf, ShieldAlert } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { ScoreBadge } from './ScoreBadge';

interface ProductListItemProps {
  product: Product;
  onPress: () => void;
  isActive?: boolean;
  isArabic?: boolean;
}

export function ProductListItem({ product, onPress, isActive, isArabic }: ProductListItemProps) {
  return (
    <TouchableOpacity
      style={[styles.card, isActive && styles.cardActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <ScoreBadge score={product.score} size="small" showScale={false} />

      <View style={styles.details}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>

        <View style={styles.metaRow}>
          {product.isLocal && (
            <View style={styles.badge}>
              <Leaf size={11} color={colors.sageDeep} />
              <Text style={styles.badgeText}>
                {isArabic ? 'منتوج تونسي' : 'Produit tunisien'}
              </Text>
            </View>
          )}

          {product.additives.length > 0 && (
            <View style={[styles.badge, styles.badgeWarning]}>
              <ShieldAlert size={11} color={colors.scoreBad} />
              <Text style={[styles.badgeText, styles.badgeWarningText]}>
                {product.additives.length}{' '}
                {isArabic ? 'مواد مضافة' : 'additifs'}
              </Text>
            </View>
          )}
        </View>
      </View>

      <ChevronRight size={18} color={colors.inkFaint} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.06)',
    gap: 12,
  },
  cardActive: {
    borderColor: colors.sageDeep,
    borderWidth: 1.5,
  },
  details: {
    flex: 1,
  },
  brand: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.inkFaint,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.inkDark,
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.sageMist,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: radii.pill,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  badgeWarning: {
    backgroundColor: '#FDECE7',
  },
  badgeWarningText: {
    color: colors.scoreBad,
  },
});
