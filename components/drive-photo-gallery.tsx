"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { siteConfig } from "@/lib/site-config";

type DriveGalleryImage = {
  id: string;
  title: string;
  createdTime?: string;
  imageUrl: string;
};

const SHUFFLE_INTERVAL_MS = 3200;

const fallbackImages: DriveGalleryImage[] = [
  {
    id: "local-hero",
    title: "Rising Dragon Lion Dance Team performance",
    imageUrl: siteConfig.images.hero,
  },
  {
    id: "local-booking",
    title: "Traditional lion dance booking performance",
    imageUrl: siteConfig.images.booking,
  },
  {
    id: "local-team",
    title: "Rising Dragon Lion Dance Team community event",
    imageUrl: "/mock-team.jpg",
  },
];

function shuffle<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

export default function DrivePhotoGallery() {
  const [driveImages, setDriveImages] = useState<DriveGalleryImage[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ignore = false;

    const loadImages = async () => {
      try {
        const response = await fetch("/api/gallery/drive");

        if (!response.ok) {
          if (!ignore) {
            setDriveImages(fallbackImages);
          }

          return;
        }

        const data = (await response.json()) as { images?: DriveGalleryImage[] };
        const images = data.images?.length ? data.images : fallbackImages;

        if (!ignore) {
          setDriveImages(shuffle(images));
          setActiveIndex(0);
        }
      } catch (error) {
        console.error("Failed to load Drive gallery feed", error);

        if (!ignore) {
          setDriveImages(fallbackImages);
          setActiveIndex(0);
        }
      }
    };

    loadImages();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (driveImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % driveImages.length);
    }, SHUFFLE_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [driveImages]);

  useEffect(() => {
    if (driveImages.length === 0) {
      return;
    }

    const preloadBatch = driveImages.slice(0, Math.min(8, driveImages.length));

    preloadBatch.forEach((image) => {
      const preloader = new window.Image();
      preloader.src = image.imageUrl;
    });
  }, [driveImages]);

  const activeImages = useMemo(() => {
    if (driveImages.length === 0) {
      return [];
    }

    return Array.from({ length: Math.min(7, driveImages.length) }, (_value, index) => {
      const image = driveImages[(activeIndex + index) % driveImages.length];
      return {
        ...image,
        position: index,
      };
    });
  }, [activeIndex, driveImages]);

  const featuredImage = activeImages[0];
  const sideImages = activeImages.slice(1);

  if (activeImages.length === 0 || !featuredImage) {
    return null;
  }

  return (
    <div className="photo-reel" aria-label="Automatically rotating Google Drive photo gallery">
      <article className="photo-reel__feature">
        <div className="photo-reel__feature-image-wrap">
          <Image
            src={featuredImage.imageUrl}
            alt={featuredImage.title}
            fill
            sizes="(max-width: 960px) 100vw, 58vw"
            className="photo-reel__feature-image"
            loading="eager"
            quality={78}
            unoptimized
          />
        </div>
      </article>

      <div className="photo-reel__rail" aria-hidden="true">
        {sideImages.map((image) => (
          <div
            key={`${image.id}-${image.position}`}
            className={`photo-reel__thumb photo-reel__thumb--${image.position + 1}`}
          >
            <Image
              src={image.imageUrl}
              alt=""
              fill
              sizes="(max-width: 960px) 50vw, 16vw"
              className="photo-reel__thumb-image"
              loading="eager"
              quality={68}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
