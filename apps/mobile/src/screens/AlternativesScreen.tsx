import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Sparkles, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';
import type { Product } from '@eatsmart/domain';
import { SEED_ALTERNATIVES, SEED_PRODUCTS, getScoreColor } from '@eatsmart/domain';
import { ScoreBadge } from '../components/ScoreBadge';

interface AlternativesScreenProps {
  onSelectProduct: (product: Product) => void;
  isArabic: boolean;
}

export function AlternativesScreen({ onSelectProduct, isArabic }: AlternativesScreenProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTag}>
          <Sparkles size={14} color={colors.sageDeep} />
          <Text style={styles.headerTagText}>
            {isArabic ? 'بدائل صحية ومحلية' : 'Alternatives saines & locales'}
          </Text>
        </View>
        <Text style={styles.headerTitle}>
          {isArabic ? 'بدائل أفضل لصحتك' : 'Faites de meilleurs choix'}
        </Text>
        <Text style={styles.headerSubtitle}>
          {isArabic
            ? 'اقتراحات لمنتوجات صحية متوفرة في المغازات التونسية لتعويض الأغذية المصنعة.'
            : 'Des produits équivalents, moins transformés et plus nutritifs trouvables dans vos commerces habituels.'}
        </Text>
      </View>

      {SEED_ALTERNATIVES.map((alt, index) => {
        const original = SEED_PRODUCTS.find((p) => p.id === alt.originalProductId);
        const better = alt.betterProduct;

        if (!original) return null;

        return (
          <View key={index} style={styles.altCard}>
            <View style={styles.comparisonRow}>
              {/* Avoid product */}
              <TouchableOpacity
                style={styles.productSide}
                onPress={() => onSelectProduct(original)}
              >
                <View style={styles.sideBadge}>
                  <AlertTriangle size={12} color={colors.scoreBad} />
                  <Text style={[styles.sideBadgeText, { color: colors.scoreBad }]}>
                    {isArabic ? 'تجنّب' : 'À limiter'}
                  </Text>
                </View>
                <ScoreBadge score={original.score} size="small" showScale={false} />
                <Text style={styles.productBrand}>{original.brand}</Text>
                <Text style={styles.productName} numberOfLines={1}>
                  {original.name}
                </Text>
              </TouchableOpacity>

              <ArrowRight size={20} color={colors.inkFaint} style={{ marginHorizontal: 8 }} />

              {/* Better product */}
              <TouchableOpacity
                style={[styles.productSide, styles.productSideBetter]}
                onPress={() => onSelectProduct(better)}
              >
                <View style={[styles.sideBadge, styles.sideBadgeBetter]}>
                  <CheckCircle2 size={12} color={colors.sageDeep} />
                  <Text style={[styles.sideBadgeText, { color: colors.sageDeep }]}>
                    +{alt.gainScore} pts
                  </Text>
                </View>
                <ScoreBadge score={better.score} size="small" showScale={false} />
                <Text style={styles.productBrand}>{better.brand}</Text>
                <Text style={styles.productName} numberOfLines={1}>
                  {better.name}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.reasonBox}>
              <Text style={styles.reasonText}>
                {isArabic ? alt.reasonAr : alt.reasonFr}
              </Text>
            </View>
          </View>
        );
      })}
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
  header: {
    marginBottom: 18,
  },
  headerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.sageMist,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  headerTagText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.sageDeep,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.inkDark,
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.inkSoft,
    lineHeight: 18,
    marginTop: 4,
  },
  altCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.xl,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#3D3A34',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.06)',
  },
  comparisonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productSide: {
    flex: 1,
    backgroundColor: '#F9F8F5',
    borderRadius: radii.lg,
    padding: 12,
    alignItems: 'center',
  },
  productSideBetter: {
    backgroundColor: colors.sageMist,
  },
  sideBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  sideBadgeBetter: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.pill,
  },
  sideBadgeText: {
    fontSize: 11,
    fontWeight: '800',
  },
  productBrand: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.inkFaint,
    marginTop: 8,
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkDark,
    textAlign: 'center',
    marginTop: 2,
  },
  reasonBox: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(61, 58, 52, 0.08)',
  },
  reasonText: {
    fontSize: 12,
    color: colors.inkSoft,
    lineHeight: 18,
  },
});
