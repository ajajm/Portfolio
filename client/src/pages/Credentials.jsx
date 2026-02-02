import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Credentials = () => {
  const { organization } = useParams()

  // Credential data for different organizations
  const credentialData = {
    'open-source-connect': {
      name: 'Open Source Connect',
      credentials: [
        {
          title: 'Contributor Badge',
          type: 'image',
          url: '/credentials/oscg_badge.png', // Add your image to public folder
        //   description: 'Open Source Connect Contributor Badge'
        },
        {
          title: 'Confirmation email',
          type: 'image',
          url: '/credentials/osgc_email.jpeg',
        //   description: 'Open Source ConnectConfirmation Email'
        },
        // {
        //   title: 'Campus Lead Certificate',
        //   type: 'image',
        //   url: '/credentials/osc-campus-lead.jpg',
        //   description: 'Campus Lead Certificate 2026'
        // }
      ]
    },
    'google-student-ambassador': {
      name: 'Google Student Ambassador',
      credentials: [
        {
          title: 'Google Student Ambassador Certificate',
          type: 'image',
          url: '/credentials/GSA_certificate_mdajaj.png',
        //   description: 'Google Student Ambassador Program Certificate'
        },
        // {
        //   title: 'Credly Badge',
        //   type: 'link',
        //   url: 'https://www.credly.com', // Replace with actual Credly link
        //   description: 'View on Credly'
        // }
      ]
    }
  }

  const data = credentialData[organization]

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">L
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Credentials Not Found</h1>
          <Link to="/" className="text-[#e769f5] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d1117] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/#experience" className="text-[#9198a1] hover:text-white mb-4 inline-block">
            ← Prev
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">
            {data.name} - Credentials
          </h1>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-[#1a1e26] border border-[#393c40] rounded-lg p-6 hover:border-[#e769f5] transition-all h-fit"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {credential.title}
              </h3>
              {credential.description && (
                <p className="text-sm text-[#9198a1] mb-4">{credential.description}</p>
              )}

              {credential.type === 'image' ? (
                <div className="w-full">
                  <img
                    src={credential.url}
                    alt={credential.title}
                    className="w-full h-auto rounded-lg border border-[#393c40] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    className="hidden w-full min-h-[200px] bg-[#0d1117] border-2 border-dashed border-[#393c40] rounded-lg items-center justify-center"
                  >
                    <div className="text-center">
                      <p className="text-[#9198a1]">Image will be displayed here</p>
                      <p className="text-sm text-[#6e7681] mt-2">
                        Place your credential image in the public/credentials folder
                      </p>
                    </div>
                  </div>
                </div>
              ) : credential.type === 'pdf' ? (
                <div className="w-full">
                  <iframe
                    src={credential.url}
                    className="w-full h-96 rounded-lg border border-[#393c40]"
                    title={credential.title}
                  />
                  <a
                    href={credential.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-[#e769f5] text-white rounded-lg hover:bg-[#d558e4] transition-colors"
                  >
                    Open PDF in New Tab
                  </a>
                </div>
              ) : credential.type === 'link' ? (
                <a
                  href={credential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#e769f5] text-white rounded-lg hover:bg-[#d558e4] transition-colors"
                >
                  View Credential ↗
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {/* Instructions for adding credentials */}
        {/* <div className="mt-12 p-6 bg-[#1a1e26] border border-[#393c40] rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-3">
            📝 How to Add Your Credentials
          </h3>
          <ol className="list-decimal list-inside text-[#9198a1] space-y-2">
            <li>Create a folder named <code className="bg-[#0d1117] px-2 py-1 rounded text-[#e769f5]">credentials</code> inside the <code className="bg-[#0d1117] px-2 py-1 rounded text-[#e769f5]">public</code> folder</li>
            <li>Add your credential images/PDFs to the <code className="bg-[#0d1117] px-2 py-1 rounded text-[#e769f5]">public/credentials</code> folder</li>
            <li>Update the URLs in the <code className="bg-[#0d1117] px-2 py-1 rounded text-[#e769f5]">credentialData</code> object in this component</li>
            <li>For Credly badges, replace the URL with your actual Credly profile link</li>
          </ol>
        </div> */}
      </div>
    </div>
  )
}

export default Credentials
