import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { radii } from '@eatsmart/design-tokens';
import type { NutriScoreGrade, NovaGroup } from '@eatsmart/domain';

interface NutriScoreBadgeProps {
  grade: NutriScoreGrade;
  size?: 'small' | 'medium';
}

const NUTRI_COLORS: Record<NutriScoreGrade, string> = {
  a: '#038141',
  b: '#85BB2F',
  c: '#FECB02',
  d: '#EE8100',
  e: '#E63E11',
};

const GRADES: NutriScoreGrade[] = ['a', 'b', 'c', 'd', 'e'];

export function NutriScoreBadge({ grade, size = 'medium' }: NutriScoreBadgeProps) {
  const isSmall = size === 'small';

  return (
    <View style={[styles.container, isSmall && styles.containerSmall]}>
      {GRADES.map((g) => {
        const isMatch = g === grade.toLowerCase();
        const color = NUTRI_COLORS[g];

        return (
          <View
            key={g}
            style={[
              styles.letterBox,
              isSmall && styles.letterBoxSmall,
              { backgroundColor: isMatch ? color : '#E2DEC9' },
              isMatch && styles.letterBoxActive,
            ]}
          >
            <Text
              style={[
                styles.letterText,
                isSmall && styles.letterTextSmall,
                { color: isMatch ? '#FFFFFF' : '#8C857B' },
              ]}
            >
              {g.toUpperCase()}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

interface NovaBadgeProps {
  group: NovaGroup;
  isArabic?: boolean;
}

const NOVA_COLORS: Record<NovaGroup, string> = {
  1: '#038141',
  2: '#85BB2F',
  3: '#EE8100',
  4: '#E63E11',
};

export function NovaBadge({ group, isArabic }: NovaBadgeProps) {
  const color = NOVA_COLORS[group];

  const labelsFr: Record<NovaGroup, string> = {
    1: 'Non transformé',
    2: 'Ingrédient culinaire',
    3: 'Transformé',
    4: 'Ultra-transformé',
  };

  const labelsAr: Record<NovaGroup, string> = {
    1: 'طبيعي غير مصنع',
    2: 'مكون طبخ',
    3: 'مصنع',
    4: 'فائق المعالجة الصناعية',
  };

  return (
    <View style={[styles.novaWrap, { borderColor: color }]}>
      <View style={[styles.novaPill, { backgroundColor: color }]}>
        <Text style={styles.novaNumber}>{group}</Text>
      </View>
      <View style={styles.novaTextWrap}>
        <Text style={styles.novaPrefix}>NOVA {group}</Text>
        <Text style={styles.novaLabel}>
          {isArabic ? labelsAr[group] : labelsFr[group]}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF8F3',
    borderRadius: radii.sm,
    padding: 3,
    gap: 2,
  },
  containerSmall: {
    padding: 2,
  },
  letterBox: {
    width: 22,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterBoxSmall: {
    width: 16,
    height: 20,
    borderRadius: 4,
  },
  letterBoxActive: {
    transform: [{ scaleY: 1.15 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  letterText: {
    fontSize: 13,
    fontWeight: '900',
  },
  letterTextSmall: {
    fontSize: 10,
  },
  novaWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radii.md,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
  novaPill: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  novaNumber: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 13,
  },
  novaTextWrap: {
    justifyContent: 'center',
  },
  novaPrefix: {
    fontSize: 10,
    fontWeight: '800',
    color: '#8C857B',
    textTransform: 'uppercase',
  },
  novaLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3D3A34',
  },
});
