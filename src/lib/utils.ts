// Utility to merge class names safely
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Format numbers into currency (USD by default)
export function formatPrice(value: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}

// Optional helper for smooth scrolling navigation
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
