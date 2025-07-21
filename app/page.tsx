import Image from "next/image";
import {Plane, Star, MapPin, BookOpen, Users, Award, CheckCircle, Download, Mail, ArrowRight} from "lucide-react";

export default function Home() {
  return (
      <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background Image/Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-emerald-500 to-amber-500 opacity-90">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
              </div>

              {/* Floating Background Elements */}
              <div className="absolute inset-0">
                  <div
                      className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur animate-float"></div>
                  <div
                      className="absolute top-40 right-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur animate-float"
                      style={{animationDelay: '2s'}}></div>
                  <div
                      className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-white/10 backdrop-blur animate-float"
                      style={{animationDelay: '4s'}}></div>
              </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
              {/* Logo */}
              <div className="mb-8">
                  <div className="inline-flex items-center space-x-3">
                      <Image src="/travel-icon.svg" alt="Wanderlust Chronicles Logo" width={48} height={48}
                             className="animate-float"/>
                      <span className="font-serif text-2xl font-bold">Wanderlust Chronicles</span>
                  </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-up leading-tight">
                  Escape the Ordinary.<br/>
                  <span className="text-amber-300">Discover the World</span><br/>
                  One Page at a Time.
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-up opacity-90"
                 style={{animationDelay: '0.2s'}}>
                  A breathtaking travel memoir that guides your wanderlust with real stories, secrets, and soul.
              </p>

              {/* Trust Signal */}
              <div className="flex items-center justify-center space-x-1 mb-8 animate-fade-up"
                   style={{animationDelay: '0.3s'}}>
                  {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400"/>
                  ))}
                  <span className="ml-2 text-sm">As featured in Lonely Planet & Forbes</span>
              </div>

              {/* Book Mockup */}
              <div className="mb-12 animate-fade-up" style={{animationDelay: '0.4s'}}>
                  <div className="relative inline-block">
                      <div
                          className="w-64 h-80 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <div className="p-6 h-full flex flex-col justify-between text-left">
                              <div>
                                  <h3 className="font-serif text-xl font-bold mb-2">Wanderlust Chronicles</h3>
                                  <p className="text-sm opacity-90">25 Countries. Countless Adventures.</p>
                              </div>
                              <div className="text-right">
                                  <p className="font-semibold">Sarah Mitchell</p>
                                  <p className="text-sm opacity-75">Travel Author</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* CTA Button */}
              <div className="animate-fade-up" style={{animationDelay: '0.5s'}}>
                  <button
                      className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                      Get the Book Now
                  </button>
              </div>
        </div>
      </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <Users className="w-8 h-8 text-blue-600"/>
                        <span className="text-3xl font-bold text-blue-600">50,000+</span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold mb-4">Readers Worldwide</h2>
                    <p className="text-gray-600 text-lg">Join thousands who've embarked on this literary journey</p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            name: "Emma Rodriguez",
                            text: "This book transported me to places I never knew existed. Pure magic!",
                            avatar: "👩‍🦱"
                        },
                        {
                            name: "James Chen",
                            text: "Every page is a new adventure. I couldn't put it down!",
                            avatar: "👨‍💼"
                        },
                        {
                            name: "Maria Santos",
                            text: "The local secrets alone are worth the price. Incredible insights!",
                            avatar: "👩‍🎨"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-3">{testimonial.avatar}</span>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <div className="flex text-amber-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-current"/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>

                {/* Media Logos */}
                <div className="flex justify-center items-center space-x-12 opacity-60">
                    <div className="text-2xl font-bold text-gray-400">LONELY PLANET</div>
                    <div className="text-2xl font-bold text-gray-400">FORBES</div>
                    <div className="text-2xl font-bold text-gray-400">NAT GEO</div>
                    <div className="text-2xl font-bold text-gray-400">CONDÉ NAST</div>
                </div>
            </div>
        </section>

        {/* About the Book */}
        <section className="py-20 gradient-bg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center mb-6">
                            <BookOpen className="w-8 h-8 text-blue-600 mr-3"/>
                            <h2 className="font-serif text-4xl font-bold">About the Book</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            This isn't just another travel guide. It's a collection of authentic stories, hidden gems,
                            and transformative experiences from 25 countries that will ignite your passion for
                            exploration
                            and change how you see the world.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Real local secrets from 25 countries",
                                "Travel tips that aren't in the guidebooks",
                                "Inspiring narratives that spark wanderlust",
                                "Practical advice from a seasoned traveler",
                                "Beautiful photography and maps"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0"/>
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-amber-100 p-8 rounded-2xl">
                            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                                <h3 className="font-serif text-xl font-bold mb-3">Chapter Preview</h3>
                                <p className="text-gray-600 italic">
                                    "The narrow alleyways of Marrakech whispered stories that no guidebook could
                                    capture.
                                    As the call to prayer echoed through the medina, I discovered that the real magic
                                    happens when you venture beyond the tourist trails..."
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                    Read More Preview →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Author Bio */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="mb-12">
                    <div
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 mx-auto mb-6 flex items-center justify-center">
                        <span className="text-4xl">👩‍🎨</span>
                    </div>
                    <h2 className="font-serif text-4xl font-bold mb-4">Meet Sarah Mitchell</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                        Professional travel writer and photographer who has spent the last decade exploring
                        remote corners of the globe, collecting stories that inspire and guide fellow wanderers.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl max-w-2xl mx-auto">
                        <p className="text-lg italic text-gray-700">
                            "I wrote this for the dreamers stuck at desks, the souls yearning for adventure,
                            and anyone who believes that the world is meant to be explored."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Bonus Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4"/>
                    <h2 className="font-serif text-4xl font-bold mb-4">Exclusive Bonuses</h2>
                    <p className="text-lg text-gray-600">Get these valuable extras with your book purchase</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <Download className="w-12 h-12 text-blue-600 mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">Ultimate Travel Checklist</h3>
                        <p className="text-gray-600 mb-6">
                            A comprehensive 50-point checklist covering everything from packing essentials
                            to cultural etiquette tips for different regions.
                        </p>
                        <div className="text-emerald-600 font-semibold">FREE with purchase</div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <MapPin className="w-12 h-12 text-emerald-600 mb-6"/>
                        <h3 className="font-serif text-2xl font-bold mb-4">Interactive World Map</h3>
                        <p className="text-gray-600 mb-6">
                            Digital map marking all 25 countries with GPS coordinates of hidden gems,
                            local restaurants, and secret viewpoints mentioned in the book.
                        </p>
                        <div className="text-emerald-600 font-semibold">FREE with purchase</div>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="font-serif text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

                <div className="space-y-8">
                    {[
                        {
                            q: "Is this book suitable for budget travelers?",
                            a: "Absolutely! The book includes budget-friendly tips and local secrets that help you experience authentic culture without breaking the bank."
                        },
                        {
                            q: "How quickly will I receive the book?",
                            a: "Digital version is delivered instantly. Physical books ship within 2-3 business days with free worldwide shipping."
                        },
                        {
                            q: "Can I get a refund if I'm not satisfied?",
                            a: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase."
                        },
                        {
                            q: "Are the travel tips still relevant?",
                            a: "All information was updated in 2024. The book focuses on timeless local culture and hidden gems that don't change with trends."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-5xl font-bold mb-6">
                    Your Adventure Awaits
                </h2>
                <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                    Don't let your wanderlust remain just a dream. Join thousands of readers who've
                    already started their journey through these pages.
                </p>

                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12">
                    <div className="text-4xl font-bold mb-2">$24.99</div>
                    <div className="text-lg opacity-75 line-through mb-2">$39.99</div>
                    <div className="text-emerald-300 font-semibold">Limited Time Offer</div>
                </div>

                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6 inline-flex items-center">
                    Get Your Copy Now
                    <ArrowRight className="ml-3 w-6 h-6"/>
                </button>

                <p className="text-sm opacity-75">
                    30-day money-back guarantee • Instant digital delivery • Free worldwide shipping
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <Image src="/travel-icon.svg" alt="Logo" width={32} height={32}/>
                            <span className="font-serif text-xl font-bold">Wanderlust Chronicles</span>
                        </div>
                        <p className="text-gray-400">
                            Inspiring wanderlust through authentic travel stories and local secrets.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About the Book</a></li>
                            <li><a href="#author" className="hover:text-white transition-colors">Author</a></li>
                            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex items-center space-x-2 text-gray-400">
                            <Mail className="w-5 h-5"/>
                            <span>hello@wanderlustchronicles.com</span>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Wanderlust Chronicles. All rights reserved.</p>
                </div>
            </div>
      </footer>
    </div>
  );
}
