'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const GalleryComponent = () => {
  const houses = [
    {
      name: '1A',
      images: [
        '1A/Front.png',

      ],
    },
    {
      name: '1B',
      images: [
        '1B/Front.png',

      ],
    },
    {
      name: '2A',
      images: [
        '2A/Front.png',

      ],
    },
    {
      name: '2B',
      images: [
        '2B/Front.png',

      ],
    },
    {
      name: '3A',
      images: [
        '3A/Front.png',

      ],
    },
    {
      name: '3B',
      images: [
        '3B/Front.png',

      ],
    },
    {
      name: 'Casitas',
      images: [
        'Casitas/Casita-A.png',
        'Casitas/Casita-B.png',

      ],
    },

  ]

  const [selectedHouse, setSelectedHouse] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleHouseClick = (index) => {
    setSelectedHouse(index)
    setCurrentImageIndex(0)
  }

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === 'left'
        ? (currentImageIndex - 1 + houses[selectedHouse].images.length) %
        houses[selectedHouse].images.length
        : (currentImageIndex + 1) % houses[selectedHouse].images.length

    setCurrentImageIndex(newIndex)
  }
  return (
    <div>
      <h1 className='w-full text-center mx-auto py-2 text-gray-500 text-xl bg-gray-100 self-center items-center content-center'>South Point 13</h1>
      <div className="flex bg-gray-100 h-screen text-gray-500">

        <div className="w-1/4 p-4 bg-gray-300">
          <ul>
            {houses.map((house, index) => (
              <li
                key={index}
                onClick={() => handleHouseClick(index)}
                className={`cursor-pointer p-2 mb-2 ${selectedHouse === index ? 'bg-white' : 'bg-gray-200'
                  }`}
              >
                {house.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 px-2">
          {selectedHouse !== null && (
            <div>
              <Image
                width={1920}
                height={1080}
                quality={100}
                src={`/images/Renders/${houses[selectedHouse].images[currentImageIndex]}`}
                alt={`${houses[selectedHouse].name} Image`}
                className="rounded-lg shadow-lg"
              />

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleArrowClick('left')}
                  className="bg-gray-200 px-4 py-2 rounded-lg"
                >
                  Left
                </button>
                <button
                  onClick={() => handleArrowClick('right')}
                  className="bg-gray-200 px-4 py-2 rounded-lg"
                >
                  Right
                </button>
              </div>
            </div>
          )}


        </div>
      </div>
      <footer className='bg-gray-100 text-gray-500 text-center py-1'>
        <p><a className='hover:underline' href='www.hookerhillstudios.com'>Hooker Hill Studios</a></p>
      </footer>
    </div>

  )
}

export default GalleryComponent
