import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radii } from '@eatsmart/design-tokens';
import { getScoreColor } from '@eatsmart/domain';
import type { ProductScore } from '@eatsmart/domain';

interface ScoreBadgeProps {
  score: ProductScore;
  size?: 'small' | 'medium' | 'large';
  showScale?: boolean;
}

export function ScoreBadge({ score, size = 'medium', showScale = true }: ScoreBadgeProps) {
  const color = getScoreColor(score.tier);

  const dimensions =
    size === 'small'
      ? { width: 38, height: 38, radius: 12, fontSize: 13, scaleSize: 9 }
      : size === 'large'
      ? { width: 72, height: 72, radius: 24, fontSize: 26, scaleSize: 12 }
      : { width: 56, height: 56, radius: 18, fontSize: 20, scaleSize: 10 };

  return (
    <View
      style={[
        styles.badge,
        {
          width: dimensions.width,
          height: dimensions.height,
          borderRadius: dimensions.radius,
          backgroundColor: color,
        },
      ]}
    >
      <Text style={[styles.number, { fontSize: dimensions.fontSize }]}>{score.value}</Text>
      {showScale && (
        <Text style={[styles.scale, { fontSize: dimensions.scaleSize }]}>/100</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  number: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  scale: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '600',
    marginTop: -2,
  },
});
