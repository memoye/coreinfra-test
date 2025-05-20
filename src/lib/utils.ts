import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shortens a number to a more readable format with suffix (K, M, B, T)
 * Examples:
 * 1000 -> 1K
 * 9300000 -> 9.3M
 * 1500000000 -> 1.5B
 *
 * @param value The number to format
 * @param precision Number of decimal places to show (default 1)
 * @returns Formatted string with appropriate suffix
 */
export function shortenNumber(value: number, precision: number = 1): string {
  // Handle special cases
  if (value === 0) return "0";
  if (!value || isNaN(value)) return "0";

  // For negative numbers, we'll format the absolute value and add the negative sign
  const isNegative = value < 0;
  const absValue = Math.abs(value);

  // Define the suffixes and their corresponding thresholds
  const suffixes = [
    { value: 1e12, symbol: "T" }, // Trillion
    { value: 1e9, symbol: "B" }, // Billion
    { value: 1e6, symbol: "M" }, // Million
    { value: 1e3, symbol: "K" }, // Thousand
    { value: 1, symbol: "" }, // No suffix
  ];

  // Find the appropriate suffix
  const suffix = suffixes.find((s) => absValue >= s.value);

  if (!suffix) return "0"; // Fallback for very small numbers

  // Calculate the formatted value
  const formattedValue = (absValue / suffix.value).toFixed(precision);

  // Remove trailing zeros and decimal point if not needed
  const trimmedValue = formattedValue.replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");

  // Construct the final result with negative sign if necessary
  return `${isNegative ? "-" : ""}${trimmedValue}${suffix.symbol}`;
}

/**
 * Formats a number as currency with various options
 *
 * @param value The number to format as currency
 * @param options Configuration options for formatting
 * @returns Formatted currency string
 */
export function formatCurrency(
  value: number,
  options: {
    currency?: string; // Currency code (USD, EUR, GBP, etc.)
    locale?: string; // Locale code (en-US, fr-FR, etc.)
    showSymbol?: boolean; // Whether to include the currency symbol
    showCode?: boolean; // Whether to include the currency code
    minimumFractionDigits?: number; // Minimum number of decimal places
    maximumFractionDigits?: number; // Maximum number of decimal places
    compact?: boolean; // Whether to use compact notation (e.g., $1.2M)
    shorten?: boolean; // Whether to shorten the number with K, M, B, T suffixes
    shortenPrecision?: number; // Precision for shortened numbers
  } = { locale: "en-NG" },
): string {
  // Default options
  const {
    currency = "USD",
    locale = "en-US",
    showSymbol = true,
    showCode = false,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    compact = false,
    shorten = false,
    shortenPrecision = 1,
  } = options;

  // Handle invalid input
  if (value === null || value === undefined || isNaN(value)) {
    return "N/A";
  }

  // If shortening is enabled, use custom shortening logic
  if (shorten) {
    const absValue = Math.abs(value);
    let formattedNumber = "";
    let suffix = "";

    // Define thresholds for shortening
    if (absValue >= 1e12) {
      formattedNumber = (value / 1e12).toFixed(shortenPrecision);
      suffix = "T";
    } else if (absValue >= 1e9) {
      formattedNumber = (value / 1e9).toFixed(shortenPrecision);
      suffix = "B";
    } else if (absValue >= 1e6) {
      formattedNumber = (value / 1e6).toFixed(shortenPrecision);
      suffix = "M";
    } else if (absValue >= 1e3) {
      formattedNumber = (value / 1e3).toFixed(shortenPrecision);
      suffix = "K";
    } else {
      formattedNumber = value.toFixed(maximumFractionDigits);
    }

    // Remove trailing zeros and decimal point if not needed
    formattedNumber = formattedNumber.replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");

    // Add currency symbol if needed
    if (showSymbol) {
      try {
        // Get just the currency symbol
        const symbolFormatter = new Intl.NumberFormat(locale, {
          style: "currency",
          currency,
          currencyDisplay: "symbol",
        });

        // Extract just the symbol by formatting 0 and removing digits/other chars
        const symbol = symbolFormatter
          .format(0)
          .replace(/[0-9.,\s]/g, "")
          .trim();

        return `${symbol}${formattedNumber}${suffix}`;
      } catch (error) {
        // Fallback to currency code if can't get symbol
        return showCode
          ? `${currency} ${formattedNumber}${suffix}`
          : `${formattedNumber}${suffix}`;
      }
    }

    // Just add currency code if requested
    if (showCode) {
      return `${formattedNumber}${suffix} ${currency}`;
    }

    return `${formattedNumber}${suffix}`;
  }

  try {
    // Format options for Intl.NumberFormat
    const formatOptions: Intl.NumberFormatOptions = {
      minimumFractionDigits,
      maximumFractionDigits,
    };

    // Add currency display options
    if (showSymbol) {
      formatOptions.style = "currency";
      formatOptions.currency = currency;
      formatOptions.currencyDisplay = showCode ? "code" : "symbol";
    }

    // Add compact display option if requested
    if (compact) {
      formatOptions.notation = "compact";
      formatOptions.compactDisplay = "short";
    }

    // Create formatter with locale and options
    const formatter = new Intl.NumberFormat(locale, formatOptions);

    // Format the number
    let result = formatter.format(value);

    // If not showing the symbol but want to show the code, manually add the code
    if (!showSymbol && showCode) {
      result = `${result} ${currency}`;
    }

    return result;
  } catch (error) {
    // Fallback in case of errors with Intl API
    console.error("Error formatting currency:", error);
    return `${value.toFixed(minimumFractionDigits)} ${currency}`;
  }
}
