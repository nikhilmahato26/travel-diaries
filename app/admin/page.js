'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        const { error: msg } = await res.json()
        setError(msg || 'Invalid username or password')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 font-body relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Header */}
          <div className="px-8 pt-10 pb-8 text-center bg-gray-900 relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-48 h-12">
                  <Image src="/logo-full.png" alt="Travel Diaries" fill className="object-contain" />
                </div>
              </div>
              
              <h1 className="font-heading font-bold text-2xl text-white mb-1.5">Welcome Back</h1>
              <p className="text-sm text-gray-400 font-medium">Log in to the Admin Panel</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8">
            <div className="mb-5">
              <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm text-gray-900 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#1B61FF] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium placeholder-gray-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl border border-gray-200 text-sm text-gray-900 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#1B61FF] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-2"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 mb-6 rounded-xl bg-red-50 border border-red-200 text-blue-600 text-sm font-semibold flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-xl text-white font-bold text-[15px] flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1B61FF] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5'
              }`}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={18} /> Sign In
                </>
              )}
            </button>

            <div className="text-center mt-6">
              <Link href="/admin/forgot-password" className="text-sm text-gray-500 hover:text-[#1B61FF] font-semibold transition-colors">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
        
        {/* Footer text */}
        <p className="text-center text-sm font-medium text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Travel Diaries. All rights reserved.
        </p>
      </div>
    </div>
  )
}
