## Kizu Cafe (キズカフェ) - Official Landing Page

**[Live Demo](https://your-cloudflare-pages-url.pages.dev)** | **[Report Bug](https://github.com/hrnns-ti/cafe-1/issues)** | **[Request Feature](https://github.com/hrnns-ti/cafe-1/issues)**

A visually stunning and interactive landing page for Kizu Cafe, inspired by the tactile rigor of Japanese newspapers and the quiet morning rituals of coffee brewing. Built with modern web technologies, this project emphasizes high-quality typography, smooth animations, and a seamless user experience.

---

### Architecture & Tech Stack

This project leverages modern frontend paradigms to ensure high performance and maintainability:

* **Framework:** Next.js (App Router)
* **Core Library:** React 18+
* **Package Manager:** pnpm
* **Styling:** Tailwind CSS
* **Typography:** Custom local fonts (`Noto Serif JP`, `Noto Sans`, `Inter`)
* **Deployment:** Cloudflare Pages

---

### Key Features

* **Dynamic Hero Section:** Immersive full-screen background image slider with smooth crossfading transitions and state isolation to prevent unnecessary re-renders.
* **Continuous Marquee:** A custom animated marquee ticker for daily specials and inventory updates.
* **Dual Scrolling Carousels:** Infinite-style scrolling image carousels (`animate-carousel-up` and `animate-carousel-down`) showcasing the cafe's daily ledger.
* **Interactive Location & Booking:** Features an embedded map view and a randomized masonry image gallery background for the booking section.
* **Optimized Assets:** Configured for efficient image delivery, ensuring high Lighthouse performance scores even with heavy visual assets.

---

### Project Structure

A high-level overview of the application's file structure:

```markdown
cafe-1/
├── public/                 # Static assets (images grouped by sections)
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   ├── components/         # Reusable UI components (Navbar, MasonrySection)
│   ├── fonts/              # Local font files and configuration
│   └── lib/                # Utility functions (e.g., shuffleArray)
├── tailwind.config.ts      # Tailwind styling and animation configuration
└── next.config.js          # Next.js compiler and image optimization settings
```

-----

### Getting Started

#### Prerequisites

Ensure you have the following installed on your local machine:

  * Node.js (v18.x or later)
  * [pnpm](https://pnpm.io/installation) (v8.x or later)

#### Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/hrnns-ti/cafe-1.git](https://github.com/hrnns-ti/cafe-1.git)
    ```

2.  Navigate into the project directory:

    ```bash
    cd cafe-1
    ```

3.  Install the dependencies using pnpm:

    ```bash
    pnpm install
    ```

#### Development

To start the local development server:

```bash
pnpm dev
```

Open `http://localhost:3000` with your browser to see the result. The page will auto-update as you edit the source files.

#### Available Scripts

  * `pnpm dev` - Starts the development server.
  * `pnpm build` - Builds the application for production.
  * `pnpm start` - Runs the compiled application in production mode.
  * `pnpm lint` - Runs ESLint to analyze the code for potential errors.

-----

### Customization

  * **Assets:** All images are stored in the `public/` directory. When replacing them, ensure dimensions are optimized for web use to prevent layout shifts.
  * **Animations:** The custom `marquee` and `carousel` animations are defined in `tailwind.config.ts`. Adjust the keyframes and duration directly in the configuration file to alter the visual flow.

-----

### Author

**Haerunnas** \* GitHub: [@hrnns-ti](https://www.google.com/search?q=https://github.com/hrnns-ti)

### License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

