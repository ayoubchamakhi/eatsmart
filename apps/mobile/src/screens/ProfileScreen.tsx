import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { ShieldCheck, Globe, HelpCircle, Heart, ExternalLink } from 'lucide-react-native';
import { colors, radii } from '@eatsmart/design-tokens';

interface ProfileScreenProps {
  isArabic: boolean;
  onToggleLanguage: () => void;
}

export function ProfileScreen({ isArabic, onToggleLanguage }: ProfileScreenProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ES</Text>
        </View>
        <Text style={styles.profileTitle}>Eatsmart Tunisie</Text>
        <Text style={styles.profileSubtitle}>
          {isArabic ? 'مشروع مستقل من أجل صحة التونسيين' : 'Application citoyenne indépendante'}
        </Text>
      </View>

      {/* Language Preference */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Globe size={18} color={colors.sageDeep} />
          <Text style={styles.cardTitle}>
            {isArabic ? 'اللغة / Langue' : 'Langue d\'affichage'}
          </Text>
        </View>

        <TouchableOpacity style={styles.langToggleRow} onPress={onToggleLanguage}>
          <Text style={styles.langCurrent}>
            {isArabic ? 'اللغة الحالية: العربية (تونسية)' : 'Langue actuelle : Français'}
          </Text>
          <View style={styles.togglePill}>
            <Text style={styles.togglePillText}>
              {isArabic ? 'Passer en Français' : 'عربي (تونس)'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 100% Independence Pledge */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <ShieldCheck size={18} color={colors.sageDeep} />
          <Text style={styles.cardTitle}>
            {isArabic ? 'ميثاق الاستقلالية التامة' : 'Charte d\'indépendance'}
          </Text>
        </View>

        <Text style={styles.cardBody}>
          {isArabic
            ? 'تطبيق Eatsmart لا يقبل أي إعلانات تجارية ولا يتلقى أي تمويل من شركات الصناعات الغذائية. التقييم موضوعي 100% ومبني على أسس علمية صريحة.'
            : 'Eatsmart refuse catégoriquement toute publicité commerciale et tout financement de l\'industrie agroalimentaire. Les évaluations reposent uniquement sur des critères scientifiques publics.'}
        </Text>
      </View>

      {/* Methodology details */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <HelpCircle size={18} color={colors.sageDeep} />
          <Text style={styles.cardTitle}>
            {isArabic ? 'طريقة حساب النوتة' : 'Méthode de calcul'}
          </Text>
        </View>

        <View style={styles.methodRow}>
          <Text style={styles.methodBullet}>•</Text>
          <Text style={styles.methodText}>
            <Text style={{ fontWeight: '700' }}>60% </Text>
            {isArabic ? 'الجودة الغذائية (Nutri-Score)' : 'Qualité nutritionnelle (Nutri-Score)'}
          </Text>
        </View>

        <View style={styles.methodRow}>
          <Text style={styles.methodBullet}>•</Text>
          <Text style={styles.methodText}>
            <Text style={{ fontWeight: '700' }}>40% </Text>
            {isArabic ? 'المواد المضافة والملونات الكيميائية' : 'Présence et risque des additifs'}
          </Text>
        </View>

        <View style={styles.methodRow}>
          <Text style={styles.methodBullet}>•</Text>
          <Text style={styles.methodText}>
            <Text style={{ fontWeight: '700' }}>+ </Text>
            {isArabic ? 'تثمين المنتوجات التونسية والبيولوجية' : 'Valorisation des labels Bio et du terroir tunisien'}
          </Text>
        </View>
      </View>

      {/* Footer Info */}
      <View style={styles.footerNote}>
        <Heart size={14} color={colors.scoreBad} />
        <Text style={styles.footerText}>
          Eatsmart v1.0.0 • Fait avec passion pour la Tunisie
        </Text>
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
    paddingTop: 16,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.sageDeep,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: colors.sageDeep,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.inkDark,
  },
  profileSubtitle: {
    fontSize: 12,
    color: colors.inkSoft,
    marginTop: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.lg,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(55, 64, 54, 0.06)',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.inkDark,
  },
  cardBody: {
    fontSize: 13,
    color: colors.inkSoft,
    lineHeight: 20,
  },
  langToggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  langCurrent: {
    fontSize: 13,
    color: colors.inkDark,
    fontWeight: '600',
  },
  togglePill: {
    backgroundColor: colors.sageMist,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.pill,
  },
  togglePillText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.sageDeep,
  },
  methodRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  methodBullet: {
    color: colors.sageDeep,
    marginRight: 6,
    fontSize: 14,
  },
  methodText: {
    fontSize: 13,
    color: colors.inkSoft,
    flex: 1,
  },
  footerNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
  },
  footerText: {
    fontSize: 11,
    color: colors.inkFaint,
  },
});
