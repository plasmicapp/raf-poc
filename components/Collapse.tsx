/** @format */

import { ReactNode, useState } from "react";

function ArrowDown() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 6.00003L10.4597 14L2.5 6.00003"
        stroke="#222222"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default function Collapse({
  header,
  children,
  previewOpen,
  className,
}: {
  header: ReactNode;
  className?: string;
  previewOpen?: boolean;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const actuallyOpen = isOpen || previewOpen;
  return (
    <div className={className}>
      <div style={{ display: "flex", alignItems: "center" }} onClick={toggle}>
        <div style={{ flex: 1 }}>{header}</div>
        <div style={{ transform: actuallyOpen ? "rotate(180deg)" : undefined }}>
          {<ArrowDown />}
        </div>
      </div>
      <div
        style={{
          display: actuallyOpen ? "block" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
