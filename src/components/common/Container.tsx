// src/components/common/Container.tsx

// interface ContainerProps {
//   children: React.ReactNode;
// }

// const Container = ({ children }: ContainerProps) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Container;


import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}