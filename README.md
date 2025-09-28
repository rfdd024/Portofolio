# Portfolio Website - Rafid Efriadi Pratama

A modern, luxurious dark-themed portfolio website showcasing skills, projects, and certificates with interactive features.

## 🌟 Features

- **Luxurious Dark Theme**: Elegant color scheme with gold accents (#d4af37)
- **Responsive Design**: Optimized for all device sizes
- **Interactive Elements**:
  - Animated home section with typed text effect
  - Scrollable projects carousel with navigation
  - Certificate categories with filtering (order: All, Bootcamp, Lomba, Webinar)
  - Flip animation for name tag (back side now white for better readability)
  - Modal image preview for certificates
- **Featured Projects (Desktop)**: Black cards for stronger contrast and focus
- **Contact**: Direct WhatsApp message from the form
- **Smooth Animations**: AOS (Animate on Scroll) library integration

## 🚀 Setup Instructions

### 1. Basic Setup
1. Clone or download the project files
2. Open `src/index.html` directly in a browser, or serve with a local server

### 2. Contact via WhatsApp (No EmailJS Required)
The contact form opens WhatsApp with a prefilled professional message to your number. Update your phone number in `src/js/main.js`:

```js
// src/js/main.js
const phoneNumber = "6283174279591"; // change to your number
```

### 3. Customization

#### Adding New Projects (Desktop grid):
1. Locate the `#projects` section in `src/index.html`
2. Add new cards following the existing structure
3. Use `bg-black` as the card background and `text-white`/`text-gray-300` for text

#### Adding New Certificates:
1. Find the `#certificates` section in `src/index.html`
2. Add items to the grid and apply classes `bootcamp`, `lomba`, or `webinar`
3. Place certificate images in `src/public/certificates/`
4. Filter button order is: All, Bootcamp, Lomba, Webinar

#### Updating Personal Information:
- Edit contact details in the contact section
- Update social media links in the footer
- Modify the WhatsApp number in `src/js/main.js`

## 📁 Project Structure

```
Porto/
├── src/
│   ├── css/
│   │   ├── input.css          # Tailwind CSS input
│   │   └── output.css         # Compiled Tailwind CSS
│   ├── public/
│   │   ├── certificates/      # Certificate images
│   │   ├── icons/            # Icon files
│   │   ├── projects/         # Project images
│   │   ├── favicon.ico       # Website favicon
│   │   └── profile.jpg       # Profile image
│   ├── index.html            # Main HTML file
│   └── js/
│       └── main.js          # JavaScript functionality
├── package.json             # Dependencies
├── package-lock.json        # Lock file
└── README.md               # This file
```

## 🛠️ Technologies Used

- **HTML5 & CSS3**: Structure and styling
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Interactive functionality
- **AOS Library**: Scroll animations
- **Typed.js**: Typing animation effect
 - **WhatsApp Web**: Contact action

## 🎨 Color Palette

- **Primary Dark**: `#0a0a0a`
- **Secondary**: `#1a1a1a`
- **Tertiary**: `#2a2a2a`
- **Accent Gold**: `#d4af37`
- **Accent Dark**: `#b8941f`
- **Text Light**: `#f5f5f5`
 - **Card Black (Projects)**: `#000000`
 - **Nametag Back (White)**: `#ffffff`

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🔧 Development

To modify styles:
1. Edit `src/css/input.css`
2. Compile Tailwind CSS (one-off):
   ```bash
   npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css
   ```
   Or watch for changes:
   ```bash
   npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch
   ```

## 📞 Contact

- **WhatsApp**: Form opens a chat to your configured number
- **GitHub**: [rfdd024](https://github.com/rfdd024)
- **Instagram**: [@rfidd._](https://www.instagram.com/rfidd._)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Update your WhatsApp number in `src/js/main.js` before deploying.
