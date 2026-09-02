import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Sparkles, ArrowRight } from 'lucide-react-native';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';
import { ProductListItem } from '../components/ProductListItem';
import { resolveProductImage } from '../utils/imageResolver';

interface AlternativesScreenProps {
  onSelectProduct: (product: Product) => void;
  isArabic: boolean;
}

const CATEGORIES = [
  { id: 'all', labelFr: 'Tous', labelAr: 'الكل' },
  { id: 'oils', labelFr: "Huiles d'olive", labelAr: 'زيت زيتون' },
  { id: 'biscuits', labelFr: 'Biscuits sains', labelAr: 'بسكويت صحي' },
  { id: 'dairy', labelFr: 'Laitiers', labelAr: 'ألبان' },
  { id: 'grocery', labelFr: 'Épicerie', labelAr: 'مواد غذائية' },
];

export function AlternativesScreen({ onSelectProduct, isArabic }: AlternativesScreenProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter top healthy products (score >= 70)
  const healthyProducts = SEED_PRODUCTS.filter((p) => p.score.value >= 70);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Yuka Top Santé Mascot Banner */}
      <View style={[styles.banner, isArabic && styles.bannerRtl]}>
        <View style={[styles.bannerTextWrap, isArabic && styles.bannerTextWrapRtl]}>
          <Text style={[styles.bannerTitle, isArabic && styles.textRtl]}>
            {isArabic ? 'أفضل الاختيارات · تونس' : 'Top Santé · Tunisie'}
          </Text>
          <Text style={[styles.bannerSubtitle, isArabic && styles.textRtl]}>
            {isArabic ? 'بدائل تونسية صحية ومصادق عليها' : 'Alternatives certifiées et locales'}
          </Text>
        </View>

        <Image
          source={require('../../assets/mascot_basket_signature.png')}
          style={styles.mascotImg}
          resizeMode="contain"
        />
      </View>

      {/* 2. Category Filter Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.categoryScroll, isArabic && styles.categoryScrollRtl]}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryPill, isActive && styles.categoryPillActive]}
              onPress={() => setActiveCategory(cat.id)}
              activeOpacity={0.7}
            >
              <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                {isArabic ? cat.labelAr : cat.labelFr}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* 3. Signature Comparison Card */}
      <View style={styles.compCard}>
        <View style={[styles.compHead, isArabic && styles.compHeadRtl]}>
          <View style={[styles.compTitleLeft, isArabic && styles.compTitleLeftRtl]}>
            <Sparkles size={15} color="#278A42" />
            <Text style={styles.compTitle}>
              {isArabic ? 'بديل موصى به' : 'Alternative recommandée'}
            </Text>
          </View>
          <Text style={styles.gainText}>+66 pts</Text>
        </View>

        <View style={[styles.compGrid, isArabic && styles.compGridRtl]}>
          {/* Avoid cell */}
          <TouchableOpacity
            style={styles.badCell}
            onPress={() => {
              const bimo = SEED_PRODUCTS.find((p) => p.id === 'bimo-choco');
              if (bimo) onSelectProduct(bimo);
            }}
            activeOpacity={0.7}
          >
            <Image
              source={resolveProductImage('/assets_v2/product_bimo_choco.jpg')}
              style={styles.cellImg}
              resizeMode="contain"
            />
            <Text style={styles.badTitle} numberOfLines={1}>Bimo Choco</Text>
            <Text style={styles.cellScore}>18/100 • Mauvais</Text>
          </TouchableOpacity>

          {/* Arrow */}
          <View style={[styles.arrowBox, isArabic && styles.arrowBoxRtl]}>
            <ArrowRight size={18} color="#2FB755" strokeWidth={2.5} />
          </View>

          {/* Good cell */}
          <TouchableOpacity
            style={styles.goodCell}
            onPress={() => {
              const warda = SEED_PRODUCTS.find((p) => p.id === 'warda-sables');
              if (warda) onSelectProduct(warda);
            }}
            activeOpacity={0.7}
          >
            <Image
              source={resolveProductImage('/assets_v2/product_warda_sables.jpg')}
              style={styles.cellImg}
              resizeMode="contain"
            />
            <Text style={styles.goodTitle} numberOfLines={1}>Warda Sablés</Text>
            <Text style={styles.goodScore}>84/100 • Sans additif</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Section Divider */}
      <View style={[styles.listHeader, isArabic && styles.listHeaderRtl]}>
        <Text style={styles.listHeaderText}>
          {isArabic ? 'أفضل المنتوجات في المغازات التونسية' : 'Meilleurs choix du rayon tunisien'}
        </Text>
      </View>

      {/* 5. Recommended Products List */}
      {healthyProducts.map((p) => (
        <ProductListItem
          key={p.id}
          product={p}
          onPress={() => onSelectProduct(p)}
          isArabic={isArabic}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 40,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6FAF7',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1EFE5',
  },
  bannerRtl: {
    flexDirection: 'row-reverse',
  },
  bannerTextWrap: {
    flex: 1,
  },
  bannerTextWrapRtl: {
    alignItems: 'flex-end',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A592D',
    letterSpacing: -0.2,
  },
  bannerSubtitle: {
    fontSize: 12.5,
    color: '#4D7A5A',
    marginTop: 3,
    fontWeight: '500',
  },
  mascotImg: {
    width: 54,
    height: 54,
    marginLeft: 12,
  },
  categoryScroll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  categoryScrollRtl: {
    flexDirection: 'row-reverse',
  },
  categoryPill: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  categoryPillActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555555',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  compCard: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E0D8',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  compHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  compHeadRtl: {
    flexDirection: 'row-reverse',
  },
  compTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  compTitleLeftRtl: {
    flexDirection: 'row-reverse',
  },
  compTitle: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: '#278A42',
  },
  gainText: {
    color: '#278A42',
    fontWeight: '800',
    fontSize: 13,
  },
  compGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  compGridRtl: {
    flexDirection: 'row-reverse',
  },
  badCell: {
    flex: 1,
    backgroundColor: 'rgba(253, 244, 243, 0.85)',
    borderWidth: 1,
    borderColor: '#F8D7D4',
    borderRadius: 14,
    padding: 10,
    alignItems: 'center',
  },
  goodCell: {
    flex: 1.15,
    backgroundColor: 'rgba(243, 250, 245, 0.85)',
    borderWidth: 1,
    borderColor: '#D5EEDC',
    borderRadius: 14,
    padding: 10,
    alignItems: 'center',
  },
  cellImg: {
    width: 48,
    height: 48,
    marginBottom: 6,
  },
  badTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#C0392B',
  },
  goodTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E824C',
  },
  cellScore: {
    fontSize: 10,
    color: '#8E8E93',
    marginTop: 2,
  },
  goodScore: {
    fontSize: 10,
    fontWeight: '700',
    color: '#278A42',
    marginTop: 2,
  },
  arrowBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  arrowBoxRtl: {
    transform: [{ scaleX: -1 }],
  },
  listHeader: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.04)',
  },
  listHeaderRtl: {
    alignItems: 'flex-end',
  },
  listHeaderText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#8E8E93',
  },
  textRtl: {
    textAlign: 'right',
  },
});
