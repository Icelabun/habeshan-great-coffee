# Habeshan Great Coffee - Premium Ethiopian Coffee Export

A modern, professional website for Habeshan Great Coffee, Ethiopia's premier coffee export company. Built with cutting-edge web technologies to showcase premium Ethiopian coffee varieties and export services.

## Features

- **Modern Design**: Premium, coffee-themed design with professional styling
- **Smooth Animations**: Advanced scroll-triggered animations using Framer Motion
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Contact Form**: Fully functional contact form with backend integration
- **Product Showcase**: Detailed presentation of Ethiopian coffee varieties
- **Export Services**: Comprehensive overview of export capabilities
- **Quality Standards**: Professional certifications and quality processes

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion for smooth scroll animations
- **Forms**: React Hook Form with Zod validation
- **Backend**: Express.js with TypeScript
- **Data Management**: TanStack Query for API state management
- **Styling**: Shadcn/ui components with custom coffee theme

## Coffee Varieties

### Ethiopian Yirgacheffe
- Grade 1 Specialty coffee
- Bright, floral, wine-like characteristics
- Altitude: 1,700-2,200m

### Ethiopian Sidamo
- Grade 2 Premium quality
- Full-bodied with chocolate and spice notes
- Altitude: 1,400-2,000m

### Ethiopian Harrar
- Grade 4 Commercial grade
- Bold, exotic with wine-like characteristics
- Altitude: 1,500-2,100m

## Export Services

- **Sourcing & Selection**: Direct farmer relationships
- **Quality Assurance**: Rigorous testing and certification
- **Custom Packaging**: Flexible packaging and private labeling
- **Global Logistics**: Worldwide shipping and delivery

## Quality Certifications

- USDA & EU Organic Standards
- Fair Trade Certified
- Specialty Coffee Association (SCA) Standards
- HACCP Food Safety Management

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/habeshan-great-coffee.git

# Navigate to project directory
cd habeshan-great-coffee

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Development

The project uses a full-stack architecture:
- Backend API runs on Express.js
- Frontend is served through Vite
- Contact form submissions are stored in memory (can be upgraded to database)

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                 # Shared types and schemas
└── package.json
```

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact-inquiries` - Retrieve contact inquiries (admin)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Habeshan Great Coffee**
- Address: 123 Coffee Street, Addis Ababa, Ethiopia
- Phone: +251 11 123 4567
- Email: export@habeshancoffee.com
- Website: [habeshancoffee.com](https://habeshancoffee.com)

---

*Proudly exporting Ethiopian coffee excellence worldwide since 2000*