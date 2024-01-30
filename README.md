# Department of Computer Science and Engineering
# Chitkara University

# Project Report on Threads Clone (a Social Media App)

**Submitted by:**  
Agamjot Singh  
Roll Number: 2110991622  
Group: G7 (5th Semester)  
[Batch 2021-25]

----

## Introduction

In the dynamic landscape of social media platforms, our project stands as a testament to innovation and user-centric design. Titled **tiktalk**, this functional threads clone has been meticulously crafted to provide users with a seamless and engaging social experience.

The primary objective of **tiktalk** is to offer users a comprehensive suite of functionalities, ranging from user registration and onboarding to creating, posting, and sharing threads. The platform goes beyond conventional social media interactions by placing a strong emphasis on user authentication and profile customization. With the integration of technologies such as Next.js with TypeScript, Tailwind CSS, Node.js, MongoDB, and Clerk Authentication, **tiktalk** is positioned to deliver a modern and efficient social media experience.


## Technologies Used 
- Next.js with TypeScript
- Tailwind CSS
- Node.js
- MongoDB
- Clerk Authentication

## Key Features

👉 **Authentication**: Authentication using Clerk for email, password, and social logins (Google and GitHub) with a comprehensive profile management system.

👉 **Visually Appealing Home Page**: A visually appealing home page showcasing the latest threads for an engaging user experience.

👉 **Create Thread Page**: A dedicated page for users to create threads, fostering community engagement

👉 **Commenting Feature**: A commenting feature to facilitate discussions within threads.

👉 **Nested Commenting**: Commenting system with nested threads, providing a structured conversation flow.

👉 **User Search with Pagination**: A user search feature with pagination for easy exploration and discovery of other users.

👉 **Activity Page**: Display notifications on the activity page when someone comments on a user's thread, enhancing user engagement.

👉 **Profile Page**: User profile pages for showcasing information and enabling modification of profile settings.

👉 **Create and Invite to Communities**: Allow users to create new communities and invite others using customizable template emails.

👉 **Community Member Management**: A user-friendly interface to manage community members, allowing role changes and removals.

👉 **Admin-Specific Community Threads**: Enable admins to create threads specifically for their community.

👉 **Community Search with Pagination**: A community search feature with pagination for exploring different communities.

👉 **Community Profiles**: Display community profiles showcasing threads and members for a comprehensive overview.

👉 **Figma Design Implementation**: Transform Figma designs into a fully functional application with pixel-perfect and responsive design.

👉 **Blazing-Fast Performance**: Optimal performance and instantaneous page switching for a seamless user experience.

👉 **Server Side Rendering**: Utilize Next.js with Server Side Rendering for enhanced performance and SEO benefits.

👉 **MongoDB with Complex Schemas**: Handle complex schemas and multiple data populations using MongoDB.

👉 **File Uploads with UploadThing**: File uploads using UploadThing for a seamless media sharing experience.

👉 **Real-Time Events Listening**: Real-time events listening with webhooks to keep users updated.

👉 **Middleware, API Actions, and Authorization**: Utilize middleware, API actions, and authorization for robust application security.

👉 **Next.js Layout Route Groups**: New Next.js layout route groups for efficient routing

👉 **Data Validation with Zod**: Data integrity with data validation using Zod

👉 **Form Management with React Hook Form**: Efficient management of forms with React Hook Form for a streamlined user input experience.

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

## Future Considerations: 
- Communities with private threads
- Image uploads with threads
