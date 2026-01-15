"use client";

import { useEffect, useRef, useState } from 'react';

export function USMarketMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

      // All 50 US states with major cities and assigned logos
      const stateLocations = [
        { name: "Montgomery, AL", coords: [32.3668, -86.3000] as [number, number], logo: "/logo_iso9001.png" },
        { name: "Anchorage, AK", coords: [61.2181, -149.9003] as [number, number], logo: "/logo_iso14001.png" },
        { name: "Phoenix, AZ", coords: [33.4484, -112.0740] as [number, number], logo: "/logo_USGBC.png" },
        { name: "Little Rock, AR", coords: [34.7465, -92.2896] as [number, number], logo: "/logo_greenguard_gold.png" },
        { name: "Los Angeles, CA", coords: [34.0522, -118.2437] as [number, number], logo: "/logo_NFPA.png" },
        { name: "Denver, CO", coords: [39.7392, -104.9903] as [number, number], logo: "/logo_oekotex_EN.png" },
        { name: "Hartford, CT", coords: [41.7658, -72.6734] as [number, number], logo: "/logo_lead_free.png" },
        { name: "Dover, DE", coords: [39.1582, -75.5244] as [number, number], logo: "/Logo_Prop_65_compliant_fullcolor.png" },
        { name: "Miami, FL", coords: [25.7617, -80.1918] as [number, number], logo: "/logo_phtalate-free.jpg" },
        { name: "Atlanta, GA", coords: [33.7490, -84.3880] as [number, number], logo: "/logo_aitex.png" },
        { name: "Honolulu, HI", coords: [21.3099, -157.8581] as [number, number], logo: "/logo_emas.png" },
        { name: "Boise, ID", coords: [43.6150, -116.2023] as [number, number], logo: "/logo_ecocodice.png" },
        { name: "Chicago, IL", coords: [41.8781, -87.6298] as [number, number], logo: "/logo_sanitized.png" },
        { name: "Indianapolis, IN", coords: [39.7684, -86.1581] as [number, number], logo: "/logo_imo_wheelmark.png" },
        { name: "Des Moines, IA", coords: [41.5868, -93.6250] as [number, number], logo: "/Logo_Microterm.png" },
        { name: "Wichita, KS", coords: [37.6872, -97.3301] as [number, number], logo: "/logo_iso9001.png" },
        { name: "Louisville, KY", coords: [38.2527, -85.7585] as [number, number], logo: "/logo_iso14001.png" },
        { name: "New Orleans, LA", coords: [29.9511, -90.0715] as [number, number], logo: "/logo_USGBC.png" },
        { name: "Portland, ME", coords: [43.6591, -70.2568] as [number, number], logo: "/logo_greenguard_gold.png" },
        { name: "Baltimore, MD", coords: [39.2904, -76.6122] as [number, number], logo: "/logo_NFPA.png" },
        { name: "Boston, MA", coords: [42.3601, -71.0589] as [number, number], logo: "/logo_oekotex_EN.png" },
        { name: "Detroit, MI", coords: [42.3314, -83.0458] as [number, number], logo: "/logo_lead_free.png" },
        { name: "Minneapolis, MN", coords: [44.9778, -93.2650] as [number, number], logo: "/Logo_Prop_65_compliant_fullcolor.png" },
        { name: "Jackson, MS", coords: [32.2988, -90.1848] as [number, number], logo: "/logo_phtalate-free.jpg" },
        { name: "Kansas City, MO", coords: [39.0997, -94.5786] as [number, number], logo: "/logo_aitex.png" },
        { name: "Billings, MT", coords: [45.7833, -108.5007] as [number, number], logo: "/logo_emas.png" },
        { name: "Omaha, NE", coords: [41.2565, -95.9345] as [number, number], logo: "/logo_ecocodice.png" },
        { name: "Las Vegas, NV", coords: [36.1699, -115.1398] as [number, number], logo: "/logo_sanitized.png" },
        { name: "Manchester, NH", coords: [42.9956, -71.4548] as [number, number], logo: "/logo_imo_wheelmark.png" },
        { name: "Newark, NJ", coords: [40.7357, -74.1724] as [number, number], logo: "/Logo_Microterm.png" },
        { name: "Albuquerque, NM", coords: [35.0844, -106.6504] as [number, number], logo: "/logo_iso9001.png" },
        { name: "New York, NY", coords: [40.7128, -74.0060] as [number, number], logo: "/logo_iso14001.png" },
        { name: "Charlotte, NC", coords: [35.2271, -80.8431] as [number, number], logo: "/logo_USGBC.png" },
        { name: "Fargo, ND", coords: [46.8772, -96.7898] as [number, number], logo: "/logo_greenguard_gold.png" },
        { name: "Columbus, OH", coords: [39.9612, -82.9988] as [number, number], logo: "/logo_NFPA.png" },
        { name: "Oklahoma City, OK", coords: [35.4676, -97.5164] as [number, number], logo: "/logo_oekotex_EN.png" },
        { name: "Portland, OR", coords: [45.5152, -122.6784] as [number, number], logo: "/logo_lead_free.png" },
        { name: "Philadelphia, PA", coords: [39.9526, -75.1652] as [number, number], logo: "/Logo_Prop_65_compliant_fullcolor.png" },
        { name: "Providence, RI", coords: [41.8240, -71.4128] as [number, number], logo: "/logo_phtalate-free.jpg" },
        { name: "Charleston, SC", coords: [32.7765, -79.9311] as [number, number], logo: "/logo_aitex.png" },
        { name: "Sioux Falls, SD", coords: [43.5460, -96.7313] as [number, number], logo: "/logo_emas.png" },
        { name: "Nashville, TN", coords: [36.1627, -86.7816] as [number, number], logo: "/logo_ecocodice.png" },
        { name: "Dallas, TX", coords: [32.7767, -96.7970] as [number, number], logo: "/logo_sanitized.png" },
        { name: "Salt Lake City, UT", coords: [40.7608, -111.8910] as [number, number], logo: "/logo_imo_wheelmark.png" },
        { name: "Burlington, VT", coords: [44.4759, -73.2121] as [number, number], logo: "/Logo_Microterm.png" },
        { name: "Virginia Beach, VA", coords: [36.8529, -75.9780] as [number, number], logo: "/logo_iso9001.png" },
        { name: "Seattle, WA", coords: [47.6062, -122.3321] as [number, number], logo: "/logo_iso14001.png" },
        { name: "Charleston, WV", coords: [38.3498, -81.6326] as [number, number], logo: "/logo_USGBC.png" },
        { name: "Milwaukee, WI", coords: [43.0389, -87.9065] as [number, number], logo: "/logo_greenguard_gold.png" },
        { name: "Cheyenne, WY", coords: [41.1400, -104.8202] as [number, number], logo: "/logo_NFPA.png" },
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

      // Custom marker icon (red pin with animation)
      const customIcon = L.divIcon({
        className: 'custom-marker animated-pin',
        html: '<div style="background: #dc2626; width: 20px; height: 20px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); animation: pinDrop 0.3s ease-out;"><div style="width: 6px; height: 6px; background: white; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 20],
        popupAnchor: [0, -20]
      });

      // Add CSS animation for pin drop
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes pinDrop {
          0% { transform: translateY(-20px) scale(0); opacity: 0; }
          50% { transform: translateY(0) scale(1.2); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .custom-marker {
          animation: pinDrop 0.3s ease-out !important;
        }
        .logo-marker {
          background: white;
          border-radius: 50%;
          padding: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          border: 2px solid #dc2626;
        }
        .logo-marker img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `;
      document.head.appendChild(style);

      // Create all markers with logo images
      stateLocations.forEach((location, index) => {
        // Create custom icon with logo image
        const logoIcon = L.divIcon({
          className: 'logo-marker animated-pin',
          html: `<div class="logo-marker" style="width: 40px; height: 40px;"><img src="${location.logo}" alt="${location.name}" /></div>`,
          iconSize: [40, 40],
          iconAnchor: [20, 20],
          popupAnchor: [0, -20]
        });

        const marker = L.marker(location.coords, { 
          icon: logoIcon,
          opacity: 0
        }).addTo(map);
        
        markersRef.current.push(marker);
        
        const popupContent = `
          <div style="padding: 8px; min-width: 150px;">
            <h3 style="margin: 0; font-size: 14px; font-weight: 600; color: #000;">${location.name}</h3>
          </div>
        `;
        
        marker.bindPopup(popupContent, {
          maxWidth: 200,
          className: 'custom-popup'
        });
      });

      // Animate pins appearing one by one quickly
      let animationInterval: NodeJS.Timeout;
      const animatePins = () => {
        let index = 0;
        
        // Reset all markers
        markersRef.current.forEach(marker => {
          marker.setOpacity(0);
        });
        
        animationInterval = setInterval(() => {
          if (index < markersRef.current.length) {
            markersRef.current[index].setOpacity(1);
            index++;
            setCurrentIndex(index);
          } else {
            // Loop back to start
            setTimeout(() => {
              animatePins();
            }, 1000); // 1 second pause before restarting
            clearInterval(animationInterval);
          }
        }, 100); // Show new pin every 100ms (fast)
      };

      // Start animation after map loads
      setTimeout(animatePins, 500);

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
