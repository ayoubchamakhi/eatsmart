import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export function SearchBar({ value, onChangeText, placeholder, onClear }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Search size={18} color={colors.inkSoft} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Rechercher un produit tunisien...'}
        placeholderTextColor={colors.inkFaint}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
      {value.length > 0 && onClear && (
        <TouchableOpacity onPress={onClear} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <X size={16} color={colors.inkSoft} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: radii.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.ink,
    padding: 0,
  },
});
