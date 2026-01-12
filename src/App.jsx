import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Car,
    MapPin,
    Clock,
    CheckCircle2,
    Instagram,
    Phone,
    Menu,
    X,
    ChevronRight,
    ShieldCheck,
    Zap,
    Star,
    ArrowRight,
    Play,
    Droplets,
    Sparkles,
    Scan,
    Bike,
    Armchair,
    Quote,
    ChevronLeft,
    Maximize2
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            title: "Lavagem Externa",
            desc: "Limpeza técnica com V-Flock (pH neutro) e acabamento com Cera Blend e Darker nos pneus.",
            icon: <Car size={28} />
        },
        {
            title: "Limpeza Interna",
            desc: "Aspiração completa e limpeza bactericida localizada com Sintra.",
            icon: <Armchair size={28} />
        },
        {
            title: "Higienização Interna",
            desc: "Cuidado profundo com aspiração e renovador de plásticos Intense.",
            icon: <Droplets size={28} />
        },
        {
            title: "Lavagem Completa",
            desc: "O combo ideal: Lavagem Externa técnica + Limpeza Interna detalhada.",
            icon: <Sparkles size={28} />
        },
        {
            title: "Lavagem Detalhada",
            desc: "Tratamento VIP: Higienização interna, removedor de chuva ácida (Prizm) e revitalização (Rejuvex).",
            icon: <Scan size={28} />
        },
        {
            title: "Motos Premium",
            desc: "Do simples ao detalhado: Cera Blend, H-7 desengraxante e revitalização de componentes.",
            icon: <Bike size={28} />
        }
    ];

    const pricing = [
        {
            name: "Lavagem Externa",
            price: "60,00",
            features: ["Pré-lavagem X-trememol", "Shampoo V-Flock", "Cera Blend", "Pneu Darker"],
            highlight: false
        },
        {
            name: "Limpeza Interna",
            price: "25,00",
            features: ["Aspiração Completa", "Limpeza de Painel", "Limpeza de Vidros", "Sintra Bactericida"],
            highlight: false
        },
        {
            name: "Higienização Interna",
            price: "40,00",
            features: ["Aspiração Profunda", "Renovador Intense", "Eliminação de Odores", "Sintra Bactericida"],
            highlight: false
        },
        {
            name: "Lavagem Completa",
            price: "80,00",
            features: ["Lavagem Externa", "Limpeza Interna", "Aspiração", "Pretinho nos Pneus"],
            highlight: true
        },
        {
            name: "Lavagem Detalhada",
            price: "120,00",
            features: ["Higienização Interna", "Lavagem Externa", "Removedor Chuva Ácida", "Revitalização Rejuvex"],
            highlight: false
        },
        {
            name: "Moto Simples",
            price: "40,00",
            features: ["Lavagem Técnica", "Desengraxante H-7", "Secagem", "Brilho em Plásticos"],
            highlight: false
        },
        {
            name: "Moto Detalhada",
            price: "85,00",
            features: ["Lavagem Completa", "Desengraxante H-7", "Cera Blend", "Revitalização Total"],
            highlight: false
        }
    ];

    const products = [
        { name: "V-Flock", role: "Shampoo Neutro", desc: "Limpeza segura que não agride a pintura." },
        { name: "Blend", role: "Cera de Carnaúba", desc: "Brilho intenso e proteção duradoura." },
        { name: "Sintra", role: "Bactericida", desc: "Elimina micro-organismos do interior." },
        { name: "Prizm", role: "Vidros", desc: "Remove manchas de chuva ácida." },
        { name: "Rejuvex", role: "Revitalizador", desc: "Devolve a cor aos plásticos externos." },
        { name: "Darker", role: "Pneus", desc: "Brilho acetinado para borrachas." }
    ];

    // Main cover image is independent, but included in gallery
    const coverImage = "/polishing_car.png";
    const portfolio = [
        "/polishing_car.png",
        "/portfolio1.jpg",
        "/portfolio2.jpg",
        "/portfolio3.jpg",
    ];

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % portfolio.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + portfolio.length) % portfolio.length);
    };

    const openGallery = () => {
        setIsGalleryOpen(true);
        setCurrentImage(0); // Start with cover
    };

    const testimonials = [
        {
            text: "Serviço impecável! Meu carro ficou parecendo novo, e a conveniência de fazerem tudo em casa é incrível.",
            name: "Geison Höehr",
            car: "Etios XLS"
        },
        {
            text: "A atenção aos detalhes da Glow Delivery é surreal. Nunca vi uma limpeza interna tão bem feita.",
            name: "Fernanda Lima",
            car: "Jeep Compass"
        },
        {
            text: "O cuidado com minha moto foi excepcional. Limpeza detalhada que valorizou cada peça da minha Hornet.",
            name: "Roberto Silva",
            car: "Honda Hornet"
        }
    ];

    const whatsappLink = "https://wa.me/55999700936";

    return (
        <div className="layout">
            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="gallery-modal"
                        onClick={() => setIsGalleryOpen(false)}
                    >
                        <button className="gallery-close"><X size={32} /></button>

                        <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-nav prev" onClick={prevImage}>
                                <ChevronLeft size={40} />
                            </button>

                            <motion.img
                                key={currentImage}
                                src={portfolio[currentImage]}
                                alt="Gallery View"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="gallery-image"
                            />

                            <button className="gallery-nav next" onClick={nextImage}>
                                <ChevronRight size={40} />
                            </button>
                        </div>

                        <div className="gallery-dots">
                            {portfolio.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentImage ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImage(idx);
                                    }}
                                ></span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Apple-style Navigation */}
            <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="logo-area"
                    >
                        <img src="/logo.jpg" alt="Glow Delivery Logo" className="logo-img" />
                        <span className="logo-text">GLOW <span className="text-primary">DELIVERY</span></span>
                    </motion.div>

                    <div className="desktop-menu">
                        <a href="#inicio" className="nav-link">Início</a>
                        <a href="#servicos" className="nav-link">Serviços</a>
                        <a href="#precos" className="nav-link">Preços</a>
                        <a href="#portfolio" className="nav-link">Galeria</a>
                        <a href={whatsappLink} className="btn-apple">Agendar</a>
                    </div>

                    <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
                        <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                        <a href="#precos" onClick={() => setIsMenuOpen(false)}>Preços</a>
                        <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Galeria</a>
                        <a href={whatsappLink} className="btn-apple w-full">Agendar Agora</a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cinematic Hero Section */}
            <section id="inicio" className="hero-apple">
                <div className="hero-video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        poster="/luxury_car_hero.png"
                    >
                        <source src="/hero_background.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay-apple"></div>
                </div>

                <div className="container hero-content-apple">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="hero-tag"
                        >
                            Estética Automotiva de Atitude
                        </motion.span>
                        <h1 className="hero-title-apple">
                            O brilho extraordinário <br />
                            <span>na sua porta.</span>
                        </h1>
                        <p className="hero-subtitle-apple">
                            Lavagem premium a domicílio em Santa Maria. <br />
                            Tecnologia de ponta, cuidado artesanal.
                        </p>
                        <div className="hero-btns-apple">
                            <a href={whatsappLink} className="btn-apple-primary">
                                Agendar Experiência <ArrowRight size={20} />
                            </a>
                            <a href="#portfolio" className="btn-apple-secondary">
                                Ver Resultados
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="scroll-indicator"
                >
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </motion.div>
            </section>

            {/* Apple-style Features */}
            <section className="features-apple">
                <div className="container">
                    <div className="apple-grid">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="apple-card"
                        >
                            <ShieldCheck size={40} className="text-primary" />
                            <h3>Proteção</h3>
                            <p>Produtos de altíssima performance para preservar sua pintura.</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="apple-card"
                        >
                            <Zap size={40} className="text-primary" />
                            <h3>Agilidade</h3>
                            <p>Vamos até você. Economize seu tempo, maximize seu brilho.</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="apple-card"
                        >
                            <Star size={40} className="text-primary" />
                            <h3>Premium</h3>
                            <p>Especialistas em veículos de luxo e cuidados detalhados.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Video Showcase Section */}
            <section className="video-showcase">
                <div className="container grid-2-apple">
                    <div className="video-text-area">
                        <span className="text-primary">O Processo</span>
                        <h2>Atenção aos<br />mínimos detalhes.</h2>
                        <p>
                            Não é apenas uma lavagem. É um ritual de cuidado.
                            Utilizamos técnicas avançadas para garantir que cada
                            centímetro do seu veículo receba o tratamento que merece.
                        </p>
                        <ul className="apple-list">
                            <li><CheckCircle2 size={18} /> Higienização a vapor</li>
                            <li><CheckCircle2 size={18} /> Descontaminação de pintura</li>
                            <li><CheckCircle2 size={18} /> Proteção UV duradoura</li>
                        </ul>
                    </div>
                    <div className="video-content-area">
                        <div className="apple-video-card">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="showcase-video"
                            >
                                <source src="/detail_process.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="servicos" className="services-apple">
                <div className="container">
                    <div className="section-header-apple">
                        <h2>Serviços Sob Medida</h2>
                        <p>Escolha o nível de cuidado que seu carro precisa hoje.</p>
                    </div>

                    <div className="apple-services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="service-apple-item"
                            >
                                <div className="service-icon-apple">
                                    {service.icon === "logo" ? (
                                        <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                    ) : (
                                        service.icon
                                    )}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Showcase */}
            < section className="products-apple" >
                <div className="container">
                    <div className="section-header-apple">
                        <h2>Produtos de Alta Performance</h2>
                        <p>A química perfeita para o seu veículo.</p>
                    </div>
                    <div className="products-grid">
                        {products.map((prod, idx) => (
                            <div key={idx} className="product-card">
                                <h3>{prod.name}</h3>
                                <span>{prod.role}</span>
                                <p>{prod.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Moto Detailing Section */}
            < section className="moto-section-apple" >
                <div className="container">
                    <div className="section-header-apple">
                        <h2>Especialização em Motos</h2>
                        <p>Detalhes que transformam. Antes e Depois.</p>
                    </div>

                    <div className="moto-grid">
                        <div className="moto-card">
                            <span className="moto-label before">Antes</span>
                            <img src="/WhatsApp Image 2026-01-12 at 20.32.49.jpeg" alt="Moto Antes" />
                        </div>
                        <div className="moto-card">
                            <span className="moto-label after">Depois</span>
                            <img src="/WhatsApp Image 2026-01-12 at 20.32.49 (1).jpeg" alt="Moto Depois" />
                        </div>

                        <div className="moto-card">
                            <span className="moto-label before">Antes</span>
                            <img src="/WhatsApp Image 2026-01-12 at 20.32.49 (2).jpeg" alt="Moto Antes" />
                        </div>
                        <div className="moto-card">
                            <span className="moto-label after">Depois</span>
                            <img src="/WhatsApp Image 2026-01-12 at 20.32.49 (3).jpeg" alt="Moto Depois" />
                        </div>
                    </div>
                </div>
            </section >

            {/* Pricing Section */}
            < section id="precos" className="pricing-apple" >
                <div className="container">
                    <div className="section-header-apple">
                        <h2>Investimento</h2>
                        <p>Transparência e valor em cada serviço.</p>
                    </div>

                    <div className="pricing-grid-apple">
                        {pricing.map((plan, index) => (
                            <div key={index} className={`pricing-apple-card ${plan.highlight ? 'highlight' : ''}`}>
                                {plan.highlight && <div className="apple-badge">Recomendado</div>}
                                <h3>{plan.name}</h3>
                                <div className="price-apple">
                                    <span className="currency">R$</span>
                                    <span className="amount">{plan.price}</span>
                                </div>
                                <ul className="price-features-apple">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <CheckCircle2 size={16} className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href={whatsappLink} className={`btn-apple-${plan.highlight ? 'primary' : 'secondary'} w-full`}>
                                    Escolher {plan.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Gallery Cover - Single Image */}
            < section id="portfolio" className="portfolio-apple" >
                <div className="container">
                    <div className="section-header-apple">
                        <h2>Galeria de Projetos</h2>
                        <p>O que a Glow Delivery entrega todos os dias.</p>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="portfolio-hero-item"
                        onClick={openGallery}
                    >
                        <img src={coverImage} alt="Cover Car" />
                        <div className="portfolio-overlay">
                            <div className="overlay-content">
                                <Maximize2 size={48} />
                                <h3>Ver Galeria Completa</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Testimonials */}
            < section className="testimonials-apple" >
                <div className="container">
                    <div className="section-header-apple">
                        <h2>O que dizem</h2>
                        <p>Histórias de quem já brilha com a Glow.</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, index) => (
                            <div key={index} className="testimonial-card">
                                <Quote size={32} />
                                <p>"{t.text}"</p>
                                <div className="testimonial-author">
                                    <h4>{t.name}</h4>
                                    <span>{t.car}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="footer-apple" >
                <div className="container">
                    <div className="footer-top-apple">
                        <div className="footer-brand-apple">
                            <span className="logo-text">GLOW <span className="text-primary">DELIVERY</span></span>
                            <p>A excelência em estética automotiva que vai até você.</p>
                            <div className="social-apple">
                                <a href="https://instagram.com/glowdelivery_lavagem"><Instagram size={20} /></a>
                                <a href={whatsappLink}><Phone size={20} /></a>
                            </div>
                        </div>
                        <div className="footer-links-apple">
                            <h4>Navegação</h4>
                            <a href="#inicio">Início</a>
                            <a href="#servicos">Serviços</a>
                            <a href="#precos">Preços</a>
                            <a href="#portfolio">Galeria</a>
                        </div>
                        <div className="footer-contact-apple">
                            <h4>Contato</h4>
                            <p>Santa Maria, RS</p>
                            <p>(55) 99912-2536</p>
                            <p>@glowdelivery_lavagem</p>
                        </div>
                    </div>
                    <div className="footer-bottom-apple">
                        <p>© 2024 Glow Delivery. Design inspirado em excelência.</p>
                    </div>
                </div>
            </footer >

            {/* Floating WhatsApp Apple Style */}
            < motion.a
                href={whatsappLink}
                className="whatsapp-apple"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Phone size={24} fill="white" />
            </motion.a >
        </div >
    );
};

export default App;
