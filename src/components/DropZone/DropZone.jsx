import "./DropZone.css";

import React from "react";

export default function DropZone({
  label,
  cb = f => console.log(f),
  ...props
}) {
  return (
    <div
      className="dnd"
      onDrop={e => {
        e.preventDefault();

        cb(e.dataTransfer.files);

        return false;
      }}
      onDragOver={e => e.preventDefault()}
      {...props}
    >
      <p>{label}</p>
    </div>
  );
}
