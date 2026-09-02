import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ShieldCheck, Sparkles } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS, getScoreColor } from '@eatsmart/domain';
import { SearchBar } from '../components/SearchBar';
import { ProductListItem } from '../components/ProductListItem';
import { ScoreBadge } from '../components/ScoreBadge';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  isArabic: boolean;
}

export function HomeScreen({ onSelectProduct, isArabic }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const featured = SEED_PRODUCTS[0]; // SICAM Harissa

  const filteredProducts = SEED_PRODUCTS.filter((p) => {
    const q = searchQuery.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder={isArabic ? 'ابحث على منتوج تونسي...' : 'Rechercher un produit tunisien...'}
      />

      {/* Trust banner */}
      <View style={styles.trustBanner}>
        <ShieldCheck size={16} color={colors.sageDeep} />
        <Text style={styles.trustBannerText}>
          {isArabic ? '100% مستقل • بدون إعلانات تجارية' : '100% Indépendant • Sans publicité'}
        </Text>
      </View>

      {/* Featured / Hero Product Card */}
      {searchQuery.trim().length === 0 && (
        <>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {isArabic ? 'آخر منتوج تم تحليله' : 'Dernière analyse'}
            </Text>
            <View style={styles.liveTag}>
              <Sparkles size={12} color={colors.sageDeep} />
              <Text style={styles.liveTagText}>{isArabic ? 'مباشر' : 'Récent'}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.heroCard}
            onPress={() => onSelectProduct(featured)}
            activeOpacity={0.85}
          >
            <View style={styles.heroRow}>
              <View style={styles.heroInfo}>
                <Text style={styles.heroBrand}>{featured.brand}</Text>
                <Text style={styles.heroName}>{featured.name}</Text>
                <Text style={styles.heroCategory}>{featured.category}</Text>
              </View>

              <ScoreBadge score={featured.score} size="medium" />
            </View>

            <View style={styles.heroDivider} />

            <View style={styles.heroMetrics}>
              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>{isArabic ? 'التقييم' : 'Qualité'}</Text>
                <Text
                  style={[
                    styles.metricValue,
                    { color: getScoreColor(featured.score.tier) },
                  ]}
                >
                  {isArabic ? featured.score.label.ar : featured.score.label.fr}
                </Text>
              </View>

              <View style={styles.metricDivider} />

              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>{isArabic ? 'المواد المضافة' : 'Additifs'}</Text>
                <Text style={styles.metricValue}>
                  {featured.additives.length === 0
                    ? isArabic
                      ? 'لا توجد'
                      : 'Aucun'
                    : `${featured.additives.length}`}
                </Text>
              </View>

              <View style={styles.metricDivider} />

              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>{isArabic ? 'المصدر' : 'Origine'}</Text>
                <Text style={styles.metricValue} numberOfLines={1}>
                  {featured.origin.split(',')[0]}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}

      {/* Products List */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {searchQuery.trim().length > 0
            ? isArabic
              ? 'نتائج البحث'
              : 'Résultats'
            : isArabic
            ? 'سجل المنتوجات'
            : 'Historique des analyses'}
        </Text>
        <Text style={styles.countText}>
          {filteredProducts.length} {isArabic ? 'منتوج' : 'produits'}
        </Text>
      </View>

      {filteredProducts.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          onPress={() => onSelectProduct(product)}
          isArabic={isArabic}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 32,
  },
  trustBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.sageMist,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
    gap: 6,
    marginTop: 12,
    marginBottom: 16,
  },
  trustBannerText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.sageDeep,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.inkDark,
  },
  liveTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.08)',
  },
  liveTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  countText: {
    fontSize: 12,
    color: colors.inkFaint,
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.lg,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#3D3A34',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.06)',
  },
  heroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroInfo: {
    flex: 1,
    paddingRight: 14,
  },
  heroBrand: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.sageDeep,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  heroName: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.inkDark,
    marginTop: 2,
  },
  heroCategory: {
    fontSize: 12,
    color: colors.inkSoft,
    marginTop: 2,
  },
  heroDivider: {
    height: 1,
    backgroundColor: 'rgba(61, 58, 52, 0.08)',
    marginVertical: 14,
  },
  heroMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    flex: 1,
    alignItems: 'center',
  },
  metricDivider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(61, 58, 52, 0.1)',
  },
  metricLabel: {
    fontSize: 11,
    color: colors.inkFaint,
    marginBottom: 2,
  },
  metricValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkDark,
  },
});
