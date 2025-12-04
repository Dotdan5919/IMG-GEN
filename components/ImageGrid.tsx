'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import api from '@/lib/axios';

export default function ImageGrid() {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    term: 'nature',
    limit: 20,
    page: 1,
    order: 'latest',
    
    // Nested filter objects
    filters: {
      orientation: 'horizontal',
      content_type: 'photo',
      license: 'free',
      period: 'last-month',
      color: 'blue',
      author: null,
      'ai-generated': {
        excluded: 0,
        only: 0
      },
      people: {
        min: null,
        max: null
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/freepik',  {params:filters} );
        console.log('API Response:', response.data);
        
        // Handle different response structures
        let dataArray = [];
        
        if (Array.isArray(response.data)) {
          dataArray = response.data;
        } else if (response.data.data && Array.isArray(response.data.data)) {
          dataArray = response.data.data;
        } else if (response.data.results && Array.isArray(response.data.results)) {
          dataArray = response.data.results;
        }
        
        setGridData(dataArray);
        
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold mb-8">
            Explore the Possibilities
          </h2>
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-white text-xl">Loading images...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold mb-8">
            Explore the Possibilities
          </h2>
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-red-500 text-xl">Error: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  if (!gridData || gridData.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold mb-8">
            Explore the Possibilities
          </h2>
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-white text-xl">No images available</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
          Explore the Possibilities
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {gridData.slice(0, 8).map((img, idx) => (
            <div 
              key={img.id} 
              className="group relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              {/* Using regular img tag - easier for external images */}
              <img
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={img.image?.source?.url || 'https://via.placeholder.com/300x400'}
                alt={img.title || `Image ${idx + 1}`}
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <p className="absolute bottom-4 left-4 text-white text-sm font-bold leading-tight w-4/5 line-clamp-3">
                {img.title}
              </p>
            </div>
          ))}
        </div>
        
        {/* Show total count */}
        <p className="text-white text-center mt-8">
          Showing {Math.min(8, gridData.length)} of {gridData.length} images
        </p>
      </div>
    </section>
  );
}