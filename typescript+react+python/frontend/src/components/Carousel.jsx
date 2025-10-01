import React from 'react'


const slides = [
    { id: 1, title: 'Welcome back!', subtitle: 'Here are your stats for today' },
    { id: 2, title: 'Sales up 12%', subtitle: 'Good job — keep promoting' },
    { id: 3, title: 'New tasks', subtitle: 'Check your todo page' },
]


export default function Carousel() {
    const [idx, setIdx] = React.useState(0)
    React.useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 4000)
        return () => clearInterval(t)
    }, [])


    return (
        <div className="w-full">
            <div className="relative">
                {slides.map((s, i) => (
                    <div key={s.id} className={`transition-all duration-500 ${i === idx ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 -translate-x-full'}`}>
                        <div className="p-6 text-white rounded-lg">
                            <h2 className="text-2xl font-bold">{s.title}</h2>
                            <p className="mt-2 opacity-90">{s.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-2 mt-3">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full ${i === idx ? 'bg-indigo-600' : 'bg-gray-300'}`} />
                ))}
            </div>
        </div>
    )
}