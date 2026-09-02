import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Globe } from 'lucide-react-native';

interface HeaderProps {
  onScanPress?: () => void;
  isArabic: boolean;
  onToggleLanguage: () => void;
}

export function Header({ isArabic, onToggleLanguage }: HeaderProps) {
  return (
    <View style={[styles.header, isArabic && styles.headerRtl]}>
      <View style={styles.logoWrap}>
        <Image
          source={require('../../assets/header_dark_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={[styles.actions, isArabic && styles.actionsRtl]}>
        <TouchableOpacity
          style={styles.langButton}
          onPress={onToggleLanguage}
          activeOpacity={0.7}
        >
          <Globe size={14} color="#6E675C" />
          <Text style={styles.langText}>{isArabic ? 'Français' : 'عربي'}</Text>
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
    paddingHorizontal: 18,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 6 : 10,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  headerRtl: {
    flexDirection: 'row-reverse',
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 28,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionsRtl: {
    flexDirection: 'row-reverse',
  },
  langButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(118, 118, 128, 0.1)',
  },
  langText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1D1D1F',
  },
});
