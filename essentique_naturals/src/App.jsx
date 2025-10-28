
import React from 'react'

const LogoMark = () => (
  <svg width="64" height="64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Essentique mark">
    <circle cx="100" cy="100" r="98" fill="#FAF8F4" stroke="#2E5E4E" strokeWidth="3"/>
    <g transform="translate(40,20)">
      <path d="M40 10 C70 25 70 70 40 90 C10 70 10 25 40 10 Z" fill="#2E5E4E"/>
      <path d="M40 28 C56 38 56 62 40 72 C24 62 24 38 40 28 Z" fill="#C2A14A"/>
    </g>
  </svg>
)

const products = [
  { id: 'p1', name: 'Lavender Oil', botanical: 'Lavandula angustifolia', price: 250, vol:'10 ml' },
  { id: 'p2', name: 'Tea Tree Oil', botanical: 'Melaleuca alternifolia', price: 280, vol:'10 ml' },
  { id: 'p3', name: 'Lemongrass Oil', botanical: 'Cymbopogon citratus', price: 180, vol:'10 ml' },
]

export default function App(){
  return (
    <div className="min-h-screen font-sans" style={{background:'#FAF8F4', color:'#3B2F2F'}}>
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div><LogoMark /></div>
          <div>
            <h1 className="text-2xl font-serif">Essentique Naturals</h1>
            <p className="text-sm text-gray-700">Pure Essence. True Nature.</p>
          </div>
        </div>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#shop">Shop</a>
          <a href="#custom">Customize</a>
          <a href="#about">About</a>
          <a href="#contact" className="px-3 py-2 border rounded">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h2 className="text-4xl font-serif" style={{color:'#2E5E4E'}}>Natural. Organic. Handcrafted.</h2>
            <p className="mt-4 text-gray-700">Essentique Naturals brings premium essential oils distilled from ethically-sourced botanicals. Shop retail bottles or request a custom blend and label for gifts.</p>
            <div className="mt-6 flex gap-4">
              <a href="#shop" className="px-5 py-3 rounded shadow" style={{background:'#2E5E4E', color:'#FAF8F4'}}>Shop Now</a>
              <a href="#custom" className="px-5 py-3 rounded border" style={{borderColor:'#C2A14A', color:'#3B2F2F'}}>Customize</a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6" style={{border:'1px solid #EDEAE6'}}>
            <div className="h-60 flex items-center justify-center" style={{background:'#FAF8F4'}}>
              <div className="text-center">
                <div style={{width:140, height:180, background:'#2E5E4E', borderRadius:12}}></div>
                <p className="mt-4 text-sm text-gray-600">Amber glass bottle mockup</p>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="py-8">
          <h3 className="text-2xl font-serif" style={{color:'#2E5E4E'}}>Shop — Retail Bottles</h3>
          <p className="text-gray-700">Small-batch, pure essential oils. Free sample with first order over ₹1000.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.map(p => (
              <div key={p.id} className="rounded-lg p-4 bg-white shadow-sm" style={{border:'1px solid #EDEAE6'}}>
                <div className="h-36 flex items-center justify-center mb-4">
                  <div style={{width:80,height:120, background:'#2E5E4E', borderRadius:8}}></div>
                </div>
                <h4 className="font-semibold" style={{color:'#3B2F2F'}}>{p.name}</h4>
                <p className="text-xs text-gray-600">{p.botanical}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-medium">₹{p.price}</div>
                  <button className="px-3 py-1 rounded text-sm" style={{border:'1px solid #C2A14A'}}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="custom" className="py-12">
          <h3 className="text-2xl font-serif" style={{color:'#2E5E4E'}}>Customization</h3>
          <p className="text-gray-700 mt-3">Order custom blends (small retail batches), gift sets, or custom-labeled bottles for events. Minimum order: 20 bottles per SKU for custom label. Fast turnaround for local Bengaluru orders.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6 bg-white" style={{border:'1px solid #EDEAE6'}}>
              <h4 className="font-semibold">Custom Blends</h4>
              <ul className="list-disc ml-5 text-gray-700 mt-3 text-sm">
                <li>Relax Blend — Lavender + Bergamot</li>
                <li>Focus Blend — Rosemary + Peppermint</li>
                <li>Sleep Blend — Chamomile + Vetiver</li>
              </ul>
              <p className="mt-4 text-sm">Request sample 10ml for ₹50 (refundable against first bulk order).</p>
            </div>

            <div className="rounded-lg p-6 bg-white" style={{border:'1px solid #EDEAE6'}}>
              <h4 className="font-semibold">Custom Labeling</h4>
              <p className="text-sm text-gray-700">Upload your logo and message; choose label background and gift box options. Perfect for corporate gifts and event favors.</p>
              <div className="mt-4">
                <a href="#contact" className="px-4 py-2 rounded" style={{background:'#C2A14A', color:'#FAF8F4'}}>Request Quote</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <h3 className="text-2xl font-serif" style={{color:'#2E5E4E'}}>About Essentique Naturals</h3>
          <p className="text-gray-700 mt-3">Essentique Naturals is a brand by AK Liquid Management. We partner with smallholder farmers and certified distilleries to bring you ethically-sourced, steam-distilled essential oils. Every batch is tested for purity and packed in amber glass to protect the oils.</p>
        </section>

        <section id="contact" className="py-12">
          <h3 className="text-2xl font-serif" style={{color:'#2E5E4E'}}>Contact</h3>
          <p className="text-gray-700 mt-3">Email: info@essentiquenaturals.com | WhatsApp: +91-XXXXXXXXXX</p>
          <p className="text-gray-700 mt-2">Address: AK Liquid Management, Bengaluru, India</p>
        </section>
      </main>

      <footer className="mt-12 border-t pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div style={{width:54}}>
                <svg viewBox="0 0 480 120" xmlns="http://www.w3.org/2000/svg"><text x="0" y="48" fontFamily="Inter, sans-serif" fontSize="46" fill="#2E5E4E">Essentique</text></svg>
              </div>
              <p className="mt-2">© {new Date().getFullYear()} AK Liquid Management — Essentique Naturals</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>Follow us: Instagram @essentiquenaturals</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
