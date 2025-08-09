// 

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="w-full py-4 bg-[#C1E8FF] border-t border-gray-200">
      <p className="text-center">
        Copyright © {currentYear}
      </p>
    </div>
  )
}

export default Footer