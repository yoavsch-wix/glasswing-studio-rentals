import { items } from "@wix/data";
import { auth } from "@wix/essentials";

/* Wix CMS read helpers. Every query is elevated (collection permissions vary)
   and wrapped in try/catch so a transient SSR failure renders an empty section
   instead of truncating the page. Fields sit directly on each item. */

export interface GearItem {
  _id: string;
  name: string;
  category: string;
  studio: string;
  included: boolean;
  hourlyAddOn: string;
  specNote: string;
  orderIndex?: number;
}

export interface StoryBlock {
  _id: string;
  heading: string;
  body: string;
}

export interface Reference {
  _id: string;
  name: string;
  quote: string;
  detail: string;
  orderIndex?: number;
}

export async function getGear(): Promise<GearItem[]> {
  try {
    const elevated = auth.elevate(items.query);
    const { items: results } = await elevated("GearItem")
      .ascending("orderIndex")
      .limit(50)
      .find();
    return results as unknown as GearItem[];
  } catch (err) {
    console.error("[cms:GearItem] query failed:", err);
    return [];
  }
}

export async function getStory(): Promise<StoryBlock | null> {
  try {
    const elevated = auth.elevate(items.query);
    const { items: results } = await elevated("StoryBlock").limit(1).find();
    return (results[0] as unknown as StoryBlock) ?? null;
  } catch (err) {
    console.error("[cms:StoryBlock] query failed:", err);
    return null;
  }
}

export async function getReferences(): Promise<Reference[]> {
  try {
    const elevated = auth.elevate(items.query);
    const { items: results } = await elevated("Reference")
      .ascending("orderIndex")
      .limit(20)
      .find();
    return results as unknown as Reference[];
  } catch (err) {
    console.error("[cms:Reference] query failed:", err);
    return [];
  }
}
