# Hello Gorgeous - Beauty Services & Products

A modern web application for booking beauty services and shopping for beauty products.

## Features

- User authentication and authorization
- Beauty service booking system
- Product catalog with shopping cart
- Blog with beauty tips and tutorials
- Contact form with email notifications
- Admin dashboard for managing content
- Multiple payment methods (Stripe, M-Pesa, PayPal)
- Responsive design with dark mode support

## Tech Stack

- Next.js 14
- TypeScript
- Prisma (PostgreSQL)
- NextAuth.js
- Tailwind CSS
- Stripe
- M-Pesa
- PayPal
- Nodemailer

## Prerequisites

- Node.js 18.x or later
- PostgreSQL
- Stripe account
- M-Pesa account (optional)
- PayPal account (optional)
- SMTP server for email notifications

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hello-gorgeous.git
   cd hello-gorgeous
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your credentials

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   └── (main)/            # Main pages
├── components/            # React components
├── lib/                   # Utility functions and configurations
└── styles/               # Global styles
```

## API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/products` - Product management
- `/api/services` - Service management
- `/api/bookings` - Booking management
- `/api/orders` - Order management
- `/api/blog` - Blog post management
- `/api/contact` - Contact form submissions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@hellogorgeous.com or join our Slack channel.

---

## Project Overview
Hello Gorgeous is a **modern and elegant beauty web app** designed to offer **makeup services booking** and an **e-commerce platform for beauty products**. The website features a user-friendly interface, secure payment options, and seamless integration for both online and in-store experiences.

---

## Key Features

### ✨ 1. Home Page (Stunning & Engaging)
- Hero banner showcasing trending beauty looks and promotions.
- Call-to-action (CTA) buttons: **"Book a Makeup Session"** and **"Shop Now"**.
- Customer testimonials section.
- Newsletter signup for exclusive beauty tips & deals.

### 🎨 2. Makeup Services Booking System
- Service categories: **Bridal, Glam, Natural, Editorial, etc.**
- Booking calendar with **time slot selection**.
- Pricing & packages displayed clearly.
- Appointment confirmation via **email/SMS reminders**.

### 🛍 3. E-Commerce for Beauty Products
- Product listing with **filters by category, brand, and price**.
- Product details page with **high-quality images and descriptions**.
- Customer **reviews & ratings** for each product.

### 👩‍💻 4. User Accounts
- Signup/login with **Google & Email authentication**.
- Order history tracking.
- Wishlist feature for saved products.
- Loyalty program: Reward points for purchases & bookings.

### 💳 5. Secure Payments
- **M-Pesa, Stripe, and PayPal integration**.
- Discount codes & promotions.

### 🏪 6. Physical Store Integration
- Google Maps store location display.
- Click & Collect (Buy online, pick up in-store).

### 💬 7. Customer Engagement Features
- Live chat for customer support.
- Beauty blog with tutorials, skincare tips, and product recommendations.
- Social media feed integration (Instagram, TikTok).

### 🎭 8. Additional Features
- Dark mode toggle for modern aesthetics.
- Referral program for discounts.

---

## Tech Stack
| Category      | Technology Stack |
|--------------|-----------------|
| **Frontend**  | React.js, Tailwind CSS, Framer Motion (for animations) |
| **Backend**   | Node.js, Express.js, Firebase (authentication & notifications) |
| **Database**  | MongoDB / PostgreSQL |
| **Payments**  | M-Pesa API, Stripe, PayPal |
| **Hosting**   | Vercel (Frontend), Firebase (Backend), Cloudinary (Images) |
| **CMS**       | Sanity.io (for managing blog content) |

---

## Design & Inspiration
- **Modern & Elegant UI** inspired by **Ultra Beauty** ([www.ultra.com](https://www.ultra.com)).
- Smooth animations with **Framer Motion**.
- **Minimalist, yet functional** layout with a focus on high-quality product imagery.
- **Color Palette:** Soft pinks, nudes, and gold tones for a luxurious feel.

---

## How to Run Locally

1. **Clone the Repository**  
```bash
git clone https://github.com/yourusername/hello-gorgeous.git
cd hello-gorgeous
```

2. **Install Dependencies**  
```bash
npm install
```

3. **Start Development Server**  
```bash
npm run dev
```

4. **Access the Website**  
- Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## Contributions
We welcome contributions! Feel free to submit a **pull request** or open an **issue** for improvements.

---

