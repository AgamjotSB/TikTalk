# Department of Computer Science and Engineering

## Chitkara University

## Project Report on Threads Clone (a Social Media App)

**Submitted by:**  
Agamjot Singh  
Roll Number: 2110991622  
Group: G7 (8th Semester)  
[Batch 2021-25]

---

## Introduction

In the dynamic landscape of social media platforms, our project stands as a testament to innovation and user-centric design. Titled **tiktalk**, this functional threads clone has been meticulously crafted to provide users with a seamless and engaging social experience.

The primary objective of **tiktalk** is to offer users a comprehensive suite of functionalities, ranging from user registration and onboarding to creating, posting, and sharing threads. The platform goes beyond conventional social media interactions by placing a strong emphasis on user authentication and profile customization. With the integration of technologies such as Next.js with TypeScript, Tailwind CSS, Node.js, MongoDB, and Clerk Authentication, **tiktalk** is positioned to deliver a modern and efficient social media experience.

## Technologies Used

- Next.js with TypeScript
- Tailwind CSS
- Node.js
- MongoDB
- Clerk Authentication

## Quick Start

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the repository

```bash
git clone https://github.com/AgamjotSB/TikTalk.git
cd TikTalk
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
MONGODB_URL=
CLERK_SECRET_KEY=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
NEXT_CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up for the corresponding websites on [MongoDB](https://www.mongodb.com/), [Clerk](https://clerk.com/), and [Uploadthing](https://uploadthing.com/).

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Future Considerations

- Communities with private threads
- Image uploads with threads
