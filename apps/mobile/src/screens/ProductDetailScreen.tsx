import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft, Leaf, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { getScoreColor } from '@eatsmart/domain';
import { ScoreBadge } from '../components/ScoreBadge';

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
  const scoreColor = getScoreColor(product.score.tier);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color={colors.inkDark} />
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>
          {product.brand}
        </Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Main Score Hero */}
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
                : '✓ Produit local tunisien valorisant les filières régionales'}
            </Text>
          </View>
        )}
      </View>

      {/* Nutritional Breakdown */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Sparkles size={18} color={colors.sageDeep} />
          <Text style={styles.sectionTitle}>
            {isArabic ? 'القيم الغذائية (لكل 100غ)' : 'Valeurs nutritionnelles (pour 100g)'}
          </Text>
        </View>

        <View style={styles.nutritionGrid}>
          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'الطاقة' : 'Énergie'}</Text>
            <Text style={styles.nutriValue}>{product.nutrition.energyKcal} kcal</Text>
          </View>

          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'السكريات' : 'Sucres'}</Text>
            <Text style={[styles.nutriValue, product.nutrition.sugars > 15 && styles.textAlert]}>
              {product.nutrition.sugars}g
            </Text>
          </View>

          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'دهون مشبعة' : 'Graisses sat.'}</Text>
            <Text style={[styles.nutriValue, product.nutrition.saturatedFat > 5 && styles.textAlert]}>
              {product.nutrition.saturatedFat}g
            </Text>
          </View>

          <View style={styles.nutriCell}>
            <Text style={styles.nutriLabel}>{isArabic ? 'الملح' : 'Sel'}</Text>
            <Text style={styles.nutriValue}>{product.nutrition.salt}g</Text>
          </View>
        </View>
      </View>

      {/* Additives Section */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <ShieldAlert size={18} color={product.additives.length > 0 ? colors.scoreBad : colors.sageDeep} />
          <Text style={styles.sectionTitle}>
            {isArabic ? 'المواد الحافظة والملونات' : 'Additifs & Conservateurs'}
          </Text>
        </View>

        {product.additives.length === 0 ? (
          <View style={styles.safeBox}>
            <Text style={styles.safeBoxText}>
              {isArabic ? '✓ خالي من أي مادة مضافة كيميائية' : '✓ Aucun additif détecté dans la recette'}
            </Text>
          </View>
        ) : (
          product.additives.map((add) => (
            <View key={add.code} style={styles.additiveRow}>
              <View style={styles.additiveBadge}>
                <Text style={styles.additiveCode}>{add.code}</Text>
              </View>
              <View style={styles.additiveInfo}>
                <Text style={styles.additiveName}>{isArabic ? add.nameAr : add.nameFr}</Text>
                <Text style={styles.additiveCategory}>{add.functionCategory}</Text>
              </View>
              <View style={[styles.riskTag, add.risk === 'moderate' && styles.riskModerate]}>
                <Text style={styles.riskText}>
                  {add.risk === 'moderate'
                    ? isArabic
                      ? 'متوسط'
                      : 'Modéré'
                    : isArabic
                    ? 'آمن'
                    : 'Toléré'}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>

      {/* Action to View Healthy Alternatives */}
      {product.score.value < 70 && (
        <TouchableOpacity style={styles.alternativesCta} onPress={onViewAlternatives}>
          <Sparkles size={20} color="#FFFFFF" />
          <Text style={styles.alternativesCtaText}>
            {isArabic ? 'اكتشف البدائل الصحية التونسية' : 'Découvrir des alternatives plus saines'}
          </Text>
        </TouchableOpacity>
      )}
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
  backButton: {
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
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.xl,
    padding: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
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
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.lg,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(61, 58, 52, 0.06)',
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
    paddingVertical: 8,
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
    fontWeight: '600',
    color: colors.inkDark,
  },
  additiveCategory: {
    fontSize: 11,
    color: colors.inkFaint,
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
});
