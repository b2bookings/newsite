/* @ds-bundle: {"format":4,"namespace":"SolutionGroupDesignSystem_441f31","components":[{"name":"Droplet","sourcePath":"components/brand/Droplet.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"WaveDivider","sourcePath":"components/brand/WaveDivider.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"MetricTile","sourcePath":"components/data/MetricTile.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Droplet.jsx":"82591684dc64","components/brand/Eyebrow.jsx":"edb733cb281e","components/brand/Logo.jsx":"104db65618ba","components/brand/WaveDivider.jsx":"5a553fa1a1d3","components/core/Badge.jsx":"a84ea3d753a1","components/core/Button.jsx":"e0af7195104e","components/core/Card.jsx":"bb9c58e7d582","components/core/Icon.jsx":"2840498dc927","components/core/IconButton.jsx":"3f0b95fdaeb5","components/core/Tag.jsx":"4ead2b700965","components/data/DataTable.jsx":"3af0cee951c7","components/data/MetricTile.jsx":"3b9f457ed567","components/data/Sparkline.jsx":"8135fd2e0dd0","components/feedback/Alert.jsx":"f2bf8721e1f0","components/feedback/Dialog.jsx":"5500d35b9059","components/feedback/StatusPill.jsx":"f21e41b89926","components/feedback/Tooltip.jsx":"a150b61d6dad","components/forms/Checkbox.jsx":"01f042d6680f","components/forms/Field.jsx":"e5631b8035d1","components/forms/Input.jsx":"08a2971acc54","components/forms/Radio.jsx":"7709615b86a7","components/forms/Select.jsx":"64cad2c47112","components/forms/Switch.jsx":"703c847cffa9","components/navigation/SidebarNav.jsx":"0e55af1e3d5a","components/navigation/Tabs.jsx":"3d9262c90816","doc-page.js":"f52ae9c02fca","ds-base.js":"637a8022b688","ui_kits/opticlear/AlarmsScreen.jsx":"96c7c8b3ac5f","ui_kits/opticlear/OverviewScreen.jsx":"de372e6eb643","ui_kits/opticlear/PlaceholderScreen.jsx":"3876911cb6c0","ui_kits/opticlear/ReportsScreen.jsx":"8ba4a3add67f","ui_kits/opticlear/Shell.jsx":"a816c3ad71f6","ui_kits/opticlear/SiteDetailScreen.jsx":"0f6a0e233456","ui_kits/opticlear/SitesScreen.jsx":"28a4f58aa854","ui_kits/opticlear/data.js":"c7dac3fa8eb6","ui_kits/website/ContactScreen.jsx":"a01eb7956788","ui_kits/website/HomeScreen.jsx":"2304f7f3334f","ui_kits/website/OptiClearScreen.jsx":"6c0671d214af","ui_kits/website/Pages.jsx":"8cb72b68985a","ui_kits/website/ServicesScreen.jsx":"ccb8f2ae7e93","ui_kits/website/Site.jsx":"60d39f30268d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolutionGroupDesignSystem_441f31 = window.SolutionGroupDesignSystem_441f31 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Droplet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The droplet silhouette: a rectangle with three fully-rounded corners and one square
   corner. Taken from assets/brand-elements/circular-droplet.svg,
   presentation-shape-droplet.svg and white-blue-droplet.svg.

   The rounding is an absolute length, never a percentage: percentage radii scale with
   each axis, so a stretched box gets an elliptical, distorted corner. An absolute
   radius is clamped by the browser to half the shorter side, so the droplet keeps its
   proportions and simply reads as a stretched droplet on wide or tall boxes. */
/* The square corner is always the top left. */
const squareTopLeft = r => '0 ' + r + ' ' + r + ' ' + r;

/* '%' radii distort on non-square boxes, so they are coerced to a length. */
const toLength = r => {
  if (r == null || r === 'full') return '9999px';
  const s = String(r).trim();
  return s.endsWith('%') ? '9999px' : s;
};
const TONES = {
  light: {
    background: 'var(--sg-light-blue)'
  },
  blue: {
    background: 'var(--sg-blue)',
    color: 'var(--sg-white)'
  },
  navy: {
    background: 'var(--sg-navy)',
    color: 'var(--sg-white)'
  },
  gray: {
    background: 'var(--sg-gray)'
  },
  white: {
    background: 'var(--sg-white)'
  },
  outline: {
    background: 'var(--sg-white)',
    boxShadow: 'inset 0 0 0 3px var(--sg-blue)'
  },
  gradient: {
    background: 'linear-gradient(180deg,var(--sg-light-blue) 0%,var(--sg-blue) 47%,var(--sg-navy) 100%)',
    color: 'var(--sg-white)'
  }
};
function Droplet({
  children,
  src,
  alt = '',
  tone = 'light',
  radius = 'full',
  size,
  width,
  height,
  padding,
  style,
  ...rest
}) {
  const br = squareTopLeft(toLength(radius));
  const t = src ? {} : TONES[tone] || TONES.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: br,
      width: size != null ? size : width,
      height: size != null ? size : height,
      display: children ? 'flex' : 'block',
      flexDirection: 'column',
      justifyContent: 'center',
      padding,
      ...t,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Droplet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Droplet.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'blue',
  rule = true,
  style,
  ...rest
}) {
  const color = {
    blue: 'var(--sg-blue)',
    navy: 'var(--sg-navy)',
    light: 'var(--sg-light-blue)',
    muted: 'var(--text-muted)'
  }[tone] || 'var(--sg-blue)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color,
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 2,
      background: 'currentColor',
      borderRadius: 'var(--radius-pill)'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  main: {
    navy: 'sg_main-navy.svg',
    'navy-blue': 'sg_main-navy-blue.svg',
    black: 'sg_main-blk.svg',
    white: 'sg_main-white.svg',
    'white-blue': 'sg_main-white-blue.svg'
  },
  stacked: {
    navy: 'sg_stacked-navy.svg',
    'navy-blue': 'sg_stacked-navy-blue.svg',
    black: 'sg_stacked-blk.svg',
    white: 'sg_stacked-white.svg',
    'white-blue': 'sg_stacked-white-blue.svg'
  },
  tagline: {
    navy: 'sg_tagline-navy.svg',
    'navy-blue': 'sg_tagline-navy-blue.svg',
    black: 'sg_tagline-blk.svg',
    white: 'sg_tagline-white.svg',
    'white-blue': 'sg_tagline-white-blue.svg'
  },
  icon: {
    navy: 'sg_icon-navy.svg',
    'navy-blue': 'sg_icon-navy.svg',
    black: 'sg_icon-black.svg',
    white: 'sg_icon-white.svg',
    'white-blue': 'sg_icon-blue.svg',
    blue: 'sg_icon-blue.svg',
    light: 'sg_icon-light.svg',
    gray: 'sg_icon-gray.svg'
  },
  opticlear: {
    navy: 'opticlear-blue-navy.svg',
    'navy-blue': 'opticlear-blue-navy.svg',
    black: 'opticlear-blk.svg',
    white: 'opticlear-white.svg',
    'white-blue': 'opticlear-white-light.svg',
    light: 'opticlear-white-light.svg'
  },
  'opticlear-lockup': {
    navy: 'opticlear-sg-lockup.svg',
    'navy-blue': 'opticlear-sg-lockup.svg',
    black: 'opticlear-sg-lockup.svg',
    white: 'opticlear-sg-lockup.svg',
    'white-blue': 'opticlear-sg-lockup.svg'
  }
};
// Minimum widths per brand guidelines p.9.
const MIN_WIDTH = {
  main: 120,
  tagline: 120,
  stacked: 60,
  icon: 25,
  opticlear: 120,
  'opticlear-lockup': 120
};
function Logo({
  variant = 'main',
  color = 'navy-blue',
  width,
  assetBase = '/assets/logos',
  alt,
  style,
  ...rest
}) {
  const set = FILES[variant] || FILES.main;
  const file = set[color] || set.navy || Object.values(set)[0];
  const min = MIN_WIDTH[variant] || 120;
  const w = width == null ? min * 1.6 : width;
  const label = alt != null ? alt : variant.indexOf('opticlear') === 0 ? 'OptiClear' : 'Solution Group';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + '/' + file,
    alt: label,
    width: w,
    style: {
      display: 'block',
      width: typeof w === 'number' ? w + 'px' : w,
      minWidth: min + 'px',
      height: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/WaveDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Geometry lifted verbatim from the supplied brand artwork:
   FILL / EDGE  → assets/brand-elements/wave-navy.svg (1920 × 558.08)
   LINE         → assets/brand-elements/wave-border.svg (2228.22 × 321) */
const EDGE = 'M1924.33,13.52c-143.81,2.58-309.74,18.64-459.61,67.76-91.27,27.33-177.23,66.96-266.72,98.64-265.06,93.82-561.59,115.67-840.35,61.93-112.19-21.63-221.59-55.16-335.26-69.43-41.94-5.27-17.81-7.64-60.4-5.85';
const FILL = EDGE + 'v407.39h1962.34V13.52Z';
const LINE = 'M829.68,321c-113.1,0-226.01-11.78-336.04-35.59-47.51-10.28-95.33-22.92-141.57-35.15-74.51-19.7-151.56-40.08-229.07-51-42.49-5.99-83.86-8.64-122.95-7.86l-.05-2.62c39.23-.77,80.74,1.88,123.37,7.89,77.67,10.94,154.79,31.34,229.38,51.06,46.22,12.22,94.01,24.86,141.45,35.12,306.92,66.4,636.67,39.12,928.51-76.8,38.93-15.46,77.91-32.74,115.6-49.46,58.09-25.75,118.16-52.39,179.41-72.97C1810.33,49.56,1974.09,7.39,2228.14,0l.08,2.62c-253.7,7.38-417.17,49.47-509.63,83.48-61.18,20.55-121.19,47.16-179.22,72.89-37.71,16.72-76.71,34.02-115.69,49.5-187.69,74.55-391.1,112.51-593.99,112.51Z';
const TONES = {
  navy: 'var(--sg-navy)',
  blue: 'var(--sg-blue)',
  light: 'var(--sg-light-blue)',
  gray: 'var(--sg-gray)',
  white: 'var(--sg-white)'
};
function WaveDivider({
  tone = 'navy',
  mode = 'fill',
  edgeTone = 'blue',
  height = 180,
  flip = false,
  flipY = false,
  style,
  ...rest
}) {
  const fill = TONES[tone] || TONES.navy;
  const edge = TONES[edgeTone] || TONES.blue;
  const transform = [flip ? 'scaleX(-1)' : '', flipY ? 'scaleY(-1)' : ''].filter(Boolean).join(' ');
  const wrap = {
    width: '100%',
    lineHeight: 0,
    transform: transform || undefined,
    ...style
  };
  if (mode === 'line') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: wrap
    }, rest), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 2228.22 321",
      width: "100%",
      height: height,
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      focusable: "false"
    }, /*#__PURE__*/React.createElement("path", {
      d: LINE,
      fill: edge
    })));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1962.34 558.08",
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("path", {
    d: FILL,
    fill: fill
  }), mode === 'fill-edge' ? /*#__PURE__*/React.createElement("path", {
    d: EDGE,
    fill: "none",
    stroke: edge,
    strokeWidth: "7",
    vectorEffect: "non-scaling-stroke"
  }) : null));
}
Object.assign(__ds_scope, { WaveDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'default',
  interactive = false,
  padding = 'md',
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const pad = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  }[padding];
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    accent: {
      background: 'var(--surface-accent)',
      border: '1px solid var(--blue-300)',
      color: 'var(--text-body)'
    },
    navy: {
      background: 'var(--surface-navy)',
      border: '1px solid transparent',
      color: 'var(--text-inverse)'
    },
    gradient: {
      background: 'var(--gradient-navy-blue)',
      border: '1px solid transparent',
      color: 'var(--text-inverse)'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pad,
      overflow: 'hidden',
      boxShadow: interactive && hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: interactive && hovered ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)',
      ...tones,
      ...(interactive && hovered && tone === 'default' ? {
        borderColor: 'var(--border-accent)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucide outline icons (2px stroke, no fills) — the closest CDN match to the brand's
 * "clean, medium-weight outlines rather than filled shapes" rule. Load the UMD build
 * once per page: <script src="https://unpkg.com/lucide@0.446.0/dist/umd/lucide.js">
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    try {
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth
        },
        root: host
      });
    } catch (e) {}
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "img",
    "aria-hidden": rest['aria-label'] ? undefined : 'true',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'neutral',
  icon,
  size = 'md',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--gray-100)',
      color: 'var(--text-body)'
    },
    navy: {
      background: 'var(--sg-navy)',
      color: 'var(--sg-white)'
    },
    blue: {
      background: 'var(--sg-blue)',
      color: 'var(--sg-white)'
    },
    light: {
      background: 'var(--sg-light-blue)',
      color: 'var(--sg-navy)'
    },
    ok: {
      background: 'var(--status-ok-surface)',
      color: 'var(--status-ok)'
    },
    watch: {
      background: 'var(--status-watch-surface)',
      color: 'var(--status-watch)'
    },
    alarm: {
      background: 'var(--status-alarm-surface)',
      color: 'var(--status-alarm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--sg-navy)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)'
    }
  }[tone] || {};
  const dims = size === 'sm' ? {
    padding: '2px 8px',
    fontSize: 'var(--text-micro)',
    iconSize: 11
  } : {
    padding: '4px 11px',
    fontSize: 'var(--text-caption)',
    iconSize: 13
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: dims.padding,
      borderRadius: 'var(--radius-pill)',
      fontSize: dims.fontSize,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...tones,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: dims.iconSize,
    strokeWidth: 2
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-body-sm)',
    gap: 'var(--space-2)',
    icon: 16,
    minHeight: 36
  },
  md: {
    padding: '11px 22px',
    fontSize: 'var(--text-body-md)',
    gap: 'var(--space-2)',
    icon: 18,
    minHeight: 44
  },
  lg: {
    padding: '15px 30px',
    fontSize: 'var(--text-body-lg)',
    gap: 'var(--space-3)',
    icon: 20,
    minHeight: 52
  }
};
function tone(variant, hovered, pressed) {
  switch (variant) {
    case 'secondary':
      return {
        background: pressed ? 'var(--action-secondary-press)' : hovered ? 'var(--action-secondary-hover)' : 'var(--action-secondary)',
        color: 'var(--sg-white)',
        border: '1px solid transparent'
      };
    case 'outline':
      return {
        background: hovered ? 'var(--surface-accent)' : 'transparent',
        color: 'var(--sg-navy)',
        border: '1px solid ' + (hovered ? 'var(--sg-navy)' : 'var(--border-default)')
      };
    case 'ghost':
      return {
        background: hovered ? 'var(--surface-accent)' : 'transparent',
        color: 'var(--sg-navy)',
        border: '1px solid transparent'
      };
    case 'inverse':
      return {
        background: pressed ? 'var(--blue-300)' : hovered ? 'var(--sg-light-blue)' : 'var(--sg-white)',
        color: 'var(--sg-navy)',
        border: '1px solid transparent'
      };
    case 'inverse-outline':
      return {
        background: hovered ? 'rgba(255,255,255,.12)' : 'transparent',
        color: 'var(--sg-white)',
        border: '1px solid ' + (hovered ? 'var(--sg-white)' : 'var(--border-inverse)')
      };
    default:
      return {
        background: pressed ? 'var(--action-primary-press)' : hovered ? 'var(--action-primary-hover)' : 'var(--action-primary)',
        color: 'var(--sg-white)',
        border: '1px solid transparent'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = tone(variant, hovered && !disabled, pressed && !disabled);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      minHeight: s.minHeight,
      fontFamily: 'var(--font-core)',
      fontSize: s.fontSize,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'var(--transition-control)',
      transform: pressed && !disabled ? 'translateY(1px)' : 'none',
      boxShadow: variant === 'primary' || variant === 'secondary' ? hovered && !disabled ? 'var(--shadow-md)' : 'var(--shadow-xs)' : 'none',
      ...t,
      ...(disabled ? {
        background: variant === 'outline' || variant === 'ghost' ? 'transparent' : 'var(--action-disabled)',
        color: 'var(--action-disabled-text)',
        borderColor: variant === 'outline' ? 'var(--border-default)' : 'transparent',
        boxShadow: 'none'
      } : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 22
  }
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const looks = {
    ghost: {
      background: hovered ? 'var(--surface-accent)' : 'transparent',
      color: 'var(--sg-navy)',
      border: '1px solid transparent'
    },
    outline: {
      background: hovered ? 'var(--surface-accent)' : 'var(--surface-card)',
      color: 'var(--sg-navy)',
      border: '1px solid ' + (hovered ? 'var(--sg-navy)' : 'var(--border-default)')
    },
    solid: {
      background: hovered ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--sg-white)',
      border: '1px solid transparent'
    },
    inverse: {
      background: hovered ? 'rgba(255,255,255,.16)' : 'transparent',
      color: 'var(--sg-white)',
      border: '1px solid transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    title: label,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: 'var(--radius-circle)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      opacity: disabled ? .45 : 1,
      ...looks,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: onRemove ? '5px 6px 5px 12px' : '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      background: selected ? 'var(--sg-navy)' : hovered && onClick ? 'var(--surface-accent)' : 'var(--surface-card)',
      color: selected ? 'var(--sg-white)' : 'var(--text-body)',
      border: '1px solid ' + (selected ? 'var(--sg-navy)' : 'var(--border-default)'),
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-circle)',
      background: selected ? 'rgba(255,255,255,.18)' : 'var(--gray-100)',
      color: 'inherit',
      cursor: 'pointer',
      border: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12,
    strokeWidth: 2.25
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  dense = false,
  style,
  ...rest
}) {
  const [hoverRow, setHoverRow] = React.useState(-1);
  const pad = dense ? '9px var(--space-4)' : '14px var(--space-4)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflowX: 'auto',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      background: 'var(--surface-subtle)',
      borderBottom: '1px solid var(--border-default)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id != null ? r.id : i,
    onClick: onRowClick ? () => onRowClick(r) : undefined,
    onMouseEnter: () => setHoverRow(i),
    onMouseLeave: () => setHoverRow(-1),
    style: {
      background: hoverRow === i && onRowClick ? 'var(--surface-accent)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : 'normal'
    }
  }, c.render ? c.render(r) : r[c.key])))), rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: 'var(--space-12)',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "inbox",
    size: 24,
    style: {
      margin: '0 auto var(--space-2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)'
    }
  }, "Nothing to show"))) : null)));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricTile({
  label,
  value,
  unit,
  delta,
  trend,
  status = 'ok',
  icon,
  footnote,
  style,
  ...rest
}) {
  const accent = {
    ok: 'var(--status-ok)',
    watch: 'var(--status-watch)',
    alarm: 'var(--status-alarm)',
    offline: 'var(--status-offline)'
  }[status] || 'var(--status-ok)';
  const trendIcon = trend === 'up' ? 'trending-up' : trend === 'down' ? 'trending-down' : 'minus';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sg-blue)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-heading)',
      color: status === 'ok' ? 'var(--sg-navy)' : accent,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, unit) : null), delta != null || footnote ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, delta != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      color: trend === 'flat' ? 'var(--text-muted)' : accent,
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trendIcon,
    size: 14,
    strokeWidth: 2
  }), delta) : null, footnote ? /*#__PURE__*/React.createElement("span", null, footnote) : null) : null);
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sparkline({
  data = [],
  width = 160,
  height = 44,
  tone = 'blue',
  fill = true,
  limit,
  style,
  ...rest
}) {
  if (!data.length) return null;
  const stroke = {
    blue: 'var(--sg-blue)',
    navy: 'var(--sg-navy)',
    ok: 'var(--status-ok)',
    watch: 'var(--status-watch)',
    alarm: 'var(--status-alarm)'
  }[tone] || 'var(--sg-blue)';
  const min = Math.min(...data, limit != null ? limit : Infinity);
  const max = Math.max(...data, limit != null ? limit : -Infinity);
  const span = max - min || 1;
  const pad = 3;
  const x = i => pad + i * (width - pad * 2) / (data.length - 1 || 1);
  const y = v => height - pad - (v - min) / span * (height - pad * 2);
  const line = data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 ' + width + ' ' + height,
    width: width,
    height: height,
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), fill ? /*#__PURE__*/React.createElement("path", {
    d: line + ' L' + x(data.length - 1).toFixed(1) + ',' + height + ' L' + pad + ',' + height + ' Z',
    fill: stroke,
    opacity: ".12"
  }) : null, limit != null ? /*#__PURE__*/React.createElement("line", {
    x1: pad,
    x2: width - pad,
    y1: y(limit),
    y2: y(limit),
    stroke: "var(--status-alarm)",
    strokeWidth: "1",
    strokeDasharray: "3 3",
    opacity: ".6"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: stroke,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x(data.length - 1),
    cy: y(data[data.length - 1]),
    r: "2.75",
    fill: stroke
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    icon: 'info',
    color: 'var(--sg-navy)',
    surface: 'var(--surface-accent)',
    border: 'var(--blue-300)'
  },
  ok: {
    icon: 'check-circle-2',
    color: 'var(--status-ok)',
    surface: 'var(--status-ok-surface)',
    border: '#b9ddd0'
  },
  watch: {
    icon: 'alert-triangle',
    color: 'var(--status-watch)',
    surface: 'var(--status-watch-surface)',
    border: '#f0dcb0'
  },
  alarm: {
    icon: 'alert-octagon',
    color: 'var(--status-alarm)',
    surface: 'var(--status-alarm-surface)',
    border: '#f0c4c0'
  }
};
function Alert({
  title,
  children,
  tone = 'info',
  icon,
  onDismiss,
  action,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === 'alarm' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      padding: 'var(--space-4) var(--space-5)',
      borderRadius: 'var(--radius-md)',
      background: t.surface,
      border: '1px solid ' + t.border,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: t.color
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose(e);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(0,38,59,.55)',
      backdropFilter: 'blur(3px)',
      animation: 'sg-fade var(--duration-base) var(--ease-standard)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: '85vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--sg-navy)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)'
    }
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--space-5)'
    }
  }), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATES = {
  ok: {
    label: 'Normal',
    color: 'var(--status-ok)',
    surface: 'var(--status-ok-surface)'
  },
  watch: {
    label: 'Watch',
    color: 'var(--status-watch)',
    surface: 'var(--status-watch-surface)'
  },
  alarm: {
    label: 'Alarm',
    color: 'var(--status-alarm)',
    surface: 'var(--status-alarm-surface)'
  },
  offline: {
    label: 'Offline',
    color: 'var(--status-offline)',
    surface: 'var(--status-offline-surface)'
  }
};
function StatusPill({
  status = 'ok',
  label,
  pulse = false,
  style,
  ...rest
}) {
  const s = STATES[status] || STATES.ok;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '4px 12px 4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: s.surface,
      color: s.color,
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-circle)',
      background: 'currentColor',
      boxShadow: pulse ? '0 0 0 3px ' + s.surface : 'none',
      animation: pulse ? 'sg-pulse 1.8s var(--ease-standard) infinite' : 'none'
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--navy-900)',
      color: 'var(--sg-white)',
      fontSize: 'var(--text-caption)',
      lineHeight: 1.35,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden',
      transition: 'opacity var(--duration-fast) var(--ease-standard)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  description,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    if (onChange) onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--sg-navy)' : 'var(--surface-card)',
      border: '1px solid ' + (on ? 'var(--sg-navy)' : 'var(--border-strong)'),
      color: 'var(--sg-white)',
      transition: 'var(--transition-control)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.5
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--sg-navy)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-alarm)',
      marginLeft: 3
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--status-alarm)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  fontFamily: 'var(--font-core)',
  fontSize: 'var(--text-body-md)',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 14px',
  minHeight: 44,
  transition: 'var(--transition-control)',
  outline: 'none'
};
function Input({
  icon,
  invalid = false,
  disabled = false,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const border = invalid ? 'var(--status-alarm)' : focused ? 'var(--sg-blue)' : 'var(--border-default)';
  const shared = {
    ...fieldBase,
    borderColor: border,
    boxShadow: focused ? 'var(--ring-focus)' : 'none',
    paddingLeft: icon ? 42 : fieldBase.padding.split(' ')[1],
    background: disabled ? 'var(--surface-sunken)' : fieldBase.background,
    color: disabled ? 'var(--text-subtle)' : fieldBase.color,
    cursor: disabled ? 'not-allowed' : 'text',
    ...style
  };
  const handlers = {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    disabled
  };
  if (multiline) return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, handlers, rest, {
    style: {
      ...shared,
      minHeight: 'auto',
      resize: 'vertical',
      lineHeight: 'var(--leading-normal)'
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-subtle)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("input", _extends({}, handlers, rest, {
    style: shared
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const pick = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    if (onChange) onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-6)' : 'var(--space-3)',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      onChange: () => pick(v),
      disabled: disabled,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-circle)',
        background: 'var(--surface-card)',
        border: '1px solid ' + (on ? 'var(--sg-navy)' : 'var(--border-strong)'),
        transition: 'var(--transition-control)'
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 'var(--radius-circle)',
        background: 'var(--sg-navy)'
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  fontFamily: 'var(--font-core)',
  fontSize: 'var(--text-body-md)',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 14px',
  minHeight: 44,
  transition: 'var(--transition-control)',
  outline: 'none'
};
function Select({
  options = [],
  invalid = false,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...fieldBase,
      appearance: 'none',
      paddingRight: 42,
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderColor: invalid ? 'var(--status-alarm)' : focused ? 'var(--sg-blue)' : 'var(--border-default)',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  description,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    if (onChange) onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 44,
      height: 24,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      padding: 0,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (on ? 'var(--sg-navy)' : 'var(--border-strong)'),
      background: on ? 'var(--sg-navy)' : 'var(--gray-200)',
      cursor: 'inherit',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--sg-white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items = [],
  value,
  defaultValue,
  onChange,
  header,
  footer,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : (items[0] || {}).value);
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    if (onChange) onChange(v);
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      width: 248,
      flex: '0 0 auto',
      padding: 'var(--space-6) var(--space-4)',
      background: 'var(--surface-navy)',
      color: 'var(--text-inverse)',
      ...style
    }
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-2)'
    }
  }, header) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, items.map(it => {
    if (it.section) return /*#__PURE__*/React.createElement("div", {
      key: it.section,
      style: {
        padding: 'var(--space-4) var(--space-3) var(--space-2)',
        fontSize: 'var(--text-micro)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--blue-400)'
      }
    }, it.section);
    const on = current === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => pick(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        width: '100%',
        padding: '10px var(--space-3)',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        background: on ? 'rgba(202,240,248,.14)' : 'transparent',
        color: on ? 'var(--sg-white)' : 'var(--text-inverse-muted)',
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--status-alarm)',
        color: 'var(--sg-white)',
        fontSize: 'var(--text-micro)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, it.badge) : null);
  })), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const ids = tabs.map(t => typeof t === 'string' ? t : t.value);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : ids[0]);
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    if (onChange) onChange(v);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: pill ? 'var(--space-1)' : 'var(--space-6)',
      padding: pill ? 4 : 0,
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), tabs.map(t => {
    const v = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const icon = typeof t === 'string' ? null : t.icon;
    const count = typeof t === 'string' ? null : t.count;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: pill ? '8px 18px' : '0 0 12px',
        border: 0,
        background: pill ? on ? 'var(--surface-card)' : 'transparent' : 'transparent',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: on ? 'var(--sg-navy)' : 'var(--text-muted)',
        cursor: 'pointer',
        marginBottom: pill ? 0 : -1,
        borderBottom: pill ? 'none' : '2px solid ' + (on ? 'var(--sg-blue)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 16
    }) : null, label, count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--sg-light-blue)' : 'var(--gray-100)',
        color: on ? 'var(--sg-navy)' : 'var(--text-muted)',
        fontSize: 'var(--text-micro)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ds-base.js
try { (() => {
(() => {
  if (window.SolutionGroupDesignSystem_441f31) return;
  if (document.querySelector('script[src$="_ds_bundle.js"]')) return;
  const here = document.currentScript && document.currentScript.src;
  let base;
  if (here) base = new URL('.', here).href;else {
    const m = location.href.split('/serve/');
    if (m.length < 2) return;
    base = m[0] + '/serve/';
  }
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = base + 'styles.css';
  document.head.appendChild(l);
  const s = document.createElement('script');
  s.src = base + '_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-base.js", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/AlarmsScreen.jsx
try { (() => {
(function () {
  const {
    DataTable,
    StatusPill,
    Button,
    Tabs,
    Badge,
    Dialog,
    Field,
    Input,
    Alert,
    Icon
  } = window.SolutionGroupDesignSystem_441f31;
  function AlarmsScreen() {
    const [tab, setTab] = React.useState('open');
    const [ackOpen, setAckOpen] = React.useState(null);
    const [acked, setAcked] = React.useState([]);
    const all = window.OC_ALARMS.map(a => ({
      ...a,
      ack: a.ack || acked.indexOf(a.id) > -1
    }));
    const rows = tab === 'open' ? all.filter(a => !a.ack) : tab === 'ack' ? all.filter(a => a.ack) : all;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
      title: "Alarms",
      subtitle: all.filter(a => !a.ack).length + ' unacknowledged across 4 sites',
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "outline",
        icon: "settings-2"
      }, "Thresholds")
    }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(Tabs, {
      tabs: [{
        value: 'open',
        label: 'Open',
        count: all.filter(a => !a.ack).length
      }, {
        value: 'ack',
        label: 'Acknowledged',
        count: all.filter(a => a.ack).length
      }, {
        value: 'all',
        label: 'All'
      }],
      value: tab,
      onChange: setTab
    }), tab === 'open' && rows.length === 0 ? /*#__PURE__*/React.createElement(Alert, {
      tone: "ok",
      title: "Nothing open"
    }, "Every alarm has been acknowledged.") : null, /*#__PURE__*/React.createElement(Panel, {
      padding: "0"
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: 'time',
        label: 'Time'
      }, {
        key: 'severity',
        label: 'Severity',
        render: r => /*#__PURE__*/React.createElement(StatusPill, {
          status: r.severity,
          label: r.severity === 'ok' ? 'Cleared' : undefined,
          pulse: r.severity === 'alarm' && !r.ack
        })
      }, {
        key: 'site',
        label: 'Site'
      }, {
        key: 'tag',
        label: 'Tag'
      }, {
        key: 'message',
        label: 'Condition'
      }, {
        key: 'value',
        label: 'Value',
        align: 'right'
      }, {
        key: 'action',
        label: '',
        align: 'right',
        render: r => r.ack ? /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 'var(--text-caption)',
            color: 'var(--text-muted)'
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 14
        }), "Acknowledged") : /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "outline",
          onClick: () => setAckOpen(r)
        }, "Acknowledge")
      }],
      rows: rows,
      style: {
        border: 'none',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement(Dialog, {
      open: !!ackOpen,
      title: "Acknowledge alarm",
      description: ackOpen ? ackOpen.site + ' · ' + ackOpen.tag : '',
      onClose: () => setAckOpen(null),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setAckOpen(null)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => {
          setAcked(acked.concat(ackOpen.id));
          setAckOpen(null);
        }
      }, "Acknowledge"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)',
        marginBottom: 'var(--space-4)'
      }
    }, ackOpen ? ackOpen.message : ''), /*#__PURE__*/React.createElement(Field, {
      label: "Operator note",
      hint: "Recorded in the compliance log"
    }, /*#__PURE__*/React.createElement(Input, {
      multiline: true,
      rows: 3,
      placeholder: "Action taken"
    })))));
  }
  Object.assign(window, {
    AlarmsScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/AlarmsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/OverviewScreen.jsx
try { (() => {
(function () {
  const {
    MetricTile,
    DataTable,
    StatusPill,
    Sparkline,
    Badge,
    Button,
    Alert,
    Icon,
    Tabs
  } = window.SolutionGroupDesignSystem_441f31;
  function OverviewScreen({
    setRoute,
    openSite
  }) {
    const [range, setRange] = React.useState('24h');
    const sites = window.OC_SITES;
    const alarms = window.OC_ALARMS.filter(a => !a.ack);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
      title: "Overview",
      subtitle: "4 sites \xB7 3 unacknowledged alarms \xB7 last sync 14:16",
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "outline",
        icon: "download"
      }, "Export")
    }), /*#__PURE__*/React.createElement(Content, null, alarms.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "alarm",
      title: alarms.length + ' active alarms need acknowledgement',
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => setRoute('alarms')
      }, "Review alarms")
    }, "Cedar Mill Industrial is outside permit limits on turbidity and pH.") : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Sites in spec",
      value: "2",
      unit: "of 4",
      icon: "map-pin",
      footnote: "1 alarm \xB7 1 watch \xB7 1 offline"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Total flow",
      value: "4.39",
      unit: "MGD",
      icon: "waves",
      delta: "\u22121.2% vs 24h",
      trend: "down"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Open alarms",
      value: "3",
      status: "alarm",
      icon: "bell",
      delta: "+3 today",
      trend: "up"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Permit compliance",
      value: "99.4",
      unit: "%",
      icon: "shield-check",
      delta: "flat",
      trend: "flat",
      footnote: "Rolling 30-day"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        gap: 'var(--space-6)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Sites",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        iconAfter: "arrow-right",
        onClick: () => setRoute('sites')
      }, "All sites"),
      padding: "0"
    }, /*#__PURE__*/React.createElement(DataTable, {
      onRowClick: r => openSite(r.id),
      columns: [{
        key: 'name',
        label: 'Site'
      }, {
        key: 'status',
        label: 'Status',
        render: r => /*#__PURE__*/React.createElement(StatusPill, {
          status: r.status,
          pulse: r.status === 'alarm'
        })
      }, {
        key: 'spark',
        label: 'Turbidity · 6h',
        render: r => /*#__PURE__*/React.createElement(Sparkline, {
          data: r.trend.turbidity,
          width: 120,
          height: 30,
          tone: r.status === 'alarm' ? 'alarm' : 'blue',
          limit: 5
        })
      }, {
        key: 'ph',
        label: 'pH',
        align: 'right'
      }, {
        key: 'flow',
        label: 'Flow',
        align: 'right'
      }, {
        key: 'updated',
        label: 'Updated',
        align: 'right'
      }],
      rows: sites,
      style: {
        border: 'none',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "Activity",
      action: /*#__PURE__*/React.createElement(Tabs, {
        variant: "pill",
        tabs: ['24h', '7d'],
        value: range,
        onChange: setRange
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, window.OC_ALARMS.slice(0, 5).map(a => /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 3,
        color: a.severity === 'alarm' ? 'var(--status-alarm)' : a.severity === 'watch' ? 'var(--status-watch)' : a.severity === 'offline' ? 'var(--status-offline)' : 'var(--status-ok)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.severity === 'ok' ? 'check-circle-2' : a.severity === 'offline' ? 'wifi-off' : 'alert-triangle',
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)'
      }
    }, a.message), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 2,
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, a.site, " \xB7 ", a.tag, " \xB7 ", a.time)))))))));
  }
  Object.assign(window, {
    OverviewScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/PlaceholderScreen.jsx
try { (() => {
(function () {
  const {
    Icon,
    Button
  } = window.SolutionGroupDesignSystem_441f31;
  function PlaceholderScreen({
    route,
    setRoute
  }) {
    const label = {
      trends: 'Trends',
      instruments: 'Instruments',
      permits: 'Permits'
    }[route] || route;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
      title: label
    }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--space-24) var(--space-8)',
        background: 'var(--surface-card)',
        border: '1px dashed var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layers",
      size: 30
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h4)'
      }
    }, label, " is intentionally blank"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, "The brand package defined no design for this view, so nothing has been invented. Build it from the Overview and Site detail patterns when the real design exists."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "arrow-left",
      onClick: () => setRoute('overview')
    }, "Back to overview")))));
  }
  Object.assign(window, {
    PlaceholderScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/PlaceholderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/ReportsScreen.jsx
try { (() => {
(function () {
  const {
    DataTable,
    Badge,
    Button,
    MetricTile,
    Select,
    Icon,
    Card
  } = window.SolutionGroupDesignSystem_441f31;
  function ReportsScreen() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
      title: "Reports",
      subtitle: "Compliance filings generated from plant data",
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        icon: "plus"
      }, "New report")
    }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Submitted YTD",
      value: "14",
      icon: "file-check",
      footnote: "All on time"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "In review",
      value: "1",
      icon: "clock",
      status: "watch"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Drafts",
      value: "1",
      icon: "file-text"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Next due",
      value: "Apr 20",
      icon: "calendar",
      footnote: "March DMRs"
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "All reports",
      action: /*#__PURE__*/React.createElement("div", {
        style: {
          width: 180
        }
      }, /*#__PURE__*/React.createElement(Select, {
        options: ['All periods', 'Mar 2026', 'Q1 2026', '2025']
      })),
      padding: "0"
    }, /*#__PURE__*/React.createElement(DataTable, {
      onRowClick: () => {},
      columns: [{
        key: 'name',
        label: 'Report'
      }, {
        key: 'kind',
        label: 'Type',
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: "light"
        }, r.kind)
      }, {
        key: 'period',
        label: 'Period'
      }, {
        key: 'status',
        label: 'Status',
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: r.status === 'Submitted' ? 'ok' : r.status === 'In review' ? 'watch' : 'neutral'
        }, r.status)
      }, {
        key: 'due',
        label: 'Due',
        align: 'right'
      }, {
        key: 'by',
        label: 'Prepared by'
      }],
      rows: window.OC_REPORTS,
      style: {
        border: 'none',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement(Card, {
      tone: "accent",
      padding: "lg",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sg-navy)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)'
      }
    }, "Reports build themselves from the same data that runs the plant"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 4,
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)'
      }
    }, "Sampling results, instrument logs, and operator notes are pulled directly into the filing \u2014 no re-keying.")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right"
    }, "How it works"))));
  }
  Object.assign(window, {
    ReportsScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/ReportsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/Shell.jsx
try { (() => {
(function () {
  const {
    Logo,
    SidebarNav,
    IconButton,
    Icon,
    Badge,
    Select,
    Tooltip
  } = window.SolutionGroupDesignSystem_441f31;
  const A = '../../assets/logos';
  const NAV_ITEMS = [{
    value: 'overview',
    label: 'Overview',
    icon: 'layout-dashboard'
  }, {
    value: 'sites',
    label: 'Sites',
    icon: 'map-pin'
  }, {
    section: 'Operations'
  }, {
    value: 'alarms',
    label: 'Alarms',
    icon: 'bell',
    badge: 3
  }, {
    value: 'trends',
    label: 'Trends',
    icon: 'activity'
  }, {
    value: 'instruments',
    label: 'Instruments',
    icon: 'gauge'
  }, {
    section: 'Compliance'
  }, {
    value: 'reports',
    label: 'Reports',
    icon: 'file-text'
  }, {
    value: 'permits',
    label: 'Permits',
    icon: 'shield-check'
  }];
  function UserChip() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: '6px 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-circle)',
        background: 'var(--sg-blue)',
        color: 'var(--sg-white)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, "DM"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--sg-white)'
      }
    }, "Dana Mercer"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        color: 'var(--text-inverse-muted)'
      }
    }, "Operations lead")));
  }
  function TopBar({
    title,
    subtitle,
    actions,
    siteFilter,
    onSiteFilter
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        padding: 'var(--space-5) var(--space-8)',
        background: 'var(--surface-page)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--text-h3)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 2,
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, subtitle) : null), onSiteFilter ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: 220
      }
    }, /*#__PURE__*/React.createElement(Select, {
      value: siteFilter,
      onChange: e => onSiteFilter(e.target.value),
      options: [{
        value: 'all',
        label: 'All sites'
      }].concat(window.OC_SITES.map(s => ({
        value: s.id,
        label: s.name
      })))
    })) : null, actions, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-1)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Tooltip, {
      label: "3 unacknowledged alarms"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Alarms",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--status-alarm)',
        border: '2px solid var(--surface-page)'
      }
    }))), /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings",
      label: "Settings",
      variant: "ghost"
    })));
  }
  function Shell({
    route,
    setRoute,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--surface-subtle)'
      }
    }, /*#__PURE__*/React.createElement(SidebarNav, {
      style: {
        position: 'sticky',
        top: 0,
        height: '100vh'
      },
      header: /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '2px 4px 10px'
        }
      }, /*#__PURE__*/React.createElement(Logo, {
        variant: "opticlear",
        color: "light",
        width: 140,
        assetBase: A
      })),
      items: NAV_ITEMS,
      value: route,
      onChange: setRoute,
      footer: /*#__PURE__*/React.createElement(UserChip, null)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column'
      }
    }, children));
  }
  function Panel({
    title,
    action,
    children,
    padding = 'var(--space-5)',
    style
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        ...style
      }
    }, title ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) var(--space-5)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-body-md)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, title), action) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding
      }
    }, children));
  }
  function Content({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, children);
  }
  Object.assign(window, {
    Shell,
    TopBar,
    Panel,
    Content,
    UserChip,
    NAV_ITEMS
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/SiteDetailScreen.jsx
try { (() => {
(function () {
  const {
    MetricTile,
    Sparkline,
    StatusPill,
    Badge,
    Button,
    Tabs,
    DataTable,
    Icon,
    Alert,
    Dialog,
    Field,
    Input
  } = window.SolutionGroupDesignSystem_441f31;
  function SiteDetailScreen({
    siteId,
    setRoute
  }) {
    const site = window.OC_SITES.find(s => s.id === siteId) || window.OC_SITES[0];
    const [tab, setTab] = React.useState('live');
    const [ackOpen, setAckOpen] = React.useState(false);
    const alarms = window.OC_ALARMS.filter(a => a.site === site.name);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
      title: site.name,
      subtitle: site.type + ' · operator ' + site.operator + ' · updated ' + site.updated,
      actions: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(StatusPill, {
        status: site.status,
        pulse: site.status === 'alarm'
      }), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "outline",
        icon: "arrow-left",
        onClick: () => setRoute('sites')
      }, "Back"))
    }), /*#__PURE__*/React.createElement(Content, null, site.status === 'alarm' ? /*#__PURE__*/React.createElement(Alert, {
      tone: "alarm",
      title: "Outside permit limits",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => setAckOpen(true)
      }, "Acknowledge")
    }, "Effluent turbidity 5.8 NTU (limit 5.0) and pH 5.9 (floor 6.0). Operator dispatched at 14:15.") : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Effluent pH",
      value: site.ph,
      icon: "beaker",
      status: site.status === 'alarm' ? 'alarm' : 'ok',
      delta: "\u22120.1 vs 24h",
      trend: "down",
      footnote: "Limit 6.0\u20139.0"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Turbidity",
      value: site.turbidity,
      unit: "NTU",
      icon: "eye",
      status: site.status === 'alarm' ? 'alarm' : site.status === 'watch' ? 'watch' : 'ok',
      delta: "+0.2",
      trend: "up",
      footnote: "Limit 5.0"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Flow",
      value: site.flow,
      unit: "MGD",
      icon: "waves",
      delta: "flat",
      trend: "flat"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Cl\u2082 residual",
      value: site.chlorine,
      unit: "mg/L",
      icon: "droplets",
      footnote: "Setpoint 1.0\u20132.0"
    })), /*#__PURE__*/React.createElement(Tabs, {
      tabs: [{
        value: 'live',
        label: 'Live',
        icon: 'activity'
      }, {
        value: 'alarms',
        label: 'Alarms',
        icon: 'bell',
        count: alarms.filter(a => !a.ack).length
      }, {
        value: 'instruments',
        label: 'Instruments',
        icon: 'gauge'
      }],
      value: tab,
      onChange: setTab
    }), tab === 'live' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-6)'
      }
    }, [['Effluent pH', 'ph', 'blue', null], ['Turbidity vs permit limit', 'turbidity', site.status === 'alarm' ? 'alarm' : 'blue', 5], ['Influent flow', 'flow', 'navy', null]].map(([label, key, tone, limit]) => /*#__PURE__*/React.createElement(Panel, {
      key: key,
      title: label
    }, /*#__PURE__*/React.createElement(Sparkline, {
      data: site.trend[key],
      width: 460,
      height: 110,
      tone: tone,
      limit: limit
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-3)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 'var(--text-micro)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u22126 h"), /*#__PURE__*/React.createElement("span", null, "now")))), /*#__PURE__*/React.createElement(Panel, {
      title: "Process notes"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, [['14:15', site.operator, 'Dispatched to basin 2. Checking polymer feed rate.'], ['09:40', 'A. Whitfield', 'Replaced turbidimeter wiper blade, recalibrated against standard.'], ['06:05', 'Automated', 'Shift log exported to compliance archive.']].map(([t, who, note]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-caption)',
        color: 'var(--text-subtle)',
        width: 44,
        flex: '0 0 auto'
      }
    }, t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)'
      }
    }, note), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, who))))))) : null, tab === 'alarms' ? /*#__PURE__*/React.createElement(Panel, {
      padding: "0"
    }, /*#__PURE__*/React.createElement(DataTable, {
      dense: true,
      columns: [{
        key: 'time',
        label: 'Time'
      }, {
        key: 'severity',
        label: 'Severity',
        render: r => /*#__PURE__*/React.createElement(StatusPill, {
          status: r.severity,
          label: r.severity === 'ok' ? 'Cleared' : undefined
        })
      }, {
        key: 'tag',
        label: 'Tag'
      }, {
        key: 'message',
        label: 'Condition'
      }, {
        key: 'value',
        label: 'Value',
        align: 'right'
      }, {
        key: 'ack',
        label: '',
        align: 'right',
        render: r => r.ack ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--text-caption)',
            color: 'var(--text-muted)'
          }
        }, "Acknowledged") : /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "outline",
          onClick: () => setAckOpen(true)
        }, "Acknowledge")
      }],
      rows: alarms.length ? alarms : [],
      style: {
        border: 'none',
        borderRadius: 0
      }
    })) : null, tab === 'instruments' ? /*#__PURE__*/React.createElement(Panel, {
      padding: "0"
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: 'tag',
        label: 'Tag'
      }, {
        key: 'desc',
        label: 'Instrument'
      }, {
        key: 'status',
        label: 'Status',
        render: r => /*#__PURE__*/React.createElement(StatusPill, {
          status: r.status,
          label: r.status === 'ok' ? 'In calibration' : undefined
        })
      }, {
        key: 'last',
        label: 'Last calibrated',
        align: 'right'
      }, {
        key: 'next',
        label: 'Next due',
        align: 'right'
      }],
      rows: [{
        id: 1,
        tag: 'AIT-201',
        desc: 'Effluent turbidimeter',
        status: 'ok',
        last: '2026-03-12',
        next: '2026-06-12'
      }, {
        id: 2,
        tag: 'AIT-204',
        desc: 'Effluent pH probe',
        status: 'watch',
        last: '2025-12-04',
        next: '2026-03-04'
      }, {
        id: 3,
        tag: 'FIT-301',
        desc: 'Influent flow meter',
        status: 'ok',
        last: '2026-02-20',
        next: '2026-08-20'
      }, {
        id: 4,
        tag: 'AIT-210',
        desc: 'Chlorine analyser',
        status: 'ok',
        last: '2026-03-01',
        next: '2026-06-01'
      }],
      style: {
        border: 'none',
        borderRadius: 0
      }
    })) : null, /*#__PURE__*/React.createElement(Dialog, {
      open: ackOpen,
      title: "Acknowledge alarm",
      description: site.name + ' · effluent turbidity',
      onClose: () => setAckOpen(false),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setAckOpen(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setAckOpen(false)
      }, "Acknowledge"))
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Operator note",
      hint: "Recorded in the compliance log"
    }, /*#__PURE__*/React.createElement(Input, {
      multiline: true,
      rows: 3,
      placeholder: "Action taken"
    })))));
  }
  Object.assign(window, {
    SiteDetailScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/SiteDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/SitesScreen.jsx
try { (() => {
(function () {
  const {
    DataTable,
    StatusPill,
    Sparkline,
    Button,
    Tag,
    Input,
    Select
  } = window.SolutionGroupDesignSystem_441f31;
  function SitesScreen({
    openSite
  }) {
    const [q, setQ] = React.useState('');
    const [filter, setFilter] = React.useState('All');
    const rows = window.OC_SITES.filter(s => s.name.toLowerCase().indexOf(q.toLowerCase()) > -1 && (filter === 'All' || (filter === 'Needs attention' ? s.status !== 'ok' : s.type === filter)));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
      title: "Sites",
      subtitle: rows.length + ' of ' + window.OC_SITES.length + ' shown',
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        icon: "plus"
      }, "Add site")
    }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 280
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Search sites",
      value: q,
      onChange: e => setQ(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)'
      }
    }, ['All', 'Needs attention', 'Municipal', 'Food & beverage', 'Metal finishing'].map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      selected: filter === t,
      onClick: () => setFilter(t)
    }, t)))), /*#__PURE__*/React.createElement(Panel, {
      padding: "0"
    }, /*#__PURE__*/React.createElement(DataTable, {
      onRowClick: r => openSite(r.id),
      columns: [{
        key: 'name',
        label: 'Site'
      }, {
        key: 'type',
        label: 'Type'
      }, {
        key: 'status',
        label: 'Status',
        render: r => /*#__PURE__*/React.createElement(StatusPill, {
          status: r.status,
          pulse: r.status === 'alarm'
        })
      }, {
        key: 'spark',
        label: 'pH · 6h',
        render: r => /*#__PURE__*/React.createElement(Sparkline, {
          data: r.trend.ph,
          width: 120,
          height: 30,
          tone: r.status === 'alarm' ? 'alarm' : r.status === 'watch' ? 'watch' : 'blue'
        })
      }, {
        key: 'ph',
        label: 'pH',
        align: 'right'
      }, {
        key: 'turbidity',
        label: 'NTU',
        align: 'right'
      }, {
        key: 'flow',
        label: 'Flow (MGD)',
        align: 'right'
      }, {
        key: 'operator',
        label: 'Operator'
      }, {
        key: 'updated',
        label: 'Updated',
        align: 'right'
      }],
      rows: rows,
      style: {
        border: 'none',
        borderRadius: 0
      }
    }))));
  }
  Object.assign(window, {
    SitesScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/SitesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/opticlear/data.js
try { (() => {
window.OC_SITES = [{
  id: 'riverside',
  name: 'Riverside WWTP',
  type: 'Municipal',
  status: 'ok',
  flow: '2.41',
  ph: '7.2',
  turbidity: '1.8',
  chlorine: '1.4',
  operator: 'D. Mercer',
  updated: '2 min ago',
  trend: {
    ph: [7.1, 7.2, 7.1, 7.3, 7.2, 7.2, 7.2],
    turbidity: [1.4, 1.6, 1.5, 1.9, 1.7, 1.8, 1.8],
    flow: [2.3, 2.4, 2.5, 2.4, 2.4, 2.4, 2.41]
  }
}, {
  id: 'cedar',
  name: 'Cedar Mill Industrial',
  type: 'Food & beverage',
  status: 'alarm',
  flow: '0.86',
  ph: '5.9',
  turbidity: '5.8',
  chlorine: '0.4',
  operator: 'J. Ruiz',
  updated: '1 min ago',
  trend: {
    ph: [6.8, 6.6, 6.4, 6.2, 6.1, 6.0, 5.9],
    turbidity: [4.1, 4.4, 4.2, 5.0, 5.4, 5.6, 5.8],
    flow: [0.9, 0.9, 0.88, 0.87, 0.86, 0.86, 0.86]
  }
}, {
  id: 'north',
  name: 'North Plant',
  type: 'Metal finishing',
  status: 'watch',
  flow: '1.12',
  ph: '8.4',
  turbidity: '2.9',
  chlorine: '1.1',
  operator: 'A. Whitfield',
  updated: '4 min ago',
  trend: {
    ph: [7.9, 8.0, 8.1, 8.2, 8.3, 8.3, 8.4],
    turbidity: [2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.9],
    flow: [1.1, 1.1, 1.12, 1.13, 1.12, 1.12, 1.12]
  }
}, {
  id: 'harbor',
  name: 'Harbor Pretreatment',
  type: 'Municipal',
  status: 'offline',
  flow: '—',
  ph: '—',
  turbidity: '—',
  chlorine: '—',
  operator: 'Unassigned',
  updated: '3 h ago',
  trend: {
    ph: [7.0, 7.0, 7.0, 7.0, 7.0, 7.0, 7.0],
    turbidity: [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0],
    flow: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
  }
}];
window.OC_ALARMS = [{
  id: 1,
  severity: 'alarm',
  site: 'Cedar Mill Industrial',
  tag: 'AIT-201',
  message: 'Effluent turbidity above permit limit (5.0 NTU)',
  value: '5.8 NTU',
  time: '14:12',
  ack: false
}, {
  id: 2,
  severity: 'alarm',
  site: 'Cedar Mill Industrial',
  tag: 'AIT-204',
  message: 'Effluent pH below permit floor (6.0)',
  value: '5.9',
  time: '14:08',
  ack: false
}, {
  id: 3,
  severity: 'watch',
  site: 'North Plant',
  tag: 'AIT-101',
  message: 'pH trending toward upper limit',
  value: '8.4',
  time: '13:41',
  ack: false
}, {
  id: 4,
  severity: 'watch',
  site: 'Cedar Mill Industrial',
  tag: 'AIT-210',
  message: 'Chlorine residual below setpoint',
  value: '0.4 mg/L',
  time: '12:55',
  ack: true
}, {
  id: 5,
  severity: 'offline',
  site: 'Harbor Pretreatment',
  tag: 'GATEWAY',
  message: 'No telemetry received',
  value: '—',
  time: '11:20',
  ack: true
}, {
  id: 6,
  severity: 'ok',
  site: 'Riverside WWTP',
  tag: 'FIT-301',
  message: 'Flow returned to normal range',
  value: '2.41 MGD',
  time: '09:04',
  ack: true
}];
window.OC_REPORTS = [{
  id: 1,
  name: 'March 2026 DMR — Riverside WWTP',
  kind: 'DMR',
  period: 'Mar 2026',
  status: 'Submitted',
  due: 'Apr 20',
  by: 'D. Mercer'
}, {
  id: 2,
  name: 'March 2026 DMR — Cedar Mill',
  kind: 'DMR',
  period: 'Mar 2026',
  status: 'In review',
  due: 'Apr 20',
  by: 'J. Ruiz'
}, {
  id: 3,
  name: 'Q1 pretreatment summary — Harbor',
  kind: 'Pretreatment',
  period: 'Q1 2026',
  status: 'Draft',
  due: 'Apr 30',
  by: 'A. Whitfield'
}, {
  id: 4,
  name: 'Annual biosolids report — North Plant',
  kind: 'Biosolids',
  period: '2025',
  status: 'Submitted',
  due: 'Feb 28',
  by: 'D. Mercer'
}, {
  id: 5,
  name: 'Instrument calibration log — all sites',
  kind: 'Calibration',
  period: 'Mar 2026',
  status: 'Submitted',
  due: 'Apr 05',
  by: 'Automated'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/opticlear/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
(function () {
  const {
    Card,
    Button,
    Field,
    Input,
    Select,
    Checkbox,
    Radio,
    Alert,
    Icon,
    Eyebrow
  } = window.SolutionGroupDesignSystem_441f31;
  function ContactScreen() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.15fr .85fr',
        gap: 'var(--space-16)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Get started"), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--text-h1)'
      }
    }, "Request an assessment"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-5)',
        fontSize: 'var(--text-lead)',
        color: 'var(--text-body)',
        maxWidth: 560
      }
    }, "Tell us about the facility. An engineer will follow up within one business day to schedule the site walk."), sent ? /*#__PURE__*/React.createElement(Alert, {
      tone: "ok",
      title: "Request received",
      style: {
        marginTop: 'var(--space-8)'
      },
      onDismiss: () => setSent(false)
    }, "We'll be in touch within one business day. Reference SG-2026-0418.") : null, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Full name",
      required: true,
      htmlFor: "n"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "n",
      placeholder: "Dana Mercer"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Work email",
      required: true,
      htmlFor: "e"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "e",
      icon: "mail",
      placeholder: "you@utility.gov"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Facility name",
      required: true,
      htmlFor: "fa",
      hint: "As it appears on the discharge permit"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "fa",
      placeholder: "Riverside WWTP"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Phone",
      htmlFor: "p"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "p",
      icon: "phone",
      placeholder: "(000) 000-0000"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Facility type",
      htmlFor: "t"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "t",
      placeholder: "Select one",
      options: ['Municipal', 'Food & beverage', 'Metal finishing', 'Pharmaceutical', 'Other industrial']
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Average daily flow",
      htmlFor: "fl",
      hint: "MGD"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "fl",
      placeholder: "2.4"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "What prompted the inquiry?"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "reason",
      direction: "row",
      defaultValue: "Compliance risk",
      options: ['Compliance risk', 'Staffing gap', 'Equipment condition', 'New permit']
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1'
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Anything we should know before the walk?",
      htmlFor: "msg"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "msg",
      multiline: true,
      rows: 4,
      placeholder: "Recent exceedances, upcoming permit renewal, process changes\u2026"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Include an OptiClear instrumentation review",
      description: "Adds roughly two hours to the site visit",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Send me the monthly compliance briefing"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: '1 / -1',
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => setSent(true)
    }, "Submit request"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, "Or call 24/7 service at (800) 000-0000"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "navy",
      padding: "lg"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)',
        color: 'var(--sg-white)'
      }
    }, "What the assessment covers"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, [['clipboard-check', 'Site operations baseline'], ['gauge', 'Equipment condition and instrumentation'], ['shield-check', 'Regulatory exposure and permit review'], ['list-ordered', 'Prioritised recommendations']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
        color: 'var(--sg-light-blue)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)'
      }
    }, t)))), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-6)',
        fontSize: 'var(--text-caption)',
        color: 'var(--text-inverse-muted)'
      }
    }, "No pricing, no commercial terms, the assessment is a written baseline. Commercial discussion comes after.")), /*#__PURE__*/React.createElement(Card, {
      tone: "accent",
      padding: "lg"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)'
      }
    }, "Emergency?"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-3)',
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)'
      }
    }, "For a process upset or release in progress, call dispatch directly. Crews are on call around the clock."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "phone"
    }, "(800) 000-0000"))))));
  }
  Object.assign(window, {
    ContactScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
(function () {
  const {
    Logo,
    Button,
    Card,
    Icon,
    Eyebrow,
    WaveDivider
  } = window.SolutionGroupDesignSystem_441f31;
  const SERVICES = [{
    icon: 'wrench',
    title: 'Operations',
    tagline: 'We Make Water Work Smarter.',
    body: "Operations aren't just about keeping the lights on, they're about making systems run cleaner, faster, and more efficiently every single day. With Solution Group, you don't just operate, you outperform."
  }, {
    icon: 'cpu',
    title: 'Automation',
    tagline: 'We Turn Real-Time Data into Real-World Results.',
    body: 'Our proprietary OptiClear™ automation platform puts the power back in your hands. Our automation is powered by data and built for people to make their jobs better.',
    route: 'opticlear'
  }, {
    icon: 'ruler',
    title: 'Engineering',
    tagline: 'From Blueprint to Breakthrough.',
    body: 'Our in-house engineering team delivers solutions grounded in operations that are built to last. We design systems the way operators wish they were built.'
  }, {
    icon: 'beaker',
    title: 'Chemical Management',
    tagline: 'Cleaner Chemistry. Smarter Strategy.',
    body: "Chemical use is often the largest line item in a water system and one of the biggest opportunities for savings. We don't just supply chemicals, we optimize your entire program."
  }, {
    icon: 'layers',
    title: 'Solids Management',
    tagline: 'The Solids Side, Now In House.',
    body: 'With WaterSolve now part of Solution Group, lagoon cleanouts, geotextile tube dewatering, dredging and remediation are handled by the same team you already know.'
  }];
  const WHY = [{
    title: 'Safety',
    body: 'Our safety-first culture ensures every process and procedure meets or exceeds safety standards.'
  }, {
    title: 'Compliance',
    body: "We stay ahead of changing environmental and discharge regulations to ensure you're always compliant."
  }, {
    title: 'Cost Efficiency',
    body: 'Your system works, but we optimize it to perform better, saving you money and energy while reducing waste.'
  }, {
    title: 'Our Team',
    body: 'Everything we do is driven by our team culture that challenges our team to think and act differently.'
  }];
  const NEWS = [{
    date: 'July 28, 2026',
    title: 'Solution Group Acquires WaterSolve, Expanding National Dewatering and Environmental Remediation Capabilities',
    body: 'INDIANAPOLIS, IN – July 27, 2026 – Solution Group, a national leader in water and wastewater management, has completed the acquisition of WaterSolve, a Caledonia,'
  }, {
    date: 'April 3, 2026',
    title: "Solution Group's OptiClear Platform Earns Shortlisting in 2026 WEX Global Awards",
    body: 'All-in-one reporting and monitoring solution recognized in the Innovation in Digital Transformation of the Water Sector category INDIANAPOLIS (April 3, 2026), Solution Group, a'
  }, {
    date: 'April 2, 2026',
    title: "Solution Group's OptiClear Technology Platform Recognized Globally for Real-Time Alerts, Saving Companies Thousands of Dollars",
    body: 'The Challenge SCADA tools are ubiquitous across the industrial sector, tracking and reporting operations in real time. As Solution Group grew its operations and brought'
  }];
  const CLIENTS = ['Fairlife', 'Coca-Cola', 'PepsiCo', 'Frito-Lay', 'Agropur', 'Nestlé'];
  function HomeScreen({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        background: 'var(--surface-navy-deep)',
        color: 'var(--text-inverse)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/plant-operators.png",
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: .32
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(100deg,rgba(0,38,59,.96) 0%,rgba(0,59,92,.82) 48%,rgba(0,59,92,.35) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--space-24) var(--gutter) var(--space-20)'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        maxWidth: 900,
        fontSize: 'var(--text-display)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-display)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-white)'
      }
    }, "We Do Water Different"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-6)',
        maxWidth: 680,
        fontSize: 'var(--text-lead)',
        lineHeight: 'var(--leading-normal)',
        color: 'var(--sg-light-blue)'
      }
    }, "For over 20 years, Solution Group has redefined what's possible in water and wastewater management. As a full-service, technology-driven team, we go beyond basic compliance to create ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--sg-white)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, "smarter, safer, cost-effective"), " systems that drive performance."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-10)',
        display: 'flex',
        gap: 'var(--space-3)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => go('services')
    }, "Explore Our Solutions"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse-outline",
      size: "lg",
      onClick: () => go('contact')
    }, "Get In Touch"))), /*#__PURE__*/React.createElement(WaveDivider, {
      tone: "white",
      height: 150,
      style: {
        position: 'relative',
        marginBottom: -1
      }
    })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
      title: "Complete Water Management Solutions",
      lead: "From operations to engineering, we deliver integrated solutions that make your water systems run smoothly, sustainably, and well within regulatory compliance.",
      max: 760
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-12)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 'var(--space-5)'
      }
    }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
      key: s.title,
      interactive: true,
      onClick: () => go(s.route || 'services'),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 46,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-accent)',
        color: 'var(--sg-navy)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 24
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: 'var(--space-2)',
        fontSize: 'var(--text-h4)'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-blue)'
      }
    }, s.tagline), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, s.body), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        paddingTop: 'var(--space-3)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-navy)'
      }
    }, "Learn More ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })))))), /*#__PURE__*/React.createElement(Section, {
      tone: "subtle"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      title: "Why Choose Solution Group?",
      align: "center",
      max: 640
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-12)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
        gap: 'var(--space-6)'
      }
    }, WHY.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(PhotoSlot, {
      label: w.title,
      height: 180
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)',
        color: 'var(--sg-navy)'
      }
    }, w.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, w.body))))), /*#__PURE__*/React.createElement(Section, {
      tone: "gradient"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-10)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        color: 'var(--sg-white)'
      }
    }, "Still Curious?"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--text-lead)',
        color: 'var(--sg-light-blue)'
      }
    }, "Explore all of our solutions and get in touch with Solution Group to transform your water systems today.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      onClick: () => go('services')
    }, "Explore Our Solutions"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse-outline",
      size: "lg",
      onClick: () => go('contact')
    }, "Get In Touch")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Company News",
      title: "What we have been working on"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-10)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 'var(--space-5)'
      }
    }, NEWS.map(n => /*#__PURE__*/React.createElement(Card, {
      key: n.date,
      interactive: true,
      onClick: () => go('news'),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, n.date), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h5)',
        lineHeight: 'var(--leading-snug)',
        color: 'var(--sg-navy)'
      }
    }, n.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, n.body), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        paddingTop: 'var(--space-3)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-navy)'
      }
    }, "Read More ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })))))), /*#__PURE__*/React.createElement(Section, {
      tone: "accent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-10)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Careers"), /*#__PURE__*/React.createElement("h2", {
      style: {
        marginTop: 'var(--space-3)',
        fontSize: 'var(--text-h2)'
      }
    }, "Interested in joining the Solution Group team?"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--text-lead)',
        color: 'var(--text-body)'
      }
    }, "See open positions and learn about our apprenticeship program.")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => go('careers')
    }, "Get Started"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
        gap: 'var(--space-6)',
        alignItems: 'center'
      }
    }, CLIENTS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-muted)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-wide)'
      }
    }, c)))));
  }
  Object.assign(window, {
    HomeScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OptiClearScreen.jsx
try { (() => {
(function () {
  const {
    Logo,
    Card,
    Button,
    Badge,
    Icon,
    Eyebrow,
    MetricTile,
    StatusPill,
    Sparkline,
    DataTable,
    WaveDivider
  } = window.SolutionGroupDesignSystem_441f31;
  const CAPS = [{
    icon: 'radio',
    title: 'Real-time telemetry',
    body: 'Calibrated instruments reporting continuously, not a clipboard reading taken twice a shift.'
  }, {
    icon: 'bell',
    title: 'Rationalised alarms',
    body: 'Thresholds tied to permit limits and setpoints, with escalation that reaches a human.'
  }, {
    icon: 'trending-up',
    title: 'Trends that mean something',
    body: 'Process history alongside the limit line, so drift is visible before it is an exceedance.'
  }, {
    icon: 'file-text',
    title: 'Reporting built in',
    body: 'The same data stream that runs the plant produces the monthly report.'
  }];
  function OptiClearScreen({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gradient-deep-light)',
        color: 'var(--text-inverse)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--space-20) var(--gutter)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-12)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      variant: "opticlear",
      color: "white-blue",
      width: 280,
      assetBase: "../../assets/logos"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-6)',
        fontSize: 'var(--text-lead)',
        lineHeight: 'var(--leading-normal)',
        color: 'var(--sg-white)',
        maxWidth: 520
      }
    }, "OptiClear is the technology behind our promise. As Solution Group's proprietary automation and instrumentation platform, it delivers real-time data and full operational transparency, a true force multiplier for our clients."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--text-body-md)',
        color: 'var(--blue-200)',
        maxWidth: 520
      }
    }, "It's a core part of how Solution Group delivers on being a true partner, not just a service provider."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)',
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Book a walkthrough"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse-outline"
    }, "Client login"))), /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-4) var(--space-5)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-navy)'
      }
    }, "Riverside WWTP"), /*#__PURE__*/React.createElement(StatusPill, {
      status: "ok"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-5)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Effluent pH",
      value: "7.2",
      icon: "beaker",
      delta: "+0.1",
      trend: "up"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Turbidity",
      value: "1.8",
      unit: "NTU",
      icon: "eye",
      delta: "\u22120.4",
      trend: "down"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-5) var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-4)',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-muted)'
      }
    }, "Turbidity \xB7 6h vs permit limit"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Sparkline, {
      data: [1.4, 1.6, 1.5, 1.9, 1.7, 1.8],
      width: 420,
      height: 70,
      limit: 5
    })))))), /*#__PURE__*/React.createElement(WaveDivider, {
      tone: "white",
      height: 140,
      style: {
        marginBottom: -1
      }
    })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Capabilities",
      title: "Operational transparency, not another dashboard",
      lead: "Every number in OptiClear traces back to a calibrated instrument and a documented setpoint."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-12)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
        gap: 'var(--space-5)'
      }
    }, CAPS.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sg-blue)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)'
      }
    }, c.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, c.body))))), /*#__PURE__*/React.createElement(Section, {
      tone: "subtle"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Coverage",
      title: "Every site in one view"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: 'site',
        label: 'Site'
      }, {
        key: 'type',
        label: 'Type'
      }, {
        key: 'status',
        label: 'Status',
        render: r => /*#__PURE__*/React.createElement(StatusPill, {
          status: r.status
        })
      }, {
        key: 'ph',
        label: 'pH',
        align: 'right'
      }, {
        key: 'flow',
        label: 'Flow (MGD)',
        align: 'right'
      }],
      rows: [{
        id: 1,
        site: 'Riverside WWTP',
        type: 'Municipal',
        status: 'ok',
        ph: '7.2',
        flow: '2.41'
      }, {
        id: 2,
        site: 'Cedar Mill Industrial',
        type: 'Food & beverage',
        status: 'alarm',
        ph: '5.9',
        flow: '0.86'
      }, {
        id: 3,
        site: 'North Plant',
        type: 'Metal finishing',
        status: 'watch',
        ph: '8.4',
        flow: '1.12'
      }, {
        id: 4,
        site: 'Harbor Pretreatment',
        type: 'Municipal',
        status: 'offline',
        ph: 'n/a',
        flow: 'n/a'
      }]
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-10)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "opticlear-lockup",
      width: 300,
      assetBase: "../../assets/logos"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-6)',
        fontSize: 'var(--text-lead)',
        color: 'var(--sg-light-blue)'
      }
    }, "Use the combined lockup when introducing the brand for the first time or where the relationship to Solution Group should be clearly communicated.")), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Request an assessment"))));
  }
  Object.assign(window, {
    OptiClearScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OptiClearScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Icon,
    Badge,
    Eyebrow
  } = window.SolutionGroupDesignSystem_441f31;
  const INDUSTRIES = [{
    icon: 'milk',
    title: 'Dairy & cheese',
    body: 'High-strength whey and wash-down loads, direct-discharge permits, and seasonal production swings.'
  }, {
    icon: 'cookie',
    title: 'Food & beverage',
    body: 'Pretreatment ahead of municipal surcharge, fats and solids handling, and CIP chemistry.'
  }, {
    icon: 'factory',
    title: 'Industrial manufacturing',
    body: 'Process water, cooling systems, and permit reporting under state and federal jurisdiction.'
  }, {
    icon: 'building-2',
    title: 'Municipal systems',
    body: 'Contract operations, lagoon management, and cleanout planning for small and mid-size utilities.'
  }, {
    icon: 'droplets',
    title: 'Agriculture & protein',
    body: 'Rendering, protein processing, and agricultural wastewater with heavy biosolids production.'
  }, {
    icon: 'waves',
    title: 'Environmental & remediation',
    body: 'Contaminated sediment, pond closure, shoreline protection, and site decommissioning.'
  }];
  const CASES = [{
    client: 'Agropur',
    place: 'Lake Nordon, South Dakota',
    head: 'Restoring stability to support growth',
    stat: '$750K',
    statLabel: 'recurring annual OPEX savings',
    body: 'Daily NOVs cut from 26 in 2023 to 0 in 2025, wetland effluent volume down 75%, and $20 million in planned capital upgrades avoided.'
  }, {
    client: 'Dairy State Cheese',
    place: 'Rudolph, Wisconsin',
    head: 'From a Notice of Violation to operational confidence',
    stat: '+68%',
    statLabel: 'membrane flow rate in two weeks',
    body: 'Aluminum consumption down 31% and COD loading down 26% while the plant ramped from 1.0 to 3.5 million gallons of milk per day.'
  }];
  function IndustriesScreen({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Industries",
      title: "The plants we run, and the permits behind them",
      lead: "Solution Group operates treatment systems for producers whose wastewater is as complex as their process. Same operators, same reporting discipline, whatever the industry."
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 'var(--space-5)'
      }
    }, INDUSTRIES.map(i => /*#__PURE__*/React.createElement(Card, {
      key: i.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-accent)',
        color: 'var(--sg-navy)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: 'var(--space-2)',
        fontSize: 'var(--text-h4)'
      }
    }, i.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, i.body))))), /*#__PURE__*/React.createElement(Section, {
      tone: "subtle"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Case Studies",
      title: "What the work looks like on site"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-10)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)'
      }
    }, CASES.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.client,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Badge, null, c.client), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, c.place)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)',
        lineHeight: 'var(--leading-snug)'
      }
    }, c.head), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 40,
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-navy)',
        letterSpacing: 'var(--tracking-heading)'
      }
    }, c.stat), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, c.statLabel)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, c.body), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        paddingTop: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Read the case study")))))));
  }
  const ROLES = [{
    title: 'Wastewater Operator',
    place: 'Multiple sites, Midwest',
    type: 'Full time'
  }, {
    title: 'Site Manager, Industrial WWTP',
    place: 'Monona, Iowa',
    type: 'Full time'
  }, {
    title: 'Laboratory Technician',
    place: 'Lake Nordon, South Dakota',
    type: 'Full time'
  }, {
    title: 'Electro-Mechanical Technician',
    place: 'Indianapolis, Indiana',
    type: 'Full time'
  }, {
    title: 'Dewatering Crew Lead',
    place: 'Caledonia, Michigan',
    type: 'Full time'
  }];
  function CareersScreen({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Careers",
      title: "Interested in joining the Solution Group team?",
      lead: "See open positions and learn about our apprenticeship program."
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 'var(--space-16)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Open positions",
      title: "Where we are hiring"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, ROLES.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.title,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: 'var(--space-5) 0',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h5)',
        color: 'var(--sg-navy)'
      }
    }, r.title), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 4,
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, r.place, " \xB7 ", r.type)), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Apply"))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Apprenticeships"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)'
      }
    }, "Licensed in two years, paid from day one"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, "Our apprenticeship program takes people with no water background and puts them on a licensed operator track: classroom hours, supervised field time, and exam support, working alongside operators who have run these plants for decades."), /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "Apprentices on site",
      height: 170
    }), /*#__PURE__*/React.createElement(Button, {
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Get Started")))));
  }
  const VALUES = [{
    title: 'PEOPLE First, Always',
    body: 'Our people are our greatest strength. We foster a culture of respect and continuous learning, empowering every team member.'
  }, {
    title: 'Integrity in Every Drop',
    body: 'We act with honesty, accountability, and transparency in every decision. Integrity drives trust and ensures we meet the highest standards of safety, compliance, and ethical conduct.'
  }, {
    title: 'Excellence Through Expertise',
    body: "We hold ourselves to a higher technical standard. Our team's certifications, licenses, and experience mean we don't just meet compliance, we help our clients stay ahead of it as regulations and technology evolve."
  }];
  function AboutScreen({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "About",
      title: "Twenty years of doing water different",
      lead: "Solution Group is a full-service, technology-driven water and wastewater management company headquartered in Indianapolis, with operators and crews working at plants nationwide."
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 'var(--space-16)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Our story",
      title: "Built from a family of brands",
      lead: "Solution Group brings operations, automation, engineering, chemical management and solids management under one accountable team, so a plant has one relationship instead of five vendors."
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-relaxed)'
      }
    }, "With WaterSolve now part of Solution Group, that reach extends to the solids side of the business: geotextile tube dewatering, dredging, lagoon cleanouts and environmental remediation, for industrial plants and municipal systems alike."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-10)',
        marginTop: 'var(--space-2)'
      }
    }, [['20+', 'years operating'], ['6', 'service lines'], ['24/7', 'on-call support']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 32,
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-navy)',
        letterSpacing: 'var(--tracking-heading)'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, l))))), /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "Team photograph",
      height: 380
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "gradient"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Our values",
      tone: "light",
      title: "The difference isn't simply in what we do, it's in how we do it.",
      max: 760
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-12)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
        gap: 'var(--space-6)'
      }
    }, VALUES.map(v => /*#__PURE__*/React.createElement("div", {
      key: v.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        paddingTop: 'var(--space-5)',
        borderTop: '2px solid var(--sg-blue)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)',
        color: 'var(--sg-white)'
      }
    }, v.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--blue-300)'
      }
    }, v.body))))), /*#__PURE__*/React.createElement(Section, {
      tone: "accent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-10)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        maxWidth: 560
      }
    }, "Still Curious?"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Get In Touch"))));
  }
  const POSTS = [{
    date: 'July 28, 2026',
    title: 'Solution Group Acquires WaterSolve, Expanding National Dewatering and Environmental Remediation Capabilities',
    body: 'INDIANAPOLIS, IN – July 27, 2026 – Solution Group, a national leader in water and wastewater management, has completed the acquisition of WaterSolve, a Caledonia,'
  }, {
    date: 'April 3, 2026',
    title: "Solution Group's OptiClear Platform Earns Shortlisting in 2026 WEX Global Awards",
    body: 'All-in-one reporting and monitoring solution recognized in the Innovation in Digital Transformation of the Water Sector category INDIANAPOLIS (April 3, 2026), Solution Group, a'
  }, {
    date: 'April 2, 2026',
    title: "Solution Group's OptiClear Technology Platform Recognized Globally for Real-Time Alerts, Saving Companies Thousands of Dollars",
    body: 'The Challenge SCADA tools are ubiquitous across the industrial sector, tracking and reporting operations in real time. As Solution Group grew its operations and brought'
  }];
  function NewsScreen({
    go
  }) {
    const [lead, ...rest] = POSTS;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Company News",
      title: "Announcements, awards and field notes"
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Card, {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-8)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(PhotoSlot, {
      label: "Feature image",
      height: 260
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, lead.date), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h3)',
        lineHeight: 'var(--leading-snug)',
        color: 'var(--sg-navy)'
      }
    }, lead.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, lead.body), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Read More")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)'
      }
    }, rest.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.date,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, p.date), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h5)',
        lineHeight: 'var(--leading-snug)',
        color: 'var(--sg-navy)'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, p.body), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        paddingTop: 'var(--space-3)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-navy)'
      }
    }, "Read More ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })))))));
  }
  Object.assign(window, {
    IndustriesScreen,
    CareersScreen,
    AboutScreen,
    NewsScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
(function () {
  const {
    Card,
    Badge,
    Button,
    Icon,
    Tabs,
    Eyebrow,
    WaveDivider
  } = window.SolutionGroupDesignSystem_441f31;
  const DETAIL = {
    'Operations & maintenance': {
      icon: 'wrench',
      lead: 'Licensed operators, preventive maintenance, and the reporting that keeps a permit clean.',
      points: ['Certified Class I–IV operators on staff', 'Preventive and predictive maintenance programs', 'Chemical management and inventory', 'Monthly operating reports and trend review', 'Staff augmentation or full contract operations']
    },
    'Automation & instrumentation': {
      icon: 'cpu',
      lead: 'Controls and instrumentation built so the data you act on is data you can trust.',
      points: ['PLC and SCADA design, build, and integration', 'Instrument calibration and validation', 'OptiClear telemetry and remote monitoring', 'Alarm rationalisation and escalation logic', 'Control panel fabrication and retrofit']
    },
    'Compliance & reporting': {
      icon: 'clipboard-check',
      lead: 'Permit obligations tracked and filed by people who read the regulations for a living.',
      points: ['NPDES and pretreatment permit management', 'Sampling programs and chain of custody', 'DMR preparation and submission', 'Regulatory correspondence and audit support', 'Compliance gap assessments']
    },
    'Emergency response': {
      icon: 'siren',
      lead: 'On-call crews and rental treatment capacity for upsets that cannot wait.',
      points: ['24/7 dispatch', 'Mobile treatment and temporary systems', 'Process upset diagnosis and recovery', 'Spill and release support', 'Post-event root cause reporting']
    }
  };
  function ServicesScreen({
    go
  }) {
    const names = Object.keys(DETAIL);
    const [active, setActive] = React.useState(names[0]);
    const d = DETAIL[active];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-navy)',
        color: 'var(--text-inverse)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--space-16) var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "light"
    }, "Services"), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 'var(--space-4)',
        maxWidth: 720,
        fontSize: 'var(--text-h1)',
        color: 'var(--sg-white)'
      }
    }, "From operations to automation to compliance"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-5)',
        maxWidth: 620,
        fontSize: 'var(--text-lead)',
        color: 'var(--sg-light-blue)'
      }
    }, "One contract, one accountable team, and a single record of what happened at your plant."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Tabs, {
      tabs: names.map(n => ({
        value: n,
        label: n,
        icon: DETAIL[n].icon
      })),
      value: active,
      onChange: setActive
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-10)',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 'var(--space-12)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)'
      }
    }, active), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-4)',
        fontSize: 'var(--text-lead)',
        color: 'var(--text-body)'
      }
    }, d.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, d.points.map(p => /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sg-blue)',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      strokeWidth: 2.25
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-md)',
        color: 'var(--text-body)'
      }
    }, p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      iconAfter: "arrow-right",
      onClick: () => go('contact')
    }, "Talk to an engineer"))), /*#__PURE__*/React.createElement(Card, {
      tone: "subtle",
      padding: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/plant-operators.png",
      alt: "Operators reviewing a clarifier",
      style: {
        display: 'block',
        width: '100%',
        height: 230,
        objectFit: 'cover',
        borderRadius: 'var(--radius-lg)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "light"
    }, "Municipal"), /*#__PURE__*/React.createElement(Badge, {
      tone: "light"
    }, "Food & beverage"), /*#__PURE__*/React.createElement(Badge, {
      tone: "light"
    }, "Metal finishing"), /*#__PURE__*/React.createElement(Badge, {
      tone: "light"
    }, "Pharma")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-muted)'
      }
    }, "Every engagement starts with a written assessment: operations, equipment condition, and regulatory exposure, prioritised.")))), /*#__PURE__*/React.createElement(WaveDivider, {
      tone: "light",
      mode: "fill-edge",
      height: 170
    }), /*#__PURE__*/React.createElement(Section, {
      tone: "accent",
      style: {
        marginTop: -1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
        gap: 'var(--space-6)'
      }
    }, [['shield-check', 'Safety first', 'Site-specific JSAs and a culture that stops work when something is wrong.'], ['file-check', 'Documented', 'Everything we do lands in a report you can hand to a regulator.'], ['users', 'One team', 'The same engineers who assess your plant are the ones who run it.']].map(([i, t, b]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sg-navy)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h4)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)'
      }
    }, b))))));
  }
  Object.assign(window, {
    ServicesScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
(function () {
  const {
    Logo,
    Button,
    IconButton,
    Icon,
    Eyebrow
  } = window.SolutionGroupDesignSystem_441f31;
  const A = '../../assets/logos';
  const NAV = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services',
    children: ['Operations', 'Automation', 'Engineering', 'Chemical Management', 'Solids Management']
  }, {
    id: 'industries',
    label: 'Industries',
    children: ['Case Studies']
  }, {
    id: 'careers',
    label: 'Careers',
    children: ['Apprenticeships']
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'news',
    label: 'Company News'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  function SiteHeader({
    route,
    go
  }) {
    const [open, setOpen] = React.useState(null);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(255,255,255,.94)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '10px var(--gutter)',
        minHeight: 78,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('home');
      },
      style: {
        display: 'flex',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "main",
      color: "navy-blue",
      width: 176,
      assetBase: A
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        marginLeft: 'auto',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: {
        position: 'relative'
      },
      onMouseEnter: () => setOpen(n.id),
      onMouseLeave: () => setOpen(null)
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(n.id);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        whiteSpace: 'nowrap',
        fontSize: 'var(--text-body-sm)',
        fontWeight: route === n.id ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: route === n.id ? 'var(--sg-navy)' : 'var(--text-muted)',
        textDecoration: 'none',
        padding: '18px 0',
        borderBottom: '2px solid ' + (route === n.id ? 'var(--sg-blue)' : 'transparent')
      }
    }, n.label, n.children ? /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 13
    }) : null), n.children && open === n.id ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '100%',
        left: -14,
        minWidth: 210,
        background: 'var(--sg-white)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'var(--space-2) 0',
        display: 'flex',
        flexDirection: 'column'
      }
    }, n.children.map(c => /*#__PURE__*/React.createElement("a", {
      key: c,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(n.id);
      },
      style: {
        padding: '9px 18px',
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-body)',
        textDecoration: 'none'
      }
    }, c))) : null))), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('contact')
    }, "Work With Us"))));
  }
  function SiteFooter({
    go
  }) {
    const link = (label, r) => /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        if (r) go(r);
      },
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-inverse-muted)',
        textDecoration: 'none'
      }
    }, label);
    const head = t => /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--blue-400)'
      }
    }, t);
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--surface-navy-deep)',
        color: 'var(--text-inverse)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--space-16) var(--gutter) var(--space-8)',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: 'var(--space-10)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "tagline",
      color: "white-blue",
      width: 250,
      assetBase: A
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-inverse-muted)',
        maxWidth: 330
      }
    }, "For over 20 years, Solution Group has redefined what's possible in water and wastewater management.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, head('Services'), ['Operations', 'Automation', 'Engineering', 'Chemical Management', 'Solids Management'].map(l => link(l, 'services'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, head('Company'), link('Industries', 'industries'), link('Case Studies', 'industries'), link('Careers', 'careers'), link('About', 'about'), link('Company News', 'news')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }
    }, head('Contact'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-inverse-muted)'
      }
    }, "(463) 265-5166"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        color: 'var(--text-inverse-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    }, "6239 S. East St., Ste. F", /*#__PURE__*/React.createElement("br", null), "Indianapolis, IN 46227"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "inverse-outline",
      onClick: () => go('contact')
    }, "Work With Us")))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--space-5) var(--gutter)',
        borderTop: '1px solid var(--border-inverse)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-inverse-muted)'
      }
    }, "\xA9 2026 Solution Group. All Rights Reserved."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "linkedin",
      label: "LinkedIn",
      variant: "inverse",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      label: "Email us",
      variant: "inverse",
      size: "sm"
    }))));
  }
  function Section({
    children,
    tone = 'light',
    style
  }) {
    const tones = {
      light: {
        background: 'var(--surface-page)'
      },
      subtle: {
        background: 'var(--surface-subtle)'
      },
      accent: {
        background: 'var(--surface-accent)'
      },
      navy: {
        background: 'var(--surface-navy)',
        color: 'var(--text-inverse)'
      },
      gradient: {
        background: 'var(--gradient-navy-blue)',
        color: 'var(--text-inverse)'
      }
    }[tone];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...tones,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--section-y) var(--gutter)'
      }
    }, children));
  }
  function SectionHead({
    eyebrow,
    title,
    lead,
    tone = 'dark',
    align = 'left',
    max = 680
  }) {
    const inverse = tone === 'light';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        maxWidth: max,
        margin: align === 'center' ? '0 auto' : undefined,
        textAlign: align
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: align === 'center' ? 'center' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: inverse ? 'light' : 'blue'
    }, eyebrow)) : null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        fontWeight: 'var(--weight-semibold)',
        color: inverse ? 'var(--sg-white)' : 'var(--sg-navy)'
      }
    }, title), lead ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-lead)',
        lineHeight: 'var(--leading-normal)',
        color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-body)'
      }
    }, lead) : null);
  }
  function PageHero({
    eyebrow,
    title,
    lead
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gradient-navy-blue)',
        color: 'var(--text-inverse)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: 'var(--space-16) var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "light"
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 'var(--space-4)',
        maxWidth: 900,
        fontSize: 'var(--text-h1)',
        lineHeight: 'var(--leading-tight)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--sg-white)'
      }
    }, title), lead ? /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--space-5)',
        maxWidth: 680,
        fontSize: 'var(--text-lead)',
        lineHeight: 'var(--leading-normal)',
        color: 'var(--sg-light-blue)'
      }
    }, lead) : null));
  }
  function PhotoSlot({
    label,
    height = 200,
    radius = 'var(--radius-md)'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: radius,
        background: 'var(--surface-accent)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase'
      }
    }, label));
  }
  Object.assign(window, {
    SiteHeader,
    SiteFooter,
    Section,
    SectionHead,
    PageHero,
    PhotoSlot,
    NAV,
    ASSETS: A
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Droplet = __ds_scope.Droplet;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.WaveDivider = __ds_scope.WaveDivider;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
