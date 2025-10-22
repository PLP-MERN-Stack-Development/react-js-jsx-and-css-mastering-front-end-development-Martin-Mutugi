export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md rounded p-4 border border-gray-200 dark:border-gray-700 max-w-xl mx-auto transition-all duration-300 ease-in-out">
      {title && (
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
}
