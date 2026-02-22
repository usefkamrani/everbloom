// Helper: convert Persian/Arabic-Indic digits to ASCII digits
export function toEnglishDigits(input: string) {
  const map: Record<string, string> = {
    // Persian digits
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
    // Arabic-Indic digits
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };
  return String(input).replace(/[۰-۹٠-٩]/g, (d) => map[d] ?? d);
}

export function formatPrice(
  value: number | string,
  opts?: { currency?: string | null; minimumFractionDigits?: number }
) {
  const rawNumber =
    typeof value === "number"
      ? value
      : Number(toEnglishDigits(String(value)).replace(/[^0-9.-]+/g, ""));

  if (Number.isNaN(rawNumber)) return String(value);

  const { currency = null, minimumFractionDigits = 0 } = opts || {};

  if (currency) {
    return new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency,
      minimumFractionDigits,
      maximumFractionDigits: minimumFractionDigits,
    }).format(rawNumber);
  }

  return new Intl.NumberFormat("fa-IR", {
    minimumFractionDigits,
    maximumFractionDigits: minimumFractionDigits,
  }).format(rawNumber);
}

export default formatPrice;