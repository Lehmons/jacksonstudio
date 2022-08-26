import React, { useState, useRef, useEffect } from "react";
import HomeStyles from "./Home.styled";
import Shape from "../Shape";
import Row from "../Row";

export default function Home() {
  const [size, setSize] = useState();
  const lastScrollPos = useRef(0);

  const sizes = {
    mobile: 768,
    desktop: 1280,
  };

  const setup = () => {
    // calculation
    const viewportW = window.innerWidth;

    if (viewportW <= sizes.mobile) {
      setSize(3);
      return;
    }

    if (viewportW <= sizes.desktop) {
      setSize(4);
      return;
    }

    setSize(5);
  };

  const onScroll = () => {
    const y = window.scrollY;
    const viewportH = window.innerHeight;
    const pageHeight = document.body.offsetHeight;

    if (y >= pageHeight - viewportH) {
      window.scrollTo(0, 0);
    }
    // } else if (y <= 0 && lastScrollPos.current > 0) {
    //   window.scrollTo(0, pageHeight - viewportH - 10);
    // }
    lastScrollPos.current = y;
  };

  useEffect(() => {
    setup();
    function resize() {
      setup();
    }
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <HomeStyles>
      {size && (
        <>
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={2.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
          <Row size={size} delay={1.5} />
        </>
      )}
      <h1>
        <a href="mailto:studio@freddiejackson.uk?subject=Work Enquiry">
          Jackson Studio
        </a>
      </h1>
    </HomeStyles>
  );
}
