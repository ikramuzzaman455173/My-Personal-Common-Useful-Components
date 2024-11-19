

// import { FaHome, FaHistory, FaHeart, FaShoppingCart, FaCog, FaAngleDown, FaAngleUp, FaAngleDoubleRight } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// interface NavItem {
//   headlinMenu?: string;
//   name: string;
//   href: string;
//   icon?: React.ElementType;
//   children?: NavItem[];
//   roles?: string[]; // Add roles property to control access
// }

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
//   userRole: string; // Add user role as prop
// }

// const Sidebar = ({ isOpen, toggleSidebar, userRole = 'user' }: SidebarProps) => {
//   const [openParent, setOpenParent] = useState<string | null>(null);
//   const location = useLocation(); // Get the current location

//   const toggleChildMenu = (parentName: string) => {
//     setOpenParent((prev) => (prev === parentName ? null : parentName));
//   };

//   const isActive = (path: string) => location.pathname === path;

//   // Sidebar data including roles
//   const sidebarData: NavItem[] = [
//     {
//       headlinMenu: 'Dashboard',
//       name: 'Dashboard',
//       href: '/dashboard',
//       icon: FaHome,
//       roles: ['admin', 'manager', 'user'],
//     },
//     {
//       name: 'Orders',
//       href: '/orders',
//       icon: FaHistory,
//       roles: ['admin', 'manager'],
//       children: [
//         { name: 'Order History', href: '/order-history', roles: ['admin', 'manager'] },
//         { name: 'Pending Orders', href: '/pending-orders', roles: ['admin', 'manager'] },
//       ],
//     },
//     {
//       name: 'Wishlist',
//       href: '/wish-list',
//       icon: FaHeart,
//       roles: ['admin', 'manager', 'user'],
//     },
//     {
//       name: 'Shopping Cart',
//       href: '/cart',
//       icon: FaShoppingCart,
//       roles: ['admin', 'manager', 'user'],
//     },
//     {
//       name: 'Settings',
//       href: '/settings',
//       icon: FaCog,
//       roles: ['admin', 'manager'],
//       children: [
//         { name: 'Account', href: '/settings/account', roles: ['admin', 'manager'] },
//         { name: 'Notifications', href: '/settings/notifications', icon: FaCog, roles: ['admin', 'manager'] },
//       ],
//     },
//   ];

//   // Filter items based on user role
//   const filterItemsByRole = (items: NavItem[]) => {
//     return items.filter(item => !item.roles || item.roles.includes(userRole));
//   };

//   return (
//     <aside
//       className={`z-50 h-screen w-64 bg-white shadow-md fixed top-0 left-0 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
//     >
//       <div className="flex justify-end p-4">
//         <button
//           onClick={toggleSidebar}
//           className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
//         >
//           ✖
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="px-4 py-2 h-full overflow-y-auto custom-scrollbar">
//         <ul className="space-y-4">
//           {filterItemsByRole(sidebarData).map((item) => (
//             <li key={item.name}>
//               {item.headlinMenu && (
//                 <h3 className="px-4 py-2 text-sm font-bold text-gray-600 uppercase tracking-wide">{item.headlinMenu}</h3>
//               )}
//               <div>
//                 <Link
//                   to={item.href}
//                   className={`flex items-center px-4 py-2 space-x-3 rounded-md text-sm font-medium transition-all ${
//                     isActive(item.href) ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
//                   }`}
//                   onClick={(e) => {
//                     if (item.children) {
//                       e.preventDefault(); // Prevent navigation on parent click
//                       toggleChildMenu(item.name);
//                     }
//                   }}
//                 >
//                   {item.icon && <item.icon className="text-lg" />}
//                   <span>{item.name}</span>
//                   {item.children && (
//                     <span className="ml-auto">{openParent === item.name ? <FaAngleUp /> : <FaAngleDown />}</span>
//                   )}
//                 </Link>

//                 {/* Render Child Items */}
//                 {item.children && openParent === item.name && (
//                   <ul className="pl-8 mt-2 space-y-2">
//                     {item.children.filter(child => !child.roles || child.roles.includes(userRole)).map((child) => (
//                       <li key={child.name}>
//                         <Link
//                           to={child.href}
//                           className={`flex items-center px-4 py-2 space-x-3 text-sm rounded-md transition-all ${
//                             isActive(child.href) ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
//                           }`}
//                         >
//                           {child.icon ? <child.icon className="text-sm" /> : <FaAngleDoubleRight className="text-sm" />}
//                           <span>{child.name}</span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
import { FaHome, FaHistory, FaHeart, FaShoppingCart, FaCog, FaAngleDown, FaAngleUp, FaAngleDoubleRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface NavItem {
  headlinMenu?: string;
  name: string;
  href: string;
  icon?: React.ElementType;
  children?: NavItem[];
  roles?: string[]; // Add roles property to control access
}

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  userRole: string; // Add user role as prop
}

const Sidebar = ({ isOpen, toggleSidebar, userRole = 'user' }: SidebarProps) => {
  const [openParent, setOpenParent] = useState<string | null>(null);
  const location = useLocation(); // Get the current location

  const toggleChildMenu = (parentName: string) => {
    setOpenParent((prev) => (prev === parentName ? null : parentName));
  };

  const isActive = (path: string) => location.pathname === path;

  // Sidebar data including roles
  const sidebarData: NavItem[] = [
    {
      headlinMenu: 'Dashboard',
      name: 'Dashboard',
      href: '/dashboard',
      icon: FaHome,
      roles: ['admin', 'manager', 'user'],
    },
    {
      name: 'Orders',
      href: '/orders',
      icon: FaHistory,
      roles: ['admin', 'manager'],
      children: [
        { name: 'Order History', href: '/order-history', roles: ['admin', 'manager'] },
        { name: 'Pending Orders', href: '/pending-orders', roles: ['admin', 'manager'] },
      ],
    },
    {
      name: 'Wishlist',
      href: '/wish-list',
      icon: FaHeart,
      roles: ['admin', 'manager', 'user'],
    },
    {
      name: 'Shopping Cart',
      href: '/cart',
      icon: FaShoppingCart,
      roles: ['admin', 'manager', 'user'],
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: FaCog,
      roles: ['admin', 'manager'],
      children: [
        { name: 'Account', href: '/settings/account', roles: ['admin', 'manager'] },
        { name: 'Notifications', href: '/settings/notifications', icon: FaCog, roles: ['admin', 'manager'] },
      ],
    },
  ];

  // Filter items based on user role
  const filterItemsByRole = (items: NavItem[]) => {
    return items.filter(item => !item.roles || item.roles.includes(userRole));
  };

  return (
    <aside
      className={`z-50 h-screen w-64 bg-white shadow-md fixed top-0 left-0 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
        >
          ✖
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-2 h-full overflow-y-auto custom-scrollbar">
        <ul className="space-y-4">
          {filterItemsByRole(sidebarData).map((item) => (
            <li key={item.name}>
              {item.headlinMenu && (
                <h3 className="px-4 py-2 text-sm font-bold text-gray-600 uppercase tracking-wide">{item.headlinMenu}</h3>
              )}
              <div>
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-2 space-x-3 rounded-md text-sm font-medium transition-all ${
                    isActive(item.href) ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
                  }`}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault(); // Prevent navigation on parent click
                      toggleChildMenu(item.name);
                    }
                  }}
                >
                  {item.icon && <item.icon className="text-lg" />}
                  <span>{item.name}</span>
                  {item.children && (
                    <span className="ml-auto">{openParent === item.name ? <FaAngleUp /> : <FaAngleDown />}</span>
                  )}
                </Link>

                {/* Render Child Items */}
                {item.children && openParent === item.name && (
                  <ul className="pl-8 mt-2 space-y-2">
                    {item.children.filter(child => !child.roles || child.roles.includes(userRole)).map((child) => (
                      <li key={child.name}>
                        <Link
                          to={child.href}
                          className={`flex items-center px-4 py-2 space-x-3 text-sm rounded-md transition-all ${
                            isActive(child.href) ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                          }`}
                        >
                          {child.icon ? <child.icon className="text-sm" /> : <FaAngleDoubleRight className="text-sm" />}
                          <span>{child.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
