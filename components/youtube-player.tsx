'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

export interface MediaItem {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

interface MediaCarouselProps {
  media: MediaItem[];
}

export default function MediaCarousel({ media }: MediaCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedMedia = media[selectedIndex];

  const getVideoId = (idOrUrl: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)?([^#&?]*).*/;
    const match = idOrUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : idOrUrl;
  };

  return (
    <div className='space-y-4'>
      {/* Main Display */}
      <div className='relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden'>
        {selectedMedia.resource_type === 'video' ? (
          <VideoPlayer
            videoId={getVideoId(selectedMedia.resource_value)}
            thumbnail={selectedMedia.thumbnail_url}
          />
        ) : (
          <img
            src={selectedMedia.resource_value}
            alt='Media preview'
            className='w-full h-full object-cover'
          />
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className='flex space-x-2 overflow-x-auto'>
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-28 flex-shrink-0 rounded border-2 ${
              index === selectedIndex ? 'border-red-600' : 'border-transparent'
            } overflow-hidden`}
          >
            {item.resource_type === 'video' ? (
              <div className='relative'>
                <img
                  src={
                    item.thumbnail_url ||
                    `https://img.youtube.com/vi/${getVideoId(
                      item.resource_value
                    )}/mqdefault.jpg`
                  }
                  alt='video thumb'
                  className='w-full h-16 object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
                  <Play className='w-5 h-5 text-white' fill='white' />
                </div>
              </div>
            ) : (
              <img
                src={item.resource_value}
                alt='image thumb'
                className='w-full h-16 object-cover'
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function VideoPlayer({
  videoId,
  thumbnail,
}: {
  videoId: string;
  thumbnail?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return !isPlaying ? (
    <div
      className='relative w-full h-full cursor-pointer group'
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={
          thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        }
        alt='video thumbnail'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all'>
        <div className='bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform'>
          <Play className='w-8 h-8 text-white ml-1' fill='white' />
        </div>
      </div>
    </div>
  ) : (
    <iframe
      src={embedUrl}
      title='YouTube Video'
      className='w-full h-full'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
}
