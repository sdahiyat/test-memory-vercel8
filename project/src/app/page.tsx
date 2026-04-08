import { Camera, Zap, Target, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            NutriTrack
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simplify your nutrition tracking with AI-powered meal logging, smart insights, and personalized dietary guidance.
          </p>
          <div className="space-x-4">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started
            </button>
            <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Learn More
            </button>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Camera className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Photo Logging</h3>
            <p className="text-gray-600">Snap a photo of your meal and let AI identify foods and estimate nutrition automatically.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Log meals in seconds with our streamlined interface designed for busy lifestyles.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Personal Goals</h3>
            <p className="text-gray-600">Set custom nutrition goals for weight loss, muscle gain, or healthy maintenance.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <TrendingUp className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Insights</h3>
            <p className="text-gray-600">Get personalized feedback and suggestions to improve your dietary habits over time.</p>
          </div>
        </div>

        <div className="text-center bg-white p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join thousands of users who have simplified their nutrition tracking with NutriTrack's AI-powered platform.
          </p>
          <button className="bg-primary-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
}
