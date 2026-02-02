import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  // <section id="work" className="h-screen flex items-center">
  //       <motion.div
  //         initial={{ x: "100%" }}
  //         whileInView={{ x: 0 }}
  //         transition={{ duration: 1 }}
  //         className="flex gap-12 px-24"
  //       >
  //         {["AI CHATBOT", "COUNSELLING APP", "MERN TODO", "PORTFOLIO"].map((p, i) => (
  //           <div
  //             key={i}
  //             className="min-w-[70vw] h-[60vh] rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-white/10 flex items-end p-10"
  //           >
  //             <h2 className="text-4xl font-bold">{p}</h2>
  //           </div>
  //         ))}
  //       </motion.div>
  //     </section>








  //  <div className="absolute inset-0 opacity-10">
  //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]" />
  //     </div>