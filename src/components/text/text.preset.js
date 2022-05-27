import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const LOGO_FONT = {
  fontFamily: typography.logoFont,
  fontSize: 44,
  color: colors.indigo,
};
const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.purple,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  color: colors.violet,
};

const btnTetx = {
  fontFamily: typography.primaryBold,
  color: colors.white,
  fontSize: 16,
};

export const presets = {
  default: BASE,
  logo: LOGO_FONT,

  h1: {
    ...BASE_BOLD,
    fontSize: 34,
  },
  h2: {
    ...BASE_BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...btnTetx
  },
};
