import React from "react";

interface JsonLdProps {
  data: object;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      // dangerouslySetInnerHTML is needed to insert raw JSON string into script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
