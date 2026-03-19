'use client';

const STORAGE_PREFIX = 'edu_mock_';
const delay = (ms = 50) => new Promise(resolve => setTimeout(resolve, ms));

export interface Query {
  [key: string]: any;
}

export class MockEntityService<T extends { id: string }> {
  private entityName: string;
  private storageKey: string;

  constructor(entityName: string) {
    this.entityName = entityName;
    this.storageKey = `${STORAGE_PREFIX}${entityName}`;
  }

  private _getAll(): T[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private _saveAll(items: T[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  async list(sort: string | null = null, limit: number | null = null): Promise<T[]> {
    await delay();
    let items = this._getAll();

    if (sort) {
      const desc = sort.startsWith('-');
      const field = (desc ? sort.substring(1) : sort) as keyof T;
      items.sort((a, b) => {
        if (a[field] < b[field]) return desc ? 1 : -1;
        if (a[field] > b[field]) return desc ? -1 : 1;
        return 0;
      });
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return items;
  }

  async filter(query: Query, sort: string | null = null, limit: number | null = null): Promise<T[]> {
    await delay();
    let items = this._getAll();

    // Basic filtering
    items = items.filter(item => {
      for (const key in query) {
        if (item[key as keyof T] !== query[key]) return false;
      }
      return true;
    });

    if (sort) {
      const desc = sort.startsWith('-');
      const field = (desc ? sort.substring(1) : sort) as keyof T;
      items.sort((a, b) => {
        if (a[field] < b[field]) return desc ? 1 : -1;
        if (a[field] > b[field]) return desc ? -1 : 1;
        return 0;
      });
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return items;
  }

  async get(id: string): Promise<T | null> {
    await delay();
    const items = this._getAll();
    return items.find(i => i.id === id) || null;
  }

  async create(data: Omit<T, 'id' | 'created_date'>): Promise<T> {
    await delay();
    const items = this._getAll();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      created_date: new Date().toISOString(),
      ...data
    } as unknown as T;
    items.push(newItem);
    this._saveAll(items);
    return newItem;
  }

  async update(id: string, updates: Partial<T>): Promise<T> {
    await delay();
    const items = this._getAll();
    const index = items.findIndex(i => i.id === id);
    if (index === -1) throw new Error(`${this.entityName} not found`);

    items[index] = { ...items[index], ...updates };
    this._saveAll(items);
    return items[index];
  }

  async delete(id: string): Promise<boolean> {
    await delay();
    let items = this._getAll();
    const initialLength = items.length;
    items = items.filter(i => i.id !== id);
    if (items.length === initialLength) return false;
    this._saveAll(items);
    return true;
  }
}
