
## Color Palette

### Primary Colors
| Color | Hex Code | Usage | Example |
|-------|----------|-------|---------|
| **Vibrant Green** | `#8FC50E` | Primary actions, buttons, accents | Filter buttons (active), primary CTAs, main links |
| **Medium Green** | `#A9D563` | Hover states, secondary elements | Button hover, gradient transitions |
| **Light Green** | `#B8DF96` | Subtle accents, borders | Category badges, soft highlights |

### Supporting Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Olive Green** | `#6b8e23` | Headers, titles, important text |
| **Dark Green** | `#7ab800` | Category variant (GRN methods) |
| **Bright Green** | `#9ed12e` | Category variant (Heterogeneity) |
| **Forest Green** | `#556b2f` | Body text in colored sections |

### Background Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Light Green Tint 1** | `#f0f9e8` | Page background start, feature boxes |
| **Light Green Tint 2** | `#e8f5d8` | Page background end (gradient) |
| **Pure White** | `#ffffff` | Cards, sections, clean backgrounds |
| **Light Gray** | `#f8f9fa` | Method cards background |
| **Code Background** | `#f1f3f5` | Code snippets, inline code |

### Neutral Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Dark Gray** | `#333333` | Body text |
| **Medium Gray** | `#666666` | Secondary text, navbar links |
| **Light Gray** | `#555555` | Descriptions |
| **Border Gray** | `#e7e7e7` | Dividers, borders |
| **Badge Gray** | `#7f8c8d` | Year badges |

---

## Gradients

### Background Gradient
```css
background: linear-gradient(135deg, #f0f9e8 0%, #e8f5d8 100%);
```
**Usage:** Main page background

### Stat Card Gradient
```css
background: linear-gradient(135deg, #8FC50E 0%, #A9D563 100%);
```
**Usage:** Statistics cards, highlight sections

---

## Typography

### Font Family
```css
font-family: 'Lato', sans-serif;
```

### Font Sizes
| Element | Size | Weight | Color |
|---------|------|--------|-------|
| **Page Title (h1)** | 2.5em | Regular | #6b8e23 |
| **Section Title (h2)** | 1.8em | Regular | #6b8e23 |
| **Method Name (h3)** | 1.3em | Bold | #6b8e23 |
| **Subtitle** | 1.2em | Regular | #666666 |
| **Body Text** | 1em (16px) | Regular | #333333 |
| **Small Text** | 0.9em | Regular | #555555 |
| **Badge Text** | 0.75em | Bold | white |
| **Code/Algorithm** | 0.9em | Monospace | #333333 |

### Line Height
```css
line-height: 1.6; /* Body text */
line-height: 1.8; /* Algorithm steps */
```

---

## Component Styles

### Cards

#### Method Cards
```css
background: #f8f9fa;
border-radius: 12px;
padding: 20px;
border-left: 5px solid [category-color];
box-shadow: 0 4px 15px rgba(143, 197, 14, 0.15);
```

**Border Colors by Category:**
- **Transfer Learning**: `#8FC50E`
- **Transformers**: `#A9D563`
- **GRN-Based**: `#7ab800`
- **Heterogeneity**: `#9ed12e`
- **Databases**: `#6b8e23`
- **Drug Repurposing**: `#B8DF96`

#### Timeline Year Cards
```css
background: white;
padding: 30px;
border-radius: 15px;
box-shadow: 0 4px 15px rgba(143, 197, 14, 0.15);
border-left: 5px solid #8FC50E;
```

#### Stat Cards
```css
background: linear-gradient(135deg, #8FC50E 0%, #A9D563 100%);
color: white;
padding: 25px;
border-radius: 15px;
text-align: center;
```

### Buttons

#### Primary Buttons
```css
background: #8FC50E;
color: white;
padding: 8px 15px;
border-radius: 20px;
border: none;
transition: all 0.3s;
```
**Hover:** `background: #A9D563;`

#### Filter Buttons
```css
border: 2px solid #8FC50E;
background: white;
color: #6b8e23;
padding: 10px 20px;
border-radius: 25px;
```
**Active/Hover:** 
```css
background: #8FC50E;
color: white;
```

### Badges

#### Category Badges
```css
padding: 3px 8px;
border-radius: 12px;
font-size: 0.75em;
font-weight: bold;
color: white;
```

**Badge Colors:**
- Transfer: `#8FC50E`
- Transformer: `#A9D563`
- GRN: `#7ab800`
- Heterogeneity: `#9ed12e`
- Database: `#6b8e23`
- Repurposing: `#B8DF96`
- Year: `#7f8c8d`

### Links
```css
color: #8FC50E;
text-decoration: none;
transition: all 0.3s;
```
**Hover:** `background: #A9D563;`

### Feature Boxes

#### Key Features Box
```css
background: #f0f9e8;
padding: 12px;
border-radius: 8px;
border-left: 4px solid #8FC50E;
```

**Title Color:** `#6b8e23`  
**Text Color:** `#556b2f`

#### Algorithm Section
```css
background: white;
padding: 15px;
border-radius: 8px;
border-top: 2px dashed #ddd;
font-family: 'Courier New', monospace;
```

**Title Color:** `#6b8e23`  
**Code Highlight:** `#8FC50E`

---

## Shadows & Effects

### Standard Shadow
```css
box-shadow: 0 4px 15px rgba(143, 197, 14, 0.15);
```
**Usage:** Cards, sections, header

### Hover Shadow
```css
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
```
**Usage:** Card hover states

### Navbar Shadow
```css
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
```

---

## Spacing System

### Padding
| Element | Padding |
|---------|---------|
| Container | 20px |
| Cards | 20-25px |
| Sections | 30-40px |
| Buttons | 8-12px (vertical) / 15-30px (horizontal) |
| Feature boxes | 12px |

### Margin
| Element | Margin |
|---------|---------|
| Header | 40px 0 30px 0 |
| Timeline sections | 30px bottom |
| Stats grid | 30px 0 |
| Filter section | 30px 0 |

### Border Radius
| Element | Radius |
|---------|--------|
| Cards | 12-15px |
| Buttons | 20-25px (pill shape) |
| Badges | 12px |
| Feature boxes | 8px |
| Code sections | 5-8px |

### Grid Gaps
```css
gap: 20px; /* Method grid */
gap: 10px; /* Filter buttons */
gap: 5px;  /* Badge groups */
```

---

## Transitions & Animations

### Standard Transition
```css
transition: all 0.3s ease;
```
**Usage:** All interactive elements

### Slide Down Animation (Algorithm Toggle)
```css
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Hover Transforms
- **Cards:** `transform: translateY(-5px);` + enhanced shadow
- **Links:** `transform: translateX(2px);`
- **Buttons:** `transform: translateY(-2px);`

---

## Responsive Breakpoints

### Mobile (max-width: 768px)
```css
@media (max-width: 768px) {
    .method-grid { grid-template-columns: 1fr; }
    .header h1 { font-size: 2em; }
    .stat-number { font-size: 2em; }
}
```

---

## Layout Grid

### Method Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 20px;
```

### Stats Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 20px;
```

---

## Accessibility Guidelines

### Color Contrast Ratios
- **Primary text on white:** ≥ 4.5:1 (WCAG AA)
- **White text on green:** ≥ 4.5:1 (WCAG AA)
- **Links:** Understandable without color alone

### Interactive Elements
- All buttons have visible focus states
- Sufficient click/tap targets (minimum 44x44px)
- Keyboard navigation supported

---

## Usage Guidelines

### Do's ✅
- Use green gradient for highlight sections
- Use `#8FC50E` for primary actions
- Use olive green (`#6b8e23`) for headers
- Maintain consistent border-radius across similar elements
- Use shadows sparingly for depth

### Don'ts ❌
- Don't mix green palette with other color schemes
- Don't use pure black text (`#000000`) - use `#333333`
- Don't exceed 3 levels of shadow depth
- Don't use gradients on small elements (buttons, badges)
- Don't override font family except for code blocks

---

## Code Snippets Reference

### Inline Code
```css
background: #f1f3f5;
padding: 2px 6px;
border-radius: 3px;
color: #8FC50E;
font-family: 'Courier New', monospace;
```

### Code Blocks
```css
background: white;
padding: 15px;
border-radius: 8px;
font-family: 'Courier New', monospace;
font-size: 0.9em;
line-height: 1.8;
```

---

## Icon Usage

### Font Awesome Icons
- **Color:** Inherits from parent or matches category
- **Size:** 1-2em depending on context
- **Usage:** Navigation, badges, algorithm sections

**Examples:**
- 🏠 Home: `<i class="fas fa-home"></i>`
- 💻 GitHub: `<i class="fab fa-github"></i>`
- 📖 PubMed: `<i class="fas fa-book"></i>`
- 🔬 Biology: `<i class="fas fa-dna"></i>`

---

## File Structure

```
/applications/
  └── single-cell-drug-prediction.html   # Main page using this theme
/css/
  └── ai4bio-theme.css                    # Reusable theme styles (optional)
/docs/
  └── design-guide.md                     # This document
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | October 2025 | Initial green theme design for AI4Bio Hub |

---

## Credits

**Design System:** AI4Bio Learning Hub  
**Primary Palette:** Green theme (#8FC50E, #A9D563, #B8DF96)  
**Typography:** Lato (Google Fonts)  
**Icons:** Font Awesome 6.4.0  

---

## Contact

For questions or suggestions about the design system:
- **Email:** xinru.reina.qiu@gmail.com
- **Portfolio:** [Xinru Qiu's Homepage](https://xqiu625.github.io)

---

*Last updated: January 2025*
