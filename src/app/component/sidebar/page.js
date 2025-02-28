"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const activeStyle = {
    color: "#fff", // Active text color
    backgroundColor: "#0070f3", // Active background color
    border: "2px solid #0070f3", // Active border color
    padding: "10px 25px", // Padding around the link
    borderRadius: "5px", // Rounded corners for the border
  };
  const linkStyle = { textDecoration: "none", color: "black" };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image
            src="/cartoon-boy-pictures-1.webp"
            height={150}
            width={150}
            alt={"Profile Picture"}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontFamily: "sans-serif",
              color: "black",
            }}
            title="Dineshkumar A"
          >
            Dineshkumar A
          </p>
          <span style={{ fontWeight: 700, fontFamily: "serif", color: "blue" }}>
            FrontEnd Developer
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "25px",
        }}
      >
        <div style={{ padding: "15px" }}>
          <Link
            href="/"
            style={
              pathname === "/" ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            <i className="fas fa-home" style={{ marginRight: "15px" }}></i>
            Home
          </Link>
        </div>
        <div style={{ padding: "15px" }}>
          <Link
            href="/about"
            style={
              pathname === "/about"
                ? { ...linkStyle, ...activeStyle }
                : linkStyle
            }
          >
            {" "}
            <i className="fas fa-user" style={{ marginRight: "15px" }}></i>
            About
          </Link>
        </div>
        <div style={{ padding: "15px" }}>
          <Link
            href="/skills"
            style={
              pathname === "/skills"
                ? { ...linkStyle, ...activeStyle }
                : linkStyle
            }
          >
            {" "}
            <i className="fas fa-code" style={{ marginRight: "15px" }}></i>
            Skills
          </Link>
        </div>
        <div style={{ padding: "15px" }}>
          <Link
            href="/project"
            style={
              pathname === "/project"
                ? { ...linkStyle, ...activeStyle }
                : linkStyle
            }
          >
            <i className="fas fa-briefcase" style={{ marginRight: "15px" }}></i>
            Project
          </Link>
        </div>
        <div style={{ padding: "15px" }}>
          <Link
            href="/contact"
            style={
              pathname === "/contact"
                ? { ...linkStyle, ...activeStyle }
                : linkStyle
            }
          >
            <i className="fas fa-envelope" style={{ marginRight: "15px" }}></i>
            Contact
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ fontSize: "32px", color: "#3b5998" }}>
          <i className="fab fa-facebook"></i>
        </div>
        <div style={{ fontSize: "32px", color: "#3b5998" }}>
          <i className="fab fa-github"></i>
        </div>
        <div style={{ fontSize: "32px", color: "#3b5998" }}>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
