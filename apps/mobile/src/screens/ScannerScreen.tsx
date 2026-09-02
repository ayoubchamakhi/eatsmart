import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Flashlight, X, Barcode, Check } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';

interface ScannerScreenProps {
  onScanProduct: (product: Product) => void;
  onClose: () => void;
  isArabic: boolean;
}

export function ScannerScreen({ onScanProduct, onClose, isArabic }: ScannerScreenProps) {
  const [torchOn, setTorchOn] = useState(false);
  const [manualCode, setManualCode] = useState('');

  const handleManualSubmit = () => {
    const found = SEED_PRODUCTS.find((p) => p.barcode === manualCode.trim());
    if (found) {
      onScanProduct(found);
    } else {
      // Default to first seed product if arbitrary barcode
      onScanProduct(SEED_PRODUCTS[0]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Controls Overlay */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={onClose}>
          <X size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.title}>
          {isArabic ? 'وجّه الكاميرا نحو الكود بار' : 'Scannez le code-barres'}
        </Text>

        <TouchableOpacity
          style={[styles.iconButton, torchOn && styles.iconButtonActive]}
          onPress={() => setTorchOn(!torchOn)}
        >
          <Flashlight size={20} color={torchOn ? colors.butter : '#FFFFFF'} />
        </TouchableOpacity>
      </View>

      {/* Viewfinder Target */}
      <View style={styles.viewfinderWrap}>
        <View style={styles.reticle}>
          <View style={[styles.corner, styles.cornerTL]} />
          <View style={[styles.corner, styles.cornerTR]} />
          <View style={[styles.corner, styles.cornerBL]} />
          <View style={[styles.corner, styles.cornerBR]} />

          {/* Animated red laser line */}
          <View style={styles.laserLine} />
        </View>

        <Text style={styles.hint}>
          {isArabic
            ? 'ضع رمز الباركود داخل الإطار للتعرف الفوري'
            : 'Cadrez le code-barres dans le repère pour lancer l\'analyse'}
        </Text>
      </View>

      {/* Quick Demo Scan Buttons */}
      <View style={styles.demoTray}>
        <Text style={styles.demoTitle}>
          {isArabic ? 'تجربة سريعة مع منتوجات تونسية :' : 'Simulation de scan rapide :'}
        </Text>

        <View style={styles.demoPills}>
          {SEED_PRODUCTS.slice(0, 4).map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.demoPill}
              onPress={() => onScanProduct(item)}
            >
              <Text style={styles.demoPillText}>{item.brand} - {item.name.split(' ')[0]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Manual Barcode Input */}
        <View style={styles.manualInputWrap}>
          <Barcode size={18} color={colors.inkSoft} style={{ marginRight: 8 }} />
          <TextInput
            style={styles.manualInput}
            placeholder={isArabic ? 'أدخل الرمز يدوياً (619...)' : 'Saisir le code manuellement (ex: 619...)'}
            placeholderTextColor={colors.inkFaint}
            value={manualCode}
            onChangeText={setManualCode}
            keyboardType="numeric"
          />
          {manualCode.length > 0 && (
            <TouchableOpacity style={styles.submitBtn} onPress={handleManualSubmit}>
              <Check size={16} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C19',
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonActive: {
    backgroundColor: 'rgba(242, 209, 139, 0.25)',
  },
  viewfinderWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  reticle: {
    width: 270,
    height: 180,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  corner: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderColor: '#FFFFFF',
  },
  cornerTL: { top: 0, left: 0, borderLeftWidth: 3, borderTopWidth: 3, borderTopLeftRadius: 10 },
  cornerTR: { top: 0, right: 0, borderRightWidth: 3, borderTopWidth: 3, borderTopRightRadius: 10 },
  cornerBL: { bottom: 0, left: 0, borderLeftWidth: 3, borderBottomWidth: 3, borderBottomLeftRadius: 10 },
  cornerBR: { bottom: 0, right: 0, borderRightWidth: 3, borderBottomWidth: 3, borderBottomRightRadius: 10 },
  laserLine: {
    width: '90%',
    height: 2,
    backgroundColor: '#E74C3C',
    shadowColor: '#E74C3C',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  hint: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    maxWidth: 240,
  },
  demoTray: {
    backgroundColor: colors.cream,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    padding: 20,
  },
  demoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.inkDark,
    marginBottom: 10,
  },
  demoPills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  demoPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.1)',
  },
  demoPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  manualInputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.1)',
  },
  manualInput: {
    flex: 1,
    fontSize: 13,
    color: colors.inkDark,
    padding: 0,
  },
  submitBtn: {
    backgroundColor: colors.sageDeep,
    borderRadius: radii.pill,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
