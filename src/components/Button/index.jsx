"use client";

export default function Button({ text, onClick, className, icon }) {
  return (
    <button onClick={onClick} className={className}>
      <span>{text}</span>
      {icon}
    </button>
  );
}
