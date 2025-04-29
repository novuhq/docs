export function CustomSidebar() {
  const items = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
  ];

  return (
    <aside className="p-4 w-64 bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-md">
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block text-sm font-medium hover:text-blue-600 transition-colors"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
