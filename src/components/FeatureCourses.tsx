'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import courseData from '../data/music_course.json';
import { BackgroundGradient } from './ui/background-gradient';

const FeatureCourses = () => {

  interface Courses{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean
  }

  const featureCourseData = courseData.courses.filter((course: Courses) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
      <div>
          <div className="text-center">
              <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
          </div>
      </div>
      <div className='mt-10'>
        <div className="container px-5 mx-auto">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {featureCourseData.map((course: Courses) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] w-full h-full p-4 sm:p-10 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition duration-300">
                  <div className='py-7 px-3 sm:p-0'>
                    <div className="relative">
                      {/* <img src="/courses/guitar.jpg" alt="Guitar Fundamentals" className="w-full h-auto rounded-[22px] mb-4" /> */}
                      <div className="absolute bottom-1 right-1 bg-black text-white px-2 py-1 rounded-full text-[0.9rem] font-semibold">
                        Featured
                      </div>
                    </div>
                    <h2 className="text-lg sm:text-xl text-black mt-2 mb-1 dark:text-neutral-200">
                      {course.title}
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      {course.description}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      Instructor: {course.instructor}
                    </p>
                    <button className="rounded-full text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800 hover:bg-gray-800 transition duration-300">
                      {/* <span>Buy now</span> */}
                      <span className="bg-zinc-700 rounded-full text-[0.9rem] px-3 py-2">
                        ${course.price}
                      </span>
                    </button>
                    <Link href={`courses/${course.id}`} className="relative mt-5 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Learn More
                      </span>
                    </Link>
                  </div>
                </BackgroundGradient>

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-center mt-20'>
        <Link href={"/courses"}>
          <Button borderRadius='1.75rem' className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'>
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeatureCourses
