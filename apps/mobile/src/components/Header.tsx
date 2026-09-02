import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { ScanBarcode, Globe } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';

interface HeaderProps {
  onScanPress: () => void;
  isArabic: boolean;
  onToggleLanguage: () => void;
}

export function Header({ onScanPress, isArabic, onToggleLanguage }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.logoWrap}>
        <Image
          source={require('../../assets/header_dark_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.langButton} onPress={onToggleLanguage}>
          <Globe size={16} color={colors.inkSoft} />
          <Text style={styles.langText}>{isArabic ? 'FR' : 'عربي'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.scanButton} onPress={onScanPress}>
          <ScanBarcode size={18} color="#FFFFFF" />
          <Text style={styles.scanButtonText}>
            {isArabic ? 'سكانّي' : 'Scanner'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 12,
    paddingBottom: 10,
    backgroundColor: colors.cream,
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 115,
    height: 30,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  langButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.pill,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.08)',
  },
  langText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkDark,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.sageDeep,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: radii.pill,
    gap: 5,
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
});
