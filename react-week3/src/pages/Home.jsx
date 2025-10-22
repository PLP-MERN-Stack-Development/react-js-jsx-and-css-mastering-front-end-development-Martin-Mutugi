import Button from "../components/Button";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4">🎨 React + Tailwind Task Manager</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Welcome to your Week 3 project! This app demonstrates reusable components, state management, API integration, and responsive design using Tailwind CSS.
      </p>
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}
