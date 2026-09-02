import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  ArrowLeft,
  Leaf,
  ShieldAlert,
  Sparkles,
  Heart,
  Info,
  X,
  AlertTriangle,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product, Additive } from '@eatsmart/domain';
import { getScoreColor } from '@eatsmart/domain';
import { ScoreBadge } from '../components/ScoreBadge';
import { NutriScoreBadge, NovaBadge } from '../components/NutriScoreBadge';
import { isFavorite, toggleFavorite, getHealthProfile, checkHealthAlerts } from '../services/storage';

interface ProductDetailScreenProps {
  product: Product;
  onBack: () => void;
  onViewAlternatives: () => void;
  isArabic: boolean;
}

export function ProductDetailScreen({
  product,
  onBack,
  onViewAlternatives,
  isArabic,
}: ProductDetailScreenProps) {
  const [favorite, setFavorite] = useState(false);
  const [selectedAdditive, setSelectedAdditive] = useState<Additive | null>(null);
  const [healthAlerts, setHealthAlerts] = useState<string[]>([]);

  useEffect(() => {
    isFavorite(product.id).then(setFavorite);
    getHealthProfile().then((profile) => {
      const alerts = checkHealthAlerts(product, profile);
      setHealthAlerts(alerts);
      if (alerts.length > 0) {
        try {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        } catch {}
      }
    });
  }, [product.id]);

  const handleToggleFavorite = async () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    const next = await toggleFavorite(product.id);
    setFavorite(next);
  };

  const scoreColor = getScoreColor(product.score.tier);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Navigation & Actions */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBtn} onPress={onBack}>
          <ArrowLeft size={20} color={colors.inkDark} />
        </TouchableOpacity>

        <Text style={styles.navTitle} numberOfLines={1}>
          {product.brand}
        </Text>

        <TouchableOpacity style={styles.navBtn} onPress={handleToggleFavorite}>
          <Heart
            size={20}
            color={favorite ? colors.scoreBad : colors.inkSoft}
            fill={favorite ? colors.scoreBad : 'none'}
          />
        </TouchableOpacity>
      </View>

      {/* Active Personal Health Warning Banner */}
      {healthAlerts.length > 0 && (
        <View style={styles.healthAlertBanner}>
          <View style={styles.healthAlertHeader}>
            <AlertTriangle size={18} color="#C2410C" />
            <Text style={styles.healthAlertTitle}>
              {isArabic ? 'تنبيه صحي مخصص لحالتك' : 'Alerte selon votre profil santé'}
            </Text>
          </View>
          {healthAlerts.map((msg, i) => (
            <Text key={i} style={styles.healthAlertText}>
              • {msg}
            </Text>
          ))}
        </View>
      )}

      {/* Main Score Hero Card */}
      <View style={styles.heroCard}>
        <View style={styles.heroTop}>
          <View style={styles.heroInfo}>
            <Text style={styles.brand}>{product.brand}</Text>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.category}>{product.category}</Text>
          </View>

          <ScoreBadge score={product.score} size="large" />
        </View>

        <View style={styles.scoreBanner}>
          <Text style={[styles.scoreLabel, { color: scoreColor }]}>
            {isArabic ? product.score.label.ar : product.score.label.fr}
          </Text>
          <Text style={styles.confidenceText}>
            {isArabic
              ? `دقة البيانات: ${product.score.confidence}%`
              : `Indice de confiance: ${product.score.confidence}%`}
          </Text>
        </View>

        {/* Nutri-Score & NOVA Dual Pills */}
        <View style={styles.ratingsRow}>
          <View style={styles.ratingCol}>
            <Text style={styles.ratingSubhead}>Nutri-Score</Text>
            <NutriScoreBadge grade={product.nutriScore} size="medium" />
          </View>

          <View style={styles.ratingCol}>
            <Text style={styles.ratingSubhead}>Transformation</Text>
            <NovaBadge group={product.novaGroup} isArabic={isArabic} />
          </View>
        </View>
      </View>

      {/* Origin & Terroir */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Leaf size={18} color={colors.sageDeep} />
          <Text style={styles.sectionTitle}>
            {isArabic ? 'المنشأ والإنتاج المحلي' : 'Terroir & Origine'}
          </Text>
        </View>
        <Text style={styles.bodyText}>{product.origin}</Text>
        {product.isLocal && (
          <View style={styles.terroirTag}>
            <Text style={styles.terroirTagText}>
              {isArabic
                ? '✓ منتوج محلي أصيل مساهم في الاقتصاد التونسي'
                : '✓ Produit tunisien valorisant les filières agricoles locales'}
            </Text>
          </View>
        )}
      </View>

      {/* Allergens Warning */}
      {product.allergens && product.allergens.length > 0 && (
        <View style={[styles.sectionCard, styles.allergenCard]}>
          <View style={styles.sectionHeader}>
            <AlertTriangle size={18} color={colors.warning || '#DFAE5C'} />
            <Text style={styles.sectionTitle}>
              {isArabic ? 'مسببات الحساسية' : 'Allergènes identifiés'}
            </Text>
          </View>
          <View style={styles.allergensList}>
            {product.allergens.map((all, i) => (
              <View key={i} style={styles.allergenChip}>
                <Text style={styles.allergenChipText}>{all}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Nutritional Breakdown Table */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Sparkles size={18} color={colors.sageDeep} />
          <Text style={styles.sectionTitle}>
            {isArabic ? 'القيم الغذائية (لكل 100غ)' : 'Repères nutritionnels (100g)'}
          </Text>
        </View>

        <View style={styles.nutritionGrid}>
          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'الطاقة' : 'Énergie'}</Text>
            <Text style={styles.nutriValue}>{product.nutrition.energyKcal} kcal</Text>
          </View>

          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'السكريات' : 'Sucres'}</Text>
            <Text
              style={[
                styles.nutriValue,
                product.nutrition.sugars > 15 && styles.textAlert,
              ]}
            >
              {product.nutrition.sugars}g
            </Text>
          </View>

          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'دهون مشبعة' : 'Gras sat.'}</Text>
            <Text
              style={[
                styles.nutriValue,
                product.nutrition.saturatedFat > 5 && styles.textAlert,
              ]}
            >
              {product.nutrition.saturatedFat}g
            </Text>
          </View>

          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'الملح' : 'Sel'}</Text>
            <Text style={styles.nutriValue}>{product.nutrition.salt}g</Text>
          </View>
        </View>
      </View>

      {/* Additives Section with Tap to Inspect */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <ShieldAlert
            size={18}
            color={product.additives.length > 0 ? colors.scoreBad : colors.sageDeep}
          />
          <Text style={styles.sectionTitle}>
            {isArabic ? 'المواد الحافظة والملونات' : 'Additifs alimentaires'}
          </Text>
        </View>

        {product.additives.length === 0 ? (
          <View style={styles.safeBox}>
            <Text style={styles.safeBoxText}>
              {isArabic
                ? '✓ خالي من أي مادة مضافة أو ملون كيميائي'
                : '✓ Aucun additif détecté dans la recette'}
            </Text>
          </View>
        ) : (
          product.additives.map((add) => (
            <TouchableOpacity
              key={add.code}
              style={styles.additiveRow}
              onPress={() => setSelectedAdditive(add)}
              activeOpacity={0.7}
            >
              <View style={styles.additiveBadge}>
                <Text style={styles.additiveCode}>{add.code}</Text>
              </View>

              <View style={styles.additiveInfo}>
                <Text style={styles.additiveName}>
                  {isArabic ? add.nameAr : add.nameFr}
                </Text>
                <Text style={styles.additiveCategory}>{add.functionCategory}</Text>
              </View>

              <View
                style={[
                  styles.riskTag,
                  add.risk === 'moderate' && styles.riskModerate,
                ]}
              >
                <Text style={styles.riskText}>
                  {add.risk === 'moderate'
                    ? isArabic
                      ? 'متوسط'
                      : 'Risque modéré'
                    : isArabic
                    ? 'آمن'
                    : 'Sans risque'}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>

      {/* Ingredients Summary */}
      {product.ingredientsSummary && (
        <View style={styles.sectionCard}>
          <Text style={styles.ingredientsTitle}>
            {isArabic ? 'قائمة المكونات الكاملة :' : 'Liste des ingrédients :'}
          </Text>
          <Text style={styles.ingredientsText}>{product.ingredientsSummary}</Text>
        </View>
      )}

      {/* Better Alternative CTA */}
      {product.score.value < 70 && (
        <TouchableOpacity style={styles.alternativesCta} onPress={onViewAlternatives}>
          <Sparkles size={20} color="#FFFFFF" />
          <Text style={styles.alternativesCtaText}>
            {isArabic
              ? 'اكتشف بدائل تونسية أكثر صحة'
              : 'Découvrir des alternatives locales plus saines'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Additive Detail Modal */}
      <Modal
        visible={!!selectedAdditive}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedAdditive(null)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleWrap}>
                <View style={styles.modalBadge}>
                  <Text style={styles.modalBadgeCode}>{selectedAdditive?.code}</Text>
                </View>
                <div>
                  <Text style={styles.modalAdditiveName}>
                    {isArabic ? selectedAdditive?.nameAr : selectedAdditive?.nameFr}
                  </Text>
                  <Text style={styles.modalCategory}>
                    {selectedAdditive?.functionCategory}
                  </Text>
                </div>
              </View>
              <TouchableOpacity
                style={styles.modalCloseBtn}
                onPress={() => setSelectedAdditive(null)}
              >
                <X size={18} color={colors.inkDark} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.modalDesc}>
                {isArabic
                  ? selectedAdditive?.descriptionAr || 'معلومات علمية حول هذه المادة المضافة.'
                  : selectedAdditive?.descriptionFr || 'Informations scientifiques sur cet additif.'}
              </Text>

              <View style={styles.efsaNote}>
                <Info size={14} color={colors.sageDeep} />
                <Text style={styles.efsaText}>
                  Évaluation basée sur les avis de l'EFSA et les publications de santé publique.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.modalDismissBtn}
              onPress={() => setSelectedAdditive(null)}
            >
              <Text style={styles.modalDismissText}>
                {isArabic ? 'إغلاق' : 'Compris'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontSize: 15,
    fontWeight: '700',
    color: colors.inkDark,
  },
  healthAlertBanner: {
    backgroundColor: '#FFF2EB',
    borderRadius: radii.lg,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#F97316',
  },
  healthAlertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  healthAlertTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#9A3412',
  },
  healthAlertText: {
    fontSize: 12,
    color: '#C2410C',
    fontWeight: '600',
    marginLeft: 4,
    lineHeight: 18,
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.xl,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroInfo: {
    flex: 1,
    paddingRight: 12,
  },
  brand: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.sageDeep,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.inkDark,
    marginTop: 4,
  },
  category: {
    fontSize: 13,
    color: colors.inkSoft,
    marginTop: 2,
  },
  scoreBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 58, 52, 0.08)',
  },
  scoreLabel: {
    fontSize: 15,
    fontWeight: '800',
  },
  confidenceText: {
    fontSize: 11,
    color: colors.inkFaint,
  },
  ratingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 58, 52, 0.06)',
    gap: 12,
  },
  ratingCol: {
    flex: 1,
  },
  ratingSubhead: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.inkFaint,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.lg,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.06)',
  },
  allergenCard: {
    backgroundColor: '#FFFDF5',
    borderColor: 'rgba(222, 174, 92, 0.3)',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.inkDark,
  },
  allergensList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  allergenChip: {
    backgroundColor: '#F7E7CD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.pill,
  },
  allergenChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8A5D18',
  },
  bodyText: {
    fontSize: 13,
    color: colors.inkSoft,
    lineHeight: 20,
  },
  terroirTag: {
    backgroundColor: colors.sageMist,
    borderRadius: radii.md,
    padding: 10,
    marginTop: 10,
  },
  terroirTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutriCell: {
    alignItems: 'center',
    flex: 1,
  },
  nutriLabel: {
    fontSize: 11,
    color: colors.inkFaint,
    marginBottom: 4,
  },
  nutriValue: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.inkDark,
  },
  textAlert: {
    color: colors.scoreBad,
  },
  safeBox: {
    backgroundColor: colors.sageMist,
    padding: 10,
    borderRadius: radii.md,
  },
  safeBoxText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.sageDeep,
  },
  additiveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(61, 58, 52, 0.05)',
  },
  additiveBadge: {
    backgroundColor: '#F3F2EE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.sm,
    marginRight: 10,
  },
  additiveCode: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.inkDark,
  },
  additiveInfo: {
    flex: 1,
  },
  additiveName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.inkDark,
  },
  additiveCategory: {
    fontSize: 11,
    color: colors.inkFaint,
    marginTop: 1,
  },
  riskTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.pill,
    backgroundColor: colors.sageMist,
  },
  riskModerate: {
    backgroundColor: '#FDECE7',
  },
  riskText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.inkDark,
  },
  ingredientsTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkDark,
    marginBottom: 6,
  },
  ingredientsText: {
    fontSize: 12,
    color: colors.inkSoft,
    lineHeight: 18,
  },
  alternativesCta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.sageDeep,
    borderRadius: radii.pill,
    paddingVertical: 14,
    gap: 8,
    marginTop: 8,
    shadowColor: colors.sageDeep,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  alternativesCtaText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.xl,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  modalTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  modalBadge: {
    backgroundColor: '#F3F2EE',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.sm,
  },
  modalBadgeCode: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.inkDark,
  },
  modalAdditiveName: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.inkDark,
  },
  modalCategory: {
    fontSize: 11,
    color: colors.inkFaint,
  },
  modalCloseBtn: {
    padding: 4,
  },
  modalBody: {
    marginBottom: 16,
  },
  modalDesc: {
    fontSize: 13,
    color: colors.inkSoft,
    lineHeight: 19,
    marginBottom: 12,
  },
  efsaNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.sageMist,
    padding: 10,
    borderRadius: radii.md,
  },
  efsaText: {
    fontSize: 11,
    color: colors.sageDeep,
    flex: 1,
    lineHeight: 15,
  },
  modalDismissBtn: {
    backgroundColor: colors.sageDeep,
    borderRadius: radii.pill,
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalDismissText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
