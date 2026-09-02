import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { History, ScanBarcode, Sparkles, Heart, User } from 'lucide-react-native';

export type TabKey = 'history' | 'recs' | 'scan' | 'favorites' | 'profile';

interface BottomTabBarProps {
  activeTab: TabKey;
  onTabPress: (tab: TabKey) => void;
  isArabic?: boolean;
}

export function BottomTabBar({ activeTab, onTabPress, isArabic }: BottomTabBarProps) {
  return (
    <View style={[styles.container, isArabic && styles.containerRtl]}>
      {/* 1. History */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('history')}
        activeOpacity={0.7}
      >
        <History
          size={21}
          color={activeTab === 'history' ? '#000000' : '#8E8E93'}
          strokeWidth={activeTab === 'history' ? 2.2 : 1.8}
        />
        <Text style={[styles.tabText, activeTab === 'history' && styles.tabTextActive]}>
          {isArabic ? 'السجل' : 'Historique'}
        </Text>
      </TouchableOpacity>

      {/* 2. Recommendations */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('recs')}
        activeOpacity={0.7}
      >
        <Sparkles
          size={21}
          color={activeTab === 'recs' ? '#000000' : '#8E8E93'}
          strokeWidth={activeTab === 'recs' ? 2.2 : 1.8}
        />
        <Text style={[styles.tabText, activeTab === 'recs' && styles.tabTextActive]}>
          {isArabic ? 'البدائل' : 'Top Santé'}
        </Text>
      </TouchableOpacity>

      {/* 3. Floating Center Scan Button */}
      <TouchableOpacity
        style={styles.scanTab}
        onPress={() => onTabPress('scan')}
        activeOpacity={0.88}
      >
        <View style={styles.scanFab}>
          <ScanBarcode size={24} color="#FFFFFF" strokeWidth={2.2} />
        </View>
        <Text style={[styles.tabText, styles.scanText]}>
          {isArabic ? 'سكانّي' : 'Scanner'}
        </Text>
      </TouchableOpacity>

      {/* 4. Favorites */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('favorites')}
        activeOpacity={0.7}
      >
        <Heart
          size={21}
          color={activeTab === 'favorites' ? '#000000' : '#8E8E93'}
          fill={activeTab === 'favorites' ? '#000000' : 'none'}
          strokeWidth={activeTab === 'favorites' ? 2.2 : 1.8}
        />
        <Text style={[styles.tabText, activeTab === 'favorites' && styles.tabTextActive]}>
          {isArabic ? 'المفضلة' : 'Favoris'}
        </Text>
      </TouchableOpacity>

      {/* 5. Profile */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('profile')}
        activeOpacity={0.7}
      >
        <User
          size={21}
          color={activeTab === 'profile' ? '#000000' : '#8E8E93'}
          strokeWidth={activeTab === 'profile' ? 2.2 : 1.8}
        />
        <Text style={[styles.tabText, activeTab === 'profile' && styles.tabTextActive]}>
          {isArabic ? 'حسابي' : 'Profil'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.06)',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 8,
  },
  containerRtl: {
    flexDirection: 'row-reverse',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minWidth: 58,
    paddingVertical: 2,
  },
  tabText: {
    fontSize: 10.5,
    color: '#8E8E93',
    fontWeight: '600',
    marginTop: 1,
  },
  tabTextActive: {
    color: '#000000',
    fontWeight: '800',
  },
  scanTab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    marginTop: -24,
    minWidth: 58,
  },
  scanFab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2FB755',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    shadowColor: '#2FB755',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },
  scanText: {
    color: '#2FB755',
    fontWeight: '700',
    fontSize: 10,
  },
});
