import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

interface RadialGaugeProps {
  score: number;
  label: string;
  color: string;
  size?: number;
}

export function RadialGauge({ score, label, color, size = 130 }: RadialGaugeProps) {
  const strokeWidth = 9;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * Math.min(Math.max(score, 0), 100)) / 100;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} style={styles.svg}>
        <G rotation="-90" origin={`${center}, ${center}`}>
          {/* Background circle track */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#EEEEEE"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Foreground progress arc */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </G>
      </Svg>

      {/* Inner Score Numbers and Label */}
      <View style={styles.content}>
        <Text style={[styles.scoreNumber, { color }]}>{score}</Text>
        <Text style={styles.outOf}>/ 100</Text>
        <Text style={[styles.scoreLabel, { color }]} numberOfLines={1}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreNumber: {
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 38,
  },
  outOf: {
    fontSize: 11,
    color: '#8E8E93',
    fontWeight: '600',
    marginTop: -2,
  },
  scoreLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
});