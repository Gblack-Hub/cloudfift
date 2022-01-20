import React from "react";
import AuthButton from "./AuthButton";

export default function AuthButtons() {
  return (
    <section className="text-right">
      <AuthButton name="Sign Up" />
      <AuthButton name="Login" />
    </section>
  );
}
