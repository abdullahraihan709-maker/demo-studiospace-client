export type SessionUser = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  /** Present once a user creates their first listing. */
  isHost?: boolean;
};

/** First letters of the first two words — "Ada Lovelace" → "AL". */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "SS";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
