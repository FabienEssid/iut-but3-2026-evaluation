import type { HTMLAttributes, PropsWithChildren } from "react";

export const Page = ({ children, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className="flex min-h-screen flex-col" {...rest}>
      <header className="bg-slate-800 p-4 text-center text-xl font-bold text-white">Films ✨</header>
      <main className="flex flex-1 flex-col gap-6 bg-slate-100 p-4">{children}</main>
      <footer className="bg-slate-800 p-4 text-center text-sm text-white" />
    </div>
  );
};
