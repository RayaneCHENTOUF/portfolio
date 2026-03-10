export default function TechBadge({ name }) {
  return (
    <span className="inline-block px-3 py-1 bg-gray-700 dark:bg-gray-700 text-white dark:text-white rounded-full text-xs font-medium hover:scale-110 transition-transform duration-300">
      {name}
    </span>
  );
}
