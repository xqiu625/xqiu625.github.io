# AI4Bio Learning Hub - Web Theme Documentation

## Color Palette

### Primary Colors
- **Primary Blue**: `#426DB4` - Main accent color for headers, borders, and key elements
- **Interactive Blue**: `#4E7AC2` - Hover states, buttons, interactive elements, and primary gradients
- **Deep Blue**: `#455E85` - Secondary text, gradient endings, and depth elements

### Supporting Colors
- **Red Accent**: `#e74c3c` - Highlight colors for charts, current selections, and emphasis
- **Teal/Blue Alt**: `#3498db` - Alternative chart colors and secondary elements
- **Green**: `#27ae60` - Success states and tertiary chart colors

### Background Colors
- **Light Gray**: `#f8f9fa` - Content boxes and neutral backgrounds
- **White**: `#ffffff` - Main content areas and cards
- **Gradient Background**: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)` - Page background

### Text Colors
- **Primary Text**: `#333333` - Main body text
- **Secondary Text**: `#666666` - Navigation and footer text
- **Dark Gray**: `#2c3e50` - Borders and strokes

## Typography

### Font Family
- **Primary Font**: `'Lato', sans-serif`
- **Code Font**: `'Courier New', monospace`
- **Formula Font**: `'Times New Roman', serif`

### Font Sizes
- **Large Headers (h1)**: `2.5em - 2.8em`
- **Section Headers (h2)**: `2em`
- **Subsections (h3)**: Varies, typically `1.2em - 1.5em`
- **Body Text**: `1em` with `line-height: 1.8`
- **Small Text**: `0.9em - 0.95em`

## Layout Structure

### Container
- **Max Width**: `1000px - 1200px` (depending on page)
- **Padding**: `20px`
- **Centered**: `margin: 0 auto`

### Spacing
- **Content Sections**: `margin: 25px - 30px 0`
- **Element Spacing**: `15px - 20px` between related items
- **Padding**: `20px - 40px` for content boxes

## Component Styles

### Navigation Bar
- **Background**: White (`#ffffff`)
- **Border**: `1px solid #e7e7e7`
- **Position**: `sticky` at top with `z-index: 1000`
- **Links**: Gray (`#666666`) with hover to `#4E7AC2`
- **Home Link**: `#4E7AC2`

### Header Section
- **Background**: `linear-gradient(135deg, #4E7AC2 0%, #455E85 100%)`
- **Text Color**: White
- **Border Radius**: `15px`
- **Padding**: `40px - 50px`
- **Shadow**: `0 4px 20px rgba(78, 122, 194, 0.3)`

### Content Sections
- **Background**: White
- **Border Radius**: `15px`
- **Padding**: `30px - 40px`
- **Shadow**: `0 4px 15px rgba(0,0,0,0.08 - 0.1)`

### Concept Boxes
- **Background**: `#f8f9fa`
- **Border Left**: `5px solid` (color varies by type)
  - Default: `#4E7AC2`
  - Challenge: `#f39c12`
  - Prior: `#9b59b6`
  - Likelihood: `#426DB4`
  - Inference: `#27ae60`
- **Padding**: `20px - 25px`
- **Border Radius**: `5px - 10px`

### Tables
- **Header Background**: `linear-gradient(135deg, #4E7AC2 0%, #455E85 100%)`
- **Header Text**: White
- **Border**: `1px solid #ddd` (bottom borders)
- **Hover**: Light gray background (`#f5f5f5`)
- **Padding**: `12px - 15px`

### Stat Cards
- **Background**: `linear-gradient(135deg, #4E7AC2 0%, #455E85 100%)`
- **Text Color**: White
- **Border Radius**: `10px`
- **Shadow**: `0 4px 15px rgba(78, 122, 194, 0.3)`
- **Hover**: `transform: translateY(-5px)`
- **Grid**: `repeat(auto-fit, minmax(200px, 1fr))`

### Buttons & Links
- **Primary Button**: 
  - Background: `#4E7AC2`
  - Text: White
  - Hover: `#455E85` with `translateY(-3px)`
  - Border Radius: `8px - 25px`
- **Back Link**: Same as primary button

### Interactive Elements
- **Sliders**: 
  - Track: `#d3d3d3`
  - Thumb: `#4E7AC2`
- **Selected State**: `stroke: #4E7AC2` with increased width
- **Hover**: Opacity change or color shift to `#4E7AC2`

### Tooltips
- **Background**: `rgba(78, 122, 194, 0.95)`
- **Text Color**: White
- **Border Radius**: `6px`
- **Shadow**: `0 2px 8px rgba(0,0,0,0.2)`

### Charts & Visualizations
- **Primary Color**: `#4E7AC2`
- **Accent Color**: `#e74c3c` (for current selection/emphasis)
- **Alternative**: `#3498db` (blue), `#27ae60` (green)
- **Stroke Width**: `2px - 4px`
- **Bar Opacity**: `0.8`

## Effects & Animations

### Shadows
- **Light**: `0 2px 5px rgba(0,0,0,0.05)`
- **Medium**: `0 4px 15px rgba(0,0,0,0.08 - 0.1)`
- **Accent**: `0 4px 15px - 20px rgba(78, 122, 194, 0.3)`

### Border Radius
- **Small**: `5px - 8px`
- **Medium**: `10px`
- **Large**: `15px`
- **Pills**: `25px - 50%`

### Transitions
- **Standard**: `all 0.3s ease`
- **Transform Effects**: 
  - Hover lift: `translateY(-3px to -5px)`
  - Slide: `translateX(-5px)`

## Responsive Design

### Breakpoint
- **Mobile**: `@media (max-width: 768px)`

### Mobile Adjustments
- **Header h1**: Reduced to `1.8em - 2em`
- **Padding**: Reduced to `25px - 30px`
- **Grid Columns**: Single column layout
- **Control Groups**: Stacked vertically (`flex-direction: column`)

## Accessibility

### Contrast
- All text meets WCAG AA standards
- White text on `#4E7AC2` and `#455E85` backgrounds
- Dark text on light backgrounds

### Interactive States
- Clear hover states with color changes
- Focus states for keyboard navigation
- Visible selected states with borders/strokes

## Usage Guidelines

### When to Use Each Color
1. **#426DB4**: Section headers, primary text accents, borders on key elements
2. **#4E7AC2**: Interactive elements, gradients, hover states, call-to-action
3. **#455E85**: Gradient endings, secondary headers, depth

### Consistency Rules
- Use gradients for major sections (headers, stat cards, table headers)
- Single solid colors for borders and accents
- Keep `#e74c3c` for highlighting current state or important data points
- Maintain white backgrounds for main content areas
- Use `#f8f9fa` for nested content or secondary boxes

## File Structure Notes
- Icons: Font Awesome 6.4.0
- Visualizations: D3.js v7.8.5
- External CDNs: cdnjs.cloudflare.com for libraries
