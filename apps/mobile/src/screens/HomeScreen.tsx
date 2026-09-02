import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { Search, X, ScanBarcode, SearchX } from 'lucide-react-native';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';
import { ProductListItem } from '../components/ProductListItem';
import { getScanHistory, getFavorites } from '../services/storage';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  onScanPress?: () => void;
  isArabic: boolean;
  favoritesOnly?: boolean;
}

export function HomeScreen({
  onSelectProduct,
  onScanPress,
  isArabic,
  favoritesOnly = false,
}: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>(SEED_PRODUCTS);
  const [favorites, setFavorites] = useState<string[]>([]);
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

  const baseList = favoritesOnly
    ? products.filter((p) => favorites.includes(p.id))
    : products;

  const filteredProducts = baseList.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  const isSearching = searchQuery.trim().length > 0;
  const todayProducts = (isSearching || favoritesOnly) ? [] : filteredProducts.slice(0, 3);
  const yesterdayProducts = (isSearching || favoritesOnly) ? [] : filteredProducts.slice(3);

  return (
    <View style={styles.container}>
      {/* Sleek Yuka-style Compact Search Bar (36px high, 10px radius) */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBox, isArabic && styles.searchBoxRtl]}>
          <Search size={16} color="#8E8E93" />
          <TextInput
            style={[styles.searchInput, isArabic && styles.searchInputRtl]}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={isArabic ? 'ابحث على منتوج...' : 'Rechercher un produit...'}
            placeholderTextColor="#8E8E93"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <X size={15} color="#8E8E93" />
            </TouchableOpacity>
          )}
          {onScanPress && (
            <TouchableOpacity onPress={onScanPress} style={styles.scanIconBtn}>
              <ScanBarcode size={17} color="#2FB755" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#2FB755" />
        }
      >
        {isSearching ? (
          // Search Results View
          filteredProducts.length === 0 ? (
            <View style={styles.emptyBox}>
              <SearchX size={42} color="#C7C7CC" />
              <Text style={styles.emptyText}>
                {isArabic
                  ? 'لم يتم العثور على أي منتوج يطابق بحثك'
                  : 'Aucun produit ne correspond à votre recherche'}
              </Text>
            </View>
          ) : (
            filteredProducts.map((p) => (
              <ProductListItem
                key={p.id}
                product={p}
                onPress={() => onSelectProduct(p)}
                isArabic={isArabic}
              />
            ))
          )
        ) : favoritesOnly ? (
          // Favorites View
          filteredProducts.length === 0 ? (
            <View style={styles.emptyBox}>
              <SearchX size={42} color="#C7C7CC" />
              <Text style={styles.emptyText}>
                {isArabic
                  ? 'لا توجد منتوجات في المفضلة بعد. انقر على رمز القلب لإضافة منتوج.'
                  : "Aucun produit favori pour le moment. Cliquez sur l'icône cœur pour en ajouter."}
              </Text>
            </View>
          ) : (
            <>
              <View style={[styles.dateDivider, isArabic && styles.dateDividerRtl]}>
                <Text style={styles.dateText}>
                  {isArabic ? 'قائمة المفضلة' : 'Produits favoris'} ({filteredProducts.length})
                </Text>
              </View>
              {filteredProducts.map((p) => (
                <ProductListItem
                  key={p.id}
                  product={p}
                  onPress={() => onSelectProduct(p)}
                  isArabic={isArabic}
                />
              ))}
            </>
          )
        ) : (
          // Grouped History View: Aujourd'hui & Hier
          <>
            {todayProducts.length > 0 && (
              <>
                <View style={[styles.dateDivider, isArabic && styles.dateDividerRtl]}>
                  <Text style={styles.dateText}>
                    {isArabic ? 'اليوم' : "Aujourd'hui"}
                  </Text>
                </View>
                {todayProducts.map((p) => (
                  <ProductListItem
                    key={p.id}
                    product={p}
                    onPress={() => onSelectProduct(p)}
                    isArabic={isArabic}
                  />
                ))}
              </>
            )}

            {yesterdayProducts.length > 0 && (
              <>
                <View style={[styles.dateDivider, isArabic && styles.dateDividerRtl]}>
                  <Text style={styles.dateText}>
                    {isArabic ? 'أمس' : 'Hier'}
                  </Text>
                </View>
                {yesterdayProducts.map((p) => (
                  <ProductListItem
                    key={p.id}
                    product={p}
                    onPress={() => onSelectProduct(p)}
                    isArabic={isArabic}
                  />
                ))}
              </>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(118, 118, 128, 0.1)',
    borderRadius: 10,
    height: 38,
    paddingHorizontal: 10,
    gap: 8,
  },
  searchBoxRtl: {
    flexDirection: 'row-reverse',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    paddingVertical: 0,
  },
  searchInputRtl: {
    textAlign: 'right',
  },
  scanIconBtn: {
    paddingLeft: 4,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  dateDivider: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.04)',
  },
  dateDividerRtl: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#8E8E93',
  },
  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
  },
});
