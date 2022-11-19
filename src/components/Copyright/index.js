import React from "react";
import { CopyrightText } from "./CopyrightElements";

export default function Copyright() {
  return (
    <CopyrightText>
      Copyright © {new Date().getFullYear()} MB Web Innovations. All rights
      reserved.
    </CopyrightText>
  );
}
