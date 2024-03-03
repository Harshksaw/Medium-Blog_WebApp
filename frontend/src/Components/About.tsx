

import { Link } from 'react-router-dom'; // Import Link for navigation


const AboutUs = () => {
    return (
        
        <div className=" py-12 px-4 md:px-8 mt-5 bg-gradient-to-tr from-bg-violet-300 to-bg-blue-300">
            <h1 className="text-3xl font-bold text-center text-gray-800">About This Project</h1>
            <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
                <p>
                    This project is a full-stack web application with a frontend, backend, and shared commons. It's structured into three core directories:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                    <li>frontend/</li>
                    <li>backend/</li>
                    <li>commons/</li>
                </ul>
                <p>
                    The backend, written in TypeScript, resides in the backend/ directory. It utilizes Prisma as an ORM (Object-Relational Mapper) for database interactions, as evident from the presence of the prisma/ directory. The main entry point for the backend is the index.ts file located within the src/ directory.
                </p>
                <p>
                    The frontend, also written in TypeScript, is found in the frontend/ directory. It employs React to construct the user interface, as indicated by the App.tsx file within the src/ directory. Additionally, the project leverages Vite as a build tool and Tailwind CSS for styling, as demonstrated by the vite.config.ts and tailwind.config.js files.
                </p>
                <p>
                    The commons/ directory houses shared TypeScript code accessible to both the frontend and backend. It includes a zod.ts file, suggesting the use of Zod for schema validation.
                </p>
                <p>
                    Libraries employed across the project include:
                    <br />
                    - TypeScript: A statically typed superset of JavaScript that adds types.
                    <br />
                    - Prisma: An open-source database ORM.
                    <br />
                    - React: A JavaScript library for building user interfaces.
                    <br />
                    - Vite: A build tool and development server.
                    <br />
                    - Tailwind CSS: A utility-first CSS framework.
                    <br />
                    - Zod: A library for schema validation.
                </p>
            </div>
            <div className="text-center mt-8">
                <Link
                    to="https://github.com/your-username/your-repo-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    View on GitHub
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
