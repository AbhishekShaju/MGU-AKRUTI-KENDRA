# Product Images Setup Guide

## 📁 Image Folder Structure

All product images should be placed in the following folder:
```
src/assets/
```

## 🖼️ Image Naming Convention

Name your images according to the product number:
- `product-1.png` - For Product 1 (Foldable Solar Dryer)
- `product-2.png` - For Product 2 (Rapid Composting Technology)
- `product-3.png` - For Product 3 (Food Processing Unit)
- `product-4.png` - For Product 4 (Renewable Energy Kit)
- `product-5.png` - For Product 5 (Organic Pesticide Solution)
- `product-6.png` - For Product 6 (Vermicompost Production)

## 📋 Current Product Mapping

| Product ID | Product Name | Main Image | Gallery Images |
|-----------|-------------|------------|----------------|
| 1 | Foldable Solar Dryer | product-1.png | product-1.png, product-2.png, product-3.png, product-4.png |
| 2 | Rapid Composting Technology | product-2.png | product-2.png, product-1.png, product-3.png, product-4.png |
| 3 | Food Processing Unit | product-3.png | product-3.png, product-1.png, product-2.png, product-4.png |
| 4 | Renewable Energy Kit | product-4.png | product-4.png, product-1.png, product-2.png, product-3.png |
| 5 | Organic Pesticide Solution | product-5.png | product-5.png, product-1.png, product-2.png, product-3.png |
| 6 | Vermicompost Production | product-6.png | product-6.png, product-1.png, product-2.png, product-3.png |

## 📝 How to Add/Update Product Images

### Step 1: Upload Images
1. Place your product images in the `src/assets/` folder
2. Name them according to the convention above (product-1.png, product-2.png, etc.)
3. Supported formats: PNG, JPG, JPEG, WebP

### Step 2: Update Product Data (if needed)
If you want to customize which images appear for each product:

1. Open `src/data/products.ts`
2. Find the product you want to update
3. Modify the `images` array to include the images you want

Example:
```typescript
{
  id: "bio-fertilizer-technology",
  name: "Foldable Solar Dryer",
  image: product1,  // Main image
  images: [product1, product2, product3, product4], // Gallery images
  // ... other properties
}
```

### Step 3: Add New Products
To add a new product with images:

1. Upload the new image to `src/assets/` (e.g., `product-7.png`)
2. Open `src/data/products.ts`
3. Add import at the top:
```typescript
import product7 from '@/assets/product-7.png';
```
4. Add the new product to the `products` array:
```typescript
{
  id: "new-product-id",
  name: "New Product Name",
  price: "₹XX,XXX",
  shortDescription: "Short description",
  description: "Full description",
  image: product7,
  images: [product7, product1, product2],
  tags: ["Tag1", "Tag2"],
  rating: 5,
  // ... other properties
}
```

## 🎨 Image Recommendations

- **Dimensions**: Minimum 800x600px, recommended 1200x900px
- **Format**: PNG for transparency, JPG for photos
- **File Size**: Keep under 500KB for fast loading
- **Quality**: High quality, well-lit images work best
- **Aspect Ratio**: 4:3 or 16:9 recommended

## 🔄 After Updating Images

After adding or updating images:
1. Save all files
2. The dev server should auto-reload
3. Check your website to verify images appear correctly

## 📦 Current Setup

✅ All product data is centralized in `src/data/products.ts`
✅ Images are imported and properly typed
✅ Product images automatically map to products
✅ Image gallery works on product detail pages
✅ Responsive and optimized for all screen sizes

## 🐛 Troubleshooting

If images don't appear:
1. Check the file name matches exactly (case-sensitive)
2. Verify the image is in `src/assets/` folder
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for errors
5. Restart the dev server
