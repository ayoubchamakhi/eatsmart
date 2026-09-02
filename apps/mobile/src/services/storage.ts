import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';

const HISTORY_KEY = '@eatsmart:scan_history';
const FAVORITES_KEY = '@eatsmart:favorites';
const HEALTH_PROFILE_KEY = '@eatsmart:health_profile';
const CONTRIBUTIONS_KEY = '@eatsmart:contributions';

export interface UserHealthProfile {
  allergens: string[]; // e.g. ['Gluten', 'Lait', 'Arachides', 'Poisson', 'Soja']
  lowSugar: boolean;   // Diabetic watch (warn if sugar > 10g)
  lowSalt: boolean;    // Hypertension watch (warn if salt > 1.5g)
}

export const DEFAULT_HEALTH_PROFILE: UserHealthProfile = {
  allergens: [],
  lowSugar: false,
  lowSalt: false,
};

export interface UserContribution {
  id: string;
  barcode: string;
  name: string;
  brand: string;
  category: string;
  timestamp: number;
}

// ------------------------------------------------------------
// SCAN HISTORY
// ------------------------------------------------------------
export async function getScanHistory(): Promise<Product[]> {
  try {
    const raw = await AsyncStorage.getItem(HISTORY_KEY);
    if (!raw) {
      return SEED_PRODUCTS.slice(0, 5);
    }
    return JSON.parse(raw);
  } catch {
    return SEED_PRODUCTS.slice(0, 5);
  }
}

export async function addScanToHistory(product: Product): Promise<void> {
  try {
    const history = await getScanHistory();
    const filtered = history.filter((p) => p.id !== product.id);
    const updated = [product, ...filtered].slice(0, 30);
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Failed to save scan history', err);
  }
}

export async function clearScanHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
  } catch (err) {
    console.warn('Failed to clear scan history', err);
  }
}

// ------------------------------------------------------------
// FAVORITES
// ------------------------------------------------------------
export async function getFavorites(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function toggleFavorite(productId: string): Promise<boolean> {
  try {
    const favorites = await getFavorites();
    let updated: string[];
    let isFavNow: boolean;
    if (favorites.includes(productId)) {
      updated = favorites.filter((id) => id !== productId);
      isFavNow = false;
    } else {
      updated = [productId, ...favorites];
      isFavNow = true;
    }
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return isFavNow;
  } catch {
    return false;
  }
}

export async function isFavorite(productId: string): Promise<boolean> {
  try {
    const favorites = await getFavorites();
    return favorites.includes(productId);
  } catch {
    return false;
  }
}

// ------------------------------------------------------------
// HEALTH & DIETARY PROFILE
// ------------------------------------------------------------
export async function getHealthProfile(): Promise<UserHealthProfile> {
  try {
    const raw = await AsyncStorage.getItem(HEALTH_PROFILE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_HEALTH_PROFILE;
  } catch {
    return DEFAULT_HEALTH_PROFILE;
  }
}

export async function saveHealthProfile(profile: UserHealthProfile): Promise<void> {
  try {
    await AsyncStorage.setItem(HEALTH_PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.warn('Failed to save health profile', err);
  }
}

export function checkHealthAlerts(product: Product, profile: UserHealthProfile): string[] {
  const alerts: string[] = [];

  // 1. Allergens matching
  if (product.allergens && profile.allergens.length > 0) {
    for (const allergen of profile.allergens) {
      if (product.allergens.some((a) => a.toLowerCase().includes(allergen.toLowerCase()))) {
        alerts.push(`Contient du ${allergen} (Allergène actif)`);
      }
    }
  }

  // 2. Low Sugar alert (e.g. Diabète)
  if (profile.lowSugar && product.nutrition.sugars > 10) {
    alerts.push(`Teneur élevée en sucres (${product.nutrition.sugars}g / 100g) - Profil Glycémie`);
  }

  // 3. Low Salt alert (e.g. Hypertension)
  if (profile.lowSalt && product.nutrition.salt > 1.5) {
    alerts.push(`Teneur élevée en sel (${product.nutrition.salt}g / 100g) - Profil Tension`);
  }

  return alerts;
}

// ------------------------------------------------------------
// USER CONTRIBUTIONS QUEUE
// ------------------------------------------------------------
export async function getContributions(): Promise<UserContribution[]> {
  try {
    const raw = await AsyncStorage.getItem(CONTRIBUTIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveContribution(contribution: UserContribution): Promise<void> {
  try {
    const existing = await getContributions();
    const updated = [contribution, ...existing];
    await AsyncStorage.setItem(CONTRIBUTIONS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Failed to save user contribution', err);
  }
}
