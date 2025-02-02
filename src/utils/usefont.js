import { computed } from "vue";
import { useI18n } from "vue-i18n";

export function useFont() {
  const { locale } = useI18n();

  const fontFamily = computed(() => {
    return locale.value === "kh"
      ? "'Noto Serif Khmer', serif"
      : "'Inter', 'Montserrat', sans-serif"; // Empty means fall back to default CSS font
  });

  return fontFamily;
}
