'use client'

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
			images: ['1B/Front.png', '1B/Floorplan.png'],
			video: '/videos/1B/360.mp4',
		},
		{
			name: '2A',
			images: ['2A/Front.png'],
		},
		{
			name: '2B',
			images: [
				'2B/Front.png',
				'2B/Left.png',
				'2B/Right.png',
				'2B/Rear.png',
				'2B/firstFloor.png',
				'2B/secondFloor.png',
			],
			video: '/videos/2B/360.mp4',
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
			images: ['Casitas/Casita-A.png'],
			images2: ['Casitas/Casita-B.png'],
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
			<div className="flex bg-gray-100 min-h-screen text-gray-500">
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
									loading="eager"
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
										className="bg-gray-200 hover:scale-95 duration-200 px-4 py-2 font-extrabold text-xl"
									>
										&larr; {/* Unicode character for left arrow */}
									</button>
									<button
										onClick={() => handleArrowClick('right')}
										className="bg-gray-200 hover:scale-95 duration-200 px-4 py-2 font-extrabold text-xl"
									>
										&rarr; {/* Unicode character for right arrow */}
									</button>
								</div>
								{houses[selectedHouse].video && (
									<div className="mt-4">
										<video width="100%" height="auto" controls>
											<source
												src={houses[selectedHouse].video}
												type="video/mp4"
											/>
											Your browser does not support the video tag.
										</video>
									</div>
								)}
								{houses[selectedHouse].images2 && !houses[selectedHouse].video && (
									<div className="mt-4">
										<Image
											width={1920}
											height={1080}
											quality={100}
											src={`/images/Renders/${houses[selectedHouse].images2[currentImageIndex]}`}
											alt={`${houses[selectedHouse].name} Image 2`}
											className="shadow-lg"
										/>
										<div className="mt-4 flex justify-between">
											<button
												onClick={() => handleArrowClick('left')}
												className="bg-gray-200 hover:scale-95 duration-200 px-4 py-2 font-extrabold text-xl"
											>
												&larr; {/* Unicode character for left arrow */}
											</button>
											<button
												onClick={() => handleArrowClick('right')}
												className="bg-gray-200 hover:scale-95 duration-200 px-4 py-2 font-extrabold text-xl"
											>
												&rarr; {/* Unicode character for right arrow */}
											</button>
										</div>
									</div>
								)}
							</>
						)}
						{selectedHouse == null && (
							<>
								<Image
									width={1500}
									height={800}
									alt="cover"
									src={'/images/SouthpointCover.png'}
								/>
								<p className="pt-2">
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
