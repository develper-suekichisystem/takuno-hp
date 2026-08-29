/* @ds-bundle: {"format":4,"namespace":"DesignSystem_03e58a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ContactRow","sourcePath":"components/core/ContactRow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PhotoTile","sourcePath":"components/core/PhotoTile.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ServiceIcon","sourcePath":"components/core/ServiceIcon.jsx"},{"name":"Statement","sourcePath":"components/core/Statement.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/core/Button.jsx":"e93e4ae1d835","components/core/ContactRow.jsx":"b8b866c861ba","components/core/Logo.jsx":"3f89b9293c41","components/core/PhotoTile.jsx":"8c31c4f03110","components/core/SectionHeading.jsx":"c5b30e79976f","components/core/ServiceIcon.jsx":"57c6992bbd5a","components/core/Statement.jsx":"3d649e79b3de","components/forms/Checkbox.jsx":"76ca91611b38","components/forms/Input.jsx":"79dabb24882f","components/forms/Select.jsx":"5b1fd1ccf735","components/forms/Textarea.jsx":"6cb4f767c30f","components/layout/Section.jsx":"90e478f945e4","components/layout/SiteFooter.jsx":"e331651882d6","components/layout/SiteHeader.jsx":"620c58ef28ee","ui_kits/website/App.jsx":"feec03f8b245","ui_kits/website/Company.jsx":"6a981743bf2a","ui_kits/website/Contact.jsx":"43ce645ad716","ui_kits/website/Home.jsx":"c6af5861d415","ui_kits/website/Service.jsx":"2eb224eacaa4","ui_kits/website/Works.jsx":"4c0bab1b1d6e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_03e58a = window.DesignSystem_03e58a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--fw-medium)',
  letterSpacing: 'var(--ls-body)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  lineHeight: 1,
  transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)'
};
const SIZES = {
  sm: {
    fontSize: 'var(--fs-xs)',
    padding: '10px var(--space-4)'
  },
  md: {
    fontSize: 'var(--fs-sm)',
    padding: '14px var(--space-6)'
  },
  lg: {
    fontSize: 'var(--fs-body)',
    padding: '18px var(--space-8)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--navy-800)',
    color: 'var(--white)',
    borderColor: 'var(--navy-800)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--navy-800)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--navy-800)',
    borderColor: 'transparent',
    padding: '8px 0'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--navy-800)',
    borderColor: 'var(--white)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--blue-500)',
    borderColor: 'var(--blue-500)'
  },
  secondary: {
    background: 'var(--sky-100)',
    borderColor: 'var(--navy-800)'
  },
  ghost: {
    color: 'var(--blue-500)'
  },
  inverse: {
    background: 'var(--sky-200)',
    borderColor: 'var(--sky-200)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  iconAfter,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const css = {
    ...BASE,
    ...(SIZES[size] || SIZES.md),
    ...(VARIANTS[variant] || VARIANTS.primary),
    ...(hover && !disabled ? HOVER[variant] || {} : {}),
    ...(press && !disabled ? {
      transform: 'translateY(1px)'
    } : {}),
    ...(fullWidth ? {
      width: '100%'
    } : {}),
    ...(disabled ? {
      opacity: .38,
      cursor: 'not-allowed'
    } : {}),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const inner = React.createElement(React.Fragment, null, children, iconAfter ? React.createElement('span', {
    style: {
      fontSize: '.9em',
      opacity: .8
    }
  }, iconAfter) : null);
  if (href && !disabled) return React.createElement('a', {
    href,
    style: css,
    ...handlers,
    ...rest
  }, inner);
  return React.createElement('button', {
    type: 'button',
    disabled,
    onClick,
    style: css,
    ...handlers,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ContactRow.jsx
try { (() => {
const GLYPHS = {
  phone: '\u2706',
  mail: '\u2709',
  place: '\u25C6',
  fax: '\u2707'
};
function ContactRow({
  type = 'phone',
  children,
  href,
  onDark = false,
  style
}) {
  const color = onDark ? 'var(--text-on-inverse-muted)' : 'var(--text-body)';
  const content = React.createElement(React.Fragment, null, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: '20px',
      flex: '0 0 20px',
      textAlign: 'center',
      fontSize: '15px',
      lineHeight: 1.6,
      color: onDark ? 'var(--white)' : 'var(--navy-800)'
    }
  }, GLYPHS[type] || GLYPHS.phone), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-body)',
      color
    }
  }, children));
  const css = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-3)',
    textDecoration: 'none',
    ...style
  };
  return href ? React.createElement('a', {
    href,
    style: css
  }, content) : React.createElement('div', {
    style: css
  }, content);
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const FILES = {
  lockup: 'logo-lockup.png',
  vertical: 'logo-vertical.png'
};
function Logo({
  variant = 'lockup',
  height = 40,
  basePath = 'assets',
  onDark = false,
  alt = '株式会社 拓乃',
  style
}) {
  return React.createElement('img', {
    src: basePath.replace(/\/$/, '') + '/' + (FILES[variant] || FILES.lockup),
    alt,
    style: {
      height: typeof height === 'number' ? height + 'px' : height,
      width: 'auto',
      display: 'block',
      filter: onDark ? 'brightness(0) invert(1)' : 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoTile.jsx
try { (() => {
function PhotoTile({
  src,
  alt = '',
  ratio = '3 / 4',
  caption,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const frame = React.createElement('span', {
    style: {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio,
      background: 'var(--sky-200)',
      borderRadius: 'var(--radius-none)'
    }
  }, React.createElement('img', {
    src,
    alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      transform: hover ? 'scale(1.04)' : 'scale(1)'
    }
  }));
  return React.createElement(href ? 'a' : 'figure', {
    href,
    style: {
      margin: 0,
      display: 'block',
      textDecoration: 'none',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, frame, caption ? React.createElement('figcaption', {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-tight)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
const RULE = {
  flex: 1,
  height: 'var(--rule-thickness)',
  background: 'var(--border-strong)',
  minWidth: '24px'
};
function SectionHeading({
  children,
  align = 'left',
  rules = 'none',
  onDark = false,
  eyebrow,
  style
}) {
  const color = onDark ? 'var(--text-on-inverse)' : 'var(--text-heading)';
  const rule = {
    ...RULE,
    background: onDark ? 'var(--border-on-inverse)' : 'var(--border-strong)'
  };
  const title = React.createElement('h2', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      color
    }
  }, children);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, eyebrow ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-latin-caps)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--on-navy-60)' : 'var(--text-muted)'
    }
  }, eyebrow) : null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      width: rules === 'both' ? '100%' : 'auto'
    }
  }, rules === 'both' ? React.createElement('span', {
    style: rule
  }) : null, title, rules !== 'none' ? React.createElement('span', {
    style: rule
  }) : null));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceIcon.jsx
try { (() => {
const FILES = {
  scaffold: 'icon-scaffold.png',
  painting: 'icon-painting.png',
  roof: 'icon-roof.png',
  waterproof: 'icon-waterproof.png',
  reform: 'icon-reform.png'
};
function ServiceIcon({
  name,
  label,
  size = 96,
  basePath = 'assets',
  href,
  onDark = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const body = React.createElement(React.Fragment, null, React.createElement('span', {
    style: {
      width: size + 'px',
      height: size + 'px',
      borderRadius: 'var(--radius-pill)',
      background: onDark ? 'var(--on-navy-14)' : 'var(--surface-chip)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      transition: 'background var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...(hover ? {
        background: onDark ? 'rgba(255,255,255,.22)' : 'var(--line-200)',
        transform: 'translateY(-2px)'
      } : {})
    }
  }, React.createElement('img', {
    src: basePath.replace(/\/$/, '') + '/' + (FILES[name] || FILES.scaffold),
    alt: '',
    style: {
      width: Math.round(size * 0.92) + 'px',
      height: Math.round(size * 0.92) + 'px',
      objectFit: 'contain',
      mixBlendMode: 'multiply'
    }
  })), label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-body)',
      color: onDark ? 'var(--text-on-inverse)' : 'var(--text-heading)'
    }
  }, label) : null);
  const css = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--space-3)',
    textDecoration: 'none',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  return href ? React.createElement('a', {
    href,
    style: css,
    ...handlers
  }, body) : React.createElement('div', {
    style: css,
    ...handlers
  }, body);
}
Object.assign(__ds_scope, { ServiceIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Statement.jsx
try { (() => {
function Statement({
  children,
  signatureRole,
  signatureName,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 2.15,
      letterSpacing: 'var(--ls-body)',
      color: 'var(--text-on-inverse-muted)',
      maxWidth: '46em'
    }
  }, children), signatureName ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, signatureRole ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--on-navy-60)',
      letterSpacing: '.1em'
    }
  }, signatureRole) : null, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-h3)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-on-inverse)'
    }
  }, signatureName)) : null);
}
Object.assign(__ds_scope, { Statement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Statement.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: '18px',
      height: '18px',
      flex: '0 0 18px',
      marginTop: '3px',
      border: '1px solid ' + (checked ? 'var(--navy-800)' : 'var(--border-strong)'),
      background: checked ? 'var(--navy-800)' : 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--white)',
      fontSize: '11px',
      lineHeight: 1,
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked ? '\u2713' : ''), React.createElement('input', {
    type: 'checkbox',
    checked,
    disabled,
    onChange: onChange ? e => onChange(e.target.checked) : undefined,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.7
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const FIELD_BASE = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text-heading)',
  background: 'var(--white)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px var(--space-4)',
  lineHeight: 1.7,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
};
function FieldShell({
  label,
  required,
  hint,
  error,
  children
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.08em',
      color: 'var(--text-heading)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--state-danger)',
      marginLeft: '4px'
    }
  }, '必須') : null) : null, children, error ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--state-danger)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
function Input({
  label,
  required = false,
  hint,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement(FieldShell, {
    label,
    required,
    hint,
    error
  }, React.createElement('input', {
    type,
    value,
    placeholder,
    disabled,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...FIELD_BASE,
      ...(error ? {
        borderColor: 'var(--state-danger)'
      } : {}),
      ...(focus ? {
        borderColor: 'var(--focus-ring)',
        boxShadow: '0 0 0 3px rgba(31,95,168,.14)'
      } : {}),
      ...(disabled ? {
        background: 'var(--sky-100)',
        color: 'var(--ink-300)'
      } : {}),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const FIELD_BASE = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text-heading)',
  background: 'var(--white)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px var(--space-4)',
  lineHeight: 1.7,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
};
function FieldShell({
  label,
  required,
  hint,
  error,
  children
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.08em',
      color: 'var(--text-heading)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--state-danger)',
      marginLeft: '4px'
    }
  }, '必須') : null) : null, children, error ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--state-danger)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
function Select({
  label,
  required = false,
  hint,
  error,
  options = [],
  value,
  onChange,
  placeholder = '選択してください',
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement(FieldShell, {
    label,
    required,
    hint,
    error
  }, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value: value ?? '',
    disabled,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...FIELD_BASE,
      appearance: 'none',
      paddingRight: 'var(--space-8)',
      color: value ? 'var(--text-heading)' : 'var(--ink-300)',
      ...(error ? {
        borderColor: 'var(--state-danger)'
      } : {}),
      ...(focus ? {
        borderColor: 'var(--focus-ring)',
        boxShadow: '0 0 0 3px rgba(31,95,168,.14)'
      } : {}),
      ...(disabled ? {
        background: 'var(--sky-100)'
      } : {}),
      ...style
    }
  }, React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder), options.map(o => React.createElement('option', {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--navy-800)',
      fontSize: '10px'
    }
  }, '\u25BC')));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const FIELD_BASE = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text-heading)',
  background: 'var(--white)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px var(--space-4)',
  lineHeight: 1.7,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
};
function FieldShell({
  label,
  required,
  hint,
  error,
  children
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.08em',
      color: 'var(--text-heading)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--state-danger)',
      marginLeft: '4px'
    }
  }, '必須') : null) : null, children, error ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--state-danger)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
function Textarea({
  label,
  required = false,
  hint,
  error,
  rows = 6,
  value,
  onChange,
  placeholder,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement(FieldShell, {
    label,
    required,
    hint,
    error
  }, React.createElement('textarea', {
    rows,
    value,
    placeholder,
    disabled,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...FIELD_BASE,
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      ...(error ? {
        borderColor: 'var(--state-danger)'
      } : {}),
      ...(focus ? {
        borderColor: 'var(--focus-ring)',
        boxShadow: '0 0 0 3px rgba(31,95,168,.14)'
      } : {}),
      ...(disabled ? {
        background: 'var(--sky-100)'
      } : {}),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
const TONES = {
  page: {
    background: 'var(--surface-page)',
    color: 'var(--text-body)'
  },
  muted: {
    background: 'var(--surface-muted)',
    color: 'var(--text-body)'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-inverse-muted)'
  }
};
function Section({
  tone = 'page',
  compact = false,
  bleed = false,
  children,
  id,
  style,
  innerStyle
}) {
  return React.createElement('section', {
    id,
    style: {
      ...(TONES[tone] || TONES.page),
      paddingTop: compact ? 'var(--section-y-compact)' : 'var(--section-y)',
      paddingBottom: compact ? 'var(--section-y-compact)' : 'var(--section-y)',
      ...style
    }
  }, React.createElement('div', {
    style: bleed ? {
      width: '100%',
      ...innerStyle
    } : {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      paddingLeft: 'var(--container-pad)',
      paddingRight: 'var(--container-pad)',
      ...innerStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function SiteFooter({
  basePath = 'assets',
  licence = '愛知県知事許可（般-7）第85337号',
  links = [],
  style
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse-muted)',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-6)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, React.createElement(__ds_scope.Logo, {
    variant: 'lockup',
    height: 36,
    basePath,
    onDark: true
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, React.createElement(__ds_scope.ContactRow, {
    type: 'place',
    onDark: true
  }, '〒470-2104 愛知県知多郡東浦町生路上坪釜23-1'), React.createElement(__ds_scope.ContactRow, {
    type: 'phone',
    onDark: true
  }, '0562-85-9488 ｜ FAX 0562-22-5296'), React.createElement(__ds_scope.ContactRow, {
    type: 'mail',
    onDark: true
  }, 'okada.tmrkn@outlook.jp'))), React.createElement('nav', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, links.map(l => React.createElement('a', {
    key: l.label ?? l,
    href: l.href || '#',
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--on-navy-80)',
      textDecoration: 'none'
    }
  }, l.label ?? l)))), React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      padding: 'var(--space-5) var(--container-pad) 0',
      borderTop: '1px solid var(--border-on-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--on-navy-60)',
      letterSpacing: '.04em'
    }
  }, React.createElement('span', null, licence), React.createElement('span', null, '\u00A9 ' + new Date().getFullYear() + ' TAKUNO CO.,LTD.')));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function SiteHeader({
  items = [],
  active,
  onNavigate,
  basePath = 'assets',
  cta = 'お問い合わせ',
  onCta,
  transparent = false,
  style
}) {
  return React.createElement('header', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: transparent ? 'rgba(255,255,255,.86)' : 'var(--white)',
      backdropFilter: transparent ? 'saturate(160%) blur(10px)' : 'none',
      boxShadow: 'var(--shadow-header)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, React.createElement(__ds_scope.Logo, {
    variant: 'lockup',
    height: 38,
    basePath
  }), React.createElement('nav', {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, items.map(it => {
    const isActive = (it.id ?? it) === active;
    return React.createElement('a', {
      key: it.id ?? it,
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id ?? it);
        }
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: '.06em',
        textDecoration: 'none',
        paddingBottom: '3px',
        color: isActive ? 'var(--navy-800)' : 'var(--text-body)',
        borderBottom: '1px solid ' + (isActive ? 'var(--navy-800)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
      }
    }, it.label ?? it);
  })), cta ? React.createElement(__ds_scope.Button, {
    size: 'sm',
    onClick: onCta,
    iconAfter: '\u2192'
  }, cta) : null));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const NAV = [{
  id: 'home',
  label: 'ホーム'
}, {
  id: 'service',
  label: '業務内容'
}, {
  id: 'works',
  label: '施工実績'
}, {
  id: 'company',
  label: '会社概要'
}, {
  id: 'contact',
  label: 'お問い合わせ'
}];
const PAGES = {
  home: Home,
  service: Service,
  works: Works,
  company: Company,
  contact: Contact
};
function App() {
  const [page, setPage] = React.useState('home');
  const go = id => {
    setPage(PAGES[id] ? id : 'home');
    window.scrollTo(0, 0);
  };
  const Page = PAGES[page] || Home;
  return /*#__PURE__*/React.createElement(Page, {
    nav: NAV,
    active: page,
    onNavigate: go
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Company.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Section,
  SectionHeading,
  PhotoTile,
  Statement
} = window.DS;
const PROFILE = [['商号', '株式会社 拓乃（TAKUNO CO.,LTD.）'], ['代表取締役', '岡田 拓磨'], ['所在地', '〒470-2104 愛知県知多郡東浦町生路上坪釜23-1'], ['電話 / FAX', '0562-85-9488 ／ 0562-22-5296'], ['メール', 'okada.tmrkn@outlook.jp'], ['建設業許可', '愛知県知事許可（般-7）第85337号'], ['事業内容', '足場工事一式、外壁塗装、屋根工事、防水工事、各種リフォーム']];
function Company({
  nav,
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    basePath: A,
    items: nav,
    active: active,
    onNavigate: onNavigate,
    onCta: () => onNavigate('contact')
  }), /*#__PURE__*/React.createElement(PageHead, {
    title: "\u4F1A\u793E\u6982\u8981",
    eyebrow: "COMPANY",
    lead: "\u8DB3\u5834\u306F\u3001\u5EFA\u7269\u3092\u3064\u304F\u308B\u305F\u3081\u306E\u571F\u53F0\u3067\u3042\u308A\u3001\u3059\u3079\u3066\u306E\u5DE5\u4E8B\u306E\u57FA\u76E4\u3067\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    bleed: true,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(300px,34%) 1fr',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/photo-representative.jpg',
    alt: "\u4EE3\u8868\u53D6\u7DE0\u5F79 \u5CA1\u7530 \u62D3\u78E8",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-portrait)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    eyebrow: "MESSAGE"
  }, "\u4EE3\u8868\u53D6\u7DE0\u5F79\u306E\u60F3\u3044"), /*#__PURE__*/React.createElement(Statement, {
    signatureRole: "\u4EE3\u8868\u53D6\u7DE0\u5F79",
    signatureName: "\u5CA1\u7530 \u62D3\u78E8"
  }, "\u5F0A\u793E\u306F\u300C\u8DB3\u5143\u304B\u3089\u672A\u6765\u3092\u652F\u3048\u308B\u300D\u3068\u3044\u3046\u60F3\u3044\u306E\u3082\u3068\u3001", /*#__PURE__*/React.createElement("br", null), "\u5B89\u5168\u3067\u9AD8\u54C1\u8CEA\u306A\u65BD\u5DE5\u3092\u8FFD\u6C42\u3057\u3066\u307E\u3044\u308A\u307E\u3057\u305F\u3002", /*#__PURE__*/React.createElement("br", null), "\u3060\u304B\u3089\u3053\u305D\u3001\u79C1\u305F\u3061\u306F\u4E00\u3064\u3072\u3068\u3064\u306E\u73FE\u5834\u306B\u771F\u646F\u306B\u5411\u304D\u5408\u3044\u3001", /*#__PURE__*/React.createElement("br", null), "\u304A\u5BA2\u69D8\u3068\u5730\u57DF\u793E\u4F1A\u306E\u4FE1\u983C\u306B\u5FDC\u3048\u3066\u3044\u304D\u307E\u3059\u3002")))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    rules: "right"
  }, "\u4F1A\u793E\u60C5\u5831"), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, PROFILE.map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)',
      letterSpacing: '.08em'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-hairline)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.8
    }
  }, v))))), /*#__PURE__*/React.createElement(PhotoTile, {
    src: A + '/photo-site-05.jpg',
    ratio: "3 / 4",
    caption: "\u9AD8\u6240\u4F5C\u696D\u5E8A\u3002\u5B89\u5168\u5E2F\u306E\u639B\u3051\u66FF\u3048\u304C\u4E0D\u8981\u306A\u4E8C\u6BB5\u624B\u3059\u308A\u3067\u7D44\u307F\u4E0A\u3052\u307E\u3059\u3002"
  }))), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: A,
    links: nav.map(n => ({
      label: n.label
    }))
  }));
}
Object.assign(window, {
  Company,
  PROFILE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Company.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Section,
  SectionHeading,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  ContactRow
} = window.DS;
function Contact({
  nav,
  active,
  onNavigate
}) {
  const [v, setV] = React.useState({
    name: '',
    company: '',
    email: '',
    tel: '',
    topic: '',
    body: '',
    agree: false
  });
  const [sent, setSent] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const s = k => x => setV({
    ...v,
    [k]: x
  });
  const emailBad = touched && v.email.length > 0 && !/.+@.+\..+/.test(v.email);
  const ready = v.name && v.email && !emailBad && v.topic && v.body && v.agree;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    basePath: A,
    items: nav,
    active: active,
    onNavigate: onNavigate,
    cta: null
  }), /*#__PURE__*/React.createElement(PageHead, {
    title: "\u304A\u554F\u3044\u5408\u308F\u305B",
    eyebrow: "CONTACT",
    lead: "\u304A\u898B\u7A4D\u308A\u30FB\u73FE\u5834\u306E\u3054\u76F8\u8AC7\u30FB\u63A1\u7528\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u627F\u3063\u3066\u3044\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: 'var(--space-8)',
      background: 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, null, "\u9001\u4FE1\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u62C5\u5F53\u3088\u308A\u4E8C\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002\u304A\u6025\u304E\u306E\u5834\u5408\u306F 0562-85-9488 \u307E\u3067\u304A\u96FB\u8A71\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setV({
        name: '',
        company: '',
        email: '',
        tel: '',
        topic: '',
        body: '',
        agree: false
      });
      setTouched(false);
    }
  }, "\u30D5\u30A9\u30FC\u30E0\u306B\u623B\u308B"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u304A\u540D\u524D",
    required: true,
    value: v.name,
    onChange: s('name'),
    placeholder: "\u5C71\u7530 \u592A\u90CE"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u4F1A\u793E\u540D",
    value: v.company,
    onChange: s('company'),
    placeholder: "\u682A\u5F0F\u4F1A\u793E\u3007\u3007"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    required: true,
    type: "email",
    value: v.email,
    onChange: x => {
      setTouched(true);
      s('email')(x);
    },
    placeholder: "example@takuno.co.jp",
    error: emailBad ? '正しい形式で入力してください' : undefined
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7",
    type: "tel",
    value: v.tel,
    onChange: s('tel'),
    hint: "\u65E5\u4E2D\u3064\u306A\u304C\u308B\u756A\u53F7\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044",
    placeholder: "0562-85-9488"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u304A\u554F\u3044\u5408\u308F\u305B\u7A2E\u5225",
    required: true,
    value: v.topic,
    onChange: s('topic'),
    options: ['足場工事のご相談', '外壁塗装のご相談', '屋根・防水のご相談', 'リフォームのご相談', '採用について', 'その他']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",
    required: true,
    rows: 7,
    value: v.body,
    onChange: s('body'),
    placeholder: "\u73FE\u5834\u306E\u3054\u4F4F\u6240\u3001\u5EFA\u7269\u306E\u898F\u6A21\u3001\u3054\u5E0C\u671B\u306E\u6642\u671F\u306A\u3069\u3092\u3054\u8A18\u5165\u304F\u3060\u3055\u3044\u3002"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u540C\u610F\u3057\u307E\u3059",
    checked: v.agree,
    onChange: s('agree')
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "\u2192",
    disabled: !ready,
    onClick: () => setSent(true)
  }, "\u9001\u4FE1\u3059\u308B")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: 'var(--space-6)',
      background: 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, "\u304A\u96FB\u8A71\u3067\u306E\u3054\u76F8\u8AC7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    type: "phone"
  }, "0562-85-9488"), /*#__PURE__*/React.createElement(ContactRow, {
    type: "fax"
  }, "0562-22-5296"), /*#__PURE__*/React.createElement(ContactRow, {
    type: "mail"
  }, "okada.tmrkn@outlook.jp"), /*#__PURE__*/React.createElement(ContactRow, {
    type: "place"
  }, "\u3012470-2104 \u611B\u77E5\u770C\u77E5\u591A\u90E1\u6771\u6D66\u753A\u751F\u8DEF\u4E0A\u576A\u91DC23-1")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.9
    }
  }, "\u53D7\u4ED8\u6642\u9593 8:00\u201318:00\uFF08\u65E5\u66DC\u30FB\u795D\u65E5\u3092\u9664\u304F\uFF09", /*#__PURE__*/React.createElement("br", null), "\u611B\u77E5\u770C\u77E5\u4E8B\u8A31\u53EF\uFF08\u822C-7\uFF09\u7B2C85337\u53F7")))), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: A,
    links: nav.map(n => ({
      label: n.label
    }))
  }));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Section,
  SectionHeading,
  ServiceIcon,
  PhotoTile,
  Statement,
  Button,
  Logo
} = window.DS;
const A = '../../assets';
const SITES = [{
  src: A + '/photo-site-01.jpg',
  caption: '戸建て住宅 外部足場一式'
}, {
  src: A + '/photo-site-02.jpg',
  caption: '共同住宅 改修足場'
}, {
  src: A + '/photo-site-03.jpg',
  caption: '足場組立・安全確認'
}, {
  src: A + '/photo-site-04.jpg',
  caption: '養生シート施工'
}, {
  src: A + '/photo-site-05.jpg',
  caption: '高所作業床'
}];
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'stretch',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/photo-hero-scaffold.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      width: '100%',
      margin: '0 auto',
      padding: 'var(--space-9) var(--container-pad) var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 54,
    basePath: A
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-display)'
    }
  }, "\u8DB3\u5143\u304B\u3089", /*#__PURE__*/React.createElement("br", null), "\u672A\u6765\u3092\u652F\u3048\u308B"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-heading)',
      letterSpacing: '.06em'
    }
  }, "\u78BA\u304B\u306A\u6280\u8853\u3068\u4FE1\u983C\u3067\u3001\u5B89\u5FC3\u30FB\u5B89\u5168\u306A\u8DB3\u5834\u3092\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "\u2192",
    onClick: onCta
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: onCta
  }, "\u65BD\u5DE5\u5B9F\u7E3E\u3092\u898B\u308B")))));
}
function Capability() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "muted"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.25fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1.35,
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, "\u5404\u5C02\u9580\u696D\u8005\u3068\u9023\u643A\u3057\u305F", /*#__PURE__*/React.createElement("br", null), "\u5E45\u5E83\u3044\u5BFE\u5FDC\u529B"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "\u79C1\u305F\u3061\u306F\u3001\u5404\u5206\u91CE\u306E\u5C02\u9580\u696D\u8005\u3068\u5F37\u56FA\u306B\u9023\u643A\u3057\u3001\u8DB3\u5834\u5DE5\u4E8B\u3092\u306F\u3058\u3081\u3068\u3059\u308B\u591A\u69D8\u306A\u5DE5\u4E8B\u306B\u4E00\u62EC\u3067\u5BFE\u5FDC\u3002\u304A\u5BA2\u69D8\u306E\u3054\u8981\u671B\u306B\u5408\u308F\u305B\u305F\u6700\u9069\u306A\u3054\u63D0\u6848\u3068\u3001\u9AD8\u54C1\u8CEA\u306A\u65BD\u5DE5\u3092\u304A\u7D04\u675F\u3057\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    rules: "both"
  }, "\u696D\u52D9\u5185\u5BB9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, [['scaffold', '足場工事一式'], ['painting', '外壁塗装'], ['roof', '屋根工事'], ['waterproof', '防水工事'], ['reform', '各種リフォーム']].map(([n, l]) => /*#__PURE__*/React.createElement(ServiceIcon, {
    key: n,
    name: n,
    label: l,
    basePath: A
  }))))));
}
function Message() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    bleed: true,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(320px,38%) 1fr',
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/photo-representative.jpg',
    alt: "\u4EE3\u8868\u53D6\u7DE0\u5F79 \u5CA1\u7530 \u62D3\u78E8",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-portrait)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--space-10) var(--space-10) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true
  }, "\u4EE3\u8868\u53D6\u7DE0\u5F79\u306E\u60F3\u3044"), /*#__PURE__*/React.createElement(Statement, {
    signatureRole: "\u4EE3\u8868\u53D6\u7DE0\u5F79",
    signatureName: "\u5CA1\u7530 \u62D3\u78E8"
  }, "\u5F0A\u793E\u306F\u300C\u8DB3\u5143\u304B\u3089\u672A\u6765\u3092\u652F\u3048\u308B\u300D\u3068\u3044\u3046\u60F3\u3044\u306E\u3082\u3068\u3001", /*#__PURE__*/React.createElement("br", null), "\u5B89\u5168\u3067\u9AD8\u54C1\u8CEA\u306A\u65BD\u5DE5\u3092\u8FFD\u6C42\u3057\u3066\u307E\u3044\u308A\u307E\u3057\u305F\u3002", /*#__PURE__*/React.createElement("br", null), "\u8DB3\u5834\u306F\u3001\u5EFA\u7269\u3092\u3064\u304F\u308B\u305F\u3081\u306E\u571F\u53F0\u3067\u3042\u308A\u3001\u3059\u3079\u3066\u306E\u5DE5\u4E8B\u306E\u57FA\u76E4\u3067\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u3060\u304B\u3089\u3053\u305D\u3001\u79C1\u305F\u3061\u306F\u4E00\u3064\u3072\u3068\u3064\u306E\u73FE\u5834\u306B\u771F\u646F\u306B\u5411\u304D\u5408\u3044\u3001", /*#__PURE__*/React.createElement("br", null), "\u304A\u5BA2\u69D8\u3068\u5730\u57DF\u793E\u4F1A\u306E\u4FE1\u983C\u306B\u5FDC\u3048\u3066\u3044\u304D\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u3053\u308C\u304B\u3089\u3082\u6280\u8853\u306E\u7814\u947D\u3068\u4EBA\u6750\u80B2\u6210\u306B\u529B\u3092\u6CE8\u304E\u3001", /*#__PURE__*/React.createElement("br", null), "\u3088\u308A\u826F\u3044\u672A\u6765\u3065\u304F\u308A\u306B\u8CA2\u732E\u3057\u3066\u307E\u3044\u308A\u307E\u3059\u3002"))));
}
function WorksPreview({
  onMore
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    rules: "both"
  }, "\u65BD\u5DE5\u73FE\u5834\u306E\u3054\u7D39\u4ECB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-2)'
    }
  }, SITES.map(s => /*#__PURE__*/React.createElement(PhotoTile, {
    key: s.src,
    src: s.src,
    alt: s.caption,
    ratio: "3 / 4",
    caption: s.caption
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconAfter: "\u2192",
    onClick: onMore
  }, "\u65BD\u5DE5\u5B9F\u7E3E\u3092\u3059\u3079\u3066\u898B\u308B"))));
}
function Home({
  nav,
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    basePath: A,
    items: nav,
    active: active,
    onNavigate: onNavigate,
    onCta: () => onNavigate('contact')
  }), /*#__PURE__*/React.createElement(Hero, {
    onCta: () => onNavigate('contact')
  }), /*#__PURE__*/React.createElement(Capability, null), /*#__PURE__*/React.createElement(Message, null), /*#__PURE__*/React.createElement(WorksPreview, {
    onMore: () => onNavigate('works')
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: A,
    links: nav.map(n => ({
      label: n.label
    }))
  }));
}
Object.assign(window, {
  Home,
  Hero,
  Capability,
  Message,
  WorksPreview,
  SITES,
  A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Service.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Section,
  SectionHeading,
  ServiceIcon,
  Button
} = window.DS;
const SERVICES = [{
  name: 'scaffold',
  label: '足場工事一式',
  body: 'くさび式・単管足場の設計から組立・解体まで一貫して対応します。現場の条件に合わせ、作業性と安全性を両立させた仮設計画をご提案します。'
}, {
  name: 'painting',
  label: '外壁塗装',
  body: '下地調整から仕上げまで、建物の状態に応じた工法と塗料を選定。足場工事と同一の体制で管理するため、工程のロスがありません。'
}, {
  name: 'roof',
  label: '屋根工事',
  body: '葺き替え・カバー工法・部分補修に対応。高所作業に必要な足場を自社で確保できるため、着工までの期間を短縮できます。'
}, {
  name: 'waterproof',
  label: '防水工事',
  body: 'ウレタン塗膜・シート防水などをご提案。雨漏りの原因を調査したうえで、建物の寿命を延ばす施工を行います。'
}, {
  name: 'reform',
  label: '各種リフォーム',
  body: '各分野の専門業者と連携し、外装から内装まで一括で対応。窓口を一つにまとめることで、お客様の手間を減らします。'
}];
function ServiceRow({
  s,
  index
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 'var(--space-7)',
      alignItems: 'start',
      padding: 'var(--space-7) 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    name: s.name,
    size: 104,
    basePath: A
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-latin-caps)',
      color: 'var(--ink-300)'
    }
  }, String(index + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, s.label)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: '46em'
    }
  }, s.body)));
}
function Service({
  nav,
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    basePath: A,
    items: nav,
    active: active,
    onNavigate: onNavigate,
    onCta: () => onNavigate('contact')
  }), /*#__PURE__*/React.createElement(PageHead, {
    title: "\u696D\u52D9\u5185\u5BB9",
    eyebrow: "SERVICE",
    lead: "\u8DB3\u5834\u5DE5\u4E8B\u3092\u8EF8\u306B\u3001\u5EFA\u7269\u306E\u5916\u307E\u308F\u308A\u3092\u4E00\u62EC\u3067\u304A\u5F15\u304D\u53D7\u3051\u3057\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: s.name,
    s: s,
    index: i
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "\u2192",
    onClick: () => onNavigate('contact')
  }, "\u304A\u898B\u7A4D\u308A\u306E\u3054\u76F8\u8AC7"))), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: A,
    links: nav.map(n => ({
      label: n.label
    }))
  }));
}
function PageHead({
  title,
  eyebrow,
  lead
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/photo-site-04.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-latin-caps)',
      color: 'var(--on-navy-60)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-on-inverse)'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-inverse-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, lead) : null));
}
Object.assign(window, {
  Service,
  ServiceRow,
  SERVICES,
  PageHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Service.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Works.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  Section,
  PhotoTile,
  Button
} = window.DS;
const FILTERS = ['すべて', '足場工事一式', '外壁塗装', '屋根工事', '防水工事'];
const ITEMS = [{
  src: A + '/photo-site-01.jpg',
  title: '戸建て住宅 外部足場一式',
  place: '愛知県知多郡東浦町',
  cat: '足場工事一式'
}, {
  src: A + '/photo-site-02.jpg',
  title: '共同住宅 改修足場',
  place: '愛知県大府市',
  cat: '足場工事一式'
}, {
  src: A + '/photo-site-03.jpg',
  title: '足場組立・安全確認',
  place: '愛知県東海市',
  cat: '足場工事一式'
}, {
  src: A + '/photo-site-04.jpg',
  title: '養生シート施工',
  place: '愛知県半田市',
  cat: '外壁塗装'
}, {
  src: A + '/photo-site-05.jpg',
  title: '高所作業床',
  place: '愛知県知多市',
  cat: '屋根工事'
}, {
  src: A + '/photo-hero-scaffold.jpg',
  title: '大規模改修 仮設計画',
  place: '愛知県刈谷市',
  cat: '防水工事'
}];
function Filter({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, FILTERS.map(f => {
    const on = f === value;
    return /*#__PURE__*/React.createElement("button", {
      key: f,
      type: "button",
      onClick: () => onChange(f),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        letterSpacing: '.08em',
        cursor: 'pointer',
        padding: '10px var(--space-4)',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (on ? 'var(--navy-800)' : 'var(--border-hairline)'),
        background: on ? 'var(--navy-800)' : 'var(--white)',
        color: on ? 'var(--white)' : 'var(--text-body)',
        transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
      }
    }, f);
  }));
}
function Works({
  nav,
  active,
  onNavigate
}) {
  const [filter, setFilter] = React.useState('すべて');
  const shown = filter === 'すべて' ? ITEMS : ITEMS.filter(i => i.cat === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    basePath: A,
    items: nav,
    active: active,
    onNavigate: onNavigate,
    onCta: () => onNavigate('contact')
  }), /*#__PURE__*/React.createElement(PageHead, {
    title: "\u65BD\u5DE5\u5B9F\u7E3E",
    eyebrow: "WORKS",
    lead: "\u77E5\u591A\u534A\u5CF6\u3092\u4E2D\u5FC3\u306B\u3001\u6238\u5EFA\u3066\u304B\u3089\u5171\u540C\u4F4F\u5B85\u30FB\u5927\u898F\u6A21\u6539\u4FEE\u307E\u3067\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Filter, {
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, shown.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(PhotoTile, {
    src: i.src,
    alt: i.title,
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: '.1em',
      color: 'var(--accent)'
    }
  }, i.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--fs-lead)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)'
    }
  }, i.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, i.place))))), shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)'
    }
  }, "\u8A72\u5F53\u3059\u308B\u65BD\u5DE5\u5B9F\u7E3E\u306F\u307E\u3060\u63B2\u8F09\u3057\u3066\u3044\u307E\u305B\u3093\u3002") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate('contact'),
    iconAfter: "\u2192"
  }, "\u540C\u69D8\u306E\u5DE5\u4E8B\u3092\u76F8\u8AC7\u3059\u308B")))), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: A,
    links: nav.map(n => ({
      label: n.label
    }))
  }));
}
Object.assign(window, {
  Works,
  Filter,
  ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Works.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceIcon = __ds_scope.ServiceIcon;

__ds_ns.Statement = __ds_scope.Statement;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
