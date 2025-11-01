# Cross-Species Data Integration - Theme & Color Summary

## Color Palette

### Primary Colors
- **Primary Teal**: `#189177`
- **Light Teal**: `#48B09E`
- **Dark Teal**: `#0D8A85`

### Supporting Colors
- **Challenge Red**: `#e74c3c`
- **Method 1 Blue**: `#3498db`
- **Method 2 Orange**: `#f39c12`
- **Method 3 Purple**: `#9b59b6`
- **Success Green**: `#28a745`
- **Warning Yellow**: `#ffc107`
- **Error Red**: `#dc3545`

### Neutral Colors
- **Background**: `linear-gradient(135deg, #f5f7fa 0%, #D0D6D8 100%)`
- **White**: `#ffffff`
- **Text Dark**: `#333333`
- **Text Medium**: `#555555`
- **Text Light**: `#666666`
- **Border/Line**: `#e7e7e7`, `#e9ecef`

## Gradient Applications

### Primary Gradients
1. **Header Gradient**: `linear-gradient(135deg, #189177 0%, #48B09E 100%)`
2. **Stat Cards**: `linear-gradient(135deg, #189177 0%, #48B09E 100%)`
3. **CTA Section**: `linear-gradient(135deg, #189177 0%, #48B09E 100%)`
4. **Timeline Line**: `linear-gradient(180deg, #189177 0%, #48B09E 100%)`
5. **Table Headers**: `linear-gradient(135deg, #189177 0%, #48B09E 100%)`

### Concept Box Gradients
- **Default**: `linear-gradient(135deg, #f0faf8 0%, #e6f7f4 100%)`
- **Challenge**: `linear-gradient(135deg, #fdf2f2 0%, #fce4e4 100%)`
- **Method 1**: `linear-gradient(135deg, #f0f7fc 0%, #e3f2fd 100%)`
- **Method 2**: `linear-gradient(135deg, #fef9f0 0%, #fdf5e6 100%)`
- **Method 3**: `linear-gradient(135deg, #f7f3f9 0%, #f3e5f5 100%)`

### Special Box Gradients
- **Highlight Box**: `linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)`
- **Warning Box**: `linear-gradient(135deg, #fff3cd 0%, #ffe8a1 100%)`

## Typography

### Font Family
- **Primary Font**: `'Lato', sans-serif`
- **Code Font**: `'Courier New', monospace`

### Font Sizes
- **Main Heading (h1)**: `2.8em` (mobile: `2em`)
- **Section Heading (h2)**: `2em`
- **Subsection Heading (h3)**: `1.5em`
- **Subtitle**: `1.3em`
- **Body Text**: `1em` (line-height: `1.8`)
- **Navbar**: `15px`
- **Stat Card Number**: `2.5em`

### Font Weights
- **Headings**: `700`
- **Navbar**: `bold`
- **Button**: `700`

## Component Styles

### Navigation Bar
- Background: White
- Border: `1px solid #e7e7e7`
- Position: Sticky top
- Shadow: `0 2px 5px rgba(0,0,0,0.05)`
- Active Link Color: `#48B09E`
- Hover Color: `#48B09E`

### Header Section
- Background: Teal gradient
- Color: White
- Padding: `50px 40px`
- Border Radius: `15px`
- Shadow: `0 4px 20px rgba(24, 145, 119, 0.3)`

### Content Sections
- Background: White
- Border Radius: `15px`
- Padding: `40px`
- Shadow: `0 4px 15px rgba(0,0,0,0.08)`

### Concept Boxes
- Border Left: `5px solid` (color varies)
- Padding: `25px`
- Border Radius: `8px`
- Shadow: `0 2px 10px rgba(24, 145, 119, 0.15)`

### Stat Cards
- Background: Teal gradient
- Color: White
- Padding: `30px 25px`
- Border Radius: `12px`
- Shadow: `0 4px 15px rgba(24, 145, 119, 0.3)`
- Hover: `translateY(-5px)`

### Timeline
- Timeline Line: `3px` wide, teal gradient
- Icon Size: `45px` diameter
- Icon Background: Teal gradient
- Icon Shadow: `0 3px 10px rgba(24, 145, 119, 0.4)`
- Content Border: `4px solid #189177`

### Tables
- Header Background: Teal gradient
- Header Color: White
- Row Hover: `rgba(24, 145, 119, 0.05)`
- Border: `1px solid #e9ecef`
- Shadow: `0 2px 10px rgba(0,0,0,0.05)`

### Buttons (CTA)
- Background: White
- Color: `#189177`
- Padding: `12px 30px`
- Border Radius: `25px`
- Hover: `translateY(-3px)` + shadow

### Pros/Cons Boxes
- **Pros**: Green gradient background, `5px solid #28a745` border
- **Cons**: Red gradient background, `5px solid #dc3545` border

### Decision Tree
- Background: `#f8f9fa`
- Border: `2px solid #189177`
- Node Border: `2px solid #189177`
- Arrow Color: `#48B09E`

## Shadow & Effects

### Box Shadows
- **Light**: `0 2px 8px rgba(0,0,0,0.05)`
- **Medium**: `0 4px 15px rgba(0,0,0,0.08)`
- **Heavy**: `0 4px 20px rgba(24, 145, 119, 0.3)`
- **Code Block**: `0 4px 15px rgba(0,0,0,0.2)`

### Transitions
- **Default**: `0.3s ease`
- **Color**: `color 0.3s ease`
- **Transform**: `all 0.3s ease`

### Hover Effects
- **Stat Cards**: Translate up 5px
- **Buttons**: Translate up 3px + shadow
- **Table Rows**: Background color change
- **Nav Links**: Color change to teal

## Responsive Breakpoints

### Mobile (`max-width: 768px`)
- Header padding: `30px 25px`
- Header h1: `2em`
- Content padding: `25px`
- Pros/Cons: Single column
- Species divergence: Column layout
- Stats grid: Single column
- Navbar items: Reduced margins

## Icon Usage

### FontAwesome Icons
- Navigation: `fa-home`
- Sections: `fa-exclamation-triangle`, `fa-sitemap`, `fa-layer-group`, `fa-align-center`, `fa-brain`, `fa-code-branch`, `fa-check-square`
- Features: `fa-check-circle`, `fa-times-circle`, `fa-lightbulb`, `fa-exclamation-circle`
- Social: `fa-github`, `fa-linkedin`, `fa-envelope`

## Design Philosophy

### Visual Hierarchy
1. **Primary**: Teal gradient for main interactive and featured elements
2. **Secondary**: Colored boxes for different methods/concepts
3. **Tertiary**: Neutral backgrounds for content sections

### Accessibility
- High contrast text on backgrounds
- Clear visual separation between sections
- Readable font sizes (minimum 15px for nav, 1em for body)
- Hover states for interactive elements

### Consistency
- Consistent border radius (8px-15px)
- Uniform padding (20px-40px depending on container)
- Repeated gradient patterns for brand cohesion
- Color-coded sections for easy navigation

### Modern Design Elements
- Gradients instead of flat colors
- Soft shadows for depth
- Rounded corners throughout
- Smooth transitions and hover effects
- Grid layouts for responsive design
