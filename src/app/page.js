'use client'

// components/GalleryComponent.js

import Image from 'next/image'
import React, { useState } from 'react'

const GalleryComponent = () => {
  const houses = [
    {
      name: '1A',
      images: ['1A/Front.png'],
    },
    {
      name: '1B',
      images: ['1B/Front.png'],
    },
    {
      name: '2A',
      images: ['2A/Front.png'],
    },
    {
      name: '2B',
      images: ['2B/Front.png'],
    },
    {
      name: '3A',
      images: ['3A/Front.png'],
    },
    {
      name: '3B',
      images: ['3B/Front.png'],
    },
    {
      name: 'Casitas',
      images: ['Casitas/Casita-A.png', 'Casitas/Casita-B.png'],
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
      <div className="flex bg-gray-100 h-screen text-gray-500">
        <div className="w-1/4 p-4 bg-gray-300">
          <h1
            onClick={() => {
              setSelectedHouse(null)
              setCurrentImageIndex(0)
            }}
            className="cursor-pointer w-full text-center mx-auto py-2 my-2 text-gray-500 text-xl bg-gray-100 self-center items-center content-center"
          >
            South Point 13
          </h1>

          <ul>
            {houses.map((house, index) => (
              <li
                key={index}
                onClick={() => handleHouseClick(index)}
                className={`cursor-pointer text-center hover:ml-4 duration-200 p-2 mb-2 ${selectedHouse === index ? 'bg-white' : 'bg-gray-200'
                  }`}
              >
                {house.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 px-2 py-8">
          <div>
            {selectedHouse !== null && (
              <>
                <Image
                  width={1920}
                  height={1080}
                  quality={100}
                  src={`/images/Renders/${houses[selectedHouse].images[currentImageIndex]}`}
                  alt={`${houses[selectedHouse].name} Image`}
                  className="shadow-lg"
                />

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleArrowClick('left')}
                    className="bg-gray-200 px-4 py-2"
                  >
                    Left
                  </button>
                  <button
                    onClick={() => handleArrowClick('right')}
                    className="bg-gray-200 px-4 py-2"
                  >
                    Right
                  </button>
                </div>
              </>
            )}
            {selectedHouse == null && (
              <>
                <Image
                  width={1500}
                  height={800}
                  alt='cover'
                  src={'/images/SouthPointCover.png'}
                />
                <p className='pt-2'>
                  Southpoint sits at the top of South Main Street, designed to
                  take advantage of the breathtaking views of the valley.
                  Homebuyers will enjoy the large lots suitable for single and
                  two-story houses.
                </p>
              </>

            )}
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 text-gray-500 text-center py-1">
        <p>
          <a className="hover:underline" href="www.hookerhillstudios.com">
            Hooker Hill Studios
          </a>
        </p>
      </footer>
    </div>
  )
}

export default GalleryComponent
