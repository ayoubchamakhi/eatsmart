import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { History, ScanBarcode, Sparkles, User } from 'lucide-react-native';
import { colors } from '@eatsmart/design-tokens';

export type TabKey = 'history' | 'scan' | 'alternatives' | 'profile';

interface BottomTabBarProps {
  activeTab: TabKey;
  onTabPress: (tab: TabKey) => void;
  isArabic?: boolean;
}

export function BottomTabBar({ activeTab, onTabPress, isArabic }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('history')}
        activeOpacity={0.7}
      >
        <History
          size={22}
          color={activeTab === 'history' ? colors.sageDeep : colors.inkFaint}
        />
        <Text
          style={[
            styles.tabText,
            activeTab === 'history' && styles.tabTextActive,
          ]}
        >
          {isArabic ? 'السجل' : 'Historique'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('alternatives')}
        activeOpacity={0.7}
      >
        <Sparkles
          size={22}
          color={activeTab === 'alternatives' ? colors.sageDeep : colors.inkFaint}
        />
        <Text
          style={[
            styles.tabText,
            activeTab === 'alternatives' && styles.tabTextActive,
          ]}
        >
          {isArabic ? 'البدائل' : 'Alternatives'}
        </Text>
      </TouchableOpacity>

      {/* Floating Center Scan Button */}
      <TouchableOpacity
        style={styles.scanTab}
        onPress={() => onTabPress('scan')}
        activeOpacity={0.85}
      >
        <View style={styles.scanFab}>
          <ScanBarcode size={26} color="#FFFFFF" />
        </View>
        <Text style={[styles.tabText, activeTab === 'scan' && styles.tabTextActive]}>
          {isArabic ? 'سكانّي' : 'Scanner'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => onTabPress('profile')}
        activeOpacity={0.7}
      >
        <User
          size={22}
          color={activeTab === 'profile' ? colors.sageDeep : colors.inkFaint}
        />
        <Text
          style={[
            styles.tabText,
            activeTab === 'profile' && styles.tabTextActive,
          ]}
        >
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
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 58, 52, 0.08)',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minWidth: 64,
  },
  tabText: {
    fontSize: 11,
    color: colors.inkFaint,
    fontWeight: '500',
  },
  tabTextActive: {
    color: colors.sageDeep,
    fontWeight: '700',
  },
  scanTab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    marginTop: -22,
  },
  scanFab: {
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
    elevation: 6,
  },
});
