"use client";

import { useEffect, useMemo, useRef } from "react";

type ShowcaseItem = {
  title: string;
  description: string;
  palette: [string, string, string];
};

type RotatingImageShowcaseProps = {
  items: ShowcaseItem[];
};

const CARD_WIDTH = 336;
const AUTO_SPEED = -0.022;

export default function RotatingImageShowcase({ items }: RotatingImageShowcaseProps) {
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const autoVelocityRef = useRef(0);
  const inertiaVelocityRef = useRef(0);
  const dragStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const didInitRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const resumeAfterRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const loopWidth = items.length * CARD_WIDTH;

    if (!didInitRef.current) {
      offsetRef.current = -loopWidth / 2;
      didInitRef.current = true;
    }

    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;

    const wrapOffset = (value: number) => {
      while (value <= -loopWidth) {
        value += loopWidth;
      }

      while (value >= 0) {
        value -= loopWidth;
      }

      return value;
    };

    let animationFrame = 0;
    let lastTimestamp = 0;

    const tick = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isDraggingRef.current) {
        const shouldAutoMove = !isHoveringRef.current && timestamp >= resumeAfterRef.current;
        const targetAutoVelocity = shouldAutoMove ? AUTO_SPEED : 0;
        const autoBlend = 1 - Math.exp(-delta / 280);
        const inertiaDecay = Math.exp(-delta / 900);

        autoVelocityRef.current += (targetAutoVelocity - autoVelocityRef.current) * autoBlend;
        inertiaVelocityRef.current *= inertiaDecay;

        const totalVelocity = autoVelocityRef.current + inertiaVelocityRef.current;
        offsetRef.current = wrapOffset(offsetRef.current + totalVelocity * delta);
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [items.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = event.timeStamp;
    inertiaVelocityRef.current = 0;
    resumeAfterRef.current = Number.POSITIVE_INFINITY;
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const loopWidth = items.length * CARD_WIDTH;
    const deltaX = event.clientX - lastPointerXRef.current;
    const deltaTime = Math.max(event.timeStamp - lastPointerTimeRef.current, 1);

    offsetRef.current += deltaX;

    while (offsetRef.current <= -loopWidth) {
      offsetRef.current += loopWidth;
    }

    while (offsetRef.current >= 0) {
      offsetRef.current -= loopWidth;
    }

    inertiaVelocityRef.current = deltaX / deltaTime;
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = event.timeStamp;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;
    resumeAfterRef.current = performance.now() + 1000;

    if (trackRef.current?.hasPointerCapture(event.pointerId)) {
      trackRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="content-block showcase-section" aria-labelledby="showcase-title">
      <div className="section-heading showcase-section__heading">
        <div>
          <p className="eyebrow">Performance Preview</p>
          <h2 id="showcase-title">A continuous image lane to stage photos, moments, and event highlights.</h2>
        </div>
      </div>

      <div className="showcase-rail" aria-label="Horizontally scrolling image showcase">
        <div
          ref={trackRef}
          className="showcase-track"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {duplicatedItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="showcase-card showcase-card--flow"
              onMouseEnter={() => {
                isHoveringRef.current = true;
                resumeAfterRef.current = Number.POSITIVE_INFINITY;
              }}
              onMouseLeave={() => {
                isHoveringRef.current = false;
                resumeAfterRef.current = performance.now();
              }}
            >
              <div
                className="showcase-card__image"
                style={
                  {
                    "--showcase-start": item.palette[0],
                    "--showcase-mid": item.palette[1],
                    "--showcase-end": item.palette[2],
                  } as React.CSSProperties
                }
              >
                <span className="showcase-card__badge">Image {(index % items.length) + 1}</span>
                <div className="showcase-card__glyph" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="showcase-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
