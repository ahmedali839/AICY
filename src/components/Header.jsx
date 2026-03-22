// import React from "react";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <>
//       <div className="flex w-full items-center justify-between border-b border-gray-400 ">
//         <div className="flex items-center space-x-2">
//           <div className="">
//             <h1>AICY</h1>
//             <Image
//               src={
//                 "https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
//               }
//               width={32}
//               height={32}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { UserDataContext } from "../stores/userContext";
import useTheme from "../stores/useTheme"; // adjust path
import { usePathname } from "next/navigation";
import Link from "next/link";

// Loading Context for global loading state management
const LoadingContext = createContext();

// Custom hook to use loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

// Loading Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = (text = "...") => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Utility function to check if screen is mobile
const getIsMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
};

// Professional Loading Bar Component
const LoadingBar = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const increment = Math.random() * 15 + 5;
          return Math.min(prev + increment, 95);
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 300);
    }
  }, [isVisible]);

  if (!isVisible && progress === 0) return null;

  return (
    <div style={loadingBarContainerStyles}>
      <div style={loadingBarBackgroundStyles}>
        <div
          style={{
            ...loadingBarFillStyles,
            width: `${progress}%`,
          }}
        />
        <div style={loadingBarGlowStyles} />
      </div>
      <div style={loadingTextContainerStyles}>
        <div style={loadingDotsStyles}>
          <span style={dotStyles}>.</span>
          <span style={dotStyles}>.</span>
          <span style={dotStyles}>.</span>
        </div>
      </div>
    </div>
  );
};

// Mobile Navigation Menu Component
const MobileNavMenu = ({
  isOpen,
  onClose,
  navItems,
  activeIndex,
  handleNavClick,
}) => {
  // navItems.push("Login")
  const pathname = usePathname();

  const { user, setUser } = useContext(UserDataContext);

  if (!isOpen) return null;
  const isLoggedIn = localStorage.getItem("token");
  return (
    <>
      {/* Backdrop */}
      <div style={mobileBackdropStyles} onClick={onClose} />

      {/* Mobile Menu Card */}
      <div style={mobileMenuStyles}>
        <div style={mobileMenuHeaderStyles}>
          <h3 style={mobileMenuTitleStyles}>Navigation</h3>
          <button style={mobileCloseButtonStyles} onClick={onClose}>
            ✕
          </button>
        </div>
        <div style={mobileMenuItemsStyles}>
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const linkPath =
              item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`;

            return (
              <>
                <Link
                  key={item}
                  href={linkPath}
                  style={mobileLinkStyles}
                  onClick={() => {
                    handleNavClick(index);
                    onClose();
                  }}
                >
                  <div style={getMobileNavItemStyles(isActive)}>
                    <span style={mobileNavTextStyles}>{item}</span>
                    {isActive && <div style={mobileActiveIndicatorStyles} />}
                  </div>
                </Link>
              </>
            );
          })}

          <Link
            key={"signup"}
            href={"/signup"}
            style={mobileLinkStyles}
            onClick={() => {
              onClose();
            }}
          >
            <div style={getMobileNavItemStyles()}>
              <span style={mobileNavTextStyles}>Signup</span>
              {/* {isActive && <div style={mobileActiveIndicatorStyles} />} */}
            </div>
          </Link>

          {isLoggedIn ? (
            <Link
              key={"profile"}
              href={"/profile"}
              style={mobileLinkStyles}
              onClick={() => {
                onClose();
              }}
            >
              <div style={getMobileNavItemStyles()}>
                <span style={mobileNavTextStyles}>Profile</span>
                {/* {isActive && <div style={mobileActiveIndicatorStyles} />} */}
              </div>
            </Link>
          ) : (
            <Link
              key={"login"}
              href={"/login"}
              style={mobileLinkStyles}
              onClick={() => {
                // handleNavClick(index);
                onClose();
              }}
            >
              <div style={getMobileNavItemStyles()}>
                <span style={mobileNavTextStyles}>Login</span>
                {/* {isActive && <div style={mobileActiveIndicatorStyles} />} */}
              </div>
            </Link>
          )}
        </div>

        {/* Decorative element */}
        <div style={mobileMenuDecorStyles}>
          <div style={mobileDecorLineStyles} />
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const { theme } = useTheme();
  const navItems = ["Home", "About", "Projects", "Contact"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FIXED: Initialize with actual mobile state instead of false
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isInitialized, setIsInitialized] = useState(false);

  const pathname = usePathname();
  const { isLoading } = useLoading();

  const { user, setUser } = useContext(UserDataContext);

  // FIXED: Check screen size immediately and handle resize
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = getIsMobile();
      setIsMobile(newIsMobile);

      // Close mobile menu if switching to desktop
      if (!newIsMobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial state
    checkScreenSize();
    setIsInitialized(true);

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Also check on orientation change (mobile devices)
    window.addEventListener("orientationchange", () => {
      setTimeout(checkScreenSize, 100);
    });

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("orientationchange", checkScreenSize);
    };
  }, [isMobileMenuOpen]);

  // Navigation item positions along the curve
  const navPositions = [
    { x: -30, y: 34, rotate: 18, curveProgress: 0.1 },
    { x: 48, y: 54, rotate: 8, curveProgress: 0.35 },
    { x: 142, y: 60, rotate: -3, curveProgress: 0.65 },
    { x: 230, y: 44, rotate: -17, curveProgress: 0.9 },
  ];

  // Set active index based on current route
  useEffect(() => {
    const currentPath = pathname;
    let newActiveIndex = 0;

    if (currentPath === "/" || currentPath === "/home") {
      newActiveIndex = 0;
    } else if (currentPath === "/about") {
      newActiveIndex = 1;
    } else if (currentPath === "/projects") {
      newActiveIndex = 2;
    } else if (currentPath === "/contact") {
      newActiveIndex = 3;
    }

    setActiveIndex(newActiveIndex);
  }, [pathname]);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setAnimatingIndex(activeIndex);
  }, [activeIndex]);

  const getAnimatedPosition = () => {
    const startPos = navPositions[animatingIndex] || navPositions[0];
    return startPos;
  };

  // Decorative lines data
  const decorativeLines = [
    { x: 10, y1: 80, y2: 20, color: "#778da9", width: 2, opacity: 0.7 },
    { x: 25, y1: 80, y2: 24, color: "#b6ad90", width: 1.5, opacity: 0.5 },
    { x: 40, y1: 80, y2: 28, color: "#10b981", width: 1.5, opacity: 0.5 },
    { x: 55, y1: 80, y2: 30, color: "#f59e0b", width: 2, opacity: 0.7 },
    { x: 70, y1: 80, y2: 34, color: "#ef4444", width: 1.5, opacity: 0.5 },
    { x: 85, y1: 82, y2: 36, color: "#ff9f1c", width: 2, opacity: 0.8 },
    { x: 100, y1: 80, y2: 40, color: "#ff9f1c", width: 2, opacity: 0.8 },
    { x: 120, y1: 80, y2: 44, color: "#ffb703", width: 1.5, opacity: 0.6 },
    { x: 140, y1: 80, y2: 46, color: "#fb8500", width: 2, opacity: 0.8 },
    { x: 160, y1: 80, y2: 49, color: "#8ecae6", width: 1.5, opacity: 0.6 },
    { x: 180, y1: 80, y2: 50, color: "#219ebc", width: 2, opacity: 0.8 },
    { x: 200, y1: 80, y2: 50, color: "#023047", width: 1.5, opacity: 0.6 },
    { x: 220, y1: 80, y2: 49, color: "#7209b7", width: 2, opacity: 0.8 },
    { x: 240, y1: 80, y2: 47, color: "#560bad", width: 1.5, opacity: 0.6 },
    { x: 260, y1: 80, y2: 44, color: "#480ca8", width: 2, opacity: 0.8 },
    { x: 280, y1: 80, y2: 40, color: "#3a0ca3", width: 1.5, opacity: 0.6 },
    { x: 300, y1: 80, y2: 36, color: "#3f37c9", width: 2, opacity: 0.8 },
    { x: 320, y1: 80, y2: 30, color: "#4361ee", width: 1.5, opacity: 0.6 },
    { x: 340, y1: 80, y2: 22, color: "#4895ef", width: 2, opacity: 0.8 },
  ];

  // FIXED: Don't render until initialized to prevent flash
  if (!isInitialized) {
    return (
      <header style={getHeaderStyles(true)}>
        <div style={profileContainerStyles}>
          <div style={avatarContainerStyles}>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
              alt="Avatar"
              style={avatarImageStyles}
            />
          </div>
          <div style={userInfoStyles}>
            <h2 style={getUserNameStyles(true)}>AI | Code | Yar</h2>
            <p style={getUserTaglineStyles(true)}>Future proof Learning</p>
          </div>
          <div style={accentBarStyles}></div>
        </div>
        <div style={{ width: 24, height: 24 }}></div> {/* Placeholder */}
      </header>
    );
  }

  let headerName = "<AIandCodewithYar />";

  let isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <LoadingBar isVisible={isLoading} />
      <div
        className={`w-full flex justify-center items-center ${theme === "dark" ? "bg-[#181818]" : ""}`}
      >
        <header style={getHeaderStyles(isMobile, theme)}>
          <Link href={"/"}>
            <div style={profileContainerStyles}>
              <div style={avatarContainerStyles}>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
                  alt="Avatar"
                  style={avatarImageStyles}
                />
              </div>

              <div style={userInfoStyles}>
                {/* <h2 style={getUserNameStyles(isMobile)}>AI | Code | Yar</h2> */}
                <h2 style={getUserNameStyles(isMobile, theme)}>{headerName}</h2>
                <p style={getUserTaglineStyles(isMobile, theme)}>
                  Future proof Learning
                </p>
              </div>
              <div style={accentBarStyles}></div>
            </div>
          </Link>

          {/* Spacer for desktop */}
          {!isMobile && <div style={spacerStyles}></div>}

          {/* FIXED: Better conditional rendering */}
          {isMobile ? (
            <button
              style={hamburgerButtonStyles}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <div style={hamburgerLineStyles}></div>
              <div style={hamburgerLineStyles}></div>
              <div style={hamburgerLineStyles}></div>
            </button>
          ) : (
            <div style={navigationContainerStyles}>
              {/* Desktop SVG Navigation */}
              <svg
                width="410"
                height="120"
                viewBox="0 0 400 120"
                style={svgStyles}
              >
                <path
                  d="M 10 60 Q 200 120 350 60"
                  fill="none"
                  stroke="#f2932c"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <svg
                width="400"
                height="120"
                viewBox="0 0 400 120"
                style={svgStyles}
              >
                <path
                  d="M 4 10 Q 200 90 350 10"
                  fill="none"
                  stroke="#f2932c"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <svg
                width="400"
                height="120"
                viewBox="0 0 400 120"
                style={topSvgStyles}
              >
                <path
                  d="M 4 15 Q 200 80 350 15"
                  fill="none"
                  stroke="#ff9f1c"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  filter="url(#glow)"
                />

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {decorativeLines.map((line, index) => (
                  <line
                    key={index}
                    x1={line.x}
                    y1={line.y1}
                    x2={line.x}
                    y2={line.y2}
                    stroke={line.color}
                    strokeWidth={line.width}
                    opacity={line.opacity}
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              <div
                style={{
                  ...getSliderStyles(getAnimatedPosition()),
                  background: `linear-gradient(135deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)`,
                  boxShadow: `
                0 4px 15px rgba(242, 147, 44, 0.4),
                0 2px 8px rgba(242, 147, 44, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
                }}
              />

              {navItems.map((item, index) => {
                const pos = navPositions[index];
                const isActive = activeIndex === index;
                const linkPath =
                  item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`;

                return (
                  <>
                    <Link
                      key={item}
                      href={linkPath}
                      style={linkStyles}
                      onClick={() => handleNavClick(index)}
                    >
                      <span
                        style={getNavItemStyles(pos, isActive)}
                        onMouseEnter={(e) => handleMouseEnter(e, pos, isActive)}
                        onMouseLeave={(e) => handleMouseLeave(e, pos, isActive)}
                      >
                        {item}
                      </span>
                    </Link>
                  </>
                );
              })}

              <div className="absolute top-28 left-80 items-center justify-center flex text-center gap-0.5">
                <Link
                  href={`/signup`}
                  className={`${theme === "dark" ? "text-white hover:bg-[#242728]" : "text-orange-500 hover:bg-red-400 hover:text-white"}  items-center justify-center px-1.5 py-0.5 rounded-md`}
                >
                  signup
                </Link>

                <Link
                  href={isLoggedIn ? `/profile` : `/login`}
                  className={`${theme === "dark" ? "text-white hover:bg-[#242728]" : "text-orange-500 hover:bg-red-400 hover:text-white"} px-1.5 ${(isLoggedIn || (user && Object.values(user)[0] !== "")) ? "-ml-1" : ""}  items-center justify-center py-0.5  rounded-md`}
                >
                  {isLoggedIn ? "profile" : "login"}
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeIndex={activeIndex}
        handleNavClick={handleNavClick}
      />
    </>
  );
};

// All the existing styles remain the same...
const loadingBarContainerStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: "transparent",
};

const loadingBarBackgroundStyles = {
  position: "relative",
  height: 4,
  backgroundColor: "transparent",
  borderRadius: 2,
  overflow: "hidden",
};

const loadingBarFillStyles = {
  height: "100%",
  background: "linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)",
  borderRadius: 2,
  transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  boxShadow: "0 0 10px rgba(242, 147, 44, 0.5)",
};

const loadingBarGlowStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
  animation: "shimmer 2s infinite",
};

const loadingTextContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
};

const loadingDotsStyles = {
  display: "flex",
  gap: 2,
};

const dotStyles = {
  animation: "bounce 1.4s infinite both",
  fontSize: 12,
  color: "#f2932c",
  fontWeight: "bold",
};

// Mobile Menu Styles
const mobileBackdropStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9998,
  backdropFilter: "blur(4px)",
};

const mobileMenuStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffffff",
  borderRadius: 20,
  padding: 24,
  boxShadow:
    "0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(242, 147, 44, 0.1)",
  zIndex: 9999,
  minWidth: 280,
  maxWidth: 320,
  animation: "slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const mobileMenuHeaderStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
  borderBottom: "2px solid #f2932c",
  paddingBottom: 12,
};

const mobileMenuTitleStyles = {
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
  color: "#333",
  fontFamily: "'Inter', Arial, sans-serif",
};

const mobileCloseButtonStyles = {
  background: "none",
  border: "none",
  fontSize: 20,
  color: "#666",
  cursor: "pointer",
  padding: 4,
  borderRadius: 50,
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
};

const mobileMenuItemsStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const mobileLinkStyles = {
  textDecoration: "none",
  color: "inherit",
};

const getMobileNavItemStyles = (isActive) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  borderRadius: 12,
  backgroundColor: isActive ? "#f2932c" : "transparent",
  transition: "all 0.3s ease",
  cursor: "pointer",
  border: isActive ? "none" : "1px solid rgba(242, 147, 44, 0.2)",
});

const mobileNavTextStyles = {
  fontSize: 16,
  fontWeight: 600,
  fontFamily: "'Inter', Arial, sans-serif",
  color: "inherit",
};

const mobileActiveIndicatorStyles = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const mobileMenuDecorStyles = {
  marginTop: 20,
  paddingTop: 16,
  borderTop: "1px solid rgba(242, 147, 44, 0.2)",
};

const mobileDecorLineStyles = {
  height: 3,
  background: "linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)",
  borderRadius: 2,
  width: "60%",
  margin: "0 auto",
};

// Hamburger Button Styles
const hamburgerButtonStyles = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 8,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  borderRadius: 8,
  transition: "all 0.3s ease",
};

const hamburgerLineStyles = {
  width: 24,
  height: 3,
  backgroundColor: "#f2932c",
  borderRadius: 2,
  transition: "all 0.3s ease",
};

// Responsive Header Styles
const getHeaderStyles = (isMobile, theme) => ({
  borderRadius: 16,
  maxWidth: isMobile ? "100%" : 1400,
  margin: isMobile ? "5px 10px" : "5px auto",
  padding: isMobile ? "15px 20px" : "20px 40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: `${theme === "dark" ? "#0F0F0F" : "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)"}`,
  boxShadow: `${theme === "dark" ? "0 8px 32px rgba(255, 255, 255, 0.05), 0 4px 16px rgba(242, 147, 44, 0.2)" : "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(242, 147, 44, 0.1)"}`,
  minHeight: isMobile ? 80 : 120,
  backdropFilter: "blur(10px)",
});
const profileContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  position: "relative",
  flex: "0 0 auto",
};

const spacerStyles = {
  flex: "1 1 auto",
  minWidth: 200,
};

const avatarContainerStyles = {
  width: 60,
  height: 60,
  borderRadius: "30%",
  overflow: "hidden",
  border: "3px solid #fabf01",
  flexShrink: 0,
  position: "relative",
  transition: "transform 0.3s ease",
};

const avatarImageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
};

const userInfoStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const getUserNameStyles = (isMobile, theme) => ({
  margin: 0,
  fontWeight: 800,
  fontSize: isMobile ? 14 : 20,
  color: `${theme === "dark" ? "white" : "#333"}`,
  fontFamily: "'Inter', Arial, sans-serif",
});

const getUserTaglineStyles = (isMobile, theme) => ({
  margin: 0,
  fontSize: isMobile ? 12 : 14,
  color: `${theme === "dark" ? "#adb5bd" : "#666"}`,
  fontWeight: 500,
  fontFamily: "'Inter', Arial, sans-serif",
});

const accentBarStyles = {
  width: 2,
  height: 80,
  // background: "linear-gradient(180deg, #f2932c 0%, #ff6b35 100%)",
  background: "linear-gradient(180deg, #ffdd00 0%, #f77f00 100%)",
  borderRadius: 4,
  marginLeft: 12,
  boxShadow: "0 2px 8px rgba(242, 147, 44, 0.3)",
};

const navigationContainerStyles = {
  position: "relative",
  width: 400,
  height: 120,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto",
};

const svgStyles = {
  position: "absolute",
  bottom: 10,
  right: 70,
};

const topSvgStyles = {
  position: "absolute",
  top: 60,
  right: 70,
};

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
};

const getSliderStyles = (activePos) => ({
  position: "absolute",
  left: activePos.x,
  top: activePos.y,
  transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
  width: "80px",
  height: "36px",
  borderRadius: "20px",
  transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  zIndex: 1,
  opacity: 1,
});

const getNavItemStyles = (pos, isActive) => ({
  position: "absolute",
  left: pos.x,
  top: pos.y,
  transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
  color: isActive ? "#fff" : "#f2932c",
  fontWeight: "600",
  fontSize: isActive ? "17px" : "16px",
  fontFamily: "'Inter', Arial, sans-serif",
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  padding: "8px 12px",
  borderRadius: "20px",
  zIndex: isActive ? 10 : 5,
  transformOrigin: "center",
  textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
  letterSpacing: "0.5px",
});

const handleMouseEnter = (e, pos, isActive) => {
  if (!isActive) {
    e.currentTarget.style.color = "#d77105";
    e.currentTarget.style.fontSize = "17px";
    e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.1)";
    e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.08)`;
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(242, 147, 44, 0.2)";
  }
};

const handleMouseLeave = (e, pos, isActive) => {
  if (!isActive) {
    e.currentTarget.style.color = "#f2932c";
    e.currentTarget.style.fontSize = "16px";
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
    e.currentTarget.style.boxShadow = "none";
  }
};

// Add CSS animations
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   @keyframes shimmer {
//     0% { transform: translateX(-100%); }
//     100% { transform: translateX(100%); }
//   }

//   @keyframes bounce {
//     0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
//     40% { transform: scale(1); opacity: 1; }
//   }

//   @keyframes slideIn {
//     from {
//       opacity: 0;
//       transform: translate(-50%, -50%) scale(0.8);
//     }
//     to {
//       opacity: 1;
//       transform: translate(-50%, -50%) scale(1);
//     }
//   }

//   @media (max-width: 768px) {
//     .hamburger-button:hover .hamburger-line:nth-child(1) {
//       transform: translateY(-1px);
//     }
//     .hamburger-button:hover .hamburger-line:nth-child(3) {
//       transform: translateY(1px);
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

export default Header;
