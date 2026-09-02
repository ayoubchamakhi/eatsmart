import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  ScanBarcode,
  Search,
  SlidersHorizontal,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Heart,
  History,
  Leaf,
  Info,
} from 'lucide-react-native';
import { colors, spacing, radii } from '@eatsmart/design-tokens';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  score: number;
  scoreLabel: string;
  color: string;
  additives: number;
  origin: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Harissa Berbère Pur Piment',
    brand: 'SICAM',
    category: 'Condiments',
    score: 83,
    scoreLabel: 'Excellent',
    color: colors.scoreGreat,
    additives: 0,
    origin: 'Cap Bon, Tunisie (Bio)',
  },
  {
    id: '2',
    name: 'Huile d\'Olive Vierge Extra',
    brand: 'Ruspina',
    category: 'Huiles & Graisses',
    score: 92,
    scoreLabel: 'Excellent',
    color: colors.scoreGreat,
    additives: 0,
    origin: 'Sahel, Tunisie',
  },
  {
    id: '3',
    name: 'Yaourt Brassé Nature',
    brand: 'Délice Danone',
    category: 'Produits Laitiers',
    score: 58,
    scoreLabel: 'Médiocre',
    color: colors.scoreMid,
    additives: 2,
    origin: 'Soliman, Tunisie',
  },
  {
    id: '4',
    name: 'Boisson Gazeuse Cidre',
    brand: 'Boga',
    category: 'Sodas & Boissons sucrées',
    score: 22,
    scoreLabel: 'À limiter',
    color: colors.scoreBad,
    additives: 4,
    origin: 'Tunis, Tunisie',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'scan' | 'history' | 'favorites'>('history');
  const [activeProduct, setActiveProduct] = useState<Product>(SAMPLE_PRODUCTS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />

      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('./assets/header_dark_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.scanButtonHeader}>
          <ScanBarcode size={22} color="#FFFFFF" />
          <Text style={styles.scanButtonHeaderText}>Scanner</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={18} color={colors.inkSoft} style={{ marginRight: 8 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un produit tunisien..."
            placeholderTextColor={colors.inkFaint}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity>
            <SlidersHorizontal size={18} color={colors.inkSoft} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Independence Badge */}
        <View style={styles.trustBanner}>
          <ShieldCheck size={16} color={colors.sageDeep} />
          <Text style={styles.trustBannerText}>100% Indépendant • Sans publicité</Text>
        </View>

        {/* Hero Selected Product Breakdown */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Produit analysé</Text>
          <Text style={styles.sectionSubtitle}>Dernière analyse</Text>
        </View>

        <View style={styles.cardHero}>
          <View style={styles.productRow}>
            <View style={styles.productInfo}>
              <Text style={styles.productBrand}>{activeProduct.brand}</Text>
              <Text style={styles.productName}>{activeProduct.name}</Text>
              <Text style={styles.productCategory}>{activeProduct.category}</Text>
            </View>

            <View style={[styles.scoreBadge, { backgroundColor: activeProduct.color }]}>
              <Text style={styles.scoreNumber}>{activeProduct.score}</Text>
              <Text style={styles.scoreScale}>/100</Text>
            </View>
          </View>

          {/* Breakdown Pills */}
          <View style={styles.breakdownRow}>
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>Qualité</Text>
              <Text style={[styles.breakdownVal, { color: activeProduct.color }]}>
                {activeProduct.scoreLabel}
              </Text>
            </View>
            <View style={styles.breakdownDivider} />
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>Additifs</Text>
              <Text style={styles.breakdownVal}>
                {activeProduct.additives === 0 ? 'Aucun' : `${activeProduct.additives} détectés`}
              </Text>
            </View>
            <View style={styles.breakdownDivider} />
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>Origine</Text>
              <Text style={styles.breakdownVal} numberOfLines={1}>
                {activeProduct.origin.split(',')[0]}
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Scans / Products List */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Historique récent</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Voir tout</Text>
          </TouchableOpacity>
        </View>

        {SAMPLE_PRODUCTS.map((prod) => (
          <TouchableOpacity
            key={prod.id}
            style={[
              styles.productItemCard,
              activeProduct.id === prod.id && styles.productItemActive,
            ]}
            onPress={() => setActiveProduct(prod)}
          >
            <View style={[styles.miniScore, { backgroundColor: prod.color }]}>
              <Text style={styles.miniScoreText}>{prod.score}</Text>
            </View>

            <View style={styles.productItemDetails}>
              <Text style={styles.productItemBrand}>{prod.brand}</Text>
              <Text style={styles.productItemName}>{prod.name}</Text>
              <View style={styles.originTag}>
                <Leaf size={11} color={colors.sageDeep} />
                <Text style={styles.originTagText}>{prod.origin}</Text>
              </View>
            </View>

            <ChevronRight size={18} color={colors.inkFaint} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.navTab}
          onPress={() => setActiveTab('history')}
        >
          <History
            size={22}
            color={activeTab === 'history' ? colors.sageDeep : colors.inkFaint}
          />
          <Text
            style={[
              styles.navTabText,
              activeTab === 'history' && styles.navTabTextActive,
            ]}
          >
            Historique
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navScanTab}
          onPress={() => setActiveTab('scan')}
        >
          <View style={styles.navScanFab}>
            <ScanBarcode size={26} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navTab}
          onPress={() => setActiveTab('favorites')}
        >
          <Heart
            size={22}
            color={activeTab === 'favorites' ? colors.sageDeep : colors.inkFaint}
          />
          <Text
            style={[
              styles.navTabText,
              activeTab === 'favorites' && styles.navTabTextActive,
            ]}
          >
            Favoris
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 12,
    paddingBottom: 12,
    backgroundColor: colors.cream,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 32,
  },
  scanButtonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.sageDeep,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.pill,
    gap: 6,
  },
  scanButtonHeaderText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.ink,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  trustBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.sageMist,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
    gap: 6,
    marginVertical: 10,
  },
  trustBannerText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.inkDark,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.inkFaint,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  cardHero: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.lg,
    padding: 20,
    shadowColor: '#3D3A34',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.06)',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productInfo: {
    flex: 1,
    paddingRight: 16,
  },
  productBrand: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.sageDeep,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.inkDark,
    marginTop: 4,
  },
  productCategory: {
    fontSize: 13,
    color: colors.inkSoft,
    marginTop: 2,
  },
  scoreBadge: {
    width: 62,
    height: 62,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  scoreScale: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
    marginTop: -2,
  },
  breakdownRow: {
    flexDirection: 'row',
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 58, 52, 0.08)',
    justifyContent: 'space-between',
  },
  breakdownItem: {
    flex: 1,
    alignItems: 'center',
  },
  breakdownDivider: {
    width: 1,
    height: '70%',
    backgroundColor: 'rgba(61, 58, 52, 0.1)',
    alignSelf: 'center',
  },
  breakdownLabel: {
    fontSize: 11,
    color: colors.inkFaint,
    marginBottom: 4,
  },
  breakdownVal: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.inkDark,
  },
  productItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.05)',
  },
  productItemActive: {
    borderColor: colors.sageDeep,
    borderWidth: 1.5,
  },
  miniScore: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  miniScoreText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
  productItemDetails: {
    flex: 1,
  },
  productItemBrand: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.inkFaint,
    textTransform: 'uppercase',
  },
  productItemName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.inkDark,
    marginTop: 2,
  },
  originTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  originTagText: {
    fontSize: 11,
    color: colors.sageDeep,
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 58, 52, 0.08)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  navTabText: {
    fontSize: 11,
    color: colors.inkFaint,
    fontWeight: '500',
  },
  navTabTextActive: {
    color: colors.sageDeep,
    fontWeight: '700',
  },
  navScanTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navScanFab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.sageDeep,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.sageDeep,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
    marginTop: -20,
  },
});
