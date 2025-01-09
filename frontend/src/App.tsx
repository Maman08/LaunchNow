import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Terminal, Github, Rocket } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const BACKEND_UPLOAD_URL = "http://localhost:3000";

function App() {
  const [repolink, setRepoUrl] = useState("");
  const [uploadId, setUploadId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const handleDeploy = async () => {
    setUploading(true);
    try {
      const res = await axios.post(`${BACKEND_UPLOAD_URL}/upload`, {
        repolink: repolink
      });
      setUploadId(res.data.id);
      setUploading(false);
      
      const interval = setInterval(async () => {
        const response = await axios.get(`${BACKEND_UPLOAD_URL}/status?id=${res.data.id}`);
        if (response.data.status === "deployed") {
          clearInterval(interval);
          setDeployed(true);
        }
      }, 3000);
    } catch (error) {
      console.error('Deployment failed:', error);
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),rgba(0,0,0,0))]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'top',
          opacity: 0.2
        }} />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [null, Math.random() * -500],
              x: [null, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              filter: 'blur(1px)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        ))}

        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
              width: `${(i + 1) * 40}vh`,
              height: `${(i + 1) * 40}vh`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] bg-white"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
            }}
            initial={{
              opacity: 0,
              x: -100,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: window.innerWidth + 100,
              y: [null, Math.random() * window.innerHeight + 300]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Rocket className="w-12 h-12 text-blue-500" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            LaunchNow
          </h1>
          <p className="text-gray-400">Deploy your code to the stars ✨</p>
        </motion.div>

        {/* Deployment Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            <div className="relative p-8 bg-black/80 backdrop-blur-xl rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-bold">Deploy Repository</h2>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Github className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    value={repolink}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="w-full pl-10 px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                    placeholder="https://github.com/username/repo"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDeploy}
                  disabled={uploadId !== "" || uploading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {uploading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                  ) : null}
                  {uploadId ? `Deploying (${uploadId})` : uploading ? "Uploading..." : "Deploy Now"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Card */}
        {deployed && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-md mt-8"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative p-8 bg-black/80 backdrop-blur-xl rounded-lg border border-white/10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>

                <h2 className="text-xl font-bold mb-4 text-green-400">Deployment Successful! 🚀</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Your site is live at
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value={`http://${uploadId}.localhost:3001/index.html`}
                        className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-green-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`http://${uploadId}.10kdevs.com/index.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-medium text-white text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Visit Website
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;