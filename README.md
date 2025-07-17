# Server-Side Form Validation MVP

This project demonstrates comprehensive server-side form validation techniques using NestJS for the backend and React with Ant Design and Refine.dev for the frontend. The project showcases three different approaches to server-side validation with interactive demos and code viewing capabilities.

## 🚀 Features

### 🎯 Three Validation Approaches

1. **Realtime Server-Side Validation** - Real-time validation with immediate server feedback
2. **JSON Schema Validation** - Dynamic form generation using JSON Schema from backend DTOs
3. **Custom Validator Functions** - Client-side validation using server-generated validator functions

### 🔧 Technical Features

- **Interactive Code Viewer** - View source code for each validation approach in a modal
- **Syntax Highlighting** - Beautiful code display with react-syntax-highlighter
- **CRUD Operations** - Full checkout resource management with Refine.dev
- **Error Handling** - Comprehensive error handling and display
- **Type Safety** - Full TypeScript support across frontend and backend
- **Modern UI** - Clean interface with Ant Design components
- **Responsive Design** - Mobile-friendly layout with Tailwind CSS

### 🛠️ Backend Features

- **Class Validator Integration** - Robust validation using class-validator decorators
- **JSON Schema Generation** - Automatic schema generation from DTOs
- **Custom Validation Functions** - Server-generated client-side validators
- **Global Exception Handling** - Centralized error handling with custom filters
- **CORS Support** - Cross-origin resource sharing enabled

## 📁 Project Structure

```
.
├── backend/                 # NestJS backend
│   ├── src/
│   │   ├── checkout/       # Checkout module with validation demos
│   │   ├── users/          # User registration with validation
│   │   └── common/         # Shared utilities and filters
│   └── ...
├── frontend/               # React frontend with Vite
│   ├── src/
│   │   ├── components/     # Reusable components including CodeViewer
│   │   ├── pages/
│   │   │   ├── checkout/   # CRUD pages for checkout
│   │   │   └── demo-form-server-side-validation/  # Demo pages
│   │   └── types/          # TypeScript type definitions
│   └── ...
└── README.md
```

## 🔧 Prerequisites

- Node.js (v20.x or later)
- npm or yarn
- Modern web browser

## 🚀 Setup and Running

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

The backend will run on **http://localhost:3000**

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The frontend will run on **http://localhost:5173**

## 🎮 Demo Pages

### 1. Realtime Server-Side Validation

- **Path**: `/` (Home page, "Realtime" tab)
- **Features**:
  - Real-time validation on form submission
  - Server errors mapped to form fields
  - Uses Refine.dev's useForm hook with error handling

### 2. JSON Schema Validation

- **Path**: `/` (Home page, "JSON Schema" tab)
- **Features**:
  - Dynamic form generation from server-side JSON schema
  - Automatic validation rules from class-validator decorators
  - Uses @rjsf/antd for form rendering

### 3. Custom Validator Functions

- **Path**: `/` (Home page, "Validate Form By Validator" tab)
- **Features**:
  - Server-generated validation functions
  - Client-side validation with server-side logic
  - Dynamic validator loading and execution

## 🔍 Code Viewer Feature

Each demo tab includes a "View Code" button that opens a modal displaying:

- **DTO**: Backend data transfer object with validation decorators
- **Backend**: Server-side implementation code
- **Frontend**: Client-side component code
- **Syntax Highlighting**: Beautiful code display with multiple language support

## 📡 API Endpoints

### Checkout Endpoints

#### `POST /checkout`

Create a new checkout with validation.

#### `GET /checkout/schema`

Get JSON schema for checkout form validation.

#### `GET /checkout/get-validators`

Get custom validator functions for client-side validation.

#### `GET /checkout`

Get all checkout records.

#### `GET /checkout/:id`

Get specific checkout record.

#### `PUT /checkout/:id`

Update checkout record.

#### `DELETE /checkout/:id`

Delete checkout record.

### User Endpoints

#### `POST /users/register`

Register a new user with validation.

**Request body:**

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Validation rules:**

- `username`: required, string
- `email`: required, valid email format
- `password`: required, minimum 6 characters

## 🏗️ Validation Models

### Checkout DTO

```typescript
export class CheckoutDto {
  @IsString()
  @Length(2, 50)
  fullName: string

  @IsEmail()
  email: string

  @Matches(/^\+?\d{9,15}$/)
  phoneNumber: string

  @IsString()
  @Length(10)
  shippingAddress: string

  @IsString()
  city: string

  @IsString()
  @Length(4, 10)
  postalCode: string

  @IsEnum(Country)
  country: Country

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod

  @IsBoolean()
  termsAccepted: boolean

  // Conditional validation for credit card
  @ValidateIf(
    (o) =>
      o.paymentMethod ===
      PaymentMethod.CREDIT_CARD,
  )
  @IsString()
  @Matches(/^\d{16}$/)
  cardNumber?: string

  @ValidateIf(
    (o) =>
      o.paymentMethod ===
      PaymentMethod.CREDIT_CARD,
  )
  @IsString()
  @Matches(/^\d{2}\/\d{2}$/)
  expiryDate?: string

  @ValidateIf(
    (o) =>
      o.paymentMethod ===
      PaymentMethod.CREDIT_CARD,
  )
  @IsString()
  @Matches(/^\d{3,4}$/)
  cvv?: string
}
```

## 🛠️ Technologies Used

### Backend

- **NestJS** - Progressive Node.js framework
- **class-validator** - Decorator-based validation
- **class-transformer** - Object transformation
- **class-validator-jsonschema** - JSON schema generation
- **TypeScript** - Type-safe development

### Frontend

- **React** - UI library
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **Refine.dev** - React framework for CRUD applications
- **@rjsf/antd** - JSON Schema form rendering
- **react-syntax-highlighter** - Code syntax highlighting
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **TypeScript** - Type-safe development

## 🎨 UI/UX Features

- **Tabbed Interface** - Easy navigation between validation approaches
- **Modal Code Viewer** - Non-intrusive code inspection
- **Responsive Design** - Works on all device sizes
- **Loading States** - Smooth user experience
- **Error Handling** - Clear error messages and field highlighting
- **Syntax Highlighting** - Beautiful code display with multiple themes

## 🔄 Development Workflow

1. **Backend Development**: Add validation rules to DTOs using class-validator decorators
2. **Schema Generation**: JSON schemas are automatically generated from DTOs
3. **Frontend Integration**: Forms automatically inherit validation rules
4. **Error Handling**: Server validation errors are mapped to form fields
5. **Code Documentation**: All code is viewable through the built-in code viewer

## 🚀 Getting Started

1. Clone the repository
2. Follow the setup instructions above
3. Visit http://localhost:5173 to see the demo
4. Explore the three validation approaches
5. Use the "View Code" button to understand the implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for educational purposes and demonstrates server-side form validation techniques.
