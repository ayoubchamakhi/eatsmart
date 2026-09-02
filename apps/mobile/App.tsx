import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { colors } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';

import { Header } from './src/components/Header';
import { BottomTabBar, TabKey } from './src/components/BottomTabBar';
import { HomeScreen } from './src/screens/HomeScreen';
import { ScannerScreen } from './src/screens/ScannerScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { AlternativesScreen } from './src/screens/AlternativesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ContributeProductScreen } from './src/screens/ContributeProductScreen';
import { addScanToHistory } from './src/services/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('history');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [contributingBarcode, setContributingBarcode] = useState<string | null>(null);
  const [isArabic, setIsArabic] = useState(false);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleScanProduct = (product: Product) => {
    addScanToHistory(product);
    setSelectedProduct(product);
    setActiveTab('history');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />

      {/* Main Top Header (hidden during scanner viewfinder) */}
      {activeTab !== 'scan' && !selectedProduct && !contributingBarcode && (
        <Header
          onScanPress={() => setActiveTab('scan')}
          isArabic={isArabic}
          onToggleLanguage={() => setIsArabic(!isArabic)}
        />
      )}

      {/* Screen Body */}
      <View style={styles.body}>
        {contributingBarcode ? (
          <ContributeProductScreen
            barcode={contributingBarcode}
            onBack={() => setContributingBarcode(null)}
            onSuccess={(newProduct) => {
              addScanToHistory(newProduct);
              setSelectedProduct(newProduct);
              setContributingBarcode(null);
            }}
            isArabic={isArabic}
          />
        ) : selectedProduct ? (
          <ProductDetailScreen
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onViewAlternatives={() => {
              setSelectedProduct(null);
              setActiveTab('alternatives');
            }}
            isArabic={isArabic}
          />
        ) : activeTab === 'scan' ? (
          <ScannerScreen
            onScanProduct={handleScanProduct}
            onClose={() => setActiveTab('history')}
            onContribute={(b) => setContributingBarcode(b)}
            isArabic={isArabic}
          />
        ) : activeTab === 'alternatives' ? (
          <AlternativesScreen
            onSelectProduct={handleSelectProduct}
            isArabic={isArabic}
          />
        ) : activeTab === 'profile' ? (
          <ProfileScreen
            isArabic={isArabic}
            onToggleLanguage={() => setIsArabic(!isArabic)}
          />
        ) : (
          <HomeScreen
            onSelectProduct={handleSelectProduct}
            isArabic={isArabic}
          />
        )}
      </View>

      {/* Bottom Tab Navigation (hidden during scanner, product detail, and contribution) */}
      {activeTab !== 'scan' && !selectedProduct && !contributingBarcode && (
        <BottomTabBar
          activeTab={activeTab}
          onTabPress={(tab) => {
            setSelectedProduct(null);
            setActiveTab(tab);
          }}
          isArabic={isArabic}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  body: {
    flex: 1,
  },
});
