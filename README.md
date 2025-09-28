ClubHub: The Campus Engagement Hub
ClubHub is a modern, responsive web application designed to centralize and simplify the process of discovering, joining, and managing student organizations, sports teams, and campus events. It offers a personalized experience for students and streamlined management tools for club leaders.

🚀 Built Under
This project was developed as part of the LetsUpgrade SAP Program initiative, focusing on building real-world, scalable applications using cutting-edge technologies.

✨ Key Features
Unified Catalog: A single, searchable directory for all campus activities (Clubs, Sports, Events).

Personalized Dashboard (/my-clubs): A dedicated area showing only the organizations the logged-in user has joined or leads.

Intuitive Navigation: Clean header with clear links, prominent Register/Login buttons, and social media integration in the footer.

Consistent Branding: A cohesive visual theme using a high-contrast blue/purple primary color throughout all elements and backgrounds.

Responsive Design: Fully optimized for seamless use on all devices (mobile-first approach).

Simulated Authentication: Local storage-based login/registration using the student's unique Register Number for user identification.

🛠️ Tech Stack & Languages
The application is built using a modern, performance-oriented stack:

Framework: Next.js 14 (App Router)

UI Library: React

Language: TypeScript (TSX) (for robust, typed code)

Styling: Tailwind CSS (for rapid, utility-first styling)

State Management/Data Fetching: SWR (via use-auth hook)

Iconography: Lucide React

💡 How to Test Features
To test the personalized features, you can simulate user data:

Register: Use the "Register" link to create a mock user account. Note the Register Number you use (e.g., user-a).

Data Matching: Check the lib/data.ts file. Clubs with leaderId: 'user-a' (e.g., Robotics Club) will appear on the My Clubs page once you log in with that user.

Login: Use the registered details to access the personalized dashboard.

🛣️ Future Enhancements
Integration with a Live Backend API (e.g., Firebase, Supabase, or custom Node.js/Python server).

Development of a Full Event Calendar and RSVP system.

Implementation of Advanced Filtering and Search capabilities for the catalog.

Creation of a Leader Dashboard for organization management.
