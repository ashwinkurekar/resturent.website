import { motion, AnimatePresence } from "motion/react";
import { 
  Utensils, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Menu as MenuIcon,
  X,
  Star,
  Quote,
  Calendar,
  Users,
  MessageSquare
} from "lucide-react";
import { useState, FormEvent } from "react";

const MENU_ITEMS = [
  {
    category: "Signature Dishes",
    items: [
      { name: "Gaonkari Special Thali", price: "₹450", description: "A complete traditional meal with 12 authentic local preparations." },
      { name: "Rustic Chicken Curry", price: "₹380", description: "Slow-cooked in a clay pot with hand-ground spices." },
      { name: "Smoked Eggplant Bharta", price: "₹220", description: "Fire-roasted eggplant mashed with local herbs and garlic." }
    ]
  },
  {
    category: "From the Wood-Fire",
    items: [
      { name: "Hand-Rolled Bajra Bhakri", price: "₹40", description: "Traditional pearl millet flatbread, served hot with white butter." },
      { name: "Tandoori Jowar Roti", price: "₹45", description: "Sorghum flatbread baked in a traditional clay oven." }
    ]
  },
  {
    category: "Sweet Endings",
    items: [
      { name: "Puran Poli with Ghee", price: "₹120", description: "Sweet lentil-stuffed flatbread served with melted clarified butter." },
      { name: "Local Milk Basundi", price: "₹150", description: "Slow-reduced sweetened milk with saffron and cardamom." }
    ]
  }
];

const TESTIMONIALS = [
  {
    name: "Anjali Sharma",
    role: "Food Blogger",
    content: "The Gaonkari Thali is a revelation. It's rare to find such authentic village flavors in the city. The smoked eggplant is a must-try!",
    rating: 5
  },
  {
    name: "Rahul Deshmukh",
    role: "Local Resident",
    content: "Finally, a place that respects our culinary roots. The wood-fired Bhakri took me straight back to my grandmother's kitchen.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "Culinary Critic",
    content: "Rustic charm meets professional service. The attention to detail in their hand-ground spices is evident in every bite.",
    rating: 4
  }
];

const GALLERY_IMAGES = [
  { src: "https://picsum.photos/seed/food1/600/600", alt: "Signature Thali" },
  { src: "https://picsum.photos/seed/food2/600/600", alt: "Wood-fired Oven" },
  { src: "https://picsum.photos/seed/food3/600/600", alt: "Fresh Ingredients" },
  { src: "https://picsum.photos/seed/food4/600/600", alt: "Restaurant Ambiance" },
  { src: "https://picsum.photos/seed/food5/600/600", alt: "Chef at Work" },
  { src: "https://picsum.photos/seed/food6/600/600", alt: "Plating Detail" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBookingStep(2);
    setTimeout(() => {
      setIsBookingOpen(false);
      setBookingStep(1);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-stone-900 selection:bg-brand-olive selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6 text-brand-olive" />
            <span className="font-serif text-2xl font-bold tracking-tight uppercase">Gaonkari</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-brand-olive transition-colors">About</a>
            <a href="#menu" className="hover:text-brand-olive transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-brand-olive transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-brand-olive transition-colors">Contact</a>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-brand-olive text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-brand-cream border-b border-stone-200 p-6 flex flex-col gap-4 shadow-xl"
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">About</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">Menu</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">Gallery</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">Contact</a>
              <button 
                onClick={() => { setIsMenuOpen(false); setIsBookingOpen(true); }}
                className="bg-brand-olive text-white px-6 py-3 rounded-full w-full"
              >
                Book a Table
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/restaurant-interior/1920/1080?blur=2" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl mb-4"
          >
            Now Open in the Heart of the City
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            GAONKARI <br /> RESTAURENT
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a href="#menu" className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-brand-cream transition-all flex items-center gap-2">
              Explore Menu <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="border border-white/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Reserve Table
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/cooking/800/1000" 
              alt="Traditional Cooking"
              className="rounded-3xl shadow-2xl aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-olive text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
              <p className="font-serif italic text-lg">"We bring the soul of the village to your plate, one authentic bite at a time."</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-stone-900">Our Story</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Gaonkari, which translates to "the local villager," was born from a simple desire: to preserve and celebrate the rustic, honest flavors of our ancestral kitchens.
              </p>
              <p>
                Our newly opened restaurant is a tribute to the farmers, the home-cooks, and the traditional techniques that have defined our culinary heritage for generations. We source our ingredients directly from local farms, ensuring every dish is as fresh as it is flavorful.
              </p>
              <p>
                From our wood-fired ovens to our hand-ground spice blends, every detail at Gaonkari is designed to transport you back to the warmth and simplicity of a village meal.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-3xl font-bold text-brand-olive">100%</h4>
                <p className="text-sm uppercase tracking-widest font-semibold text-stone-500">Organic Sourced</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl font-bold text-brand-olive">25+</h4>
                <p className="text-sm uppercase tracking-widest font-semibold text-stone-500">Traditional Recipes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">The Gaonkari Menu</h2>
            <p className="text-stone-400 font-serif italic text-xl">A curated selection of local favorites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {MENU_ITEMS.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <h3 className="text-brand-olive font-serif text-2xl italic border-b border-stone-800 pb-4">{section.category}</h3>
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-serif text-xl group-hover:text-brand-olive transition-colors">{item.name}</h4>
                        <span className="text-brand-olive font-medium">{item.price}</span>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-stone-500 mb-8">All our dishes are prepared fresh upon order. Please inform us of any allergies.</p>
            <button className="border border-brand-olive text-brand-olive px-10 py-4 rounded-full hover:bg-brand-olive hover:text-white transition-all font-medium">
              Download Full Menu (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Visual Journey</h2>
          <p className="text-stone-500 font-serif italic text-lg">A glimpse into our kitchen and dining room</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl aspect-square group relative cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-olive/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif italic text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Quote className="w-12 h-12 mb-6 opacity-30" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-white/70 font-serif italic text-lg">Real experiences from our first visitors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-white text-white" : "text-white/30"}`} />
                  ))}
                </div>
                <p className="text-lg mb-8 italic leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-white/60 uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden grid md:grid-cols-2">
          <div className="p-12 md:p-20">
            <h2 className="font-serif text-4xl font-bold mb-12">Visit Us</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-olive" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Location</h4>
                  <p className="text-stone-600">123 Heritage Lane, Old Town District<br />Pune, Maharashtra 411001</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-olive" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Hours</h4>
                  <p className="text-stone-600">Tue - Sun: 11:30 AM - 11:00 PM<br />Monday: Closed</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-olive" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Reservations</h4>
                  <p className="text-stone-600">+91 98765 43210<br />hello@gaonkari.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-brand-olive hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative h-96 md:h-auto">
            <img 
              src="https://picsum.photos/seed/restaurant-map/1000/1200" 
              alt="Map Location"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-olive/10"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Utensils className="w-5 h-5 text-brand-olive" />
            <span className="font-serif text-xl font-bold tracking-tight uppercase">Gaonkari</span>
          </div>
          <p className="text-stone-500 text-sm mb-8">© 2024 Gaonkari Restaurent. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-xs uppercase tracking-widest font-semibold text-stone-400">
            <a href="#" className="hover:text-brand-olive transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-olive transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-olive transition-colors">Careers</a>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-cream w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-stone-200 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-12">
                {bookingStep === 1 ? (
                  <>
                    <h2 className="font-serif text-3xl font-bold mb-2">Book a Table</h2>
                    <p className="text-stone-500 mb-8">Join us for an unforgettable dining experience.</p>
                    
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                            <input required type="date" className="w-full bg-white border border-stone-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-olive transition-colors" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Guests</label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                            <select required className="w-full bg-white border border-stone-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-olive transition-colors appearance-none">
                              <option>2 People</option>
                              <option>4 People</option>
                              <option>6 People</option>
                              <option>8+ People</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                        <input required type="text" placeholder="Your Name" className="w-full bg-white border border-stone-200 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-olive transition-colors" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Special Requests</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-stone-400" />
                          <textarea rows={3} placeholder="Allergies, celebrations, etc." className="w-full bg-white border border-stone-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-olive transition-colors resize-none" />
                        </div>
                      </div>

                      <button type="submit" className="w-full bg-brand-olive text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                        Confirm Reservation
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-10 h-10 fill-current" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold mb-2">Reservation Received!</h2>
                    <p className="text-stone-500">We've sent a confirmation to your email. See you soon at Gaonkari!</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
