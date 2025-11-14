import React from 'react'
import Navbar from './Navbar'
import { projects } from './data'
import { FaGithub } from 'react-icons/fa'

// Simple image slider used for projects that provide multiple images
const ImageSlider = ({ images }) => {
    const [index, setIndex] = React.useState(0)
    const len = images.length
    if (!images || len === 0) return null

    const prev = () => setIndex((index - 1 + len) % len)
    const next = () => setIndex((index + 1) % len)

    return (
        <div className="relative">
            <img src={images[index]} alt={`slide-${index}`} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl' />
            <button onClick={prev} aria-label="previous" className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center">‹</button>
            <button onClick={next} aria-label="next" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center">›</button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button key={i} onClick={() => setIndex(i)} className={`${i === index ? 'bg-white' : 'bg-gray-500'} w-2 h-2 rounded-full`} aria-label={`go-to-${i}`} />
                ))}
            </div>
        </div>
    )
}

const Portfolio = () => {
  return (
    <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
      <Navbar/>
      <div className='mt-7'>
        <h1 className='text-white font-bold text-3xl mb-2'>Portfolio</h1>
        <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
        <div className='grid md:grid-cols-3 gap-6 mt-7'>
            {
                                projects.map((project, index)=> {
                                        return <div key={index} className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                                                {Array.isArray(project.image) ? (
                                                    <ImageSlider images={project.image} />
                                                ) : (
                                                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                                                )}
                        <div className='p-6'>
                            <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    project.techStack.map((tech, idx)=> {
                                        return <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                                    })
                                }
                            </div>
                            <div className='flex gap-3'>
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                                <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md transition-colors'><FaGithub/> Github</a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
