"use client";

import { useEffect, useRef } from 'react';

export function USMarketMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;
    
    // Prevent double initialization
    if (mapInstanceRef.current) return;

    // Load Leaflet dynamically
    const loadLeaflet = async () => {
      // Add Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      const L = (await import('leaflet')).default as any;

      // Double check we haven't already created the map
      if (mapInstanceRef.current) return;

      // Market locations with descriptions
      const marketLocations = [
        {
          name: "Los Angeles, CA",
          coords: [34.0522, -118.2437] as [number, number],
          description: "Serving multifamily and hospitality projects with premium window treatments."
        },
        {
          name: "Dallas, TX",
          coords: [32.7767, -96.7970] as [number, number],
          description: "Healthcare and office installations across the greater Dallas area."
        },
        {
          name: "Miami, FL",
          coords: [25.7617, -80.1918] as [number, number],
          description: "Luxury hotel and resort window covering solutions."
        },
        {
          name: "New York, NY",
          coords: [40.7128, -74.0060] as [number, number],
          description: "Commercial office buildings and high-rise installations."
        },
        {
          name: "Chicago, IL",
          coords: [41.8781, -87.6298] as [number, number],
          description: "Large-scale multifamily housing and office projects."
        },
        {
          name: "Phoenix, AZ",
          coords: [33.4484, -112.0740] as [number, number],
          description: "Energy-efficient window treatments for desert climate projects."
        },
        {
          name: "Las Vegas, NV",
          coords: [36.1699, -115.1398] as [number, number],
          description: "Casino, hotel, and entertainment venue installations."
        },
        {
          name: "Atlanta, GA",
          coords: [33.7490, -84.3880] as [number, number],
          description: "Healthcare facilities and corporate office solutions."
        },
      ];

      // Create the map
      const map = L.map(mapRef.current!, {
        zoomControl: false,
        attributionControl: false,
        dragging: true,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
      }).setView([37.8, -96], 4);

      mapInstanceRef.current = map;

      // Add basemap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.5
      }).addTo(map);

      // Custom marker icon (red pin)
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #dc2626; width: 24px; height: 24px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><div style="width: 8px; height: 8px; background: white; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -24]
      });

      // Add markers for each location
      marketLocations.forEach(location => {
        const marker = L.marker(location.coords, { icon: customIcon }).addTo(map);
        
        // Create popup content
        const popupContent = `
          <div style="padding: 8px; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #000;">${location.name}</h3>
            <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.5;">${location.description}</p>
          </div>
        `;
        
        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup'
        });
      });

      // Load GeoJSON for state boundaries (optional, for context)
      const geoJsonUrl = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

      fetch(geoJsonUrl)
        .then(res => res.json())
        .then(geojson => {
          L.geoJson(geojson, {
            style: {
              fillColor: '#1a1a1a',
              weight: 1,
              opacity: 0.5,
              color: '#666',
              fillOpacity: 0.3
            }
          }).addTo(map);
        })
        .catch(err => console.error('Failed to load GeoJSON', err));
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          console.log('Map cleanup error:', e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full max-w-4xl h-[360px] md:h-[520px] mx-auto rounded-lg overflow-hidden"
      style={{ background: '#1a1a1a' }}
    />
  );
}
