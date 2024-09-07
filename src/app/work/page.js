"use client"
import Link from 'next/link';

// src/app/portfolio/page.js
export default function Work() {
    return (
      <div>
        <h1>Work</h1>
        <ul>
          <li><Link href="/work/naija-quest">Naija Quest</Link></li>
          <li><Link href="/work/pathed-app">Pathed App</Link></li>
          <li><Link href="/work/other-article">Other Article</Link></li>
        </ul>
      </div>
    );
  }
  