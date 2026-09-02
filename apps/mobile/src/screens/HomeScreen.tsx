import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { ShieldCheck, Sparkles, Heart, History, Trash2 } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS, getScoreColor } from '@eatsmart/domain';
import { SearchBar } from '../components/SearchBar';
import { ProductListItem } from '../components/ProductListItem';
import { ScoreBadge } from '../components/ScoreBadge';
import { getScanHistory, clearScanHistory, getFavorites } from '../services/storage';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  isArabic: boolean;
}

export function HomeScreen({ onSelectProduct, isArabic }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>(SEED_PRODUCTS);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'all' | 'favorites'>('all');
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const history = await getScanHistory();
    const favs = await getFavorites();
    setProducts(history.length > 0 ? history : SEED_PRODUCTS);
    setFavorites(favs);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleClearHistory = async () => {
    await clearScanHistory();
    setProducts(SEED_PRODUCTS.slice(0, 3));
  };

  const featured = products[0] || SEED_PRODUCTS[0];

  const displayedProducts = (
    viewMode === 'favorites'
      ? products.filter((p) => favorites.includes(p.id))
      : products
  ).filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.sageDeep} />
      }
    >
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder={isArabic ? 'ابحث على منتوج تونسي...' : 'Rechercher un produit tunisien...'}
      />

      {/* Trust banner & Quick Filter Pills */}
      <View style={styles.topRow}>
        <View style={styles.trustBanner}>
          <ShieldCheck size={15} color={colors.sageDeep} />
          <Text style={styles.trustBannerText}>
            {isArabic ? '100% مستقل' : '100% Indépendant'}
          </Text>
        </View>

        <View style={styles.filterPills}>
          <TouchableOpacity
            style={[styles.filterPill, viewMode === 'all' && styles.filterPillActive]}
            onPress={() => setViewMode('all')}
          >
            <History size={12} color={viewMode === 'all' ? '#FFFFFF' : colors.inkSoft} />
            <Text
              style={[
                styles.filterPillText,
                viewMode === 'all' && styles.filterPillTextActive,
              ]}
            >
              {isArabic ? 'السجل' : 'Tous'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterPill, viewMode === 'favorites' && styles.filterPillActive]}
            onPress={() => setViewMode('favorites')}
          >
            <Heart
              size={12}
              color={viewMode === 'favorites' ? '#FFFFFF' : colors.scoreBad}
              fill={viewMode === 'favorites' ? '#FFFFFF' : colors.scoreBad}
            />
            <Text
              style={[
                styles.filterPillText,
                viewMode === 'favorites' && styles.filterPillTextActive,
              ]}
            >
              {isArabic ? 'المفضلة' : 'Favoris'} ({favorites.length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured / Hero Product Card */}
      {searchQuery.trim().length === 0 && viewMode === 'all' && (
        <>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {isArabic ? 'آخر تحليل' : 'Dernière analyse'}
            </Text>
            <View style={styles.liveTag}>
              <Sparkles size={12} color={colors.sageDeep} />
              <Text style={styles.liveTagText}>{isArabic ? 'مباشر' : 'En rayon'}</Text>
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

      {/* Products List Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {searchQuery.trim().length > 0
            ? isArabic
              ? 'نتائج البحث'
              : 'Résultats'
            : viewMode === 'favorites'
            ? isArabic
              ? 'قائمة المفضلة'
              : 'Produits favoris'
            : isArabic
            ? 'سجل المنتوجات'
            : 'Historique des scans'}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text style={styles.countText}>
            {displayedProducts.length} {isArabic ? 'منتوج' : 'produits'}
          </Text>
          {products.length > 3 && viewMode === 'all' && (
            <TouchableOpacity onPress={handleClearHistory}>
              <Trash2 size={15} color={colors.inkFaint} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {displayedProducts.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>
            {viewMode === 'favorites'
              ? isArabic
                ? 'لا توجد منتوجات في المفضلة بعد.'
                : 'Aucun produit favori pour le moment. Cliquez sur le cœur pour en ajouter.'
              : isArabic
              ? 'لم يتم العثور على أي منتوج مطابِق.'
              : 'Aucun produit correspondant trouvé.'}
          </Text>
        </View>
      ) : (
        displayedProducts.map((product) => (
          <ProductListItem
            key={product.id}
            product={product}
            onPress={() => onSelectProduct(product)}
            isArabic={isArabic}
          />
        ))
      )}
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
    paddingBottom: 36,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  trustBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.sageMist,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.pill,
    gap: 5,
  },
  trustBannerText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.sageDeep,
  },
  filterPills: {
    flexDirection: 'row',
    gap: 6,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radii.pill,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.08)',
  },
  filterPillActive: {
    backgroundColor: colors.sageDeep,
    borderColor: colors.sageDeep,
  },
  filterPillText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.inkSoft,
  },
  filterPillTextActive: {
    color: '#FFFFFF',
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
  emptyBox: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 13,
    color: colors.inkSoft,
    textAlign: 'center',
    lineHeight: 19,
  },
});
