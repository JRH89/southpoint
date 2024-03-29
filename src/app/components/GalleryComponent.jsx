'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'

const GalleryComponent = () => {
	const houses = [
		{
			name: '1A',
			images: ['1A/Front.png',
				'1A/Left.png',
				'1A/Right.png',
				'1A/Rear.png',
				'1A/Floorplan.png',
			],
			video: '/videos/1A/360.mp4',
		},
		{
			name: '1B',
			images: [
				'1B/Front.png',
				'1B/Left.png',
				'1B/Right.png',
				'1B/Rear.png',
				'1B/Floorplan.png',
			],
			video: '/videos/1B/360.mp4',
		},
		{
			name: '2A',
			images: ['2A/Front.png',
				'2A/Left.png',
				'2A/Right.png',
				'2A/Rear.png',
				'2A/firstFloor.png',
				'2A/secondFloor.png',
			],
			video: '/videos/2A/360.mp4',
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
			images: ['3A/Front.png',
				'3A/Left.png',
				'3A/Right.png',
				'3A/Rear.png',
				'3A/floorplan.png',
			],
			video: '/videos/3A/360.mp4',
		},
		{
			name: '3B',
			images: ['3B/Front.png',
				'3B/Left.png',
				'3B/Right.png',
				'3B/Rear.png',
				'3B/floorplan.png',
			],
			video: '/videos/3B/360.mp4',
		},
		{
			name: 'Casita A',
			images: [
				'CasitaA/Front.png',
				'CasitaA/Left.png',
				'CasitaA/Right.png',
				'CasitaA/Rear.png',
				'CasitaA/Floorplan.png',
			],
			video: '/videos/CasitaA/360.mp4',
		},
		{
			name: 'Casita B',
			images: [
				'CasitaB/Front.png',
				'CasitaB/Left.png',
				'CasitaB/Right.png',
				'CasitaB/Rear.png',
				'CasitaB/Floorplan.png',
			],
			video: '/videos/CasitaB/360.mp4',
		},
		{
			name: 'Virtual Tour',
			images: [
				'Tour/1.png',
				'Tour/2.png',
				'Tour/3.png',
				'Tour/4.png',

			],
			video: '/videos/Tour/Demo.mp4',

		},
	]

	const [selectedHouse, setSelectedHouse] = useState(0)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [loading, setLoading] = useState(false)
	const videoRef = useRef(null)

	const handleHouseClick = (index) => {
		setLoading(true)



		setSelectedHouse(index)
		setCurrentImageIndex(0)

		// Check if the selected house has a video and update the video source
		if (houses[index].video && videoRef.current) {
			videoRef.current.src = houses[index].video
			videoRef.current.load() // Ensure the video is reloaded
		}

		setLoading(false)
	}


	const handleArrowClick = (direction) => {
		setLoading(true)

		const newIndex =
			direction === 'left'
				? (currentImageIndex - 1 + houses[selectedHouse].images.length) %
				houses[selectedHouse].images.length
				: (currentImageIndex + 1) % houses[selectedHouse].images.length

		setCurrentImageIndex(newIndex)
		setLoading(false)
	}

	return (
		<div>
			<div className="flex portrait:flex-col mx-auto w-full bg-gray-100 min-h-screen text-gray-500">
				<div className="sticky top-0 h-screen w-1/4 portrait:w-full  portrait:h-auto  portrait:p-2 portrait:pt-2 p-4 bg-gray-300">
					<ul className="grid portrait:grid-cols-2 grid-cols-1 portrait:gap-1 gap-2">
						{houses.map((house, index) => (
							<li
								key={index}
								onClick={() => handleHouseClick(index)}
								className={`cursor-pointer text-sm text-center hover:ml-4 duration-200 p-2 portrait:p-1 mb-2 portrait:mb-1 ${selectedHouse === index ? 'bg-white border border-gray-400' : 'bg-gray-200'}`}
							>
								{house.name}
							</li>
						))}

					</ul>
					<button
						onClick={() => {
							// Create a link element
							const link = document.createElement('a')

							// Set the href attribute to the file URL
							link.href = "https://firebasestorage.googleapis.com/v0/b/hookerhillstu.appspot.com/o/South%20Point%2013.zip?alt=media&token=8e4c8709-2c01-4cac-971a-dfc81e57ff42"

							// Set the download attribute to the desired filename (optional)
							link.download = "SouthPoint13.zip"

							// Append the link to the document body
							document.body.appendChild(link)

							// Trigger a click event on the link
							link.click()

							// Remove the link from the document body (optional)
							document.body.removeChild(link)
						}}
						className={`cursor-pointer text-sm mx-auto flex justify-center content-center text-center hover:scale-110 duration-200 p-2 portrait:p-1 mb-2 portrait:mb-1`}
					>
						Download Virtual Tour
					</button>

				</div>
				<div className="w-3/4 portrait:w-full portrait:my-auto px-2 pb-6 pt-4 portrait:pb-6 overflow-y-auto">
					<div>
						{selectedHouse !== null && (
							<>
								{loading && <p>Loading...</p>
								}
								{!loading &&
									<Image
										loading="eager"
										width={1920}
										height={1080}
										quality={100}
										src={`/images/Renders/${houses[selectedHouse].images[currentImageIndex]}`}
										alt={`${houses[selectedHouse].name} Image`}
										className="shadow-lg"
									/>
								}
								<div className="mt-4 flex justify-between">
									{loading ? (
										<span className="text-gray-400 font-extrabold text-xl">...</span>
									) : (
										<>
											<button
												onClick={() => handleArrowClick('left')}
												className="bg-gray-200 hover:scale-95 duration-200 px-4 py-2 my-auto flex font-extrabold text-xl"
											>
												&larr; {/* Unicode character for left arrow */}
											</button>

											<button
												onClick={() => handleArrowClick('right')}
												className="bg-gray-200 hover:scale-95 duration-200 px-4 py-2 font-extrabold text-xl"
											>
												&rarr; {/* Unicode character for right arrow */}
											</button>
										</>
									)}
								</div>
								{houses[selectedHouse].video && (
									<div className="mt-4">
										<video ref={videoRef} width="100%" height="auto" controls>
											<source src={houses[selectedHouse].video} type="video/mp4" />
											Your browser does not support the video tag.
										</video>
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
					<a className="hover:underline" href="https://www.hookerhillstudios.com">
						Hooker Hill Studios
					</a>
				</p>
			</footer>
		</div>
	)
}

export default GalleryComponent
