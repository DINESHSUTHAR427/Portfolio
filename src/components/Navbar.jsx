import React from 'react'

function Navbar() {
    const sectionIds = ['intro', 'background', 'skills', 'achievements', 'projects', 'hobby', 'contact'];
    const [active, setActive] = React.useState('intro');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    React.useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActive(entry.target.id)
            }
            })
        },
        { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
        )
        sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, []);
    
      // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        } else {
    document.body.style.overflow = 'unset';
        }
        // Cleanup function to reset on unmount
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);
return (
    <header className="navbar" role="navigation" aria-label="Primary">
    <a className="brand" href="#intro" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        My Portfolio
    </a>
    <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
    >
        <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
    <nav id="primary-navigation" className={isMenuOpen ? 'open' : ''}>
        {sectionIds.map((id) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setIsMenuOpen(false)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
        ))}
    </nav>
    </header>
)
}

export default Navbar