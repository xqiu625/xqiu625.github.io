I'll create a comprehensive markdown file summarizing the Foundation Models theme we've established:

```markdown
# AI4Bio Learning Hub - Foundation Models Theme Guide

## Overview
This document defines the color scheme and design specifications for the Foundation Models section of the AI4Bio Learning Hub.

## Color Palette

### Primary Foundation Models Colors
- **#9fB7E6** - Soft Blue (Stage 1, Theory boxes)
- **#BCDAEE** - Light Sky Blue (Supporting elements)
- **#FCED92** - Pale Yellow (Comparison boxes)
- **#FCD1D2** - Soft Pink (Main headers, Stage 2)
- **#DCCBD8** - Lavender (Subheadings, Supporting elements)

### Usage Guidelines

#### Headers
```css
.header {
    background: linear-gradient(135deg, #9fB7E6 0%, #FCD1D2 50%, #DCCBD8 100%);
    color: #333;
}

.header h1 {
    color: #000; /* Black for maximum readability */
}

.header p {
    color: #333; /* Dark gray for subtitle */
}

.paper-ref {
    background: rgba(255,255,255,0.6);
    color: #333;
}
```

#### Section Elements
```css
.content-section h2 {
    color: #FCD1D2;
    border-bottom: 3px solid #FCD1D2;
}

.content-section h3 {
    color: #DCCBD8;
}
```

#### Navigation
```css
.home-link {
    color: #FCD1D2 !important;
}

.back-link {
    background: #FCD1D2;
    color: white;
}

.back-link:hover {
    background: #DCCBD8;
}
```

## Concept Box Color Coding

### By Content Type
- **Default/General**: `border-left-color: #FCD1D2`
- **Stage 1/Theory**: `border-left-color: #9fB7E6`
- **Stage 2/Evaluation**: `border-left-color: #FCD1D2`
- **Architecture**: `border-left-color: #DCCBD8`
- **Knowledge/Solution**: `border-left-color: #BCDAEE`
- **Comparison**: `border-left-color: #FCED92`

### Example
```css
.concept-box {
    background: #f8f9fa;
    border-left: 5px solid #FCD1D2;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
}

.concept-box.stage1 {
    border-left-color: #9fB7E6;
}

.concept-box.stage2 {
    border-left-color: #FCD1D2;
}
```

## Interactive Elements

### Statistics Cards
```css
.stat-card {
    background: linear-gradient(135deg, #FCD1D2 0%, #DCCBD8 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}
```

### Flow/Pipeline Steps
```css
.flow-step, .pipeline-step {
    background: linear-gradient(135deg, #9fB7E6 0%, #FCD1D2 100%);
    color: white;
    padding: 15px 25px;
    margin: 10px;
    border-radius: 8px;
}
```

### Stage Boxes (Two-Stage Training)
```css
.stage-box.stage1 {
    border-color: #9fB7E6;
    background: linear-gradient(135deg, #e8f4f8 0%, #d4ebf7 100%);
}

.stage-box.stage2 {
    border-color: #FCD1D2;
    background: linear-gradient(135deg, #fce8e8 0%, #f8d7da 100%);
}
```

## Tables

### Comparison Tables
```css
.comparison-table th {
    background: #FCD1D2;
    color: white;
}

.comparison-table tr:hover {
    background: #f5f5f5;
}
```

## Tags and Labels

### Tag Color Coding
```css
.tag {
    background: #FCD1D2;
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
}

.tag.unsupervised {
    background: #9fB7E6;
}

.tag.self-supervised {
    background: #BCDAEE;
}

.tag.weakly-supervised {
    background: #FCD1D2;
}

.tag.high {
    background: #BCDAEE;
}

.tag.medium {
    background: #FCED92;
}

.tag.low {
    background: #FCD1D2;
}
```

## Visual Diagrams

### Borders and Backgrounds
```css
.visual-diagram {
    background: #f8f9fa;
    border: 2px solid #FCD1D2;
    border-radius: 10px;
}

.training-phase {
    background: white;
    border-left: 4px solid #FCD1D2;
}
```

## Special Elements

### Embedding Visualizations
```css
.embedding-box {
    background: linear-gradient(135deg, #9fB7E6 0%, #DCCBD8 100%);
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
}
```

### Protein Sequences
```css
.protein-sequence {
    background: #e8f4f8;
    border-left: 4px solid #9fB7E6;
}
```

### Component Boxes (Dual Decoder Heads)
```css
.transformer {
    background: linear-gradient(135deg, #9fB7E6 0%, #BCDAEE 100%);
    color: white;
}

.decoder-gene {
    background: linear-gradient(135deg, #FCD1D2 0%, #DCCBD8 100%);
    color: white;
}

.decoder-count {
    background: linear-gradient(135deg, #BCDAEE 0%, #FCED92 100%);
    color: white;
}
```

## Design Principles

### Option C: Simplified 3-Color Gradient
The header uses a clean 3-color gradient that flows smoothly without jarring transitions:
- Start: #9fB7E6 (soft blue)
- Middle: #FCD1D2 (soft pink) 
- End: #DCCBD8 (lavender)

### Text Readability
- **Primary headers (h1)**: Black (#000) for maximum contrast
- **Subtitles**: Dark gray (#333)
- **Body text**: Default (#333)
- **White backgrounds**: Used for stat cards and flow steps with colored gradients

### Consistency Across Pages
All Foundation Models pages share:
1. Same header gradient (3-color Option C)
2. Same section header color (#FCD1D2)
3. Same subheading color (#DCCBD8)
4. Same navigation link colors
5. Same stat card gradients
6. Concept boxes use full palette based on content type

## Pages Using This Theme

1. **TranscriptFormer Dual Decoder Heads** (`dual-decoder-heads.html`)
2. **Protein Language Models for Gene Representation** (`protein-language-models-gene-representation.html`)
3. **Two-Stage Foundation Model Training** (`two-stage-pretraining.html`)
4. **Self-Verification Agents** (`self-verification-agents.html`)

## Main Landing Page Integration

The main AI4Bio Learning Hub landing page (`index.html`) uses:
- Card border: `border-top-color: #FCD1D2`
- Icon color: `color: #FCD1D2`
- Home link: `color: #FCD1D2`

## Footer
```css
footer a {
    color: #FCD1D2;
}
```

## Content Guidelines

### Removed Elements
All code blocks have been removed from concept pages to focus purely on theoretical understanding rather than implementation.

### Maintained Elements
- Mathematical formulas (as conceptual representations)
- Tables and comparisons
- Visual diagrams and flow charts
- Statistics and performance metrics
- Examples and case studies

---

**Last Updated**: January 2025  
**Theme Version**: 1.0  
**Design Philosophy**: Soft, cohesive pastels with clear hierarchy and maximum readability
```

This markdown file provides a complete reference for the Foundation Models theme, including all color codes, usage guidelines, and design principles we established!
