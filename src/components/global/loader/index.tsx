import React from "react";

import { Loader2 } from "lucide-react";

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ loading, children }: LoaderProps) => {
  return loading ? (
    <div className="w-full py-5 flex justify-center">
      <Loader2 />
    </div>
  ) : (
    children
  );
};
