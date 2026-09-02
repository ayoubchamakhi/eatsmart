import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Product } from '@eatsmart/domain';
import { SEED_PRODUCTS } from '@eatsmart/domain';

const HISTORY_KEY = '@eatsmart:scan_history';
const FAVORITES_KEY = '@eatsmart:favorites';

export async function getScanHistory(): Promise<Product[]> {
  try {
    const raw = await AsyncStorage.getItem(HISTORY_KEY);
    if (!raw) {
      // Return initial seed history if empty
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
    const updated = [product, ...filtered].slice(0, 30); // keep up to 30 recent scans
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
