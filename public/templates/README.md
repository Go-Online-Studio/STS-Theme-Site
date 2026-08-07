# 📁 Template Image Storage

Drop your invitation template images into the correct category subfolder below.

```
public/templates/
├── weddings/        ← wedding invitation images
├── birthdays/       ← birthday invitation images
├── baby-showers/    ← baby shower invitation images
├── corporate/       ← corporate event invitation images
└── parties/         ← party & general event images
```

---

## ➕ How to Add a New Template

### Step 1 — Add your image
Copy your template image (PNG or JPG recommended) into the right folder:

```
public/templates/weddings/my-new-template.png
```

### Step 2 — Register it in the data file
Open `data/templates.ts` and add a new entry to the `templates` array:

```ts
{
  id: 5,                          // must be unique
  name: "My New Template",
  category: "Weddings",           // must match folder category
  style: "Romantic & Timeless",
  price: "₹1299",
  tag: "💍 Wedding",              // shown in hero slider
  accentColor: "#fcd34d",         // glow colour (any CSS hex colour)
  imageSrc: "/templates/weddings/my-new-template.png",
  imageAlt: "My New Template wedding invitation",
  featured: true,                 // true = appears in hero slider
},
```

### Step 3 — Save
The gallery page and hero slider update automatically. No other files need to be changed.

---

## 📋 Category Values
| Folder | `category` value in data file |
|---|---|
| `weddings/` | `"Weddings"` |
| `birthdays/` | `"Birthdays"` |
| `baby-showers/` | `"Baby Showers"` |
| `corporate/` | `"Corporate"` |
| `parties/` | `"Parties"` |

## 💡 Tips
- Use **PNG** for best quality, **WebP** for smaller file sizes
- Recommended image size: **600×800px** (portrait 3:4 ratio)
- Set `featured: false` if you don't want a template in the hero slider
- Adding a new `category` value automatically creates a filter pill in the gallery
