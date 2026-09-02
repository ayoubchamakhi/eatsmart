import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Flashlight, X, Barcode, Check, Camera, RefreshCw } from 'lucide-react-native';
import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';

interface ScannerScreenProps {
  onScanProduct: (product: Product) => void;
  onClose: () => void;
  onContribute?: (barcode: string) => void;
  isArabic: boolean;
}

export function ScannerScreen({ onScanProduct, onClose, onContribute, isArabic }: ScannerScreenProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [torchOn, setTorchOn] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [isScanningActive, setIsScanningActive] = useState(true);
  const [unfoundBarcode, setUnfoundBarcode] = useState<string | null>(null);

  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
    if (!isScanningActive) return;
    setIsScanningActive(false);

    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {}

    const barcode = result.data.trim();
    const match = SEED_PRODUCTS.find((p) => p.barcode === barcode);

    if (match) {
      onScanProduct(match);
    } else {
      setUnfoundBarcode(barcode);
    }
  };

  const handleManualSubmit = () => {
    const found = SEED_PRODUCTS.find((p) => p.barcode === manualCode.trim());
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {}

    if (found) {
      onScanProduct(found);
    } else {
      setUnfoundBarcode(manualCode.trim() || '6190000000000');
    }
  };

  const handleDemoPreset = (product: Product) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    onScanProduct(product);
  };

  return (
    <View style={styles.container}>
      {/* Live Camera View or Permission Prompt */}
      {permission?.granted ? (
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          enableTorch={torchOn}
          barcodeScannerSettings={{
            barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'qr', 'code128'],
          }}
          onBarcodeScanned={isScanningActive ? handleBarcodeScanned : undefined}
        />
      ) : (
        <View style={styles.permissionBox}>
          <Camera size={44} color="#FFFFFF" />
          <Text style={styles.permissionTitle}>
            {isArabic ? 'تفعيل الكاميرا للمسح' : 'Activer la caméra pour scanner'}
          </Text>
          <Text style={styles.permissionDesc}>
            {isArabic
              ? 'يحتاج تطبيق Eatsmart للوصول إلى الكاميرا لقراءة الرمز الشريطي للمنتوجات في المتجر.'
              : 'Eatsmart a besoin d\'accéder à votre appareil photo pour scanner le code-barres de vos articles.'}
          </Text>
          <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
            <Text style={styles.permissionBtnText}>
              {isArabic ? 'منح الإذن بالكاميرا' : 'Autoriser la caméra'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Top Bar Controls */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={onClose}>
          <X size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.title}>
          {isArabic ? 'امسح الكود بار للمنتوج' : 'Scanner le code-barres'}
        </Text>

        <TouchableOpacity
          style={[styles.iconButton, torchOn && styles.iconButtonActive]}
          onPress={() => setTorchOn(!torchOn)}
          disabled={!permission?.granted}
        >
          <Flashlight size={20} color={torchOn ? colors.butter : '#FFFFFF'} />
        </TouchableOpacity>
      </View>

      {/* Viewfinder Target Reticle */}
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
            ? 'ضع رمز الباركود داخل الإطار للتحليل الفوري'
            : 'Placez le code-barres dans le cadre pour lancer l\'analyse'}
        </Text>
      </View>

      {/* Bottom Presets & Manual Input Tray */}
      <View style={styles.demoTray}>
        <View style={styles.trayHeader}>
          <Text style={styles.demoTitle}>
            {isArabic ? 'منتوجات تونسية سريعة للتجربة :' : 'Produits tunisiens pour tester :'}
          </Text>
          {!isScanningActive && (
            <TouchableOpacity
              style={styles.rescanBtn}
              onPress={() => setIsScanningActive(true)}
            >
              <RefreshCw size={13} color={colors.sageDeep} />
              <Text style={styles.rescanText}>
                {isArabic ? 'إعادة' : 'Réactiver'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.demoPills}>
          {SEED_PRODUCTS.slice(0, 6).map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.demoPill}
              onPress={() => handleDemoPreset(item)}
            >
              <Text style={styles.demoPillText}>
                {item.brand} • {item.name.split(' ')[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Manual Barcode Input */}
        <View style={styles.manualInputWrap}>
          <Barcode size={18} color={colors.inkSoft} style={{ marginRight: 8 }} />
          <TextInput
            style={styles.manualInput}
            placeholder={
              isArabic
                ? 'أدخل الرمز يدوياً (مثال: 6194001900123)'
                : 'Ou tapez un code-barres (ex: 619400...)'
            }
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

      {/* Uncatalogued Barcode Bottom Sheet */}
      {unfoundBarcode && (
        <View style={styles.unfoundOverlay}>
          <View style={styles.unfoundCard}>
            <Text style={styles.unfoundTitle}>
              {isArabic ? 'منتوج غير مسجل بعد' : 'Produit non répertorié'}
            </Text>
            <Text style={styles.unfoundCode}>{unfoundBarcode}</Text>
            <Text style={styles.unfoundSubtitle}>
              {isArabic
                ? 'هذا الرمز الشريطي ليس في قاعدتنا بعد. هل ترغب في إضافته ومساعدة باقي التونسيين ؟'
                : 'Ce code-barres n\'est pas encore dans notre catalogue. Voulez-vous l\'ajouter pour en faire profiter la communauté ?'}
            </Text>

            <View style={styles.unfoundActions}>
              <TouchableOpacity
                style={styles.unfoundCancelBtn}
                onPress={() => {
                  setUnfoundBarcode(null);
                  setIsScanningActive(true);
                }}
              >
                <Text style={styles.unfoundCancelText}>
                  {isArabic ? 'إلغاء' : 'Annuler'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.unfoundAddBtn}
                onPress={() => {
                  const code = unfoundBarcode;
                  setUnfoundBarcode(null);
                  if (onContribute) {
                    onContribute(code);
                  }
                }}
              >
                <Text style={styles.unfoundAddText}>
                  {isArabic ? 'إضافة المنتوج' : 'Ajouter le produit'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141815',
    justifyContent: 'space-between',
  },
  permissionBox: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1B201D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  permissionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 16,
    textAlign: 'center',
  },
  permissionDesc: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 8,
    marginBottom: 24,
  },
  permissionBtn: {
    backgroundColor: colors.sageDeep,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: radii.pill,
  },
  permissionBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 16,
    zIndex: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  iconButtonActive: {
    backgroundColor: 'rgba(242, 209, 139, 0.35)',
    borderColor: colors.butter,
  },
  viewfinderWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
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
    width: 32,
    height: 32,
    borderColor: '#FFFFFF',
  },
  cornerTL: { top: 0, left: 0, borderLeftWidth: 3.5, borderTopWidth: 3.5, borderTopLeftRadius: 12 },
  cornerTR: { top: 0, right: 0, borderRightWidth: 3.5, borderTopWidth: 3.5, borderTopRightRadius: 12 },
  cornerBL: { bottom: 0, left: 0, borderLeftWidth: 3.5, borderBottomWidth: 3.5, borderBottomLeftRadius: 12 },
  cornerBR: { bottom: 0, right: 0, borderRightWidth: 3.5, borderBottomWidth: 3.5, borderBottomRightRadius: 12 },
  laserLine: {
    width: '92%',
    height: 2,
    backgroundColor: '#FF3B30',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
  hint: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 18,
    maxWidth: 260,
  },
  demoTray: {
    backgroundColor: colors.cream,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    padding: 20,
    paddingBottom: 28,
    zIndex: 10,
  },
  trayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  demoTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.inkDark,
  },
  rescanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.sageMist,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.pill,
  },
  rescanText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.sageDeep,
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
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.12)',
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
  unfoundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    zIndex: 99,
  },
  unfoundCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.xl,
    padding: 22,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
  },
  unfoundTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.inkDark,
    marginBottom: 4,
  },
  unfoundCode: {
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: '700',
    color: colors.sageDeep,
    marginBottom: 10,
  },
  unfoundSubtitle: {
    fontSize: 13,
    color: colors.inkSoft,
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 20,
  },
  unfoundActions: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  unfoundCancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: radii.pill,
    backgroundColor: '#F3F2EE',
    alignItems: 'center',
  },
  unfoundCancelText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.inkSoft,
  },
  unfoundAddBtn: {
    flex: 1.5,
    paddingVertical: 12,
    borderRadius: radii.pill,
    backgroundColor: colors.sageDeep,
    alignItems: 'center',
  },
  unfoundAddText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
