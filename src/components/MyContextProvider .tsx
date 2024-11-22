import React, { createContext, useState, ReactNode } from 'react';

// تحديد نوع السياق
interface MyContextType {
  selectedProduct: string; // استبدل "any" بالنوع المناسب للمنتج
  setSelectedProduct: (product: string) => void; // نفس الشيء هنا
}

// إنشاء السياق مع النوع الافتراضي
export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

// مزود السياق
export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(""); // استبدل "any" بالنوع المناسب

  return (
    <MyContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </MyContext.Provider>
  );
};
