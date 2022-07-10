import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])

  return (
    <div className='bg-rose-50 p-8 shadow-lg'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li
            className='cursor-pointer block pb-3 mb-3 list-disc'
            key={category.slug}>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
