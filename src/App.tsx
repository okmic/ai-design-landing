function App() {
  return (
    <div className="min-h-screen bg-[#F5F0EB] flex items-center p-6 sm:p-12 lg:p-20 overflow-hidden relative">
      
      <div className="absolute top-0 right-0 w-[55%] h-full bg-[#EDE5DB] rounded-bl-[120px] lg:rounded-bl-[200px] rounded-tl-[40px] lg:rounded-tl-[80px]" />
      
      <div className="relative z-10 w-full max-w-[1100px] mx-auto">
        
        <div className="inline-flex items-center gap-3 mb-10 sm:mb-16 lg:mb-20">
          <span className="w-10 h-[2px] bg-[#8B6914]" />
          <span className="text-[#8B6914] text-[11px] sm:text-xs tracking-[5px] uppercase font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            AI × Craft
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 sm:gap-10 lg:gap-16 items-end">
          
          <div>
            <h1 className="text-[#1A1815] leading-[0.9] tracking-[-1.5px]
              text-[56px] sm:text-[80px] lg:text-[100px] xl:text-[128px]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 400 }}>
              Глаз радуется
              <br />
              <span className="italic font-medium text-[#8B6914]">от AI Дизайна</span>
            </h1>
            
            <p className="text-[#4A433A] text-base sm:text-lg lg:text-xl leading-[1.7] mt-8 sm:mt-10 max-w-[480px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 350 }}>
              GPT-промирование + Tailwind CSS — дизайн, который работает. 
              7 из 10 людей отзываются положительно.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 mt-8 sm:mt-12">
              <span className="text-[#1A1815]/70 text-xs sm:text-sm tracking-[4px] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                GPT-4
              </span>
              <span className="w-5 h-[1.5px] bg-[#8B6914]/40" />
              <span className="text-[#1A1815]/70 text-xs sm:text-sm tracking-[4px] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                Tailwind CSS
              </span>
              <span className="w-5 h-[1.5px] bg-[#8B6914]/40" />
              <span className="text-[#8B6914] text-xs sm:text-sm tracking-[4px] uppercase font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                Сделано за 5 минут
              </span>
            </div>
            
            <div className="lg:hidden flex items-center gap-5 mt-8">
              <div className="w-16 h-16 rounded-full bg-[#D4A574]/20 relative shrink-0">
                <div className="absolute inset-[14px] rounded-full border border-[#8B6914]/30" />
                <div className="absolute inset-[26px] rounded-full bg-[#8B6914] opacity-80" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C49A6C]/15 relative shrink-0">
                <div className="absolute inset-[12px] rounded-full bg-[#8B6914] opacity-60" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#D4A574]/10 relative shrink-0">
                <div className="absolute inset-[7px] rounded-full bg-[#C49A6C] opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-end pb-4 shrink-0">
            <div className="w-[240px] h-[240px] xl:w-[300px] xl:h-[300px] relative">
              <div className="absolute inset-0 rounded-full bg-[#D4A574]/20" />
              <div className="absolute inset-[28px] rounded-full border border-[#8B6914]/25" />
              <div className="absolute inset-[65px] rounded-full bg-[#C49A6C]/15" />
              <div className="absolute inset-[105px] rounded-full bg-[#8B6914] opacity-70" />
              <div className="absolute inset-[128px] rounded-full bg-[#1A1815] opacity-95" />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default App