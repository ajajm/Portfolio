import React, { useState } from "react"
import { Button } from "@/components/ui/button"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(
      `${message}`
    )

    window.location.href = `mailto:ajaj.dev@proton.me?subject=${subject}&body=${body}`
  }

  return (
    <div className="max-w-5xl mx-auto px-8 mt-12 md:mt-24">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Contact{" "}
          <span className="bg-linear-to-r from-[#e769f5] to-[#fc79bd] inline-block text-transparent bg-clip-text font-extrabold">
            Me
          </span>
        </h1>
        <p className="text-[#9198a1] max-w-xl">
          Have a project, opportunity, or question?  
          This will open directly in your email client.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg bg-transparent border border-[#2a2f36] px-4 py-3 text-sm outline-none focus:border-[#fc79bd]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-transparent border border-[#2a2f36] px-4 py-3 text-sm outline-none focus:border-[#fc79bd]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            required
            rows="5"
            placeholder="Tell me briefly what you’re looking for..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg bg-transparent border border-[#2a2f36] px-4 py-3 text-sm outline-none resize-none focus:border-[#fc79bd]"
          />
        </div>

        {/* CTA */}
        <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
