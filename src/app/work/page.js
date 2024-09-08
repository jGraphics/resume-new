"use client"
import Link from 'next/link';

// src/app/portfolio/page.js
export default function Work() {
    return (
<div className='pt-16 bg-white'>
    <h1>Work</h1>
        <ul>
          <li><Link href="/work/naija-quest">Naija Quest</Link></li>
          <li><Link href="/work/pathed-app">Pathed App</Link></li>
          <li><Link href="/work/techie-skills">TechieSkills App</Link></li>
        </ul>
      </div>
    );
  }
  