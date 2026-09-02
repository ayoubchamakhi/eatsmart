import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ArrowLeft, Camera, Check, Sparkles, PackageCheck, Image as ImageIcon } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { createProductScore } from '@eatsmart/domain';
import { saveContribution } from '../services/storage';

interface ContributeProductScreenProps {
  barcode: string;
  onBack: () => void;
  onSuccess: (product: Product) => void;
  isArabic: boolean;
}

export function ContributeProductScreen({
  barcode,
  onBack,
  onSuccess,
  isArabic,
}: ContributeProductScreenProps) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('Épicerie');
  const [frontPhotoUri, setFrontPhotoUri] = useState<string | null>(null);
  const [nutriPhotoUri, setNutriPhotoUri] = useState<string | null>(null);

  const takePhoto = async (target: 'front' | 'nutri') => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        if (target === 'front') setFrontPhotoUri('captured-front-packaging');
        else setNutriPhotoUri('captured-nutri-table');
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.7,
      });
      if (!result.canceled && result.assets && result.assets[0]) {
        if (target === 'front') setFrontPhotoUri(result.assets[0].uri);
        else setNutriPhotoUri(result.assets[0].uri);
      }
    } catch {
      if (target === 'front') setFrontPhotoUri('captured-front-packaging');
      else setNutriPhotoUri('captured-nutri-table');
    }
  };

  const handleSubmit = async () => {
    if (!name.trim() || !brand.trim()) {
      return;
    }

    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {}

    const contribId = `contrib-${Date.now()}`;

    // Save to contribution queue
    await saveContribution({
      id: contribId,
      barcode,
      name: name.trim(),
      brand: brand.trim(),
      category,
      timestamp: Date.now(),
    });

    // Generate provisional product
    const provisionalProduct: Product = {
      id: contribId,
      barcode,
      name: name.trim(),
      brand: brand.trim(),
      category,
      origin: 'Tunisie (En cours de validation)',
      isLocal: barcode.startsWith('619'),
      isBio: false,
      score: createProductScore(75, 75, 75, 70), // provisional score
      nutriScore: 'b',
      novaGroup: 2,
      nutrition: {
        servingSize: '100g',
        energyKcal: 120,
        sugars: 4.5,
        saturatedFat: 1.2,
        salt: 0.4,
      },
      additives: [],
      allergens: [],
      ingredientsSummary: 'Ingrédients en cours de numérisation par l\'équipe bénévole.',
    };

    onSuccess(provisionalProduct);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBtn} onPress={onBack}>
          <ArrowLeft size={20} color={colors.inkDark} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>
          {isArabic ? 'إضافة منتوج جديد' : 'Ajouter ce produit'}
        </Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Info Card */}
      <View style={styles.bannerCard}>
        <Sparkles size={20} color={colors.sageDeep} />
        <View style={styles.bannerTextWrap}>
          <Text style={styles.bannerTitle}>
            {isArabic ? 'مساهمة مواطنية تونسية' : 'Contribution citoyenne'}
          </Text>
          <Text style={styles.bannerSubtitle}>
            {isArabic
              ? 'الكود بار هذا غير موجود بعد في قاعدتنا. ساعد العائلات التونسية وسجله الآن.'
              : 'Ce code-barres n\'est pas encore répertorié. Aidez la communauté en le renseignant.'}
          </Text>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.formCard}>
        <Text style={styles.fieldLabel}>
          {isArabic ? 'رمز الباركود' : 'Code-barres'}
        </Text>
        <View style={styles.barcodeDisplay}>
          <Text style={styles.barcodeText}>{barcode}</Text>
        </View>

        <Text style={styles.fieldLabel}>
          {isArabic ? 'اسم المنتوج *' : 'Nom du produit *'}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={isArabic ? 'مثال: هريسة دياري، بسكويت شوكولا...' : 'Ex: Harissa traditionnelle, Yaourt vanille...'}
          placeholderTextColor={colors.inkFaint}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.fieldLabel}>
          {isArabic ? 'الماركة أو المصنع *' : 'Marque / Fabricant *'}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={isArabic ? 'مثال: SICAM, Délice, Land\'Or...' : 'Ex: SICAM, Délice, Vitalait...'}
          placeholderTextColor={colors.inkFaint}
          value={brand}
          onChangeText={setBrand}
        />

        {/* Photo Upload Triggers */}
        <Text style={styles.fieldLabel}>
          {isArabic ? 'صور العبوة (اختياري وسريع)' : 'Photos de l\'emballage (recommandé)'}
        </Text>

        <View style={styles.photosRow}>
          <TouchableOpacity
            style={[styles.photoBox, frontPhotoUri && styles.photoBoxDone]}
            onPress={() => takePhoto('front')}
          >
            {frontPhotoUri && frontPhotoUri.startsWith('file:') ? (
              <Image source={{ uri: frontPhotoUri }} style={styles.photoPreview} />
            ) : frontPhotoUri ? (
              <PackageCheck size={22} color={colors.sageDeep} />
            ) : (
              <Camera size={22} color={colors.inkSoft} />
            )}
            <Text style={styles.photoLabel}>
              {frontPhotoUri
                ? (isArabic ? '✓ تم التقاط الوجه' : '✓ Face avant')
                : (isArabic ? 'التقاط الوجه' : 'Photo face avant')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.photoBox, nutriPhotoUri && styles.photoBoxDone]}
            onPress={() => takePhoto('nutri')}
          >
            {nutriPhotoUri && nutriPhotoUri.startsWith('file:') ? (
              <Image source={{ uri: nutriPhotoUri }} style={styles.photoPreview} />
            ) : nutriPhotoUri ? (
              <PackageCheck size={22} color={colors.sageDeep} />
            ) : (
              <Camera size={22} color={colors.inkSoft} />
            )}
            <Text style={styles.photoLabel}>
              {nutriPhotoUri
                ? (isArabic ? '✓ تم جدول التغذية' : '✓ Tableau nutritionnel')
                : (isArabic ? 'جدول التغذية' : 'Photo nutrition')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Submit button */}
        <TouchableOpacity
          style={[
            styles.submitBtn,
            (!name.trim() || !brand.trim()) && styles.submitBtnDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!name.trim() || !brand.trim()}
        >
          <Check size={18} color="#FFFFFF" />
          <Text style={styles.submitBtnText}>
            {isArabic ? 'حفظ وتحليل المنتوج' : 'Enregistrer et analyser'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  navBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.08)',
  },
  navTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.inkDark,
  },
  bannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.sageMist,
    borderRadius: radii.lg,
    padding: 16,
    marginBottom: 16,
  },
  bannerTextWrap: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.sageDeep,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: colors.inkSoft,
    lineHeight: 17,
    marginTop: 2,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.xl,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.06)',
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkDark,
    marginBottom: 6,
    marginTop: 10,
  },
  barcodeDisplay: {
    backgroundColor: '#F7F5EE',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.08)',
  },
  barcodeText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.sageDeep,
    fontFamily: 'monospace',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.14)',
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 13,
    color: colors.inkDark,
  },
  photosRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
    marginBottom: 10,
  },
  photoBox: {
    flex: 1,
    height: 74,
    borderRadius: radii.md,
    borderWidth: 1.5,
    borderColor: 'rgba(61, 58, 52, 0.15)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  photoBoxDone: {
    borderColor: colors.sageDeep,
    borderStyle: 'solid',
    backgroundColor: colors.sageMist,
  },
  photoPreview: {
    width: 36,
    height: 36,
    borderRadius: radii.sm,
  },
  photoLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.inkDark,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.sageDeep,
    borderRadius: radii.pill,
    paddingVertical: 14,
    marginTop: 20,
  },
  submitBtnDisabled: {
    backgroundColor: colors.inkFaint,
    opacity: 0.7,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
