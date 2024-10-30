## Getting Started

First, install the dependencies:

```bash
npm install
# or yarn install/pnpm install/bun install/bun install
```


run the development server:

```bash
npm run dev
# or yarn dev/ pnpm dev/bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  - Tutorial Youtube link [youtube](https://www.youtube.com/watch?v=vCOSTG10Y4o)

- 00:00 Introduction-next-03:00Next.js Installation 
#### Create next app
```
npm create-net-app@latest .
no/yes/no/yes/yes/no
Calling page '@/lib/action', @ means source folder
```
#### 07:31 Next.js 14 Folder Structure
```
#### [slug]  or [id]
```
    blog 
      -- page.js
      [slug]  or [id]
          pages.js

```
#### group name
  (auth)
      -folder(contact/login/register)```
```



#### 09:35 Next.js App Route Explained (Next.js Routing)
#### 18:50 Next.js Layouts Explained
```
- Layout- page show the layout of app/layout`
```
#### 21:31 Next.js Should You Use the src Directory?
#### 23:00 Next.js Components
#### 28:00 Next.js Loading, Error, Not Found Layouts
```

- Links - shows the page links
- Loading - help to load the page
- not-found - not found layout
```
#### 32:00 Next.js Styling (CSS Modules  and Tailwind)
 ```
   navbar.module.css
    .container{
       height: 100px;
        display: flex;
    }
    <div className={styles.container}>
 ```
#### 42:51 Next.js How to Give the Active Class to a Navbar Link 
#### 50:45 Responsive Navbar Design
#### 57:30 Responsive Container Layout
#### 59:30 Next.js Image Explained
#### 01:07:25 Homepage Design
#### 01:16:32 About Page Design
#### 01:21:05 Contact Page Design
#### 01:26:00 Next.js Blog Page Design
#### 1:34:50 Single Blog Page Design
#### 01:48:35 Next.js Rendering Explained (Server Components vs Client Components)
#### 01:58:20 Next.js 14 Hydration Error and the Solutions
#### 02:04:39 Next.js Client Component Parent & Server Component Child Problem
#### 02:07:55 Next.js Navigation Explained (Links, useRouter, useParams, page params)
#### 02:17:26 Next.js Data Fetching Explained (Understanding Caching)
#### 02:24:58 Next.js Suspense Explained
#### 02:30:04 Next.js 14 How to Fetch Data without Using an API
#### 02:35:15 Next.js 14 MongoDB Full Stack App Tutorial
02:59:30 Next.js 14 noStore Explained (How to Stop Caching Data?)
03:00:50 Next.js SEO Tutorial (Static and Dynamic SEO Explained)
03:05:57 Next.js 14 Server Actions Tutorial with a Real-World Example
03:18:30 Next.js Server Actions vs API Routes (Which One to Choose?)
03:19:27 Next.js 14 API Route Explained 
03:28:20 Next.js 14 Auth Tutorial | Authentication with Next-Auth & Server Actions
03:29:26 Next Auth Social Media Sign in Tutorial with Server Actions
03:42:07 Next Auth Social Media Sign in How to Add User To Database
03:49:47 Next Auth with User Credentials Tutorial (Email & Password Login)
04:04:20 Next.js useFormState Hook Explained!
04:17:56 Next.js 14 NEXT_REDIRECT Error and the Solution
04:19:40 Next.js 14 Middleware Explained | Next.js Auth.js (Next-Auth) How to Protect Routes?
04:33:11 Next.js 14 Admin Dashboard Tutorial with Server Actions
04:55:14 Outro


https://shakti.ancorathemes.com/home-2/



Introduction
As the digital landscape evolves, building robust and scalable web applications has become essential. Next.js, a popular React framework, offers powerful features to help developers create dynamic and efficient applications. However, as your Next.js project grows, maintaining a clean and organized codebase becomes crucial.

Optimal Next.js Project Structure for Large-Scale Applications
Let’s explore a robust directory structure optimized for large Next.js projects:
```
my-nextjs-project/
│
├── app/                       # Core application logic and routing
│   ├── (auth)/                # Grouping for authentication-related pages
│   │   ├── login/
│   │   │   ├── page.tsx
│   │   ├── register/
│   │       ├── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   ├── api/                   # API routes
│   │   ├── users/
│   │       ├── route.ts
│   ├── layout.tsx             # Main layout file
│   ├── page.tsx               # Home page
│
├── components/                # Reusable components
│   ├── ui/                    # UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   ├── forms/                 # Form components
│   │   ├── LoginForm.tsx
│   ├── layouts/               # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│
├── lib/                       # Core functionality and utilities
│   ├── api.ts
│   ├── utils.ts
│
├── hooks/                     # Custom React hooks
│   ├── useUser.ts
│   ├── useAuth.ts
│
├── types/                     # TypeScript types
│   ├── user.ts
│   ├── api.ts
│
├── styles/                    # Global and component-specific styles
│   ├── globals.css
│
├── public/                    # Static assets
│   ├── images/
│       ├── logo.svg
│
├── next.config.js             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
```
The app Directory: Core Application Logic
The app directory houses the core logic and routing for your application:

(auth): Group authentication-related pages like login and registration.
dashboard: Contains the dashboard page and layout files.
api: Includes API routes, enabling serverless functions within your app.
layout.tsx: Defines the main layout, shared across multiple pages.
page.tsx: The main entry point, often used for the homepage.
Components: Reusable Building Blocks
Organize your components for modularity and reuse:

ui: General UI components like buttons and cards.
forms: Specific components for handling forms, such as LoginForm.
layouts: Layout components like headers and footers, ensuring consistent UI across pages.
The lib Directory: Core Functionality
The lib directory contains core functionality and utility functions:

api.ts: API client setup and functions for interacting with backend services.
utils.ts: Utility functions used throughout the application.
Custom Hooks: Encapsulating Logic
Store your custom React hooks in the hooks directory:

useUser.ts: Manages user-related state and logic.
useAuth.ts: Handles authentication processes.
Types: TypeScript Definitions
Organize your TypeScript type definitions in the types directory:

user.ts: Defines user-related types.
api.ts: Includes types related to API responses and requests.
Styles: Global and Component-Specific Styles
Keep your styles organized:

globals.css: Global CSS styles for the entire application.
Public Assets
Store static assets, such as images and icons, in the public directory:

images: Directory for image assets, like the project logo.
Conclusion
A well-structured Next.js project is essential for building scalable, maintainable, and efficient web applications.
