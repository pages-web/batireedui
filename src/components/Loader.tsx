"use client";
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

interface LoaderProps {
  children: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div id="ajaxloader">
      <Image
        src="/images/loader.gif"
        width={40}
        height={40}
        alt="Loading ..."
        className="rounded bg-white"
      />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
